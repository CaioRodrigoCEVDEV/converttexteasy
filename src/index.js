import express from "express";
import rateLimit, { ipKeyGenerator } from "express-rate-limit";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import zlib from "zlib";
import { promisify } from "util";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { z } from "zod";
import { ARTICLE_PAGE_CONTENT, EDITORIAL_AUTHOR, STATIC_PAGE_CONTENT, TOOL_PAGE_CONTENT } from "./site-content.js";
import { getDbPool, isDatabaseConfigured } from "./db.js";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const localesDir = path.join(__dirname, "locales");
const BRAND_NAME = "ConvertTextEasy";
const BRAND_DOMAIN = "converttexteasy.com";
const siteOrigin = (process.env.SITE_ORIGIN || `https://${BRAND_DOMAIN}`).replace(/\/+$/, "");
const canonicalHost = new URL(siteOrigin).host;
const logoUrl = new URL("/assets/img/iconeTextLab.png", siteOrigin).toString();
const sameAsLinks = (process.env.BRAND_SAME_AS || "")
  .split(",")
  .map((url) => url.trim())
  .filter(Boolean);
const gzip = promisify(zlib.gzip);
const brotliCompress = promisify(zlib.brotliCompress);
const compressibleExtensions = new Set([".html", ".css", ".js", ".json", ".xml", ".txt"]);
const FEEDBACK_TYPES = ["suggestion", "bug", "compliment", "feature", "other"];
const FEEDBACK_MIN_FILL_MS = 2000;
const FEEDBACK_RATE_LIMIT_WINDOW_MINUTES = getPositiveIntegerEnv("FEEDBACK_RATE_LIMIT_WINDOW_MINUTES", 15);
const FEEDBACK_RATE_LIMIT_MAX = getPositiveIntegerEnv("FEEDBACK_RATE_LIMIT_MAX", 5);
const TURNSTILE_ENABLED = String(process.env.TURNSTILE_ENABLED || "false").toLowerCase() === "true";
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY || "";
const FEEDBACK_API_MESSAGES = {
  pt: {
    success: "Feedback enviado com sucesso.",
    unavailable: "Servico de feedback indisponivel no momento.",
    rateLimit: "Voce enviou feedback recentemente. Tente novamente em alguns minutos.",
    invalidSubmission: "Nao foi possivel validar seu feedback. Revise os campos e tente novamente.",
    messageTooShort: "Escreva uma mensagem com pelo menos 5 caracteres."
  },
  en: {
    success: "Feedback sent successfully.",
    unavailable: "Feedback service is currently unavailable.",
    rateLimit: "You recently sent feedback. Please try again in a few minutes.",
    invalidSubmission: "We could not validate your feedback. Please review the form and try again.",
    messageTooShort: "Please write a message with at least 5 characters."
  },
  es: {
    success: "Comentarios enviados correctamente.",
    unavailable: "El servicio de comentarios no esta disponible en este momento.",
    rateLimit: "Ya enviaste comentarios recientemente. Intentalo de nuevo en unos minutos.",
    invalidSubmission: "No pudimos validar tus comentarios. Revisa el formulario e intentalo de nuevo.",
    messageTooShort: "Escribe un mensaje con al menos 5 caracteres."
  },
  fr: {
    success: "Commentaire envoye avec succes.",
    unavailable: "Le service de commentaires est indisponible pour le moment.",
    rateLimit: "Vous avez recemment envoye un commentaire. Reessayez dans quelques minutes.",
    invalidSubmission: "Nous n'avons pas pu valider votre commentaire. Verifiez le formulaire et reessayez.",
    messageTooShort: "Veuillez ecrire un message d'au moins 5 caracteres."
  },
  de: {
    success: "Feedback erfolgreich gesendet.",
    unavailable: "Der Feedback-Dienst ist derzeit nicht verfugbar.",
    rateLimit: "Sie haben vor Kurzem Feedback gesendet. Bitte versuchen Sie es in einigen Minuten erneut.",
    invalidSubmission: "Ihr Feedback konnte nicht validiert werden. Bitte prufen Sie das Formular und versuchen Sie es erneut.",
    messageTooShort: "Bitte schreiben Sie eine Nachricht mit mindestens 5 Zeichen."
  },
  it: {
    success: "Feedback inviato con successo.",
    unavailable: "Il servizio di feedback non e disponibile al momento.",
    rateLimit: "Hai inviato feedback di recente. Riprova tra qualche minuto.",
    invalidSubmission: "Non e stato possibile convalidare il tuo feedback. Controlla il modulo e riprova.",
    messageTooShort: "Scrivi un messaggio di almeno 5 caratteri."
  },
  zh: {
    success: "反馈已成功发送。",
    unavailable: "反馈服务当前不可用。",
    rateLimit: "您刚刚提交过反馈。请几分钟后再试。",
    invalidSubmission: "无法验证您的反馈。请检查表单后重试。",
    messageTooShort: "请输入至少 5 个字符的消息。"
  },
  ja: {
    success: "フィードバックを送信しました。",
    unavailable: "現在、フィードバックサービスを利用できません。",
    rateLimit: "直前にフィードバックを送信しました。数分後にもう一度お試しください。",
    invalidSubmission: "フィードバックを検証できませんでした。フォームを確認して、もう一度お試しください。",
    messageTooShort: "5文字以上のメッセージを入力してください。"
  },
  ru: {
    success: "Отзыв успешно отправлен.",
    unavailable: "Сервис отзывов сейчас недоступен.",
    rateLimit: "Вы недавно уже отправляли отзыв. Попробуйте снова через несколько минут.",
    invalidSubmission: "Не удалось проверить ваш отзыв. Проверьте форму и попробуйте снова.",
    messageTooShort: "Пожалуйста, напишите сообщение не короче 5 символов."
  },
  ar: {
    success: "تم إرسال الملاحظات بنجاح.",
    unavailable: "خدمة الملاحظات غير متاحة حاليا.",
    rateLimit: "لقد أرسلت ملاحظات مؤخرا. يرجى المحاولة مرة أخرى بعد بضع دقائق.",
    invalidSubmission: "تعذر التحقق من ملاحظاتك. راجع النموذج ثم حاول مرة أخرى.",
    messageTooShort: "يرجى كتابة رسالة لا تقل عن 5 أحرف."
  }
};
const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8"
};

const app = express();
app.use(express.json({ limit: "25kb" }));

app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  res.setHeader("Vary", "Accept-Encoding, Accept-Language");
  next();
});

app.set("trust proxy", 1);

const feedbackSchema = z.object({
  name: z.preprocess((value) => sanitizeOptionalFeedbackText(value, 120), z.string().max(120).optional()),
  email: z.preprocess((value) => sanitizeOptionalFeedbackText(value, 180), z.string().email().max(180).optional()),
  rating: z.preprocess((value) => normalizeFeedbackRating(value), z.number().int().min(1).max(5).optional()),
  feedback_type: z.preprocess(
    (value) => sanitizeOptionalFeedbackText(value, 20)?.toLowerCase(),
    z.enum(FEEDBACK_TYPES)
  ),
  message: z.preprocess((value) => sanitizeRequiredFeedbackText(value, 2000), z.string().min(5).max(2000)),
  page_url: z.preprocess((value) => sanitizeOptionalFeedbackText(value, 1000), z.string().max(1000).optional()),
  language: z.preprocess((value) => sanitizeOptionalFeedbackText(value, 10)?.toLowerCase(), z.string().max(10).optional()),
  website: z.preprocess((value) => sanitizeOptionalFeedbackText(value, 255), z.string().max(255).optional()),
  started_at: z.preprocess((value) => parseStartedAt(value), z.number().finite().optional()),
  turnstile_token: z.preprocess((value) => sanitizeOptionalFeedbackText(value, 2048), z.string().max(2048).optional())
}).strict();

const feedbackRateLimiter = rateLimit({
  windowMs: FEEDBACK_RATE_LIMIT_WINDOW_MINUTES * 60 * 1000,
  max: FEEDBACK_RATE_LIMIT_MAX,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    const requestIp = getRequestIp(req) || req.ip;
    return requestIp ? ipKeyGenerator(requestIp) : "feedback-anonymous";
  },
  handler: (req, res) => {
    console.error("Rate limit de feedback excedido.", { ip: getRequestIp(req) });
    return res.status(429).json({
      success: false,
      message: getFeedbackApiMessage(req, "rateLimit")
    });
  }
});

function getPositiveIntegerEnv(name, fallback) {
  const parsed = Number.parseInt(process.env[name] || "", 10);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}

function getFeedbackApiMessage(req, key) {
  const locale = normalizeLocale(req?.body?.language) || normalizeLocale(req?.lang) || detectRequestLocale(req) || DEFAULT_LOCALE;
  return FEEDBACK_API_MESSAGES[locale]?.[key] || FEEDBACK_API_MESSAGES[DEFAULT_LOCALE][key];
}

function buildFeedbackValidationResponse(req, validationError) {
  const flattened = validationError.flatten();
  const hasMessageTooShortIssue = validationError.issues.some((issue) => issue.path?.[0] === "message" && issue.code === "too_small");
  const primaryMessage = hasMessageTooShortIssue ? getFeedbackApiMessage(req, "messageTooShort") : getFeedbackApiMessage(req, "invalidSubmission");

  return {
    success: false,
    message: primaryMessage,
    errors: {
      form: flattened.formErrors || [],
      fields: Object.fromEntries(
        Object.entries(flattened.fieldErrors || {}).map(([field, messages]) => {
          if (field === "message" && hasMessageTooShortIssue) {
            return [field, [getFeedbackApiMessage(req, "messageTooShort")]];
          }
          return [field, messages];
        })
      )
    }
  };
}

app.use((req, res, next) => {
  if (req.method !== "GET" && req.method !== "HEAD") return next();
  const host = req.get("host");
  if (!host || host.startsWith("localhost") || host.startsWith("127.0.0.1")) return next();

  const forwardedProto = req.get("x-forwarded-proto");
  const isHttps = req.secure || forwardedProto === "https";
  const hasWww = /^www\./i.test(host);
  const normalizedHost = host.replace(/^www\./i, "");

  if (!isHttps || hasWww || normalizedHost !== canonicalHost) {
    return res.redirect(301, `${siteOrigin}${req.originalUrl}`);
  }

  next();
});

const DEFAULT_LOCALE = "pt";
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

function normalizeLocale(value) {
  if (!value || typeof value !== "string") return null;
  const code = value.trim().replace("_", "-").split("-")[0].toLowerCase();
  return supportedLocaleSet.has(code) ? code : null;
}

function sanitizeFeedbackText(value, maxLength) {
  if (typeof value !== "string") return null;
  const normalized = stripTags(value)
    .replace(/\s+/g, " ")
    .trim();
  if (!normalized) return null;
  return normalized.slice(0, maxLength);
}

function sanitizeOptionalFeedbackText(value, maxLength) {
  return sanitizeFeedbackText(value, maxLength) || undefined;
}

function sanitizeRequiredFeedbackText(value, maxLength) {
  return sanitizeFeedbackText(value, maxLength) || "";
}

function normalizeFeedbackRating(value) {
  if (value === undefined || value === null || value === "") return undefined;
  if (typeof value === "number") return value;
  if (typeof value !== "string") return Number.NaN;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  const rating = Number(trimmed);
  return Number.isInteger(rating) ? rating : Number.NaN;
}

function parseStartedAt(value) {
  if (value === undefined || value === null || value === "") return undefined;
  if (typeof value === "number") return Number.isFinite(value) ? value : Number.NaN;
  if (typeof value !== "string") return Number.NaN;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  const numericValue = Number(trimmed);
  if (Number.isFinite(numericValue)) return numericValue;
  const parsedDate = Date.parse(trimmed);
  return Number.isFinite(parsedDate) ? parsedDate : Number.NaN;
}

function getRequestIp(req) {
  const cfIp = req.headers["cf-connecting-ip"];
  if (typeof cfIp === "string" && cfIp.trim()) return cfIp.trim().slice(0, 80);

  const forwardedFor = req.headers["x-forwarded-for"];
  if (typeof forwardedFor === "string" && forwardedFor.trim()) {
    return forwardedFor.split(",")[0].trim().slice(0, 80);
  }

  if (typeof req.ip === "string" && req.ip.trim()) return req.ip.trim().slice(0, 80);
  if (typeof req.socket?.remoteAddress === "string" && req.socket.remoteAddress.trim()) return req.socket.remoteAddress.trim().slice(0, 80);
  return null;
}

async function validateTurnstileToken(token, remoteIp) {
  if (!TURNSTILE_ENABLED) return true;
  if (!TURNSTILE_SECRET_KEY) {
    console.error("Turnstile habilitado sem TURNSTILE_SECRET_KEY configurada.");
    return false;
  }

  try {
    const body = new URLSearchParams({
      secret: TURNSTILE_SECRET_KEY,
      response: token
    });

    if (remoteIp) body.set("remoteip", remoteIp);

    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body
    });

    if (!response.ok) return false;
    const result = await response.json();
    return result?.success === true;
  } catch (error) {
    console.error("Erro ao validar Turnstile:", error);
    return false;
  }
}

function detectRequestLocale(req) {
  const header = req.get("accept-language") || "";
  const locales = header
    .split(",")
    .map((part) => {
      const [rawLocale, ...params] = part.trim().split(";");
      const qualityParam = params.find((param) => param.trim().startsWith("q="));
      const quality = qualityParam ? Number(qualityParam.split("=")[1]) : 1;
      return {
        locale: normalizeLocale(rawLocale),
        quality: Number.isFinite(quality) ? quality : 0
      };
    })
    .filter((entry) => entry.locale)
    .sort((a, b) => b.quality - a.quality);

  return locales[0]?.locale || DEFAULT_LOCALE;
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

function stripTags(value) {
  return String(value ?? "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
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
    const manifestArticle = articleBySlug?.get(slug) || {};
    const localizedArticle = data.blogs[slug] || {};
    return {
      title: localizedArticle.title || manifestArticle.title,
      desc: !localizedArticle.desc || /Guia prático com explicações/i.test(localizedArticle.desc) ? manifestArticle.desc : localizedArticle.desc
    };
  }

  if (data.tools && data.tools[slug]) {
    const manifestTool = toolBySlug?.get(slug) || {};
    const localizedTool = data.tools[slug] || {};
    return {
      title: localizedTool.title || manifestTool.title,
      desc: localizedTool.desc || manifestTool.description
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

function routeType(req) {
  const routePath = req.routePath || "/";
  const slug = routePath.split("/").filter(Boolean).at(-1);
  if (routePath === "/") return "home";
  if (routePath === "/blog") return "blogIndex";
  if (routePath.startsWith("/blog/")) return "article";
  if (toolBySlug?.has(slug)) return "tool";
  if (["about", "contact", "privacy-policy", "terms"].includes(slug)) return "page";
  return "page";
}

function localizedSeoForRoute(req) {
  const content = localizedContentForRoute(req);
  const type = routeType(req);
  const lang = req.lang || DEFAULT_LOCALE;
  const fallbackCommon = getLocaleData(DEFAULT_LOCALE)?.common || {};
  const common = req.localeData?.common || fallbackCommon;
  const homeTitle = common.brandSeoTitle || fallbackCommon.brandSeoTitle || `${BRAND_NAME} - Free Online Text Tools`;
  const homeDesc = common.brandSeoDescription || fallbackCommon.brandSeoDescription || "ConvertTextEasy is the official free online toolkit for text conversion, formatting, developer utilities, and SEO workflows.";

  if (type === "home") {
    return {
      title: homeTitle,
      desc: homeDesc,
      ogType: "website"
    };
  }

  const suffix = lang === DEFAULT_LOCALE ? ` | ${BRAND_NAME}` : ` | ${BRAND_NAME}`;
  return {
    title: `${content.title}${suffix}`,
    desc: content.desc,
    ogType: type === "article" ? "article" : "website"
  };
}

function getRouteSlug(req) {
  return (req.routePath || "/").split("/").filter(Boolean).at(-1);
}

function getLocalizedTool(req, slug = getRouteSlug(req)) {
  const manifestTool = toolBySlug?.get(slug) || {};
  const fallbackTool = getLocaleData(DEFAULT_LOCALE)?.tools?.[slug] || {};
  const localizedTool = req.localeData?.tools?.[slug] || {};
  const result = {
    ...manifestTool,
    ...fallbackTool,
    ...localizedTool,
    desc: localizedTool.desc || fallbackTool.desc || manifestTool.description,
    example: localizedTool.example || fallbackTool.example || manifestTool.example,
    tutorial: localizedTool.tutorial || fallbackTool.tutorial || manifestTool.tutorial
  };

  if (req.lang === "pt") {
    result.title = manifestTool.title || result.title;
    result.desc = manifestTool.description || result.desc;
    result.example = manifestTool.example || result.example;
    result.tutorial = manifestTool.tutorial || result.tutorial;
  }

  return result;
}

function getLocalizedBlog(req, slug = getRouteSlug(req)) {
  const manifestArticle = articleBySlug?.get(slug) || {};
  const fallbackBlog = getLocaleData(DEFAULT_LOCALE)?.blogs?.[slug] || {};
  const localizedBlog = req.localeData?.blogs?.[slug] || {};
  return {
    ...manifestArticle,
    ...fallbackBlog,
    ...(localizedBlog.desc && /Guia prático com explicações/i.test(localizedBlog.desc) ? { ...localizedBlog, desc: manifestArticle.desc || localizedBlog.desc } : localizedBlog)
  };
}

function getToolPageContent(slug) {
  return TOOL_PAGE_CONTENT[slug] || null;
}

function getArticlePageContent(slug) {
  return ARTICLE_PAGE_CONTENT[slug] || null;
}

function renderRelatedTools(req, relatedSlugs = []) {
  return relatedSlugs
    .filter((relatedSlug) => relatedSlug !== getRouteSlug(req) && toolBySlug.has(relatedSlug))
    .map((relatedSlug) => `<a class="related-tool-link" href="${localizedPath(req.lang, `/${relatedSlug}`)}">${escapeHtml(getLocalizedTool(req, relatedSlug).title)}</a>`)
    .join("");
}

function renderToolFaqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a }
    }))
  };
}

function renderToolSidebar(req, tool, content) {
  const related = renderRelatedTools(req, content.related || []);
  return `<aside class="sidebar-stack" aria-label="${escapeHtml(t(req, "toolAsideAria", { tool: tool.title, toolLower: tool.title.toLowerCase() }))}">
    <section class="panel">
      <div class="panel-head"><div><h2 class="panel-title">Como usar</h2><p class="panel-copy">Passo a passo curto para usar ${escapeHtml(tool.title)} com mais segurança e contexto.</p></div></div>
      <div class="panel-body"><ol class="tool-info-list">${content.howTo.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol></div>
    </section>
    <section class="panel">
      <div class="panel-head"><div><h2 class="panel-title">Exemplo antes e depois</h2><p class="panel-copy">Veja um caso simples do tipo de transformação entregue pela ferramenta.</p></div></div>
      <div class="panel-body"><div class="example"><strong>Antes</strong><br>${escapeHtml(content.before || "-")}</div><div class="example mt-3"><strong>Depois</strong><br>${escapeHtml(content.after || "-")}</div></div>
    </section>
    <section class="panel">
      <div class="panel-head"><div><h2 class="panel-title">Casos de uso reais</h2><p class="panel-copy">Situações em que esta ferramenta costuma poupar tempo no trabalho diário.</p></div></div>
      <div class="panel-body"><ul class="list-unstyled mb-0">${content.useCases.map((item) => `<li class="mb-2">${escapeHtml(item)}</li>`).join("")}</ul></div>
    </section>
    <section class="panel">
      <div class="panel-head"><div><h2 class="panel-title">Erros comuns</h2><p class="panel-copy">Revise estes pontos antes de usar o resultado em produção ou publicação.</p></div></div>
      <div class="panel-body"><ul class="list-unstyled mb-0">${content.mistakes.map((item) => `<li class="mb-2">${escapeHtml(item)}</li>`).join("")}</ul></div>
    </section>
    <section class="panel">
      <div class="panel-head"><div><h2 class="panel-title">Ferramentas relacionadas</h2><p class="panel-copy">Aprofunde a mesma tarefa com páginas coerentes com este fluxo.</p></div></div>
      <div class="panel-body"><div class="related-tools-grid">${related}</div></div>
    </section>
  </aside>`;
}

function renderToolFaqHtml(items) {
  return `<section class="panel mt-4"><div class="panel-head"><div><h2 class="panel-title">Perguntas frequentes</h2></div></div><div class="panel-body">${items.map(([q, a]) => `<div itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question"><h3 itemprop="name">${escapeHtml(q)}</h3><div itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer"><p itemprop="text">${escapeHtml(a)}</p></div></div>`).join("")}</div></section>`;
}

function renderArticleHtml(req, article, content) {
  const relatedTool = getLocalizedTool(req, content.relatedTool);
  return `<article class="panel" id="main-content"><div class="panel-body article-content"><p class="page-eyebrow">Guia editorial do ConvertTextEasy</p><h1 class="page-title">${escapeHtml(article.title)}</h1><p class="page-description">${escapeHtml(article.desc || "")}</p><p><strong>Atualizado em:</strong> ${escapeHtml(content.updatedAt)}</p><p><strong>Por:</strong> ${escapeHtml(EDITORIAL_AUTHOR)}</p><p>${escapeHtml(content.intro)}</p>${content.sections.map(([heading, paragraphs]) => `<h2>${escapeHtml(heading)}</h2>${paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}`).join("")}<div class="tool-callout"><h2>Ferramenta relacionada</h2><p>Para aplicar este assunto na prática, use ${escapeHtml(relatedTool.title)} diretamente no navegador.</p><a class="badge-conversion badge-conversion-primary text-decoration-none" href="${localizedPath(req.lang, `/${content.relatedTool}`)}" aria-label="Abrir ferramenta ${escapeHtml(relatedTool.title)}"><span>Go</span>Abrir ferramenta</a></div></div></article>`;
}

app.use((req, res, next) => {
  if (req.path === '/assets' || req.path.startsWith('/assets/')) return next();
  if (/^\/sitemap(?:-[a-z]+)?\.xml$/.test(req.path) || ["/robots.txt", "/ads.txt", "/site.webmanifest"].includes(req.path)) return next();

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

  const shouldRedirectMethod = req.method === "GET" || req.method === "HEAD";

  if (shouldRedirectMethod && !req.langPrefix) {
    const detectedLocale = detectRequestLocale(req);
    res.setHeader('Content-Language', detectedLocale);
    const legacyToolMatch = req.routePath.match(/^\/tools\/([^/]+)$/);
    if (legacyToolMatch && legacyToolRoutes[legacyToolMatch[1]]) {
      return res.redirect(301, localizedPath(detectedLocale, legacyToolRoutes[legacyToolMatch[1]]));
    }

    return res.redirect(301, localizedPath(detectedLocale, req.routePath));
  }

  if (shouldRedirectMethod && req.originalUrl === `/${req.lang}`) {
    return res.redirect(301, `/${req.lang}/`);
  }

  if (shouldRedirectMethod && req.langPrefix) {
    const originalPath = req.originalUrl.split("?")[0];
    const expectedPath = localizedPath(req.lang, req.routePath);
    if (originalPath !== expectedPath && originalPath !== `/${req.lang}`) {
      const query = req.originalUrl.includes("?") ? `?${req.originalUrl.split("?").slice(1).join("?")}` : "";
      return res.redirect(301, `${expectedPath}${query}`);
    }
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

function insertBeforeHeadEnd(html, markup) {
  return html.includes("</head>") ? html.replace("</head>", `${markup}</head>`) : html;
}

function upsertMeta(html, selector, markup) {
  return selector.test(html) ? html.replace(selector, markup) : insertBeforeHeadEnd(html, `${markup}\n`);
}

function buildBreadcrumbItems(req) {
  const routePath = req.routePath || "/";
  const content = localizedContentForRoute(req);
  const items = [
    { "@type": "ListItem", position: 1, name: t(req, "breadcrumbHome") || "Home", item: localizedUrl(req.lang, "/") }
  ];

  if (routePath === "/") return items;
  if (routePath === "/blog" || routePath.startsWith("/blog/")) {
    items.push({ "@type": "ListItem", position: 2, name: t(req, "breadcrumbBlog") || "Blog", item: localizedUrl(req.lang, "/blog") });
    if (routePath.startsWith("/blog/")) {
      items.push({ "@type": "ListItem", position: 3, name: content.title, item: localizedUrl(req.lang, routePath) });
    }
    return items;
  }

  if (routeType(req) === "tool") {
    items.push({ "@type": "ListItem", position: 2, name: t(req, "breadcrumbTools") || "Tools", item: localizedUrl(req.lang, "/") + "#ferramentas" });
    items.push({ "@type": "ListItem", position: 3, name: content.title, item: localizedUrl(req.lang, routePath) });
    return items;
  }

  items.push({ "@type": "ListItem", position: 2, name: content.title, item: localizedUrl(req.lang, routePath) });
  return items;
}

function buildStructuredData(req) {
  const routePath = req.routePath || "/";
  const type = routeType(req);
  const seo = localizedSeoForRoute(req);
  const content = localizedContentForRoute(req);
  const base = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteOrigin}/#organization`,
      name: BRAND_NAME,
      alternateName: ["Convert Text Easy", "ConvertTextEasy.com"],
      url: siteOrigin,
      logo: {
        "@type": "ImageObject",
        url: logoUrl
      },
      ...(sameAsLinks.length ? { sameAs: sameAsLinks } : {}),
      description: seo.desc
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteOrigin}/#website`,
      name: BRAND_NAME,
      alternateName: "Convert Text Easy",
      url: localizedUrl(req.lang, "/"),
      inLanguage: req.localeData?.meta?.locale || "en-US",
      publisher: { "@id": `${siteOrigin}/#organization` },
      description: seo.desc,
      potentialAction: {
        "@type": "SearchAction",
        target: `${localizedUrl(req.lang, "/")}?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: buildBreadcrumbItems(req)
    }
  ];

  if (type === "tool") {
    const slug = getRouteSlug(req);
    const tool = getLocalizedTool(req, slug);
    base.push({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: `${tool.title} - ${BRAND_NAME}`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      url: localizedUrl(req.lang, routePath),
      description: tool.desc,
      isAccessibleForFree: true,
      publisher: { "@id": `${siteOrigin}/#organization` },
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }
    });
  } else if (type === "article") {
    const articleContent = getArticlePageContent(getRouteSlug(req));
    base.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: content.title,
      description: content.desc,
      datePublished: "2026-05-07",
      dateModified: articleContent?.updatedAt || new Date().toISOString().slice(0, 10),
      author: { "@type": "Person", name: EDITORIAL_AUTHOR },
      publisher: { "@id": `${siteOrigin}/#organization` },
      mainEntityOfPage: localizedUrl(req.lang, routePath),
      inLanguage: req.localeData?.meta?.locale || "en-US"
    });
  } else {
    base.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: type === "home" ? BRAND_NAME : content.title,
      url: localizedUrl(req.lang, routePath),
      description: seo.desc,
      isPartOf: { "@id": `${siteOrigin}/#website` },
      publisher: { "@id": `${siteOrigin}/#organization` },
      inLanguage: req.localeData?.meta?.locale || "en-US"
    });
  }

  return base.map((schema) => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`).join("");
}

function injectLocaleSeo(html, req) {
  const localeData = req.localeData || getLocaleData(DEFAULT_LOCALE);
  const meta = localeData.meta || {};
  const seo = localizedSeoForRoute(req);
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

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(seo.title)}</title>`);
  html = upsertMeta(html, /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${escapeHtml(seo.desc)}">`);
  html = upsertMeta(html, /<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/i, `<meta name="keywords" content="${BRAND_NAME}, Convert Text Easy, online text tools, text converter, developer tools, SEO tools">`);
  html = upsertMeta(html, /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/i, `<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">`);
  html = upsertMeta(html, /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${escapeHtml(seo.title)}">`);
  html = upsertMeta(html, /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${escapeHtml(seo.desc)}">`);
  html = upsertMeta(html, /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:type" content="${seo.ogType}">`);
  html = upsertMeta(html, /<meta\s+property="og:site_name"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:site_name" content="${BRAND_NAME}">`);
  html = upsertMeta(html, /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:image" content="${logoUrl}">`);
  html = upsertMeta(html, /<meta\s+name="twitter:card"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:card" content="summary_large_image">`);
  html = upsertMeta(html, /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:title" content="${escapeHtml(seo.title)}">`);
  html = upsertMeta(html, /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:description" content="${escapeHtml(seo.desc)}">`);
  html = upsertMeta(html, /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:image" content="${logoUrl}">`);

  html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${canonicalUrl}">`);
  html = html.replace(/<link\s+rel="alternate"\s+hreflang="[^"]+"\s+href="[^"]*"\s*\/?>/gi, "");
  html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i, (match) => `${match}${alternateLinks}`);
  html = upsertMeta(html, /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="${canonicalUrl}">`);
  html = upsertMeta(html, /<meta\s+property="og:locale"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:locale" content="${escapeHtml(meta.ogLocale || "en_US")}">`);
  html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, "");
  html = insertBeforeHeadEnd(html, [
    `<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>`,
    `<link rel="preconnect" href="https://pagead2.googlesyndication.com" crossorigin>`,
    `<link rel="preload" as="image" href="${logoUrl}">`,
    `<link rel="manifest" href="/site.webmanifest">`,
    process.env.GOOGLE_SITE_VERIFICATION ? `<meta name="google-site-verification" content="${escapeHtml(process.env.GOOGLE_SITE_VERIFICATION)}">` : "",
    process.env.BING_SITE_VERIFICATION ? `<meta name="msvalidate.01" content="${escapeHtml(process.env.BING_SITE_VERIFICATION)}">` : "",
    process.env.GA_MEASUREMENT_ID ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${escapeHtml(process.env.GA_MEASUREMENT_ID)}"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${escapeHtml(process.env.GA_MEASUREMENT_ID)}');</script>` : "",
    buildStructuredData(req)
  ].filter(Boolean).join(""));

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

  const attributeOnlyIds = new Set(["mobileMenuBtn", "btnCopy", "btnClear", "btnShare", "btnDownload"]);
  for (const [key, value] of Object.entries(common)) {
    if (attributeOnlyIds.has(key)) continue;
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
  const content = req.lang === "pt" ? getToolPageContent(slug) : null;
  if (!content) return html;
  const vars = { tool: tool.title, toolLower: tool.title.toLowerCase() };

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
  html = html.replace(/<aside class="sidebar-stack"[\s\S]*?<\/aside>/, renderToolSidebar(req, tool, content));

  const faqItems = content.faq;
  html = html.replace(/<section class="panel mt-4">[\s\S]*?<\/section>/, renderToolFaqHtml(faqItems));

  const faqSchema = renderToolFaqSchema(faqItems);
  html = html.replace(/<script type="application\/ld\+json">\{"@context":"https:\/\/schema\.org","@type":"FAQPage"[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`);

  html = html.replace(/(<p class="page-description"[^>]*>)([\s\S]*?)(<\/p>)/i, `$1${escapeHtml(tool.desc)}$3`);
  html = html.replace(/(<section class="panel hero-panel">[\s\S]*?<div class="panel-body">)/, `$1<div class="page-eyebrow">Ferramenta específica</div>`);
  html = html.replace(/(<section class="panel hero-panel">[\s\S]*?<p class="page-description"[^>]*>[\s\S]*?<\/p>)/, `$1<p>${escapeHtml(content.intro)}</p>`);

  return html;
}

function translateBlogPage(html, req) {
  const slug = getRouteSlug(req);
  if (!slug || !articleBySlug.has(slug)) return html;
  const content = req.lang === "pt" ? getArticlePageContent(slug) : null;
  if (!content) return html;

  const article = getLocalizedBlog(req, slug);
  const fallbackArticle = articleBySlug.get(slug) || {};
  const articleHtml = renderArticleHtml(req, {
    ...fallbackArticle,
    ...article,
    title: article.title || fallbackArticle.title,
    desc: article.desc || fallbackArticle.desc
  }, content);
  return html.replace(/<article class="panel" id="main-content">[\s\S]*?<\/article>/, articleHtml);
}

function translateStaticPage(html, req) {
  if (["home", "blogIndex", "article", "tool"].includes(routeType(req))) return html;
  const slug = getRouteSlug(req) || "404";
  const richPage = req.lang === "pt" ? STATIC_PAGE_CONTENT[slug] : null;
  const fallbackPages = getLocaleData(DEFAULT_LOCALE)?.pages || {};
  const page = req.localeData?.pages?.[slug] || fallbackPages[slug];
  if (!page) return html;

  const pageTitle = richPage?.title || page.title;
  const pageDesc = richPage?.desc || page.desc;

  html = html.replace(/(<h1 class="page-title">)([\s\S]*?)(<\/h1>)/, `$1${escapeHtml(pageTitle)}$3`);
  html = html.replace(/(<p class="page-description">)([\s\S]*?)(<\/p>)/, `$1${escapeHtml(pageDesc)}$3`);
  html = html.replace(/(<span aria-current="page"[^>]*>)([\s\S]*?)(<\/span>)/, `$1${escapeHtml(pageTitle)}$3`);
  html = html.replace(/("name"\s*:\s*")[^"]*(")/, `$1${escapeHtml(pageTitle)}$2`);
  html = html.replace(/("description"\s*:\s*")[^"]*(")/, `$1${escapeHtml(pageDesc)}$2`);
  html = html.replace(/("position":\s*1,\s*"name":\s*")[^"]*(")/, `$1${escapeHtml(t(req, "breadcrumbHome"))}$2`);
  html = html.replace(/("position":\s*2,\s*"name":\s*")[^"]*(")/, `$1${escapeHtml(pageTitle)}$2`);

  const sections = richPage?.sections || page.sections.slice(1);
  const leadTitle = richPage?.leadTitle || page.sections[0]?.[0] || pageTitle;
  const leadCopy = richPage?.leadCopy || page.sections[0]?.[1] || pageDesc;
  const mainContent = `<main id="main-content" class="content-grid mt-4"><section class="panel editor-card"><div class="panel-head"><div><h2 class="panel-title">${escapeHtml(leadTitle)}</h2><p class="panel-copy">${escapeHtml(leadCopy)}</p></div></div><div class="panel-body">${sections.map(([heading, body]) => `<h3 class="mt-4">${escapeHtml(heading)}</h3><p>${escapeHtml(body)}</p>`).join("")}</div></section><aside class="sidebar-stack" aria-label="${escapeHtml(t(req, "sidebarMoreTools"))}"><section class="panel"><div class="panel-head"><div><h2 class="panel-title">Confiança e navegação</h2><p class="panel-copy">Páginas públicas e ferramentas centrais para conhecer melhor o projeto.</p></div></div><div class="panel-body"><ul class="list-unstyled small mb-0"><li class="mb-2"><a href="${localizedPath(req.lang, "/")}" class="text-decoration-none">${escapeHtml(t(req, "footerHome"))}</a></li><li class="mb-2"><a href="${localizedPath(req.lang, "/about")}" class="text-decoration-none">Sobre</a></li><li class="mb-2"><a href="${localizedPath(req.lang, "/privacy-policy")}" class="text-decoration-none">Privacidade</a></li><li class="mb-2"><a href="${localizedPath(req.lang, "/terms")}" class="text-decoration-none">Termos</a></li><li class="mb-2"><a href="${localizedPath(req.lang, "/blog")}" class="text-decoration-none">${escapeHtml(t(req, "drawerBlog"))}</a></li><li><a href="${localizedPath(req.lang, "/contact")}" class="text-decoration-none">${escapeHtml(t(req, "pageContact"))}</a></li></ul></div></section></aside></main>`;
  return html.replace(/<main id="main-content" class="content-grid mt-4">[\s\S]*?<\/main>/, mainContent);
}

function enhanceHomePage(html, req) {
  if ((req.routePath || "/") !== "/") return html;

  const brandBlock = `<section class="panel mt-4 brand-seo-section"><div class="panel-head"><div><h2 class="panel-title">${escapeHtml(t(req, "brandSeoSectionTitle"))}</h2><p class="panel-copy">${escapeHtml(t(req, "brandSeoSectionLead"))}</p></div></div><div class="panel-body"><p>${escapeHtml(t(req, "brandSeoSectionCopy1"))}</p><p>${escapeHtml(t(req, "brandSeoSectionCopy2"))}</p></div></section>`;
  const faqItems = [
    [t(req, "homeFaqQ1"), t(req, "homeFaqA1")],
    [t(req, "homeFaqQ2"), t(req, "homeFaqA2")],
    [t(req, "homeFaqQ3"), t(req, "homeFaqA3")]
  ];
  const faqBlock = `<section class="panel mt-4 home-faq-section"><div class="panel-head"><div><h2 class="panel-title">${escapeHtml(t(req, "homeFaqTitle"))}</h2></div></div><div class="panel-body">${faqItems.map(([q, a]) => `<div class="faq-item"><h3>${escapeHtml(q)}</h3><p>${escapeHtml(a)}</p></div>`).join("")}</div></section>`;

  if (!html.includes("brand-seo-section")) {
    html = html.replace(/(<footer class="footer" role="contentinfo">)/, `${brandBlock}${faqBlock}$1`);
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a }
    }))
  };
  return insertBeforeHeadEnd(html, `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`);
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
        .replace(/onchange="changeLang\(this\.value\)"/g, 'onchange="switchLocale(this.value)"')
        .replace(/<script src="([^"]*assets\/js\/script\.js[^"]*)"><\/script>/g, '<script src="$1" defer></script>');
      html = injectLocaleSeo(html, req);
      html = applyServerTranslations(html, req);
      html = translateChrome(html, req);
      html = translateListingCards(html, req);
      html = translateToolPage(html, req);
      html = translateBlogPage(html, req);
      html = translateStaticPage(html, req);
      html = enhanceHomePage(html, req);
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
const staticPageSlugs = ["about", "contact", "privacy-policy", "terms"];

function sendXml(res, xml) {
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600");
  return res.send(xml);
}

function sitemapUrlEntry(routePath, priority, changefreq) {
  const alternates = SUPPORTED_LOCALES
    .map((locale) => `<xhtml:link rel="alternate" hreflang="${locale}" href="${localizedUrl(locale, routePath)}"/>`)
    .concat(`<xhtml:link rel="alternate" hreflang="x-default" href="${localizedUrl(DEFAULT_LOCALE, routePath)}"/>`)
    .join("");
  return `<url><loc>${localizedUrl(DEFAULT_LOCALE, routePath)}</loc>${alternates}<lastmod>${new Date().toISOString().slice(0, 10)}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
}

function buildUrlSet(routePaths, priority, changefreq) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${routePaths.map((routePath) => sitemapUrlEntry(routePath, priority, changefreq)).join("")}</urlset>`;
}

function buildSitemapIndex() {
  const today = new Date().toISOString().slice(0, 10);
  const sitemaps = ["/sitemap-pages.xml", "/sitemap-tools.xml", "/sitemap-blog.xml"];
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemaps.map((sitemap) => `<sitemap><loc>${new URL(sitemap, siteOrigin)}</loc><lastmod>${today}</lastmod></sitemap>`).join("")}</sitemapindex>`;
}

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

app.get("/sitemap.xml", (req, res) => sendXml(res, buildSitemapIndex()));
app.get("/sitemap-pages.xml", (req, res) => sendXml(res, buildUrlSet(["/", "/blog", ...staticPageSlugs.map((slug) => `/${slug}`)], "0.9", "weekly")));
app.get("/sitemap-tools.xml", (req, res) => sendXml(res, buildUrlSet(tools.map((tool) => `/${tool.slug}`), "0.8", "weekly")));
app.get("/sitemap-blog.xml", (req, res) => sendXml(res, buildUrlSet(articles.map((article) => `/blog/${article.slug}`), "0.7", "monthly")));
app.get("/robots.txt", (req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600");
  return res.send([
    "User-agent: *",
    "Allow: /",
    "Allow: /ads.txt",
    `Sitemap: ${new URL("/sitemap.xml", siteOrigin)}`
  ].join("\n"));
});
app.get("/site.webmanifest", (req, res) => {
  res.setHeader("Content-Type", "application/manifest+json; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600");
  return res.json({
    name: "ConvertTextEasy",
    short_name: "ConvertTextEasy",
    description: "Free online text tools for conversion, formatting, developer utilities, and SEO workflows.",
    start_url: localizedPath(DEFAULT_LOCALE, "/"),
    scope: "/",
    display: "standalone",
    background_color: "#07111f",
    theme_color: "#07111f",
    icons: [
      { src: "/assets/img/iconeTextLab.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/assets/img/iconeTextLab.png", sizes: "512x512", type: "image/png", purpose: "any" }
    ]
  });
});
app.get("/ads.txt", (req, res) => sendCompressedFile(req, res, path.join(publicDir, "ads.txt")));

app.post("/api/feedback", feedbackRateLimiter, async (req, res) => {
  const pool = getDbPool();
  const parsedFeedback = feedbackSchema.safeParse(req.body || {});

  if (!parsedFeedback.success) {
    console.error("Payload de feedback invalido:", parsedFeedback.error.flatten());
    return res.status(400).json(buildFeedbackValidationResponse(req, parsedFeedback.error));
  }

  const feedback = parsedFeedback.data;
  const requestIp = getRequestIp(req);
  const language = normalizeLocale(feedback.language) || normalizeLocale(req.lang) || DEFAULT_LOCALE;
  const userAgent = sanitizeOptionalFeedbackText(req.get("user-agent"), 500) || null;

  if (feedback.website) {
    return res.status(200).json({
      success: true,
      message: getFeedbackApiMessage(req, "success")
    });
  }

  if (feedback.started_at && Date.now() - feedback.started_at < FEEDBACK_MIN_FILL_MS) {
    return res.status(400).json({
      success: false,
      message: getFeedbackApiMessage(req, "invalidSubmission")
    });
  }

  if (TURNSTILE_ENABLED && !feedback.turnstile_token) {
    return res.status(400).json({
      success: false,
      message: getFeedbackApiMessage(req, "invalidSubmission")
    });
  }

  if (TURNSTILE_ENABLED) {
    const isTurnstileValid = await validateTurnstileToken(feedback.turnstile_token, requestIp);
    if (!isTurnstileValid) {
      return res.status(400).json({
        success: false,
        message: getFeedbackApiMessage(req, "invalidSubmission")
      });
    }
  }

  if (!isDatabaseConfigured() || !pool) {
    console.error("Erro ao salvar feedback: configuracao do banco ausente.");
    return res.status(503).json({
      success: false,
      message: getFeedbackApiMessage(req, "unavailable")
    });
  }

  try {
    await pool.query(
      `
        INSERT INTO community_feedback (
          name,
          email,
          rating,
          feedback_type,
          message,
          page_url,
          language,
          user_agent,
          ip_address,
          status
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, 'new')
      `,
      [
        feedback.name || null,
        feedback.email || null,
        feedback.rating || null,
        feedback.feedback_type,
        feedback.message,
        feedback.page_url || null,
        language,
        userAgent,
        requestIp
      ]
    );

    return res.status(201).json({
      success: true,
      message: getFeedbackApiMessage(req, "success")
    });
  } catch (error) {
    console.error("Erro ao salvar feedback:", error);

    return res.status(500).json({
      success: false,
      message: getFeedbackApiMessage(req, "unavailable")
    });
  }
});

app.get("/:slug", (req, res, next) => {
  const pageRoutes = new Map(staticPageSlugs.map((slug) => [slug, path.join(publicDir, "pages", `${slug}.html`)]));

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

app.use((error, req, res, next) => {
  if (!req.path.startsWith("/api/feedback")) return next(error);

  console.error("Erro ao processar requisicao de feedback:", error);

  return res.status(error?.status === 413 ? 413 : 400).json({
    success: false,
    message: getFeedbackApiMessage(req, "invalidSubmission")
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor rodando em http://127.0.0.1:${process.env.PORT || 3000}`);
});
