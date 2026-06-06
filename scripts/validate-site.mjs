import http from "http";
import { spawn } from "child_process";
import { readFileSync } from "fs";

const port = String(5200 + Math.floor(Math.random() * 1000));
const child = spawn(process.execPath, ["src/index.js"], {
  env: { ...process.env, PORT: port },
  stdio: ["ignore", "pipe", "pipe"]
});

let output = "";
child.stdout.on("data", (chunk) => { output += chunk.toString(); });
child.stderr.on("data", (chunk) => { output += chunk.toString(); });

const manifest = JSON.parse(readFileSync(new URL("../public/content-manifest.json", import.meta.url), "utf8"));
const routes = ["/pt/", "/pt/blog", "/pt/about", "/pt/privacy-policy", "/pt/terms", "/pt/contact"]
  .concat(manifest.tools.map((tool) => `/pt/${tool.slug}`))
  .concat(manifest.articles.map((article) => `/pt/blog/${article.slug}`));

function request(pathname, headers = {}) {
  return new Promise((resolve, reject) => {
    http.get({ hostname: "127.0.0.1", port, path: pathname, headers: { "accept-encoding": "identity", ...headers } }, (res) => {
      let body = "";
      res.setEncoding("utf8");
      res.on("data", (chunk) => { body += chunk; });
      res.on("end", () => resolve({ status: res.statusCode, headers: res.headers, body }));
    }).on("error", reject);
  });
}

function textLength(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim().length;
}

function extractTitle(html) {
  return html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() || "";
}

function extractDescription(html) {
  return html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1]?.trim() || "";
}

function extractLinks(html) {
  return [...html.matchAll(/href="(\/[^"#?]*)/g)].map((match) => match[1]);
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

try {
  await new Promise((resolve, reject) => {
    const timer = setInterval(() => {
      if (output.includes(`127.0.0.1:${port}`)) {
        clearInterval(timer);
        clearTimeout(timeout);
        resolve();
      }
    }, 50);
    const timeout = setTimeout(() => {
      clearInterval(timer);
      reject(new Error(`Server did not start on port ${port}`));
    }, 5000);
  });

  const root = await request("/");
  assert(root.status === 301 && root.headers.location === "/pt/", "Root must redirect to /pt/");

  const ads = await request("/ads.txt");
  assert(ads.status === 200 && ads.body.includes("pub-1764837779058715"), "ads.txt must exist and contain publisher ID");

  const robots = await request("/robots.txt");
  assert(robots.status === 200, "robots.txt must return 200");
  assert(robots.body.includes("Allow: /ads.txt"), "robots.txt must allow ads.txt");
  assert(robots.body.includes("Sitemap: https://converttexteasy.com/sitemap.xml"), "robots.txt must include sitemap");

  const sitemap = await request("/sitemap.xml");
  assert(sitemap.status === 200, "sitemap.xml must return 200");
  assert(sitemap.body.includes("sitemap-pages.xml"), "sitemap.xml must include pages sitemap");
  assert(sitemap.body.includes("sitemap-tools.xml"), "sitemap.xml must include tools sitemap");
  assert(sitemap.body.includes("sitemap-blog.xml"), "sitemap.xml must include blog sitemap");

  const titles = new Map();
  const descriptions = new Map();
  const brokenLinks = [];
  const shortPages = [];
  const seenPaths = new Set(routes);

  for (const route of routes) {
    const res = await request(route);
    assert(res.status === 200, `${route} must return 200`);

    const title = extractTitle(res.body);
    const description = extractDescription(res.body);
    const contentSize = textLength(res.body);

    assert(title, `${route} must have a title`);
    assert(description, `${route} must have a meta description`);

    if (titles.has(title)) throw new Error(`Duplicate title: ${title} on ${titles.get(title)} and ${route}`);
    if (descriptions.has(description)) throw new Error(`Duplicate meta description: ${description} on ${descriptions.get(description)} and ${route}`);

    titles.set(title, route);
    descriptions.set(description, route);

    if (contentSize < 900) shortPages.push(`${route} (${contentSize} chars)`);

    for (const link of extractLinks(res.body)) {
      if (!link.startsWith("/pt/") && !["/ads.txt", "/robots.txt", "/sitemap.xml"].includes(link)) continue;
      if (!seenPaths.has(link) && !link.startsWith("/pt/?") && !link.startsWith("/pt/#")) {
        const linked = await request(link);
        if (linked.status >= 400) brokenLinks.push(`${route} -> ${link}`);
      }
    }
  }

  assert(shortPages.length === 0, `Pages with too little content: ${shortPages.join(", ")}`);
  assert(brokenLinks.length === 0, `Broken internal links found: ${brokenLinks.join(", ")}`);

  console.log("Site validation passed");
} finally {
  child.kill();
}
