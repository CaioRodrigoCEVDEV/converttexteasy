function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.setAttribute('data-bs-theme', theme);

  if (document.body) {
    document.body.setAttribute('data-theme', theme);
    document.body.setAttribute('data-bs-theme', theme);
  }

  updateThemeIcon(theme);
}

// Detect system theme preference
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');

  if (!icon) return;

  icon.textContent = theme === 'dark' ? '🌙' : '☀️';
}

const translations = {
  pt: {
    pageTitle: "Conversor de Texto Online",
    desc: "Converta textos online gratuitamente.",
    brandSubtitle: "Converter letras maiúsculas e minúsculas online grátis.",
    theme: "Tema",
    editorPanelTitle: "Editor",
    editorPanelCopy: "Cole seu texto, converta no formato desejado e siga trabalhando sem sair da página.",
    mainTitle: "Conversor de Texto",
    subtitle: "Transforme textos rapidamente",
    input: "Digite seu texto...",
    share: "Compartilhar",
    download: "Baixar texto",
    charCountLabel: "Contagem de letras",
    wordCountLabel: "Contagem de palavras",
    lineCountLabel: "Contagem de linhas",
    toolbarIntro: "Escolha uma das 8 funcionalidades abaixo para aplicar o formato diretamente no texto.",
    uppercaseToolbar: "Letras Maiusculas",
    lowercaseToolbar: "Letras Minusculas",
    strikethroughToolbar: "Texto Tachado",
    titleCaseToolbar: "Iniciais Maiusculas",
    reverseToolbarHome: "Texto Reverso",
    alternatingToolbar: "Alternancia",
    italicToolbar: "Texto Italico",
    morseToolbar: "Codigo Morse",
    summaryTitle: "Resumo",
    summaryCopy: "Uma interface unica para editar, transformar e revisar textos em segundos.",
    featureTitle1: "Conversao instantanea",
    featureDesc1: "Os formatos sao aplicados direto no editor sem etapas extras.",
    featureTitle2: "Idiomas prontos",
    featureDesc2: "Portugues, ingles e espanhol na mesma interface.",
    featureTitle3: "Fluxo simples",
    featureDesc3: "Copiar, limpar e revisar metricas sem sair do bloco principal.",
    tipsPanelTitle: "Dicas rapidas",
    tipsPanelCopy: "Atalhos visuais para manter o texto consistente.",
    tipTitle1: "Padronize titulos",
    tipDesc1: "Use ConvertTextEasy para cabecalhos, secoes e chamadas principais.",
    tipTitle2: "Limpe textos colados",
    tipDesc2: "Normalize caixa, remova ruido visual e recopie ja tratado.",
    upper: "MAIÚSCULO",
    lower: "minúsculo",
    sentence: "Sentence Case",
    titleCase: "Texto Título",
    alternating: "Alternating Case",
    reverse: "Reverse Text",
    camelToolbar: "Formato Titulo",
    reverseToolbar: "iNvErSo",
    mirror: "Mirror Text",
    accent: "Remover acentos",
    copy: "Copiar",
    clear: "Limpar",
    sectionBasicTitle: "Casos Básicos",
    sectionBasicDesc: "Transforme o texto em maiúsculo ou minúsculo, ou aplique casos simples para padronização.",
    sectionAdvancedTitle: "Casos Avançados",
    sectionAdvancedDesc: "Alternâncias criativas e estilos de programação para textos dinâmicos.",
    sectionTransformTitle: "Transformações de Texto",
    sectionTransformDesc: "Inverta, espelhe ou remova acentos para efeitos visuais e limpeza.",
    sectionActionsTitle: "Ações",
    sectionActionsDesc: "Copie o resultado ou limpe os campos para começar de novo.",
    seoTitle: "O que é um conversor de texto?",
    seoText: "Ferramenta online para transformar textos em diferentes formatos.",
    toolTitle1: "🔡 Letras Minusculas",
    toolDesc1: "Converta todo o texto para minusculas.",
    toolTitle2: "🔠 Letras Maiusculas",
    toolDesc2: "Converta todo o texto para maiusculas.",
    toolTitle3: "🔤 Texto Tachado",
    toolDesc3: "Gere texto riscado automaticamente.",
    toolTitle4: "📝 Iniciais Maiúsculas",
    toolDesc4: "Primeira letra de cada palavra em maiúsculo.",
    toolTitle5: "🔄 Texto Reverso",
    toolDesc5: "Inverta seu texto.",
    toolTitle6: "🔀 Alternância",
    toolDesc6: "Alterna letras maiúsculas e minúsculas.",
    toolTitle7: "📜 Texto Itálico",
    toolDesc7: "Gera texto estilizado em itálico.",
    toolTitle8: "💻 Código Morse",
    toolDesc8: "Traduza texto para código Morse.",
    sidebarTools: "🛠️ Ferramentas",
    sidebarConverter: "📝 Conversor de Texto",
    sidebarAbout: "ℹ️ Sobre",
    sidebarMoreTools: "🔧 Mais Ferramentas",
    sidebarContact: "📧 Contato",
    sidebarFeatures: "Funcionalidades",
    footerTitle: "Conversor de Texto Online",
    footerBrandSubtitle: "Conversor de Texto",
    footerDesc: "Ferramenta gratuita para transformar textos em diferentes formatos. Suporte a múltiplos idiomas e temas.",
    footerLinks: "Links Úteis",
    footerHome: "Pagina Inicial",
    footerTool1: "Texto Tachado",
    footerTool2: "Iniciais Maiusculas",
    footerTool3: "Texto Reverso",
    footerPrivacy: "Política de Privacidade",
    footerTerms: "Termos de Uso",
    footerAbout: "Sobre Nós",
    footerContact: "Contato",
    footerCopyright: "© 2026 Conversor de Texto Online. Todos os direitos reservados.",
    newsletterTitle: "Fique Atualizado",
    newsletterCopy: "Receba dicas e novas ferramentas por email.",
    newsletterPlaceholder: "Seu email",
    newsletterButton: "Inscrever"
  },

  en: {
    pageTitle: "Text Converter Online",
    desc: "Convert text online for free.",
    brandSubtitle: "Convert uppercase and lowercase letters online for free.",
    theme: "Theme",
    editorPanelTitle: "Editor",
    editorPanelCopy: "Paste your text, convert it to the format you want, and keep working without leaving the page.",
    mainTitle: "Text Converter",
    subtitle: "Transform your text instantly",
    input: "Type your text...",
    share: "Share",
    download: "Download text",
    charCountLabel: "Character count",
    wordCountLabel: "Word count",
    lineCountLabel: "Line count",
    toolbarIntro: "Choose one of the 8 features below to apply the format directly to the text.",
    uppercaseToolbar: "Uppercase Letters",
    lowercaseToolbar: "Lowercase Letters",
    strikethroughToolbar: "Strikethrough Text",
    titleCaseToolbar: "Title Case",
    reverseToolbarHome: "Reverse Text",
    alternatingToolbar: "Alternating Case",
    italicToolbar: "Italic Text",
    morseToolbar: "Morse Code",
    summaryTitle: "Summary",
    summaryCopy: "A single interface to edit, transform, and review text in seconds.",
    featureTitle1: "Instant conversion",
    featureDesc1: "Formats are applied directly in the editor with no extra steps.",
    featureTitle2: "Ready languages",
    featureDesc2: "Portuguese, English, and Spanish in the same interface.",
    featureTitle3: "Simple flow",
    featureDesc3: "Copy, clear, and review metrics without leaving the main block.",
    tipsPanelTitle: "Quick tips",
    tipsPanelCopy: "Visual shortcuts to keep your text consistent.",
    tipTitle1: "Standardize titles",
    tipDesc1: "Use ConvertTextEasy for headings, sections, and primary callouts.",
    tipTitle2: "Clean pasted text",
    tipDesc2: "Normalize casing, remove visual noise, and copy it back already cleaned.",
    upper: "UPPERCASE",
    lower: "lowercase",
    sentence: "Sentence Case",
    titleCase: "Title Case",
    alternating: "Alternating Case",
    reverse: "Reverse Text",
    camelToolbar: "Title Format",
    reverseToolbar: "InVeRsE",
    mirror: "Mirror Text",
    accent: "Remove accents",
    copy: "Copy",
    clear: "Clear",
    sectionBasicTitle: "Basic Cases",
    sectionBasicDesc: "Transform text to uppercase or lowercase, or apply simple cases for standardization.",
    sectionAdvancedTitle: "Advanced Cases",
    sectionAdvancedDesc: "Creative alternations and programming styles for dynamic texts.",
    sectionTransformTitle: "Text Transformations",
    sectionTransformDesc: "Reverse, mirror, or remove accents for visual effects and cleaning.",
    sectionActionsTitle: "Actions",
    sectionActionsDesc: "Copy the result or clear the fields to start over.",
    seoTitle: "What is a text converter?",
    seoText: "Online tool to transform text into different formats.",
    toolTitle1: "🔡 Lowercase Letters",
    toolDesc1: "Convert the entire text to lowercase.",
    toolTitle2: "🔠 Uppercase Letters",
    toolDesc2: "Convert the entire text to uppercase.",
    toolTitle3: "🔤 Strikethrough Text",
    toolDesc3: "Generate strikethrough text automatically.",
    toolTitle4: "📝 Title Case",
    toolDesc4: "Capitalize the first letter of each word.",
    toolTitle5: "🔄 Reverse Text",
    toolDesc5: "Reverse your text.",
    toolTitle6: "🔀 Alternating Case",
    toolDesc6: "Alternate uppercase and lowercase letters.",
    toolTitle7: "📜 Italic Text",
    toolDesc7: "Generate italic styled text.",
    toolTitle8: "💻 Morse Code",
    toolDesc8: "Translate text to Morse code.",
    sidebarTools: "🛠️ Tools",
    sidebarConverter: "📝 Text Converter",
    sidebarAbout: "ℹ️ About",
    sidebarMoreTools: "🔧 More Tools",
    sidebarContact: "📧 Contact",
    sidebarFeatures: "Features",
    footerTitle: "Text Converter Online",
    footerBrandSubtitle: "Text Converter",
    footerDesc: "Free tool to transform text into different formats. Support for multiple languages and themes.",
    footerLinks: "Useful Links",
    footerHome: "Home Page",
    footerTool1: "Strikethrough Text",
    footerTool2: "Title Case",
    footerTool3: "Reverse Text",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Use",
    footerAbout: "About Us",
    footerContact: "Contact",
    footerCopyright: "© 2026 Text Converter Online. All rights reserved.",
    newsletterTitle: "Stay Updated",
    newsletterCopy: "Receive tips and new tools by email.",
    newsletterPlaceholder: "Your email",
    newsletterButton: "Subscribe"
  },

  es: {
    pageTitle: "Convertidor de Texto Online",
    desc: "Convierte texto gratis.",
    brandSubtitle: "Convierte letras mayusculas y minusculas online gratis.",
    theme: "Tema",
    editorPanelTitle: "Editor",
    editorPanelCopy: "Pega tu texto, conviertelo al formato deseado y sigue trabajando sin salir de la pagina.",
    mainTitle: "Convertidor de Texto",
    subtitle: "Transforma tu texto rápido",
    input: "Escribe tu texto...",
    share: "Compartir",
    download: "Descargar texto",
    charCountLabel: "Conteo de caracteres",
    wordCountLabel: "Conteo de palabras",
    lineCountLabel: "Conteo de lineas",
    toolbarIntro: "Elige una de las 8 funcionalidades de abajo para aplicar el formato directamente al texto.",
    uppercaseToolbar: "Letras Mayusculas",
    lowercaseToolbar: "Letras Minusculas",
    strikethroughToolbar: "Texto Tachado",
    titleCaseToolbar: "Iniciales Mayusculas",
    reverseToolbarHome: "Texto Inverso",
    alternatingToolbar: "Alternancia",
    italicToolbar: "Texto Italico",
    morseToolbar: "Codigo Morse",
    summaryTitle: "Resumen",
    summaryCopy: "Una interfaz unica para editar, transformar y revisar textos en segundos.",
    featureTitle1: "Conversion instantanea",
    featureDesc1: "Los formatos se aplican directamente en el editor sin pasos extra.",
    featureTitle2: "Idiomas listos",
    featureDesc2: "Portugues, ingles y espanol en la misma interfaz.",
    featureTitle3: "Flujo simple",
    featureDesc3: "Copiar, limpiar y revisar metricas sin salir del bloque principal.",
    tipsPanelTitle: "Consejos rapidos",
    tipsPanelCopy: "Atajos visuales para mantener el texto consistente.",
    tipTitle1: "Estandariza titulos",
    tipDesc1: "Usa ConvertTextEasy para encabezados, secciones y llamados principales.",
    tipTitle2: "Limpia textos pegados",
    tipDesc2: "Normaliza mayusculas y minusculas, elimina ruido visual y vuelve a copiar el texto tratado.",
    upper: "MAYÚSCULAS",
    lower: "minúsculas",
    sentence: "Sentence Case",
    titleCase: "Title Case",
    alternating: "Alternating Case",
    reverse: "Reverse Text",
    camelToolbar: "Formato Titulo",
    reverseToolbar: "iNvErSo",
    mirror: "Mirror Text",
    accent: "Quitar acentos",
    copy: "Copiar",
    clear: "Limpiar",
    sectionBasicTitle: "Casos Básicos",
    sectionBasicDesc: "Transforma el texto en mayúsculas o minúsculas, o aplica casos simples para estandarización.",
    sectionAdvancedTitle: "Casos Avanzados",
    sectionAdvancedDesc: "Alternancias creativas y estilos de programación para textos dinámicos.",
    sectionTransformTitle: "Transformaciones de Texto",
    sectionTransformDesc: "Invierte, refleja o quita acentos para efectos visuales y limpieza.",
    sectionActionsTitle: "Acciones",
    sectionActionsDesc: "Copia el resultado o limpia los campos para empezar de nuevo.",
    seoTitle: "¿Qué es un convertidor de texto?",
    seoText: "Herramienta online para transformar texto.",
    toolTitle1: "🔡 Letras Minusculas",
    toolDesc1: "Convierte todo el texto a minusculas.",
    toolTitle2: "🔠 Letras Mayusculas",
    toolDesc2: "Convierte todo el texto a mayusculas.",
    toolTitle3: "🔤 Texto Tachado",
    toolDesc3: "Genera texto tachado automaticamente.",
    toolTitle4: "📝 Iniciales Mayusculas",
    toolDesc4: "Primera letra de cada palabra en mayuscula.",
    toolTitle5: "🔄 Texto Inverso",
    toolDesc5: "Invierte tu texto.",
    toolTitle6: "🔀 Alternancia",
    toolDesc6: "Alterna letras mayusculas y minusculas.",
    toolTitle7: "📜 Texto Italico",
    toolDesc7: "Genera texto estilizado en italico.",
    toolTitle8: "💻 Codigo Morse",
    toolDesc8: "Traduce texto a codigo Morse.",
    sidebarTools: "🛠️ Herramientas",
    sidebarConverter: "📝 Convertidor de Texto",
    sidebarAbout: "ℹ️ Acerca de",
    sidebarMoreTools: "🔧 Más Herramientas",
    sidebarContact: "📧 Contacto",
    sidebarFeatures: "Características",
    footerTitle: "Convertidor de Texto Online",
    footerBrandSubtitle: "Convertidor de Texto",
    footerDesc: "Herramienta gratuita para transformar texto en diferentes formatos. Soporte para múltiples idiomas y temas.",
    footerLinks: "Enlaces Útiles",
    footerHome: "Pagina Inicial",
    footerTool1: "Texto Tachado",
    footerTool2: "Iniciales Mayusculas",
    footerTool3: "Texto Inverso",
    footerPrivacy: "Política de Privacidad",
    footerTerms: "Términos de Uso",
    footerAbout: "Sobre Nosotros",
    footerContact: "Contacto",
    footerCopyright: "© 2026 Convertidor de Texto Online. Todos los derechos reservados.",
    newsletterTitle: "Mantente Actualizado",
    newsletterCopy: "Recibe consejos y nuevas herramientas por email.",
    newsletterPlaceholder: "Tu email",
    newsletterButton: "Suscribirse"
  }
};

function changeLang(lang) {
  const t = translations[lang];
  if (!t) return;

  localStorage.setItem('language', lang);

  document.querySelectorAll('.lang-select').forEach((select) => {
    select.value = lang;
  });

  const setButtonLabel = (id, prefix, label) => {
    const el = document.getElementById(id);
    if (el) {
      const currentBadge = el.querySelector('span');
      const badgeStyle = currentBadge ? currentBadge.getAttribute('style') : '';
      const styleAttr = badgeStyle ? ' style="' + badgeStyle + '"' : '';
      el.innerHTML = '<span' + styleAttr + '>' + prefix + '</span>' + label;
    }
  };

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.innerText = value;
  };

  const setContent = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.setAttribute("content", value);
  };

  const inputEl = document.getElementById("input");

  document.title = "ConvertTextEasy - " + t.pageTitle;
  setText("titleHead", "ConvertTextEasy - " + t.pageTitle);
  setContent("desc", t.desc);

  setText("mainTitle", t.mainTitle);
  setText("subtitle", t.subtitle);
  setText("brandSubtitle", t.brandSubtitle);
  setText("themeLabel", t.theme);
  setText("editorPanelTitle", t.editorPanelTitle);
  setText("editorPanelCopy", t.editorPanelCopy);
  setText("toolbarIntro", t.toolbarIntro);
  setText("summaryTitle", t.summaryTitle);
  setText("summaryCopy", t.summaryCopy);
  setText("featureTitle1", t.featureTitle1);
  setText("featureDesc1", t.featureDesc1);
  setText("featureTitle2", t.featureTitle2);
  setText("featureDesc2", t.featureDesc2);
  setText("featureTitle3", t.featureTitle3);
  setText("featureDesc3", t.featureDesc3);
  setText("tipsPanelTitle", t.tipsPanelTitle);
  setText("tipsPanelCopy", t.tipsPanelCopy);
  setText("tipTitle1", t.tipTitle1);
  setText("tipDesc1", t.tipDesc1);
  setText("tipTitle2", t.tipTitle2);
  setText("tipDesc2", t.tipDesc2);
  setText("charCountLabel", t.charCountLabel);
  setText("wordCountLabel", t.wordCountLabel);
  setText("lineCountLabel", t.lineCountLabel);

  if (inputEl) inputEl.placeholder = t.input;

  const newsletterInput = document.getElementById("newsletterInput");
  if (newsletterInput) newsletterInput.placeholder = t.newsletterPlaceholder;

  setButtonLabel("btnSentence", "Sc", t.sentence);
  setButtonLabel("btnLower", "lc", t.lower);
  setButtonLabel("btnUpper", "UC", t.upper);
  setButtonLabel("btnTitle", "CC", t.titleCase);
  setButtonLabel("btnAlternating", "aC", t.alternating);
  setButtonLabel("btnCamel", "TC", t.camelToolbar || "Formato Titulo");
  setButtonLabel("btnReverse", "iC", t.reverseToolbar || t.reverse);
  setButtonLabel("btnUppercaseTool", "UC", t.uppercaseToolbar);
  setButtonLabel("btnLowercaseTool", "lc", t.lowercaseToolbar);
  setButtonLabel("btnStrikethrough", "Tx", t.strikethroughToolbar);
  setButtonLabel("btnTitleCase", "Aa", t.titleCaseToolbar);
  setButtonLabel("btnReverseTool", "Rv", t.reverseToolbarHome);
  setButtonLabel("btnAlternatingTool", "aC", t.alternatingToolbar);
  setButtonLabel("btnItalicTool", "It", t.italicToolbar);
  setButtonLabel("btnMorseTool", ".-", t.morseToolbar);

  setText("seoTitle", t.seoTitle);
  setText("seoText", t.seoText);

  // Atualizar grid de ferramentas
  for (let i = 1; i <= 8; i++) {
    setText("toolTitle" + i, t["toolTitle" + i]);
    setText("toolDesc" + i, t["toolDesc" + i]);
  }

  // Atualizar footer
  setText("footerTitle", t.footerTitle);
  setText("footerBrandSubtitle", t.footerBrandSubtitle);
  setText("footerDesc", t.footerDesc);
  setText("footerLinksTitle", t.footerLinks);
  setText("footerHomeLink", t.footerHome);
  setText("footerToolLink1", t.footerTool1);
  setText("footerToolLink2", t.footerTool2);
  setText("footerToolLink3", t.footerTool3);
  setText("footerPrivacyLink", t.footerPrivacy);
  setText("footerTermsLink", t.footerTerms);
  setText("footerAboutLink", t.footerAbout);
  setText("footerContactTitle", t.footerContact);
  setText("footerContactLink", t.footerContact);
  setText("footerCopyright", t.footerCopyright);
  setText("newsletterTitle", t.newsletterTitle);
  setText("newsletterCopy", t.newsletterCopy);
  setText("newsletterButton", t.newsletterButton);

  const shareButton = document.getElementById("btnShare");
  if (shareButton) {
    shareButton.title = t.share;
    shareButton.setAttribute("aria-label", t.share);
  }

  const downloadButton = document.getElementById("btnDownload");
  if (downloadButton) {
    downloadButton.title = t.download;
    downloadButton.setAttribute("aria-label", t.download);
  }

  document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang, translations: t } }));
}

// FUNÇÕES
const input = document.getElementById("input");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");
const lineCount = document.getElementById("lineCount");

const mirrorMap = {
  'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ', 'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z',
  'A': '∀', 'B': 'q', 'C': 'Ɔ', 'D': 'p', 'E': 'Ǝ', 'F': 'Ⅎ', 'G': 'פ', 'H': 'H', 'I': 'I', 'J': 'ſ', 'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N', 'O': 'O', 'P': 'Ԁ', 'Q': 'Q', 'R': 'ɹ', 'S': 'S', 'T': '┴', 'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z'
};

const italicMap = {
  'A': '𝐴', 'B': '𝐵', 'C': '𝐶', 'D': '𝐷', 'E': '𝐸', 'F': '𝐹', 'G': '𝐺', 'H': '𝐻', 'I': '𝐼', 'J': '𝐽', 'K': '𝐾', 'L': '𝐿', 'M': '𝑀', 'N': '𝑁', 'O': '𝑂', 'P': '𝑃', 'Q': '𝑄', 'R': '𝑅', 'S': '𝑆', 'T': '𝑇', 'U': '𝑈', 'V': '𝑉', 'W': '𝑊', 'X': '𝑋', 'Y': '𝑌', 'Z': '𝑍',
  'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': 'ℎ', 'i': '𝑖', 'j': '𝑗', 'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜', 'p': '𝑝', 'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡', 'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦', 'z': '𝑧'
};

const morseMap = {
  'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 'z': '--..',
  '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
  '.': '.-.-.-', ',': '--..--', '?': '..--..', '!': '-.-.--', ':': '---...', ';': '-.-.-.', '(': '-.--.', ')': '-.--.-', '-': '-....-', '/': '-..-.', '@': '.--.-.', '&': '.-...'
};

const toolRoutes = {
  upper: "tools/uppercase-text.html",
  lower: "tools/lowercase-text.html",
  strikethrough: "tools/strikethrough-text.html",
  title: "tools/capitalize-text.html",
  reverse: "tools/reverse-text.html",
  alternating: "tools/alternating-case.html",
  italic: "tools/italic-text.html",
  morse: "tools/morse-code-translator.html"
};

function mapCharacters(text, dictionary) {
  return Array.from(text).map((char) => dictionary[char] || char).join('');
}

function strikethroughText(text) {
  return Array.from(text).map((char) => (char === '\n' ? '\n' : char + '\u0336')).join('');
}

function morseText(text) {
  return text
    .toLowerCase()
    .split('\n')
    .map((line) => line.split(' ').map((word) => Array.from(word).map((char) => morseMap[char] || char).join(' ')).join(' / '))
    .join('\n');
}

function convert(type) {
  if (!input) return;

  let text = input.value;

  if(type === "upper") text = text.toUpperCase();
  if(type === "lower") text = text.toLowerCase();
  if(type === "sentence") text = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase());
  if(type === "title") text = text.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
  if(type === "alternating") text = text.split('').map((c, i) => i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()).join('');
  if(type === "camel") text = text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_,c)=>c.toUpperCase());
  if(type === "snake") text = text.toLowerCase().replace(/\s+/g,'_');
  if(type === "reverse") text = text.split('').reverse().join('');
  if(type === "mirror") text = text.split('').map(c => mirrorMap[c] || c).join('');
  if(type === "strikethrough") text = strikethroughText(text);
  if(type === "italic") text = mapCharacters(text, italicMap);
  if(type === "morse") text = morseText(text);

  input.value = text;
  updateCounts();
}

function goToToolPage(type) {
  const targetRoute = toolRoutes[type];
  if (!targetRoute) return;

  window.location.href = targetRoute;
}

function removeAccents() {
  if (!input) return;
  input.value = input.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  updateCounts();
}

function clearText() {
  if (!input) return;
  input.value = "";
  updateCounts();
}

function copyText() {
  if (!input) return;
  navigator.clipboard.writeText(input.value);
}

function updateCounts() {
  if (!input || !charCount || !wordCount || !lineCount) return;

  const text = input.value;
  charCount.textContent = text.length;
  wordCount.textContent = text.trim() ? text.trim().split(/\s+/).length : 0;
  lineCount.textContent = text ? text.split(/\n/).length : 0;
}

if (input) {
  input.addEventListener("input", updateCounts);
}

function initLanguage() {
  const savedLanguage = localStorage.getItem('language') || 'pt';
  changeLang(savedLanguage);
}

// Initialize theme on page load
initTheme();
initLanguage();
updateCounts();
