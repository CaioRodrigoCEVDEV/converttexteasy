import http from "http";
import { spawn } from "child_process";

const port = String(4300 + Math.floor(Math.random() * 1000));
const child = spawn(process.execPath, ["src/index.js"], {
  env: { ...process.env, PORT: port },
  stdio: ["ignore", "pipe", "pipe"]
});

let output = "";
child.stdout.on("data", (chunk) => { output += chunk.toString(); });
child.stderr.on("data", (chunk) => { output += chunk.toString(); });

function request(path, headers = {}) {
  return new Promise((resolve, reject) => {
    http.get(
      {
        hostname: "127.0.0.1",
        port,
        path,
        headers: { "accept-encoding": "identity", ...headers }
      },
      (res) => {
        let body = "";
        res.setEncoding("utf8");
        res.on("data", (chunk) => { body += chunk; });
        res.on("end", () => resolve({ status: res.statusCode, headers: res.headers, body }));
      }
    ).on("error", reject);
  });
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

try {
  await new Promise((resolve, reject) => {
    const started = setInterval(() => {
      if (output.includes(`127.0.0.1:${port}`)) {
        clearInterval(started);
        clearTimeout(timeout);
        resolve();
      }
    }, 50);
    const timeout = setTimeout(() => {
      clearInterval(started);
      reject(new Error(`Server did not start on port ${port}`));
    }, 5000);
  });

  const root = await request("/");
  assert(root.status === 301 && root.headers.location === "/en/", "Root must redirect to /en/");

  const canonicalRedirect = await request("/en/", {
    host: "www.converttexteasy.com",
    "x-forwarded-proto": "http"
  });
  assert(
    canonicalRedirect.status === 301 && canonicalRedirect.headers.location === "https://converttexteasy.com/en/",
    "www/http request must redirect to canonical HTTPS non-www URL"
  );

  const robots = await request("/robots.txt");
  assert(robots.status === 200, "robots.txt must return 200");
  assert(robots.body.includes("Sitemap: https://converttexteasy.com/sitemap.xml"), "robots.txt must reference sitemap.xml");
  assert(!robots.body.includes("Crawl-delay"), "robots.txt should not throttle Google with Crawl-delay");

  const sitemap = await request("/sitemap.xml");
  assert(sitemap.status === 200, "sitemap.xml must return 200");
  assert(sitemap.body.includes("<sitemapindex"), "sitemap.xml must be a sitemap index");
  assert(sitemap.body.includes("sitemap-tools.xml"), "sitemap index must include tools sitemap");

  const toolsSitemap = await request("/sitemap-tools.xml");
  assert(toolsSitemap.status === 200, "tools sitemap must return 200");
  assert(toolsSitemap.body.includes("https://converttexteasy.com/en/uppercase-text"), "tools sitemap must use localized canonical URLs");
  assert(toolsSitemap.body.includes('hreflang="pt"'), "tools sitemap must include hreflang alternates");

  const home = await request("/en/");
  assert(home.status === 200, "English homepage must return 200");
  assert(home.body.includes("<title>ConvertTextEasy - Free Online Text Tools</title>"), "homepage title must identify brand");
  assert(home.body.includes('<link rel="canonical" href="https://converttexteasy.com/en/">'), "homepage canonical must be localized");
  assert(home.body.includes('hreflang="x-default" href="https://converttexteasy.com/en/"'), "homepage must include x-default hreflang");
  assert(home.body.includes('"@type":"Organization"'), "homepage must include Organization schema");
  assert(home.body.includes('"@type":"WebSite"'), "homepage must include WebSite schema");
  assert(home.body.includes("ConvertTextEasy official online text toolkit"), "homepage must include indexable brand copy");

  console.log("SEO technical check passed");
} finally {
  child.kill();
}
