import express from "express";
import path from "path";
import fs from "fs";
import zlib from "zlib";
import { promisify } from "util";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const gzip = promisify(zlib.gzip);
const brotliCompress = promisify(zlib.brotliCompress);
const compressibleExtensions = new Set([".html", ".css", ".js", ".json", ".xml", ".txt"]);
const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8"
};

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  res.setHeader("Vary", "Accept-Encoding");
  next();
});

function loadManifest() {
  const manifestPath = path.join(publicDir, "content-manifest.json");
  return JSON.parse(fs.readFileSync(manifestPath, "utf8"));
}

async function sendCompressedFile(req, res, filePath) {
  const extension = path.extname(filePath);
  const type = contentTypes[extension];
  if (type) res.setHeader("Content-Type", type);

  try {
    await fs.promises.access(filePath);
  } catch {
    res.status(404).send("Not found");
    return;
  }

  if (!compressibleExtensions.has(extension)) return res.sendFile(filePath);

  const file = await fs.promises.readFile(filePath);
  const encoding = req.headers["accept-encoding"] || "";

  if (encoding.includes("br")) {
    const compressed = await brotliCompress(file);
    res.setHeader("Content-Encoding", "br");
    return res.send(compressed);
  }

  if (encoding.includes("gzip")) {
    const compressed = await gzip(file);
    res.setHeader("Content-Encoding", "gzip");
    return res.send(compressed);
  }

  return res.send(file);
}

const { tools, articles } = loadManifest();
const toolBySlug = new Map(tools.map((tool) => [tool.slug, tool]));
const articleBySlug = new Map(articles.map((article) => [article.slug, article]));
const legacyToolRoutes = {
  "alternating-case.html": "/alternating-case",
  "capitalize-text.html": "/capitalize-text",
  "lowercase-text.html": "/lowercase-text",
  "uppercase-text.html": "/uppercase-text",
  "italic-text.html": "/italic-text",
  "morse-code-translator.html": "/morse-code-translator",
  "reverse-text.html": "/reverse-text",
  "strikethrough-text.html": "/strikethrough-text"
};

app.use("/assets", express.static(path.join(publicDir, "assets"), {
  immutable: true,
  maxAge: "30d",
  setHeaders: (res) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Cache-Control", "public, max-age=2592000, immutable");
  }
}));

app.get("/tools/:file", (req, res) => {
  const redirectTo = legacyToolRoutes[req.params.file];
  if (redirectTo) return res.redirect(301, redirectTo);
  return res.status(404).send("Not found");
});

app.get("/", (req, res) => sendCompressedFile(req, res, path.join(publicDir, "index.html")));
app.get("/blog", (req, res) => sendCompressedFile(req, res, path.join(publicDir, "blog", "index.html")));
app.get("/blog/:slug", (req, res, next) => {
  if (!articleBySlug.has(req.params.slug)) return next();
  return sendCompressedFile(req, res, path.join(publicDir, "blog", `${req.params.slug}.html`));
});

app.get("/sitemap.xml", (req, res) => sendCompressedFile(req, res, path.join(publicDir, "sitemap.xml")));
app.get("/robots.txt", (req, res) => sendCompressedFile(req, res, path.join(publicDir, "robots.txt")));
app.get("/ads.txt", (req, res) => sendCompressedFile(req, res, path.join(publicDir, "ads.txt")));

app.get("/:slug", (req, res, next) => {
  const pageRoutes = new Map([
    ["contact", path.join(publicDir, "pages", "contact.html")],
    ["about", path.join(publicDir, "pages", "about.html")],
    ["terms", path.join(publicDir, "pages", "terms.html")],
    ["privacy-policy", path.join(publicDir, "pages", "privacy-policy.html")]
  ]);

  if (toolBySlug.has(req.params.slug)) {
    return sendCompressedFile(req, res, path.join(publicDir, "tools", `${req.params.slug}.html`));
  }

  if (pageRoutes.has(req.params.slug)) return sendCompressedFile(req, res, pageRoutes.get(req.params.slug));

  return next();
});

app.use((req, res) => {
  res.status(404);
  return sendCompressedFile(req, res, path.join(publicDir, "pages", "404.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor rodando em http://127.0.0.1:${process.env.PORT || 3000}`);
});
