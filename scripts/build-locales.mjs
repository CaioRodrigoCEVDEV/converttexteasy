import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const SCRIPT_PATH = path.join(ROOT, 'public', 'assets', 'js', 'script.js');
const LOCALES_DIR = path.join(ROOT, 'src', 'locales');

fs.mkdirSync(LOCALES_DIR, { recursive: true });

const source = fs.readFileSync(SCRIPT_PATH, 'utf8');

function extractObjectLiteral(str, startIdx) {
  let depth = 0;
  let start = -1;
  for (let i = startIdx; i < str.length; i++) {
    if (str[i] === '{') {
      if (depth === 0) start = i;
      depth++;
    } else if (str[i] === '}') {
      depth--;
      if (depth === 0 && start >= 0) return str.slice(start, i + 1);
    }
  }
  throw new Error('Matching brace not found');
}

function findConst(name) {
  const re = new RegExp(`(?:const|var|let)\\s+${name}\\s*=\\s*`);
  const m = source.match(re);
  if (!m) return null;
  return extractObjectLiteral(source, m.index + m[0].length);
}

function safeEval(code) {
  return new Function(`"use strict"; return (${code})`)();
}

const rawTranslations = findConst('translations');
const rawToolCardTitles = findConst('toolCardTitles');
const rawToolCardDescs = findConst('toolCardDescs');
const rawBlogCardTitles = findConst('blogCardTitles');

const reSingleObj = /const\s+readArticleText\s*=\s*(\{[\s\S]*?\});/;
const readArticleMatch = source.match(reSingleObj);
const readArticleText = readArticleMatch ? safeEval(readArticleMatch[1]) : {};

if (!rawTranslations) {
  console.error('Could not find translations const');
  process.exit(1);
}

const translations = safeEval(rawTranslations);
const toolCardTitles = rawToolCardTitles ? safeEval(rawToolCardTitles) : {};
const toolCardDescs = rawToolCardDescs ? safeEval(rawToolCardDescs) : {};
const blogCardTitles = rawBlogCardTitles ? safeEval(rawBlogCardTitles) : {};

const LANGUAGES = ['pt', 'en', 'es', 'fr', 'de', 'it', 'zh', 'ja', 'ru', 'ar'];
const LANG_META = {
  pt: { locale: 'pt-BR', ogLocale: 'pt_BR', dir: 'ltr', name: 'Portugu\u00eas' },
  en: { locale: 'en-US', ogLocale: 'en_US', dir: 'ltr', name: 'English' },
  es: { locale: 'es-ES', ogLocale: 'es_ES', dir: 'ltr', name: 'Espa\u00f1ol' },
  fr: { locale: 'fr-FR', ogLocale: 'fr_FR', dir: 'ltr', name: 'Fran\u00e7ais' },
  de: { locale: 'de-DE', ogLocale: 'de_DE', dir: 'ltr', name: 'Deutsch' },
  it: { locale: 'it-IT', ogLocale: 'it_IT', dir: 'ltr', name: 'Italiano' },
  zh: { locale: 'zh-CN', ogLocale: 'zh_CN', dir: 'ltr', name: '\u4e2d\u6587' },
  ja: { locale: 'ja-JP', ogLocale: 'ja_JP', dir: 'ltr', name: '\u65e5\u672c\u8a9e' },
  ru: { locale: 'ru-RU', ogLocale: 'ru_RU', dir: 'ltr', name: '\u0420\u0443\u0441\u0441\u043a\u0438\u0439' },
  ar: { locale: 'ar-SA', ogLocale: 'ar_SA', dir: 'rtl', name: '\u0627\u0644\u0639\u0631\u0628\u064a\u0629' }
};

for (const lang of LANGUAGES) {
  const outPath = path.join(LOCALES_DIR, `${lang}.json`);
  let existing = {};
  if (fs.existsSync(outPath)) {
    existing = JSON.parse(fs.readFileSync(outPath, 'utf8'));
  }

  const common = translations[lang] || {};
  const meta = LANG_META[lang];

  const tools = {};
  for (const [slug, obj] of Object.entries(toolCardTitles)) {
    tools[slug] = {
      title: obj[lang] || '',
      desc: toolCardDescs[slug]?.[lang] || ''
    };
  }

  const blogs = {};
  for (const [slug, obj] of Object.entries(blogCardTitles)) {
    blogs[slug] = {
      title: obj[lang] || ''
    };
  }

  const localeData = {
    ...existing,
    meta,
    common: {
      ...(existing.common || {}),
      ...common
    },
    tools: Object.fromEntries(Object.entries(tools).map(([slug, value]) => [
      slug,
      {
        ...(existing.tools?.[slug] || {}),
        ...value
      }
    ])),
    blogs: Object.fromEntries(Object.entries(blogs).map(([slug, value]) => [
      slug,
      {
        ...(existing.blogs?.[slug] || {}),
        ...value
      }
    ])),
    readArticle: readArticleText[lang] || ''
  };

  fs.writeFileSync(outPath, JSON.stringify(localeData, null, 2) + '\n');
  console.log(`Created ${outPath}`);
}

console.log(`Generated ${LANGUAGES.length} locale files in ${LOCALES_DIR}`);
