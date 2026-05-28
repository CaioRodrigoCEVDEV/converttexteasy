import express from "express";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import zlib from "zlib";
import { promisify } from "util";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const localesDir = path.join(__dirname, "locales");
const siteOrigin = process.env.SITE_ORIGIN || "https://converttexteasy.com";
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

const DEFAULT_LOCALE = "en";
const SUPPORTED_LOCALES = ["pt", "en", "es", "fr", "de", "it", "zh", "ja", "ru", "ar"];
const supportedLocaleSet = new Set(SUPPORTED_LOCALES);
const LOCALE_REGEX = new RegExp(`^/(${SUPPORTED_LOCALES.join("|")})(/|$)`);
const localeDataByCode = loadLocales();
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

function loadLocales() {
  const locales = {};
  for (const locale of SUPPORTED_LOCALES) {
    try {
      const localePath = path.join(localesDir, `${locale}.json`);
      locales[locale] = JSON.parse(fs.readFileSync(localePath, "utf8"));
    } catch {
      locales[locale] = null;
    }
  }
  return locales;
}

function getLocaleData(locale) {
  return localeDataByCode[locale] || localeDataByCode[DEFAULT_LOCALE];
}

function normalizeRoutePath(routePath) {
  if (!routePath || routePath === "/") return "/";
  return "/" + routePath.replace(/^\/+/, "").replace(/\/+$/, "");
}

function localizedPath(locale, routePath = "/") {
  const normalized = normalizeRoutePath(routePath);
  return normalized === "/" ? `/${locale}/` : `/${locale}${normalized}`;
}

function localizedUrl(locale, routePath = "/") {
  return new URL(localizedPath(locale, routePath), siteOrigin).toString();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function interpolate(value, vars = {}) {
  return String(value ?? "").replace(/\{(\w+)\}/g, (match, key) => vars[key] ?? match);
}

function t(req, key, vars = {}) {
  const localeCommon = req.localeData?.common || {};
  const fallbackCommon = getLocaleData(DEFAULT_LOCALE)?.common || {};
  return interpolate(localeCommon[key] || fallbackCommon[key] || "", vars);
}

function localizedContentForRoute(req) {
  const data = req.localeData || getLocaleData(DEFAULT_LOCALE);
  const routePath = req.routePath || "/";
  const common = data.common || {};
  const slug = routePath.split("/").filter(Boolean).at(-1);

  if (routePath === "/") {
    return {
      title: common.pageTitle,
      desc: common.desc
    };
  }

  if (routePath === "/blog") {
    return {
      title: common.blogTitleAlt || common.blogTitle,
      desc: common.blogDescAlt || common.blogDesc
    };
  }

  if (routePath.startsWith("/blog/") && data.blogs && data.blogs[slug]) {
    return {
      title: data.blogs[slug].title,
      desc: data.blogs[slug].desc
    };
  }

  if (data.tools && data.tools[slug]) {
    return {
      title: data.tools[slug].title,
      desc: data.tools[slug].desc
    };
  }

  if (data.pages && data.pages[slug]) {
    return {
      title: data.pages[slug].title,
      desc: data.pages[slug].desc
    };
  }

  return {
    title: common.pageTitle,
    desc: common.desc
  };
}

function getRouteSlug(req) {
  return (req.routePath || "/").split("/").filter(Boolean).at(-1);
}

function getLocalizedTool(req, slug = getRouteSlug(req)) {
  const fallbackTool = getLocaleData(DEFAULT_LOCALE)?.tools?.[slug] || {};
  return {
    ...fallbackTool,
    ...(req.localeData?.tools?.[slug] || {})
  };
}

function getLocalizedBlog(req, slug = getRouteSlug(req)) {
  const fallbackBlog = getLocaleData(DEFAULT_LOCALE)?.blogs?.[slug] || {};
  return {
    ...fallbackBlog,
    ...(req.localeData?.blogs?.[slug] || {})
  };
}

app.use((req, res, next) => {
  if (req.path === '/assets' || req.path.startsWith('/assets/')) return next();
  if (["/sitemap.xml", "/robots.txt", "/ads.txt"].includes(req.path)) return next();

  const match = req.path.match(LOCALE_REGEX);
  if (match) {
    req.lang = supportedLocaleSet.has(match[1]) ? match[1] : DEFAULT_LOCALE;
    req.langPrefix = true;
    const rest = req.url.slice(match[1].length + 1) || "/";
    req.url = '/' + rest.replace(/^\/+/, '');
  } else {
    req.lang = DEFAULT_LOCALE;
    req.langPrefix = false;
  }

  const newPath = req.url.split('?')[0];
  if (newPath === '/assets' || newPath.startsWith('/assets/')) return next();
  req.routePath = normalizeRoutePath(newPath);

  req.localeData = getLocaleData(req.lang);
  res.setHeader('Content-Language', req.lang);

  if (req.method === "GET" && !req.langPrefix) {
    const legacyToolMatch = req.routePath.match(/^\/tools\/([^/]+)$/);
    if (legacyToolMatch && legacyToolRoutes[legacyToolMatch[1]]) {
      return res.redirect(301, localizedPath(DEFAULT_LOCALE, legacyToolRoutes[legacyToolMatch[1]]));
    }

    return res.redirect(301, localizedPath(DEFAULT_LOCALE, req.routePath));
  }

  if (req.method === "GET" && req.originalUrl === `/${req.lang}`) {
    return res.redirect(301, `/${req.lang}/`);
  }

  next();
});

function loadManifest() {
  const manifestPath = path.join(publicDir, "content-manifest.json");
  return JSON.parse(fs.readFileSync(manifestPath, "utf8"));
}

function computeAssetVersions() {
  const assetsDir = path.join(publicDir, "assets");
  const versions = {};
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) { walk(fullPath); continue; }
      if (/\.(css|js)$/i.test(entry.name)) {
        const content = fs.readFileSync(fullPath);
        const hash = crypto.createHash("sha256").update(content).digest("hex").slice(0, 8);
        const relativePath = path.relative(publicDir, fullPath);
        versions[relativePath] = hash;
      }
    }
  }
  walk(assetsDir);
  return versions;
}

const assetVersions = computeAssetVersions();

function versionHtml(html) {
  return html.replace(
    /((?:\/?\.\.\/)*assets\/[^\s"'>]+\.(css|js))(?:\?[^\s"']*)?/gi,
    (match, assetPath) => {
      const normalized = assetPath.replace(/^(?:\/|(?:\.\.\/)+)/, "");
      const hash = assetVersions[normalized];
      return hash ? assetPath + "?v=" + hash : match;
    }
  );
}

function injectLocaleSeo(html, req) {
  const localeData = req.localeData || getLocaleData(DEFAULT_LOCALE);
  const meta = localeData.meta || {};
  const content = localizedContentForRoute(req);
  const canonicalUrl = localizedUrl(req.lang, req.routePath);
  const alternateLinks = SUPPORTED_LOCALES
    .map((locale) => `<link rel="alternate" hreflang="${locale}" href="${localizedUrl(locale, req.routePath)}">`)
    .concat(`<link rel="alternate" hreflang="x-default" href="${localizedUrl(DEFAULT_LOCALE, req.routePath)}">`)
    .join("");

  html = html.replace(/<html\s[^>]*>/, (match) => {
    let result = match;
    if (meta.locale) result = result.replace(/\blang\s*=\s*["'][^"']*["']/, `lang="${escapeHtml(meta.locale)}"`);
    if (meta.dir) {
      if (/dir\s*=/.test(result)) {
        result = result.replace(/\bdir\s*=\s*["'][^"']*["']/, `dir="${escapeHtml(meta.dir)}"`);
      } else {
        result = result.replace(">", ` dir="${escapeHtml(meta.dir)}">`);
      }
    }
    return result;
  });

  if (content.title) {
    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(content.title)} | ConvertTextEasy</title>`);
    html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${escapeHtml(content.title)} | ConvertTextEasy">`);
    html = html.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:title" content="${escapeHtml(content.title)} | ConvertTextEasy">`);
  }

  if (content.desc) {
    html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${escapeHtml(content.desc)}">`);
    html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${escapeHtml(content.desc)}">`);
    html = html.replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:description" content="${escapeHtml(content.desc)}">`);
  }

  html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${canonicalUrl}">`);
  html = html.replace(/<link\s+rel="alternate"\s+hreflang="[^"]+"\s+href="[^"]*"\s*\/?>/gi, "");
  html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i, (match) => `${match}${alternateLinks}`);
  html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="${canonicalUrl}">`);
  html = html.replace(/<meta\s+property="og:locale"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:locale" content="${escapeHtml(meta.ogLocale || "en_US")}">`);

  return html;
}

function applyServerTranslations(html, req) {
  const localeData = req.localeData || getLocaleData(DEFAULT_LOCALE);
  const common = localeData.common || {};
  const routePath = req.routePath || "/";
  const slug = routePath.split("/").filter(Boolean).at(-1);
  const routeContent = localizedContentForRoute(req);

  html = html.replace(/(<[^>]+\sdata-i18n="([^"]+)"[^>]*>)([\s\S]*?)(<\/[^>]+>)/g, (match, open, key, _text, close) => {
    const value = common[key];
    return value ? `${open}${escapeHtml(value)}${close}` : match;
  });

  html = html.replace(/(<[^>]+\sdata-i18n-label="([^"]+)"[^>]*\saria-label=")[^"]*("[^>]*>)/g, (match, open, key, close) => {
    const value = common[key];
    return value ? `${open}${escapeHtml(value)}${close}` : match;
  });

  for (const [key, value] of Object.entries(common)) {
    html = html.replace(new RegExp(`(<[^>]+\\sid="${escapeRegExp(key)}"[^>]*>)([\\s\\S]*?)(<\\/[^>]+>)`, "g"), `$1${escapeHtml(value)}$3`);
  }

  if (routeContent.title) {
    html = html.replace(/(<h1 class="page-title"[^>]*>)([\s\S]*?)(<\/h1>)/i, `$1${escapeHtml(routeContent.title)}$3`);
    html = html.replace(/(<span aria-current="page">)([\s\S]*?)(<\/span>)/i, `$1${escapeHtml(routeContent.title)}$3`);
  }

  if (routeContent.desc) {
    html = html.replace(/(<p class="page-description"[^>]*>)([\s\S]*?)(<\/p>)/i, `$1${escapeHtml(routeContent.desc)}$3`);
  }

  if (routePath.startsWith("/blog/") && localeData.blogs && localeData.blogs[slug]) {
    const article = localeData.blogs[slug];
    if (article.title) {
      html = html.replace(/("headline"\s*:\s*")[^"]*(")/g, `$1${escapeHtml(article.title)}$2`);
      html = html.replace(/("name"\s*:\s*")[^"]*(",\s*"item"\s*:\s*"https:\/\/converttexteasy\.com\/blog\/[^"]+")/g, `$1${escapeHtml(article.title)}$2`);
    }
    if (article.desc) html = html.replace(/("description"\s*:\s*")[^"]*(")/g, `$1${escapeHtml(article.desc)}$2`);
  }

  if (localeData.tools && localeData.tools[slug]) {
    const tool = localeData.tools[slug];
    if (tool.title) {
      html = html.replace(/("name"\s*:\s*")[^"]*(")/g, (match, open, close) => match.includes("ConvertTextEasy") ? match : `${open}${escapeHtml(tool.title)}${close}`);
    }
    if (tool.desc) html = html.replace(/("description"\s*:\s*")[^"]*(")/g, `$1${escapeHtml(tool.desc)}$2`);
  }

  return html;
}

function translateChrome(html, req) {
  const replacements = {
    footerLinksTitle: t(req, "footerLinks"),
    footerHomeLink: t(req, "footerHome"),
    footerToolLink1: t(req, "footerTool1"),
    footerToolLink2: t(req, "footerTool2"),
    footerToolLink3: t(req, "footerTool3"),
    footerPrivacyLink: t(req, "footerPrivacy"),
    footerTermsLink: t(req, "footerTerms"),
    footerAboutLink: t(req, "footerAbout"),
    footerContactTitle: t(req, "footerContact"),
    footerContactLink: t(req, "footerContact"),
    newsletterInput: t(req, "newsletterPlaceholder"),
    newsletterButton: t(req, "newsletterButton")
  };

  for (const [id, value] of Object.entries(replacements)) {
    if (!value) continue;
    html = html.replace(new RegExp(`(<[^>]+\\sid="${escapeRegExp(id)}"[^>]*>)([\\s\\S]*?)(<\\/[^>]+>)`, "g"), `$1${escapeHtml(value)}$3`);
  }

  html = html.replace(/aria-label="ConvertTextEasy - Página Inicial"/g, `aria-label="ConvertTextEasy - ${escapeHtml(t(req, "footerHome"))}"`);
  html = html.replace(/alt="ConvertTextEasy - Ferramentas de Texto Online"/g, `alt="ConvertTextEasy - ${escapeHtml(t(req, "headerBrandSubtitle"))}"`);
  html = html.replace(/title="Alternar tema"/g, `title="${escapeHtml(t(req, "theme"))}"`);
  html = html.replace(/aria-label="Alternar tema claro\/escuro"/g, `aria-label="${escapeHtml(t(req, "theme"))}"`);
  html = html.replace(/aria-label="Selecionar idioma"/g, `aria-label="${escapeHtml(t(req, "langSelectAria"))}"`);
  html = html.replace(/aria-label="Abrir menu de ferramentas"/g, `aria-label="${escapeHtml(t(req, "mobileMenuBtn"))}"`);
  html = html.replace(/aria-label="Aviso de cookies"/g, `aria-label="${escapeHtml(t(req, "cookieTitle"))}"`);
  html = html.replace(/<p id="cookie-desc">[\s\S]*?<\/p>/g, `<p id="cookie-desc">${escapeHtml(t(req, "cookieText"))}<a href="${localizedPath(req.lang, "/privacy-policy")}">${escapeHtml(t(req, "cookiePolicy"))}</a>.</p>`);
  html = html.replace(/(<button onclick="acceptCookies\(\)" class="btn btn-primary btn-sm cookie-btn">)([\s\S]*?)(<\/button>)/g, `$1${escapeHtml(t(req, "cookieAccept"))}$3`);
  html = replaceAttr(html, /<input type="email" id="newsletterInput"[^>]*>/, "placeholder", t(req, "newsletterPlaceholder"));
  html = replaceAttr(html, /<input type="email" id="newsletterInput"[^>]*>/, "aria-label", t(req, "newsletterPlaceholder"));
  html = replaceAttr(html, /<button class="btn btn-primary btn-sm" id="newsletterButton"[^>]*>/, "aria-label", t(req, "newsletterButton"));

  return html;
}

function translateListingCards(html, req) {
  html = html.replace(/<a class="tool-card" href="([^"]+)" role="listitem" data-slug="([^"]+)"><div class="tool-title">[\s\S]*?<\/div><p>[\s\S]*?<\/p><div class="example">[\s\S]*?<\/div><\/a>/g, (match, href, slug) => {
    if (toolBySlug.has(slug)) {
      const tool = getLocalizedTool(req, slug);
      return `<a class="tool-card" href="${href}" role="listitem" data-slug="${slug}"><div class="tool-title">${escapeHtml(tool.title)}</div><p>${escapeHtml(tool.desc || "")}</p><div class="example">${escapeHtml(tool.example || "")}</div></a>`;
    }

    if (articleBySlug.has(slug)) {
      const article = getLocalizedBlog(req, slug);
      return `<a class="tool-card" href="${href}" role="listitem" data-slug="${slug}"><div class="tool-title">${escapeHtml(article.title)}</div><p>${escapeHtml(article.desc || "")}</p><div class="example">${escapeHtml(req.localeData?.readArticle || getLocaleData(DEFAULT_LOCALE)?.readArticle || "Read article")}</div></a>`;
    }

    return match;
  });

  return html.replace(/<a class="tool-card" href="([^"]*\/blog\/([^"/]+))" role="listitem"><div class="tool-title">[\s\S]*?<\/div><p>[\s\S]*?<\/p><div class="example" data-i18n="guidedPractice">[\s\S]*?<\/div><\/a>/g, (match, href, slug) => {
    if (!articleBySlug.has(slug)) return match;
    const article = getLocalizedBlog(req, slug);
    return `<a class="tool-card" href="${href}" role="listitem"><div class="tool-title">${escapeHtml(article.title)}</div><p>${escapeHtml(article.desc || "")}</p><div class="example" data-i18n="guidedPractice">${escapeHtml(t(req, "guidedPractice"))}</div></a>`;
  });
}

function replaceAttr(html, selectorRegex, attr, value) {
  return html.replace(selectorRegex, (match) => {
    const escaped = escapeHtml(value);
    const attrRegex = new RegExp(`\\b${attr}="[^"]*"`);
    if (attrRegex.test(match)) return match.replace(attrRegex, `${attr}="${escaped}"`);
    return match.replace(/>$/, ` ${attr}="${escaped}">`);
  });
}

function translateToolPage(html, req) {
  const slug = getRouteSlug(req);
  if (!slug || !toolBySlug.has(slug)) return html;

  const tool = getLocalizedTool(req, slug);
  const vars = { tool: tool.title, toolLower: tool.title.toLowerCase() };
  const related = [...toolBySlug.keys()]
    .filter((relatedSlug) => relatedSlug !== slug)
    .slice(0, 8)
    .map((relatedSlug) => {
      const relatedTool = getLocalizedTool(req, relatedSlug);
      return `<a class="related-tool-link" href="${localizedPath(req.lang, `/${relatedSlug}`)}">${escapeHtml(relatedTool.title)}</a>`;
    })
    .join("");

  html = html.replace(/(<section class="panel editor-card">[\s\S]*?<h2 class="panel-title">)([\s\S]*?)(<\/h2>)/, `$1${escapeHtml(t(req, "toolEditorTitle", vars))}$3`);
  html = html.replace(/(<section class="panel editor-card">[\s\S]*?<p class="panel-copy">)([\s\S]*?)(<\/p>)/, `$1${escapeHtml(t(req, "toolEditorCopy", vars))}$3`);
  html = replaceAttr(html, /<textarea id="input"[^>]*>/, "placeholder", t(req, "toolInputPlaceholder", vars));
  html = replaceAttr(html, /<textarea id="input"[^>]*>/, "aria-label", t(req, "toolInputAria", vars));
  html = replaceAttr(html, /<button class="editor-action-btn" onclick="copyText\(\)"[^>]*>/, "title", t(req, "toolCopyResult", vars));
  html = replaceAttr(html, /<button class="editor-action-btn" onclick="copyText\(\)"[^>]*>/, "aria-label", t(req, "toolCopyResult", vars));
  html = replaceAttr(html, /<button class="editor-action-btn" type="button" onclick="clearText\(\)"[^>]*>/, "title", t(req, "toolClearText", vars));
  html = replaceAttr(html, /<button class="editor-action-btn" type="button" onclick="clearText\(\)"[^>]*>/, "aria-label", t(req, "toolClearText", vars));
  html = html.replace(/<span>Caracteres:<\/span>/, `<span>${escapeHtml(t(req, "toolCharacters", vars))}</span>`);
  html = html.replace(/<span>Palavras:<\/span>/, `<span>${escapeHtml(t(req, "toolWords", vars))}</span>`);
  html = html.replace(/<span>Linhas:<\/span>/, `<span>${escapeHtml(t(req, "toolLines", vars))}</span>`);
  html = replaceAttr(html, /<button onclick="convert\('[^']+'\)" type="button" class="badge-conversion badge-conversion-primary"[^>]*>/, "aria-label", t(req, "toolConvertAria", vars));
  html = html.replace(/(<div class="tool-action-bar"><button[\s\S]*?<span>)([\s\S]*?)(<\/span>)([\s\S]*?)(<\/button>)/, `$1${escapeHtml(t(req, "toolConvert", vars))}$3${escapeHtml(tool.title)}$5`);
  html = replaceAttr(html, /<aside class="sidebar-stack" aria-label="[^"]*">/, "aria-label", t(req, "toolAsideAria", vars));
  html = html.replace(/(<aside class="sidebar-stack"[\s\S]*?<h2 class="panel-title">)([\s\S]*?)(<\/h2>)/, `$1${escapeHtml(t(req, "toolHowToUseTitle", vars))}$3`);
  html = html.replace(/(<aside class="sidebar-stack"[\s\S]*?<p class="panel-copy">)([\s\S]*?)(<\/p>)/, `$1${escapeHtml(t(req, "toolHowToUseCopy", vars))}$3`);
  html = html.replace(/<ol class="tool-info-list">[\s\S]*?<\/ol>/, `<ol class="tool-info-list"><li>${escapeHtml(t(req, "toolStepPaste", vars))}</li><li>${escapeHtml(tool.tutorial || "")}</li><li>${escapeHtml(t(req, "toolStepConvert", vars))}</li><li>${escapeHtml(t(req, "toolStepCopy", vars))}</li></ol>`);
  html = html.replace(/(<ol class="tool-info-list">[\s\S]*?<\/ol><\/div><\/section><section class="panel"><div class="panel-head"><div><h2 class="panel-title">)([\s\S]*?)(<\/h2>)/, `$1${escapeHtml(t(req, "toolExampleTitle", vars))}$3`);
  html = html.replace(/(<ol class="tool-info-list">[\s\S]*?<\/ol><\/div><\/section><section class="panel">[\s\S]*?<p class="panel-copy">)([\s\S]*?)(<\/p>)/, `$1${escapeHtml(t(req, "toolExampleCopy", vars))}$3`);
  html = html.replace(/(<div class="panel-body"><div class="example">)([\s\S]*?)(<\/div><\/div><\/section><section class="panel"><div class="panel-head"><div><h2 class="panel-title">)([\s\S]*?)(<\/h2>)/, `$1${escapeHtml(tool.example || "")}$3${escapeHtml(t(req, "relatedToolsTitle", vars))}$5`);
  html = html.replace(/<div class="related-tools-grid">[\s\S]*?<\/div>/, `<div class="related-tools-grid">${related}</div>`);

  const faqItems = [1, 2, 3, 4, 5].map((i) => ({
    q: t(req, `faqQ${i}`, vars),
    a: t(req, `faqA${i}`, vars)
  }));
  const faqVisible = faqItems.map((item, i) => `<div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question"><h3 itemprop="name" data-i18n="faqQ${i + 1}">${escapeHtml(item.q)}</h3><div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><p itemprop="text" data-i18n="faqA${i + 1}">${escapeHtml(item.a)}</p></div></div>`).join("");
  html = html.replace(/<section class="panel mt-4"><div class="panel-head"><div><h2 class="panel-title" data-i18n="faqTitle">[\s\S]*?<\/section>/, `<section class="panel mt-4"><div class="panel-head"><div><h2 class="panel-title" data-i18n="faqTitle">${escapeHtml(t(req, "faqTitle", vars))}</h2></div></div><div class="panel-body">${faqVisible}</div></section>`);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a }
    }))
  };
  html = html.replace(/<script type="application\/ld\+json">\{"@context":"https:\/\/schema\.org","@type":"FAQPage"[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`);

  return html;
}

function translateBlogPage(html, req) {
  const slug = getRouteSlug(req);
  if (!slug || !articleBySlug.has(slug)) return html;

  const article = getLocalizedBlog(req, slug);
  const toolSlug = toolBySlug.has(slug) ? slug : [...toolBySlug.keys()][0];
  const fallbackArticle = articleBySlug.get(slug) || {};
  const relatedSlugMatch = html.match(/href="\/([^"]+)" aria-label="Abrir ferramenta/);
  const relatedSlug = relatedSlugMatch?.[1] || toolSlug;
  const relatedTool = getLocalizedTool(req, relatedSlug);
  const title = article.title || fallbackArticle.title;
  const vars = { title, tool: relatedTool.title };
  const paragraphs = [
    t(req, "articleIntro", vars),
    t(req, "articleP1", vars),
    t(req, "articleP2", vars),
    t(req, "articleP3", vars),
    t(req, "articleP4", vars),
    t(req, "articleP5", vars),
    t(req, "articleP6", vars),
    t(req, "articleP7", vars),
    t(req, "articleP8", vars),
    t(req, "articleP9", vars),
    t(req, "articleP10", vars)
  ];
  const articleHtml = `<article class="panel" id="main-content"><div class="panel-body article-content"><p class="page-eyebrow" data-i18n="guidedPractice">${escapeHtml(t(req, "guidedPractice"))}</p><h1 class="page-title">${escapeHtml(title)}</h1><p class="page-description">${escapeHtml(article.desc || fallbackArticle.desc || "")}</p><p>${escapeHtml(paragraphs[0])}</p><h2>${escapeHtml(t(req, "articleHeadingWhy", vars))}</h2><p>${escapeHtml(paragraphs[1])}</p><p>${escapeHtml(paragraphs[2])}</p><h2>${escapeHtml(t(req, "articleHeadingSteps", vars))}</h2>${paragraphs.slice(3, 7).map((p) => `<p>${escapeHtml(p)}</p>`).join("")}<h2>${escapeHtml(t(req, "articleHeadingExamples", vars))}</h2>${paragraphs.slice(7).map((p) => `<p>${escapeHtml(p)}</p>`).join("")}<div class="tool-callout"><h2>${escapeHtml(t(req, "articleRelatedTitle", vars))}</h2><p>${escapeHtml(t(req, "articleRelatedCopy", vars))}</p><a class="badge-conversion badge-conversion-primary text-decoration-none" href="${localizedPath(req.lang, `/${relatedSlug}`)}" aria-label="${escapeHtml(t(req, "articleOpenToolAria", vars))}"><span>Go</span>${escapeHtml(t(req, "articleOpenTool", vars))}</a></div></div></article>`;
  return html.replace(/<article class="panel" id="main-content">[\s\S]*?<\/article>/, articleHtml);
}

function translateStaticPage(html, req) {
  const slug = getRouteSlug(req) || "404";
  const fallbackPages = getLocaleData(DEFAULT_LOCALE)?.pages || {};
  const page = req.localeData?.pages?.[slug] || fallbackPages[slug];
  if (!page) return html;

  html = html.replace(/(<h1 class="page-title">)([\s\S]*?)(<\/h1>)/, `$1${escapeHtml(page.title)}$3`);
  html = html.replace(/(<p class="page-description">)([\s\S]*?)(<\/p>)/, `$1${escapeHtml(page.desc)}$3`);
  html = html.replace(/(<span aria-current="page"[^>]*>)([\s\S]*?)(<\/span>)/, `$1${escapeHtml(page.title)}$3`);
  html = html.replace(/("name"\s*:\s*")[^"]*(")/, `$1${escapeHtml(page.title)}$2`);
  html = html.replace(/("description"\s*:\s*")[^"]*(")/, `$1${escapeHtml(page.desc)}$2`);
  html = html.replace(/("position":\s*1,\s*"name":\s*")[^"]*(")/, `$1${escapeHtml(t(req, "breadcrumbHome"))}$2`);
  html = html.replace(/("position":\s*2,\s*"name":\s*")[^"]*(")/, `$1${escapeHtml(page.title)}$2`);

  const mainContent = `<main id="main-content" class="content-grid mt-4"><section class="panel editor-card"><div class="panel-head"><div><h2 class="panel-title">${escapeHtml(page.sections[0]?.[0] || page.title)}</h2><p class="panel-copy">${escapeHtml(page.sections[0]?.[1] || page.desc)}</p></div></div><div class="panel-body">${page.sections.slice(1).map(([heading, body]) => `<h3 class="mt-4">${escapeHtml(heading)}</h3><p>${escapeHtml(body)}</p>`).join("")}</div></section><aside class="sidebar-stack" aria-label="${escapeHtml(t(req, "sidebarMoreTools"))}"><section class="panel"><div class="panel-head"><div><h2 class="panel-title">${escapeHtml(t(req, "sidebarTools"))}</h2><p class="panel-copy">${escapeHtml(t(req, "allToolsDesc"))}</p></div></div><div class="panel-body"><ul class="list-unstyled small mb-0"><li class="mb-2"><a href="${localizedPath(req.lang, "/")}" class="text-decoration-none">${escapeHtml(t(req, "footerHome"))}</a></li><li class="mb-2"><a href="${localizedPath(req.lang, "/uppercase-text")}" class="text-decoration-none">${escapeHtml(getLocalizedTool(req, "uppercase-text").title)}</a></li><li class="mb-2"><a href="${localizedPath(req.lang, "/lowercase-text")}" class="text-decoration-none">${escapeHtml(getLocalizedTool(req, "lowercase-text").title)}</a></li><li class="mb-2"><a href="${localizedPath(req.lang, "/blog")}" class="text-decoration-none">${escapeHtml(t(req, "drawerBlog"))}</a></li><li><a href="${localizedPath(req.lang, "/contact")}" class="text-decoration-none">${escapeHtml(t(req, "pageContact"))}</a></li></ul></div></section></aside></main>`;
  return html.replace(/<main id="main-content" class="content-grid mt-4">[\s\S]*?<\/main>/, mainContent);
}

function localizeInternalLinks(html, req) {
  const prefix = `/${req.lang}`;
  return html
    .replace(/\s(href|action)="\/(?!\/|assets\/|sitemap\.xml|robots\.txt|ads\.txt|favicon\.ico)([^"#?]*)([^"]*)"/g, (match, attr, pathname, suffix) => {
      const pathPart = `/${pathname}`;
      if (LOCALE_REGEX.test(pathPart)) return ` ${attr}="${pathPart}${suffix}"`;
      return ` ${attr}="${prefix}${pathPart}${suffix}"`;
    })
    .replace(/\s(href|action)="\/([#?][^"]*)"/g, ` $1="${prefix}/$2"`);
}

function localizeAbsoluteStructuredUrls(html, req) {
  const originPattern = escapeRegExp(siteOrigin.replace(/\/+$/, ""));
  return html.replace(new RegExp(`${originPattern}/(?!assets/|sitemap\\.xml|robots\\.txt|ads\\.txt)([^"\\s<]*)`, "g"), (match, route) => {
    const [pathname, suffix = ""] = route.split(/(?=[#?])/);
    if (SUPPORTED_LOCALES.some((locale) => pathname === locale || pathname.startsWith(`${locale}/`))) {
      return match;
    }
    return `${siteOrigin}${localizedPath(req.lang, `/${pathname}`)}${suffix}`;
  });
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

  let file = await fs.promises.readFile(filePath);

  if (extension === ".html") {
    let html = file.toString("utf8");
    html = versionHtml(html);

    if (req.localeData) {
      html = html
        .replace(/\.\.\/assets\//g, '/assets/')
        .replace(/(href|src)="assets\//g, '$1="/assets/')
        .replace(/onchange="changeLang\(this\.value\)"/g, 'onchange="switchLocale(this.value)"');
      html = injectLocaleSeo(html, req);
      html = applyServerTranslations(html, req);
      html = translateChrome(html, req);
      html = translateListingCards(html, req);
      html = translateToolPage(html, req);
      html = translateBlogPage(html, req);
      html = translateStaticPage(html, req);
      html = localizeInternalLinks(html, req);
      html = localizeAbsoluteStructuredUrls(html, req);

      const localeScript = `<script>window.__LOCALE=${JSON.stringify({
        lang: req.lang,
        path: req.routePath,
        supported: SUPPORTED_LOCALES,
        data: req.localeData.common
      })}</script>`;
      html = html.replace('</head>', `${localeScript}</head>`);
    }

    file = Buffer.from(html, "utf8");
  }

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

app.use("/assets", express.static(path.join(publicDir, "assets"), {
  setHeaders: (res, filePath) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  }
}));

app.get("/tools/:file", (req, res) => {
  const redirectTo = legacyToolRoutes[req.params.file];
  if (redirectTo) return res.redirect(301, localizedPath(req.lang, redirectTo));
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
