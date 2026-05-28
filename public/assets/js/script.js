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
  if (icon) icon.textContent = theme === 'dark' ? '🌙' : '☀️';

  const drawerIcon = document.getElementById('themeIconDrawer');
  if (drawerIcon) drawerIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
}

const translations = {
  pt: {
    pageTitle: "Conversor de Texto Online",
    desc: "Converta textos online gratuitamente.",
    brandSubtitle: "Converter letras maiúsculas e minúsculas online gratuitamente.",
    theme: "Tema",
    editorPanelTitle: "Editor",
    editorPanelCopy: "Cole seu texto, converta ito o formato desejado e siga trabalhando sem sair da página.",
    mainTitle: "Conversor de Texto",
    subtitle: "Transforme textos rapidamente",
    input: "Digite seu texto...",
    share: "Compartilhar",
    download: "Baixar texto",
    charCountLabel: "Contagem de letras",
    wordCountLabel: "Contagem de palavras",
    lineCountLabel: "Contagem de linhas",
    toolbarIntro: "Escolha uma das 8 funcionalidades abaixo para aplicar o formato diretamente ao texto.",
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
    featureTitle3: "Flujo simples",
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
    alternating: "Alternancia",
    reverse: "Reverse Text",
    camelToolbar: "Formato Titulo",
    reverseToolbar: "iNvErSo",
    mirror: "Mirror Text",
    accent: "Remover acentos",
    copy: "Copiar",
    clear: "Limpar",
    sectionBasicTitle: "Casos Básicos",
    sectionBasicDesc: "Transforme o texto em maiúsculo ou minúscula, ou aplique casos simples para padronização.",
    sectionAdvancedTitle: "Casos Avançados",
    sectionAdvancedDesc: "Alternâncias criativas e estilos de programação para textos dinâmicos.",
    sectionTransformTitle: "Transformações de Texto",
    sectionTransformDesc: "Invierte, espelhe ou remova acentos para efeitos visuais e limpeza.",
    sectionActionsTitle: "Ações",
    sectionActionsDesc: "Copie o resultado ou limpe os campos para começar de novo.",
    seoTitle: "O que é um conversor de texto?",
    seoText: "Ferramenta online para transformar textos em diferentes formatos.",
    seoExplain: "Este editor permite converter seu texto em maiúsculas, minúsculas, estilo título, texto tachado, reverso, alternância, itálico e código Morse.",
    seoUsage: "Basta colar o texto no editor, escolher a funcionalidade desejada e copiar o resultado para usar onde quiser.",
    toolTitle1: "🔡 Letras Minusculas",
    toolDesc1: "Converta todo o texto para minusculas.",
    toolTitle2: "🔡 Letras Maiusculas",
    toolDesc2: "Converta todo o texto para maiusculas.",
    toolTitle3: "🔤 Texto Tachado",
    toolDesc3: "Gere texto riscado automaticamente.",
    toolTitle4: "📝 Iniciais Maiúsculas",
    toolDesc4: "Primeira letra de cada palavra em maiúsculo.",
    toolTitle5: "🔄 Texto Reverso",
    toolDesc5: "Inverta seu texto.",
    toolTitle6: "🔀 Alternancia",
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
    footerBrandSubtitle: "Convertidor de Texto",
    footerDesc: "Ferramenta gratuita para transformar textos em diferentes formatos. Suporte a múltiplos idiomas e temas.",
    footerLinks: "Links Úteis",
    footerHome: "Pagina Inicial",
    footerTool1: "Texto Tachado",
    footerTool2: "Iniciais Maiusculas",
    footerTool3: "Texto Reverso",
    footerPrivacy: "Política de Privacidade",
    //footerPrivacy = "privacy-policy",
    footerTerms: "Termos de Uso",
    footerAbout: "Sobre Nós",
    footerContact: "Contato",
    footerCopyright: "© 2026 Convertidor de Texto Online. Todos os direitos reservados.",
    newsletterTitle: "Fique Atualizado",
    newsletterCopy: "Receba dicas e novas ferramentas por email.",
    newsletterPlaceholder: "Seu email",
    newsletterButton: "Inscrever",
    allToolsTitle: "Todas as ferramentas online",
    allToolsDesc: "Páginas individuais com título, descrição, tutorial, FAQ, exemplos, canonical e schema.org.",
    blogTitle: "Blog — Guias práticos de texto, SEO e desenvolvimento",
    blogDesc: "Mais de 20 guias reais sobre texto, JSON, XML, CSV, regex, codificação e SEO técnico para ajudar você a trabalhar melhor com conteúdo digital.",
    blogEyebrow: "Blog indexável",
    blogTitleAlt: "Guias práticos de texto, SEO e desenvolvimento",
    blogDescAlt: "Artigos otimizados com explicações, exemplos e ferramentas relacionadas. Aprenda a trabalhar melhor com texto, dados técnicos e otimização para buscadores.",
    skipLink: "Pular para o conteúdo principal",
    langSelectAria: "Selecionar idioma",
    inputAria: "Área de texto para converter",
    copyBtn: "Copiar texto",
    clearBtn: "Limpar texto",
    errorHeading: "Página não encontrada",
    errorText: "Desculpe, a página que você está procurando não existe ou foi movida.",
    errorBackHome: "Voltar para a Página Inicial",
    errorVisitBlog: "Visitar o Blog",
    cookieTitle: "Aviso de cookies",
    cookieText: "Utilizamos cookies para melhorar sua experiência e exibir anúncios relevantes. Ao continuar, você concorda com nossa ",
    cookieAccept: "Aceitar",
    cookiePolicy: "Política de Privacidade",
    headerBrandSubtitle: "Ferramentas de texto, dev e SEO",
    headerBlog: "Blog",
    headerTools: "Ferramentas",
    headerTheme: "Tema",
    drawerBlog: "Blog",
    breadcrumbHome: "Início",
    breadcrumbTools: "Ferramentas",
    breadcrumbBlog: "Blog",
    onlineTool: "Ferramenta online",
    guidedPractice: "Guia prático",
    pageBackLink: "← Voltar para a home",
    pageAbout: "Sobre",
    pageContact: "Contato",
    pagePrivacy: "Privacidade",
    pageTerms: "Termos",
    mobileMenuBtn: "Abrir menu de ferramentas"
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
    seoExplain: "This editor lets you convert your text to uppercase, lowercase, title case, strikethrough, reverse, alternating case, italic, and Morse code.",
    seoUsage: "Just paste your text into the editor, choose the desired feature, and copy the result to use anywhere.",
    toolTitle1: "🔡 Lowercase Letters",
    toolDesc1: "Convert the entire text to lowercase.",
    toolTitle2: "🔡 Uppercase Letters",
    toolDesc2: "Convert the entire text to uppercase.",
    toolTitle3: "🔤 Strikethrough Text",
    toolDesc3: "Generate strikethrough text automatically.",
    toolTitle4: "📝 Title Case",
    toolDesc4: "Capitalize the first letter of each word.",
    toolTitle5: "🔄 Reverse Text",
    toolDesc5: "Reverse your text.",
    toolTitle6: "🔀 Alternancia",
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
    newsletterButton: "Subscribe",
    allToolsTitle: "All Online Tools",
    allToolsDesc: "Individual pages with title, description, tutorial, FAQ, examples, canonical, and schema.org.",
    blogTitle: "Blog — Practical guides on text, SEO, and development",
    blogDesc: "More than 20 real guides about text, JSON, XML, CSV, regex, encoding, and technical SEO to help you work better with digital content.",
    blogEyebrow: "Indexable blog",
    blogTitleAlt: "Practical guides on text, SEO and development",
    blogDescAlt: "Optimized articles with explanations, examples and related tools. Learn to work better with text, technical data and search engine optimization.",
    skipLink: "Skip to main content",
    langSelectAria: "Select language",
    inputAria: "Text area for conversion",
    copyBtn: "Copy text",
    clearBtn: "Clear text",
    errorHeading: "Page not found",
    errorText: "Sorry, the page you are looking for does not exist or has been moved.",
    errorBackHome: "Back to Home",
    errorVisitBlog: "Visit Blog",
    cookieTitle: "Cookie notice",
    cookieText: "We use cookies to improve your experience and show relevant ads. By continuing, you agree to our ",
    cookieAccept: "Accept",
    cookiePolicy: "Privacy Policy",
    headerBrandSubtitle: "Text, dev & SEO tools",
    headerBlog: "Blog",
    headerTools: "Tools",
    headerTheme: "Theme",
    drawerBlog: "Blog",
    breadcrumbHome: "Home",
    breadcrumbTools: "Tools",
    breadcrumbBlog: "Blog",
    onlineTool: "Online tool",
    guidedPractice: "Practical guide",
    pageBackLink: "← Back to home",
    pageAbout: "About",
    pageContact: "Contact",
    pagePrivacy: "Privacy",
    pageTerms: "Terms",
    mobileMenuBtn: "Open tools menu"
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
    featureDesc2: "Portugués, inglés y espanhol en la misma interfaz.",
    featureTitle3: "Flujo simple",
    featureDesc3: "Copiar, limpiar y revisar métricas sin salir del bloque principal.",
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
    alternating: "Alternancia",
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
    seoExplain: "Este editor le permite convertir su texto a mayúsculas, minúsculas, estilo título, tachado, reverso, alternancia, cursiva y código Morse.",
    seoUsage: "Simplemente pegue su texto en el editor, elija la función deseada y copie el resultado para usarlo donde quiera.",
    toolTitle1: "🔡 Letras Minusculas",
    toolDesc1: "Convierte todo el texto a minusculas.",
    toolTitle2: "🔡 Letras Mayusculas",
    toolDesc2: "Convierte todo el texto a mayúsculas.",
    toolTitle3: "🔤 Texto Tachado",
    toolDesc3: "Genera texto tachado automaticamente.",
    toolTitle4: "📝 Title Case",
    toolDesc4: "Capitalize the first letter of each word.",
    toolTitle5: "🔄 Texto Inverso",
    toolDesc5: "Invierte tu texto.",
    toolTitle6: "🔀 Alternancia",
    toolDesc6: "Alterna letras mayúsculas y minúsculas.",
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
    footerHomeLink: "Pagina Inicial",
    footerToolLink1: "Texto Tachado",
    footerToolLink2: "Iniciales Mayusculas",
    footerToolLink3: "Texto Inverso",
    footerPrivacyLink: "Política de Privacidad",
    footerTermsLink: "Términos de Uso",
    footerAboutLink: "Sobre Nosotros",
    footerContactTitle: "Contato",
    footerContactLink: "Contacto",
    footerCopyright: "© 2026 Convertidor de Texto Online. Todos los derechos reservados.",
    newsletterTitle: "Mantente Actualizado",
    newsletterCopy: "Recibe consejos y nuevas herramientas por email.",
    newsletterPlaceholder: "Tu email",
    newsletterButton: "Suscribirse",
    allToolsTitle: "Todas las herramientas online",
    allToolsDesc: "Páginas individuales con título, descripción, tutorial, FAQ, ejemplos, canonical y schema.org.",
    blogTitle: "Blog — Guías prácticas de texto, SEO y desarrollo",
    blogDesc: "Más de 20 guías reales sobre texto, JSON, XML, CSV, regex, codificación y SEO técnico para ayudarte a trabajar mejor con contenido digital.",
    blogEyebrow: "Blog indexable",
    blogTitleAlt: "Guías prácticas de texto, SEO y desarrollo",
    blogDescAlt: "Artículos optimizados con explicaciones, ejemplos y herramientas relacionadas. Aprende a trabajar mejor con texto, datos técnicos y optimización para buscadores.",
    skipLink: "Saltar al contenido principal",
    langSelectAria: "Seleccionar idioma",
    inputAria: "Área de texto para convertir",
    copyBtn: "Copiar texto",
    clearBtn: "Limpiar texto",
    errorHeading: "Página no encontrada",
    errorText: "Lo sentimos, la página que buscas no existe o ha sido movida.",
    errorBackHome: "Volver a la Página de Inicio",
    errorVisitBlog: "Visitar el Blog",
    cookieTitle: "Aviso de cookies",
    cookieText: "Utilizamos cookies para mejorar tu experiencia y mostrar anuncios relevantes. Al continuar, aceptas nuestra ",
    cookieAccept: "Aceptar",
    cookiePolicy: "Política de Privacidad",
    headerBrandSubtitle: "Herramientas de texto, dev y SEO",
    headerBlog: "Blog",
    headerTools: "Herramientas",
    headerTheme: "Tema",
    drawerBlog: "Blog",
    breadcrumbHome: "Inicio",
    breadcrumbTools: "Herramientas",
    breadcrumbBlog: "Blog",
    onlineTool: "Herramienta online",
    guidedPractice: "Guía práctico",
    pageBackLink: "← Volver a la home",
    pageAbout: "Acerca de",
    pageContact: "Contacto",
    pagePrivacy: "Privacidad",
    pageTerms: "Términos",
    mobileMenuBtn: "Abrir menú de herramientas"
  },

  fr: {
    pageTitle: "Convertisseur de Texte en Ligne",
    desc: "Convertissez votre texte en ligne gratuitement.",
    brandSubtitle: "Convertissez les lettres majuscules et minuscules en ligne gratuitement.",
    theme: "Thème",
    editorPanelTitle: "Éditeur",
    editorPanelCopy: "Collez votre texte, convertissez-le au format souhaité et continuez à travailler sans quitter la page.",
    mainTitle: "Convertisseur de Texte",
    subtitle: "Transformez vos textes rapidement",
    input: "Tapez votre texte...",
    share: "Partager",
    download: "Télécharger le texte",
    charCountLabel: "Nombre de caractères",
    wordCountLabel: "Nombre de mots",
    lineCountLabel: "Nombre de lignes",
    toolbarIntro: "Choisissez l'une des 8 fonctionnalités ci-dessous pour appliquer le format directement au texte.",
    uppercaseToolbar: "Lettres Majuscules",
    lowercaseToolbar: "Lettres Minuscules",
    strikethroughToolbar: "Texte Barré",
    titleCaseToolbar: "Casse de Titre",
    reverseToolbarHome: "Texte Inversé",
    alternatingToolbar: "Alternance",
    italicToolbar: "Texte Italique",
    morseToolbar: "Code Morse",
    summaryTitle: "Résumé",
    summaryCopy: "Une interface unique pour éditer, transformer et réviser du texte en quelques secondes.",
    featureTitle1: "Conversion instantanée",
    featureDesc1: "Les formats sont appliqués directement dans l'éditeur sans étapes supplémentaires.",
    featureTitle2: "Langues prêtes",
    featureDesc2: "Français, anglais, portugais et espagnol dans la même interface.",
    featureTitle3: "Flux simple",
    featureDesc3: "Copiez, nettoyez et vérifiez les métriques sans quitter le bloc principal.",
    tipsPanelTitle: "Conseils rapides",
    tipsPanelCopy: "Raccourcis visuels pour garder votre texte cohérent.",
    tipTitle1: "Standardisez les titres",
    tipDesc1: "Utilisez ConvertTextEasy pour les en-têtes, sections et appels principaux.",
    tipTitle2: "Nettoyez les textes collés",
    tipDesc2: "Normalisez la casse, supprimez le bruit visuel et recopiez le texte traité.",
    upper: "MAJUSCULES",
    lower: "minuscules",
    sentence: "Casse de Phrase",
    titleCase: "Casse de Titre",
    alternating: "Alternance",
    reverse: "Texte Inversé",
    camelToolbar: "Format Titre",
    reverseToolbar: "InVeRsE",
    mirror: "Texte Miroir",
    accent: "Supprimer les accents",
    copy: "Copier",
    clear: "Effacer",
    sectionBasicTitle: "Cas de Base",
    sectionBasicDesc: "Transformez le texte en majuscules ou minuscules, ou appliquez des cas simples pour la standardisation.",
    sectionAdvancedTitle: "Cas Avancés",
    sectionAdvancedDesc: "Alternances créatives et styles de programmation pour des textes dynamiques.",
    sectionTransformTitle: "Transformations de Texte",
    sectionTransformDesc: "Inversez, miroitez ou supprimez les accents pour des effets visuels et du nettoyage.",
    sectionActionsTitle: "Actions",
    sectionActionsDesc: "Copiez le résultat ou effacez les champs pour recommencer.",
    seoTitle: "Qu'est-ce qu'un convertisseur de texte ?",
    seoText: "Outil en ligne pour transformer du texte en différents formats.",
    seoExplain: "Cet éditeur vous permet de convertir votre texte en majuscules, minuscules, casse de titre, barré, inversé, alterné, italique et code Morse.",
    seoUsage: "Il suffit de coller votre texte dans l'éditeur, choisir la fonctionnalité souhaitée et copier le résultat pour l'utiliser où vous voulez.",
    toolTitle1: "🔡 Lettres Minuscules",
    toolDesc1: "Convertissez tout le texte en minuscules.",
    toolTitle2: "🔡 Lettres Majuscules",
    toolDesc2: "Convertissez tout le texte en majuscules.",
    toolTitle3: "🔤 Texte Barré",
    toolDesc3: "Générez du texte barré automatiquement.",
    toolTitle4: "📝 Casse de Titre",
    toolDesc4: "Première lettre de chaque mot en majuscule.",
    toolTitle5: "🔄 Texte Inversé",
    toolDesc5: "Inversez votre texte.",
    toolTitle6: "🔀 Alternance",
    toolDesc6: "Alterne les lettres majuscules et minuscules.",
    toolTitle7: "📜 Texte Italique",
    toolDesc7: "Génère du texte stylisé en italique.",
    toolTitle8: "💻 Code Morse",
    toolDesc8: "Traduisez du texte en code Morse.",
    sidebarTools: "🛠️ Outils",
    sidebarConverter: "📝 Convertisseur de Texte",
    sidebarAbout: "ℹ️ À propos",
    sidebarMoreTools: "🔧 Plus d'outils",
    sidebarContact: "📧 Contact",
    sidebarFeatures: "Fonctionnalités",
    footerTitle: "Convertisseur de Texte en Ligne",
    footerBrandSubtitle: "Convertisseur de Texte",
    footerDesc: "Outil gratuit pour transformer du texte en différents formats. Prise en charge de plusieurs langues et thèmes.",
    footerLinks: "Liens utiles",
    footerHome: "Page d'accueil",
    footerTool1: "Texte Barré",
    footerTool2: "Casse de Titre",
    footerTool3: "Texte Inversé",
    footerPrivacy: "Politique de Confidentialité",
    footerTerms: "Conditions d'Utilisation",
    footerAbout: "À Propos",
    footerContact: "Contact",
    footerCopyright: "© 2026 Convertisseur de Texte en Ligne. Tous droits réservés.",
    newsletterTitle: "Restez informé",
    newsletterCopy: "Recevez des conseils et de nouveaux outils par email.",
    newsletterPlaceholder: "Votre email",
    newsletterButton: "S'abonner",
    allToolsTitle: "Tous les outils en ligne",
    allToolsDesc: "Pages individuelles avec titre, description, tutoriel, FAQ, exemples, canonical et schema.org.",
    blogTitle: "Blog — Guides pratiques sur le texte, le SEO et le développement",
    blogDesc: "Plus de 20 guides concrets sur le texte, JSON, XML, CSV, regex, codage et SEO technique pour vous aider à mieux travailler avec le contenu numérique.",
    blogEyebrow: "Blog indexable",
    blogTitleAlt: "Guides pratiques sur le texte, le SEO et le développement",
    blogDescAlt: "Articles optimisés avec explications, exemples et outils connexes. Apprenez à mieux travailler avec le texte, les données techniques et l'optimisation pour les moteurs de recherche.",
    skipLink: "Aller au contenu principal",
    langSelectAria: "Sélectionner la langue",
    inputAria: "Zone de texte pour la conversion",
    copyBtn: "Copier le texte",
    clearBtn: "Effacer le texte",
    errorHeading: "Page non trouvée",
    errorText: "Désolé, la page que vous recherchez n'existe pas ou a été déplacée.",
    errorBackHome: "Retour à l'Accueil",
    errorVisitBlog: "Visiter le Blog",
    cookieTitle: "Avis sur les cookies",
    cookieText: "Nous utilisons des cookies pour améliorer votre expérience et afficher des annonces pertinentes. En continuant, vous acceptez notre ",
    cookieAccept: "Accepter",
    cookiePolicy: "Politique de Confidentialité",
    headerBrandSubtitle: "Outils de texte, dev et SEO",
    headerBlog: "Blog",
    headerTools: "Outils",
    headerTheme: "Thème",
    drawerBlog: "Blog",
    breadcrumbHome: "Accueil",
    breadcrumbTools: "Outils",
    breadcrumbBlog: "Blog",
    onlineTool: "Outil en ligne",
    guidedPractice: "Guide pratique",
    pageBackLink: "← Retour à l'accueil",
    pageAbout: "À propos",
    pageContact: "Contact",
    pagePrivacy: "Confidentialité",
    pageTerms: "Conditions",
    mobileMenuBtn: "Ouvrir le menu des outils"
  },

  de: {
    pageTitle: "Textkonverter Online",
    desc: "Konvertieren Sie Text kostenlos online.",
    brandSubtitle: "Konvertieren Sie Groß- und Kleinbuchstaben kostenlos online.",
    theme: "Thema",
    editorPanelTitle: "Editor",
    editorPanelCopy: "Fügen Sie Ihren Text ein, konvertieren Sie ihn in das gewünschte Format und arbeiten Sie weiter, ohne die Seite zu verlassen.",
    mainTitle: "Textkonverter",
    subtitle: "Transformieren Sie Texte schnell",
    input: "Geben Sie Ihren Text ein...",
    share: "Teilen",
    download: "Text herunterladen",
    charCountLabel: "Zeichenanzahl",
    wordCountLabel: "Wortanzahl",
    lineCountLabel: "Zeilenanzahl",
    toolbarIntro: "Wählen Sie eine der 8 Funktionen unten aus, um das Format direkt auf den Text anzuwenden.",
    uppercaseToolbar: "Großbuchstaben",
    lowercaseToolbar: "Kleinbuchstaben",
    strikethroughToolbar: "Durchgestrichener Text",
    titleCaseToolbar: "Titelformat",
    reverseToolbarHome: "Text umkehren",
    alternatingToolbar: "Wechselcase",
    italicToolbar: "Kursiver Text",
    morseToolbar: "Morsezeichen",
    summaryTitle: "Zusammenfassung",
    summaryCopy: "Eine einzige Oberfläche zum Bearbeiten, Transformieren und Überprüfen von Text in Sekunden.",
    featureTitle1: "Sofortige Konvertierung",
    featureDesc1: "Formate werden direkt im Editor ohne zusätzliche Schritte angewendet.",
    featureTitle2: "Bereite Sprachen",
    featureDesc2: "Deutsch, Englisch, Portugiesisch und Spanisch in derselben Oberfläche.",
    featureTitle3: "Einfacher Ablauf",
    featureDesc3: "Kopieren, löschen und Metriken überprüfen, ohne den Hauptblock zu verlassen.",
    tipsPanelTitle: "Schnelle Tipps",
    tipsPanelCopy: "Visuelle Abkürzungen, um Ihren Text konsistent zu halten.",
    tipTitle1: "Titel standardisieren",
    tipDesc1: "Verwenden Sie ConvertTextEasy für Überschriften, Abschnitte und Hauptaufrufe.",
    tipTitle2: "Eingefügte Texte reinigen",
    tipDesc2: "Normalisieren Sie die Groß-/Kleinschreibung, entfernen Sie visuelles Rauschen und kopieren Sie den bearbeiteten Text.",
    upper: "GROSSBUCHSTABEN",
    lower: "kleinbuchstaben",
    sentence: "Satzfall",
    titleCase: "Titelformat",
    alternating: "Wechselcase",
    reverse: "Text umkehren",
    camelToolbar: "Titelformat",
    reverseToolbar: "UmGeKeHrT",
    mirror: "Spiegeltext",
    accent: "Akzente entfernen",
    copy: "Kopieren",
    clear: "Löschen",
    sectionBasicTitle: "Einfache Fälle",
    sectionBasicDesc: "Wandeln Sie Text in Groß- oder Kleinbuchstaben um oder wenden Sie einfache Fälle zur Standardisierung an.",
    sectionAdvancedTitle: "Fortgeschrittene Fälle",
    sectionAdvancedDesc: "Kreative Wechsel und Programmierstile für dynamische Texte.",
    sectionTransformTitle: "Texttransformationen",
    sectionTransformDesc: "Umkehren, spiegeln oder Akzente entfernen für visuelle Effekte und Reinigung.",
    sectionActionsTitle: "Aktionen",
    sectionActionsDesc: "Kopieren Sie das Ergebnis oder löschen Sie die Felder, um neu zu beginnen.",
    seoTitle: "Was ist ein Textkonverter?",
    seoText: "Online-Werkzeug zum Transformieren von Text in verschiedene Formate.",
    seoExplain: "Dieser Editor ermöglicht es Ihnen, Text in Großbuchstaben, Kleinbuchstaben, Titelformat, durchgestrichen, umgekehrt, wechselnd, kursiv und Morsecode zu konvertieren.",
    seoUsage: "Fügen Sie einfach Ihren Text in den Editor ein, wählen Sie die gewünschte Funktion und kopieren Sie das Ergebnis zur beliebigen Verwendung.",
    toolTitle1: "🔡 Kleinbuchstaben",
    toolDesc1: "Konvertieren Sie den gesamten Text in Kleinbuchstaben.",
    toolTitle2: "🔡 Großbuchstaben",
    toolDesc2: "Konvertieren Sie den gesamten Text in Großbuchstaben.",
    toolTitle3: "🔤 Durchgestrichener Text",
    toolDesc3: "Erzeugen Sie automatisch durchgestrichenen Text.",
    toolTitle4: "📝 Titelformat",
    toolDesc4: "Erster Buchstabe jedes Wortes großgeschrieben.",
    toolTitle5: "🔄 Text umkehren",
    toolDesc5: "Kehren Sie Ihren Text um.",
    toolTitle6: "🔀 Wechselcase",
    toolDesc6: "Wechselt zwischen Groß- und Kleinbuchstaben.",
    toolTitle7: "📜 Kursiver Text",
    toolDesc7: "Erzeugt stilisierten kursiven Text.",
    toolTitle8: "💻 Morsecode",
    toolDesc8: "Übersetzen Sie Text in Morsecode.",
    sidebarTools: "🛠️ Werkzeuge",
    sidebarConverter: "📝 Textkonverter",
    sidebarAbout: "ℹ️ Über uns",
    sidebarMoreTools: "🔧 Mehr Werkzeuge",
    sidebarContact: "📧 Kontakt",
    sidebarFeatures: "Funktionen",
    footerTitle: "Textkonverter Online",
    footerBrandSubtitle: "Textkonverter",
    footerDesc: "Kostenloses Werkzeug zur Umwandlung von Text in verschiedene Formate. Unterstützt mehrere Sprachen und Themen.",
    footerLinks: "Nützliche Links",
    footerHome: "Startseite",
    footerTool1: "Durchgestrichener Text",
    footerTool2: "Titelformat",
    footerTool3: "Text umkehren",
    footerPrivacy: "Datenschutzerklärung",
    footerTerms: "Nutzungsbedingungen",
    footerAbout: "Über Uns",
    footerContact: "Kontakt",
    footerCopyright: "© 2026 Textkonverter Online. Alle Rechte vorbehalten.",
    newsletterTitle: "Bleiben Sie auf dem Laufenden",
    newsletterCopy: "Erhalten Sie Tipps und neue Werkzeuge per E-Mail.",
    newsletterPlaceholder: "Ihre E-Mail",
    newsletterButton: "Abonnieren",
    allToolsTitle: "Alle Online-Werkzeuge",
    allToolsDesc: "Einzelseiten mit Titel, Beschreibung, Tutorial, FAQ, Beispielen, Canonical und Schema.org.",
    blogTitle: "Blog — Praxisleitfäden zu Text, SEO und Entwicklung",
    blogDesc: "Mehr als 20 echte Leitfäden zu Text, JSON, XML, CSV, Regex, Kodierung und technischem SEO, um Ihnen zu helfen, besser mit digitalen Inhalten zu arbeiten.",
    blogEyebrow: "Indexierbarer Blog",
    blogTitleAlt: "Praktische Leitfäden zu Text, SEO und Entwicklung",
    blogDescAlt: "Optimierte Artikel mit Erklärungen, Beispielen und verwandten Werkzeugen. Lernen Sie, besser mit Text, technischen Daten und Suchmaschinenoptimierung zu arbeiten.",
    skipLink: "Zum Hauptinhalt springen",
    langSelectAria: "Sprache auswählen",
    inputAria: "Textbereich für Konvertierung",
    copyBtn: "Text kopieren",
    clearBtn: "Text löschen",
    errorHeading: "Seite nicht gefunden",
    errorText: "Entschuldigung, die gesuchte Seite existiert nicht oder wurde verschoben.",
    errorBackHome: "Zurück zur Startseite",
    errorVisitBlog: "Blog besuchen",
    cookieTitle: "Cookie-Hinweis",
    cookieText: "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und relevante Anzeigen zu schalten. Wenn Sie fortfahren, stimmen Sie unserer ",
    cookieAccept: "Akzeptieren",
    cookiePolicy: "Datenschutzerklärung",
    headerBrandSubtitle: "Text-, Dev- und SEO-Werkzeuge",
    headerBlog: "Blog",
    headerTools: "Werkzeuge",
    headerTheme: "Thema",
    drawerBlog: "Blog",
    breadcrumbHome: "Startseite",
    breadcrumbTools: "Werkzeuge",
    breadcrumbBlog: "Blog",
    onlineTool: "Online-Werkzeug",
    guidedPractice: "Praktischer Leitfaden",
    pageBackLink: "← Zurück zur Startseite",
    pageAbout: "Über uns",
    pageContact: "Kontakt",
    pagePrivacy: "Datenschutz",
    pageTerms: "Nutzungsbedingungen",
    mobileMenuBtn: "Werkzeugmenü öffnen"
  },

  it: {
    pageTitle: "Convertitore di Testo Online",
    desc: "Converti testo online gratuitamente.",
    brandSubtitle: "Converti lettere maiuscole e minuscole online gratuitamente.",
    theme: "Tema",
    editorPanelTitle: "Editor",
    editorPanelCopy: "Incolla il tuo testo, convertilo nel formato desiderato e continua a lavorare senza lasciare la pagina.",
    mainTitle: "Convertitore di Testo",
    subtitle: "Trasforma i tuoi testi rapidamente",
    input: "Digita il tuo testo...",
    share: "Condividi",
    download: "Scarica testo",
    charCountLabel: "Conteggio caratteri",
    wordCountLabel: "Conteggio parole",
    lineCountLabel: "Conteggio righe",
    toolbarIntro: "Scegli una delle 8 funzionalità qui sotto per applicare il formato direttamente al testo.",
    uppercaseToolbar: "Lettere Maiuscole",
    lowercaseToolbar: "Lettere Minuscole",
    strikethroughToolbar: "Testo Barrato",
    titleCaseToolbar: "Formato Titolo",
    reverseToolbarHome: "Testo Inverso",
    alternatingToolbar: "Alternanza",
    italicToolbar: "Testo in Corsivo",
    morseToolbar: "Codice Morse",
    summaryTitle: "Riepilogo",
    summaryCopy: "Un'unica interfaccia per modificare, trasformare e revisionare il testo in pochi secondi.",
    featureTitle1: "Conversione istantanea",
    featureDesc1: "I formati vengono applicati direttamente nell'editor senza passaggi extra.",
    featureTitle2: "Lingue pronte",
    featureDesc2: "Italiano, inglese, portoghese e spagnolo nella stessa interfaccia.",
    featureTitle3: "Flusso semplice",
    featureDesc3: "Copia, pulisci e rivedi le metriche senza uscire dal blocco principale.",
    tipsPanelTitle: "Consigli rapidi",
    tipsPanelCopy: "Scorciatoie visive per mantenere il testo coerente.",
    tipTitle1: "Standardizza i titoli",
    tipDesc1: "Usa ConvertTextEasy per intestazioni, sezioni e richiami principali.",
    tipTitle2: "Pulisci i testi incollati",
    tipDesc2: "Normalizza maiuscole/minuscole, rimuovi il rumore visivo e ricopia il testo elaborato.",
    upper: "MAIUSCOLO",
    lower: "minuscolo",
    sentence: "Formato Frase",
    titleCase: "Formato Titolo",
    alternating: "Alternanza",
    reverse: "Testo Inverso",
    camelToolbar: "Formato Titolo",
    reverseToolbar: "InVeRsO",
    mirror: "Testo Speculare",
    accent: "Rimuovi accenti",
    copy: "Copia",
    clear: "Cancella",
    sectionBasicTitle: "Casi Base",
    sectionBasicDesc: "Trasforma il testo in maiuscolo o minuscolo, o applica casi semplici per la standardizzazione.",
    sectionAdvancedTitle: "Casi Avanzati",
    sectionAdvancedDesc: "Alternanze creative e stili di programmazione per testi dinamici.",
    sectionTransformTitle: "Trasformazioni di Testo",
    sectionTransformDesc: "Inverti, specchia o rimuovi accenti per effetti visivi e pulizia.",
    sectionActionsTitle: "Azioni",
    sectionActionsDesc: "Copia il risultato o cancella i campi per ricominciare.",
    seoTitle: "Cos'è un convertitore di testo?",
    seoText: "Strumento online per trasformare il testo in diversi formati.",
    seoExplain: "Questo editor ti permette di convertire il tuo testo in maiuscolo, minuscolo, formato titolo, barrato, inverso, alternato, corsivo e codice Morse.",
    seoUsage: "Basta incollare il testo nell'editor, scegliere la funzionalità desiderata e copiare il risultato per usarlo dove vuoi.",
    toolTitle1: "🔡 Lettere Minuscole",
    toolDesc1: "Converti tutto il testo in minuscolo.",
    toolTitle2: "🔡 Lettere Maiuscole",
    toolDesc2: "Converti tutto il testo in maiuscolo.",
    toolTitle3: "🔤 Testo Barrato",
    toolDesc3: "Genera testo barrato automaticamente.",
    toolTitle4: "📝 Formato Titolo",
    toolDesc4: "Prima lettera di ogni parola in maiuscolo.",
    toolTitle5: "🔄 Testo Inverso",
    toolDesc5: "Inverti il tuo testo.",
    toolTitle6: "🔀 Alternanza",
    toolDesc6: "Alterna lettere maiuscole e minuscole.",
    toolTitle7: "📜 Testo in Corsivo",
    toolDesc7: "Genera testo stilizzato in corsivo.",
    toolTitle8: "💻 Codice Morse",
    toolDesc8: "Traduci testo in codice Morse.",
    sidebarTools: "🛠️ Strumenti",
    sidebarConverter: "📝 Convertitore di Testo",
    sidebarAbout: "ℹ️ Informazioni",
    sidebarMoreTools: "🔧 Altri Strumenti",
    sidebarContact: "📧 Contatto",
    sidebarFeatures: "Funzionalità",
    footerTitle: "Convertitore di Testo Online",
    footerBrandSubtitle: "Convertitore di Testo",
    footerDesc: "Strumento gratuito per trasformare il testo in diversi formati. Supporto per più lingue e temi.",
    footerLinks: "Link Utili",
    footerHome: "Home Page",
    footerTool1: "Testo Barrato",
    footerTool2: "Formato Titolo",
    footerTool3: "Testo Inverso",
    footerPrivacy: "Informativa sulla Privacy",
    footerTerms: "Termini di Utilizzo",
    footerAbout: "Chi Siamo",
    footerContact: "Contatto",
    footerCopyright: "© 2026 Convertitore di Testo Online. Tutti i diritti riservati.",
    newsletterTitle: "Rimani Aggiornato",
    newsletterCopy: "Ricevi consigli e nuovi strumenti via email.",
    newsletterPlaceholder: "La tua email",
    newsletterButton: "Iscriviti",
    allToolsTitle: "Tutti gli strumenti online",
    allToolsDesc: "Pagine individuali con titolo, descrizione, tutorial, FAQ, esempi, canonical e schema.org.",
    blogTitle: "Blog — Guide pratiche su testo, SEO e sviluppo",
    blogDesc: "Più di 20 guide reali su testo, JSON, XML, CSV, regex, codifica e SEO tecnico per aiutarti a lavorare meglio con i contenuti digitali.",
    blogEyebrow: "Blog indicizzabile",
    blogTitleAlt: "Guide pratiche su testo, SEO e sviluppo",
    blogDescAlt: "Articoli ottimizzati con spiegazioni, esempi e strumenti correlati. Impara a lavorare meglio con testo, dati tecnici e ottimizzazione per i motori di ricerca.",
    skipLink: "Salta al contenuto principale",
    langSelectAria: "Seleziona lingua",
    inputAria: "Area di testo per la conversione",
    copyBtn: "Copia testo",
    clearBtn: "Cancella testo",
    errorHeading: "Pagina non trovata",
    errorText: "Spiacenti, la pagina che stai cercando non esiste o è stata spostata.",
    errorBackHome: "Torna alla Home",
    errorVisitBlog: "Visita il Blog",
    cookieTitle: "Avviso sui cookie",
    cookieText: "Utilizziamo i cookie per migliorare la tua esperienza e mostrare annunci pertinenti. Continuando, accetti la nostra ",
    cookieAccept: "Accetta",
    cookiePolicy: "Informativa sulla Privacy",
    headerBrandSubtitle: "Strumenti di testo, dev e SEO",
    headerBlog: "Blog",
    headerTools: "Strumenti",
    headerTheme: "Tema",
    drawerBlog: "Blog",
    breadcrumbHome: "Home",
    breadcrumbTools: "Strumenti",
    breadcrumbBlog: "Blog",
    onlineTool: "Strumento online",
    guidedPractice: "Guida pratica",
    pageBackLink: "← Torna alla home",
    pageAbout: "Informazioni",
    pageContact: "Contatto",
    pagePrivacy: "Privacy",
    pageTerms: "Termini",
    mobileMenuBtn: "Apri menu strumenti"
  },

  zh: {
    pageTitle: "在线文本转换器",
    desc: "免费在线转换文本。",
    brandSubtitle: "免费在线转换大写和小写字母。",
    theme: "主题",
    editorPanelTitle: "编辑器",
    editorPanelCopy: "粘贴您的文本，将其转换为所需格式，无需离开页面即可继续工作。",
    mainTitle: "文本转换器",
    subtitle: "快速转换您的文本",
    input: "输入您的文本...",
    share: "分享",
    download: "下载文本",
    charCountLabel: "字符计数",
    wordCountLabel: "单词计数",
    lineCountLabel: "行数计数",
    toolbarIntro: "选择以下8种功能之一，直接对文本应用格式。",
    uppercaseToolbar: "大写字母",
    lowercaseToolbar: "小写字母",
    strikethroughToolbar: "删除线文本",
    titleCaseToolbar: "标题格式",
    reverseToolbarHome: "反转文本",
    alternatingToolbar: "交替大小写",
    italicToolbar: "斜体文本",
    morseToolbar: "摩尔斯电码",
    summaryTitle: "摘要",
    summaryCopy: "一个界面即可在几秒内编辑、转换和审查文本。",
    featureTitle1: "即时转换",
    featureDesc1: "格式直接应用于编辑器，无需额外步骤。",
    featureTitle2: "多语言支持",
    featureDesc2: "中文、英语、葡萄牙语和西班牙语同在一个界面。",
    featureTitle3: "简单流程",
    featureDesc3: "无需离开主区块即可复制、清除和查看指标。",
    tipsPanelTitle: "快速提示",
    tipsPanelCopy: "保持文本一致的视觉快捷方式。",
    tipTitle1: "标准化标题",
    tipDesc1: "使用 ConvertTextEasy 处理标题、章节和主要标注。",
    tipTitle2: "清理粘贴的文本",
    tipDesc2: "标准化大小写，移除视觉噪音，并重新复制已处理的文本。",
    upper: "大写",
    lower: "小写",
    sentence: "句子格式",
    titleCase: "标题格式",
    alternating: "交替大小写",
    reverse: "反转文本",
    camelToolbar: "标题格式",
    reverseToolbar: "反 转",
    mirror: "镜像文本",
    accent: "移除重音符号",
    copy: "复制",
    clear: "清除",
    sectionBasicTitle: "基本案例",
    sectionBasicDesc: "将文本转换为大写或小写，或应用简单案例进行标准化。",
    sectionAdvancedTitle: "高级案例",
    sectionAdvancedDesc: "创造性交替和编程风格，适用于动态文本。",
    sectionTransformTitle: "文本转换",
    sectionTransformDesc: "反转、镜像或移除重音符号，用于视觉效果和清理。",
    sectionActionsTitle: "操作",
    sectionActionsDesc: "复制结果或清除字段重新开始。",
    seoTitle: "什么是文本转换器？",
    seoText: "用于将文本转换为不同格式的在线工具。",
    seoExplain: "此编辑器允许您将文本转换为大写、小写、标题格式、删除线、反转、交替大小写、斜体和摩尔斯电码。",
    seoUsage: "只需将文本粘贴到编辑器中，选择所需功能，然后复制结果即可在任意位置使用。",
    toolTitle1: "🔡 小写字母",
    toolDesc1: "将整个文本转换为小写。",
    toolTitle2: "🔡 大写字母",
    toolDesc2: "将整个文本转换为大写。",
    toolTitle3: "🔤 删除线文本",
    toolDesc3: "自动生成删除线文本。",
    toolTitle4: "📝 标题格式",
    toolDesc4: "每个单词的首字母大写。",
    toolTitle5: "🔄 反转文本",
    toolDesc5: "反转您的文本。",
    toolTitle6: "🔀 交替大小写",
    toolDesc6: "交替大写和小写字母。",
    toolTitle7: "📜 斜体文本",
    toolDesc7: "生成斜体风格的文本。",
    toolTitle8: "💻 摩尔斯电码",
    toolDesc8: "将文本翻译为摩尔斯电码。",
    sidebarTools: "🛠️ 工具",
    sidebarConverter: "📝 文本转换器",
    sidebarAbout: "ℹ️ 关于",
    sidebarMoreTools: "🔧 更多工具",
    sidebarContact: "📧 联系",
    sidebarFeatures: "功能",
    footerTitle: "在线文本转换器",
    footerBrandSubtitle: "文本转换器",
    footerDesc: "免费工具，可将文本转换为不同格式。支持多种语言和主题。",
    footerLinks: "有用链接",
    footerHome: "首页",
    footerTool1: "删除线文本",
    footerTool2: "标题格式",
    footerTool3: "反转文本",
    footerPrivacy: "隐私政策",
    footerTerms: "使用条款",
    footerAbout: "关于我们",
    footerContact: "联系",
    footerCopyright: "© 2026 在线文本转换器。保留所有权利。",
    newsletterTitle: "保持更新",
    newsletterCopy: "通过电子邮件接收提示和新工具。",
    newsletterPlaceholder: "您的邮箱",
    newsletterButton: "订阅",
    allToolsTitle: "所有在线工具",
    allToolsDesc: "包含标题、描述、教程、常见问题、示例、规范和 schema.org 的独立页面。",
    blogTitle: "博客 — 文本、SEO 和开发实用指南",
    blogDesc: "超过 20 个关于文本、JSON、XML、CSV、正则表达式、编码和技术 SEO 的真实指南，帮助您更好地处理数字内容。",
    blogEyebrow: "可索引博客",
    blogTitleAlt: "文本、SEO 和开发实用指南",
    blogDescAlt: "优化文章，包含解释、示例和相关工具。学习更好地处理文本、技术数据和搜索引擎优化。",
    skipLink: "跳到主要内容",
    langSelectAria: "选择语言",
    inputAria: "文本转换区域",
    copyBtn: "复制文本",
    clearBtn: "清除文本",
    errorHeading: "页面未找到",
    errorText: "抱歉，您寻找的页面不存在或已被移动。",
    errorBackHome: "返回首页",
    errorVisitBlog: "访问博客",
    cookieTitle: "Cookie 通知",
    cookieText: "我们使用 Cookie 来改善您的体验并展示相关广告。继续使用即表示您同意我们的 ",
    cookieAccept: "接受",
    cookiePolicy: "隐私政策",
    headerBrandSubtitle: "文本、开发和SEO工具",
    headerBlog: "博客",
    headerTools: "工具",
    headerTheme: "主题",
    drawerBlog: "博客",
    breadcrumbHome: "首页",
    breadcrumbTools: "工具",
    breadcrumbBlog: "博客",
    onlineTool: "在线工具",
    guidedPractice: "实用指南",
    pageBackLink: "← 返回首页",
    pageAbout: "关于",
    pageContact: "联系我们",
    pagePrivacy: "隐私政策",
    pageTerms: "服务条款",
    mobileMenuBtn: "打开工具菜单"
  },

  ja: {
    pageTitle: "オンラインテキスト変換",
    desc: "無料でオンラインでテキストを変換します。",
    brandSubtitle: "無料でオンラインで大文字と小文字を変換します。",
    theme: "テーマ",
    editorPanelTitle: "エディタ",
    editorPanelCopy: "テキストを貼り付け、希望の形式に変換し、ページを離れずに作業を続けられます。",
    mainTitle: "テキスト変換",
    subtitle: "テキストをすばやく変換",
    input: "テキストを入力...",
    share: "共有",
    download: "テキストをダウンロード",
    charCountLabel: "文字数",
    wordCountLabel: "単語数",
    lineCountLabel: "行数",
    toolbarIntro: "以下の8つの機能から1つを選んで、直接テキストにフォーマットを適用します。",
    uppercaseToolbar: "大文字",
    lowercaseToolbar: "小文字",
    strikethroughToolbar: "取り消し線テキスト",
    titleCaseToolbar: "タイトルケース",
    reverseToolbarHome: "テキストを反転",
    alternatingToolbar: "交互ケース",
    italicToolbar: "斜体テキスト",
    morseToolbar: "モールス信号",
    summaryTitle: "概要",
    summaryCopy: "テキストの編集、変換、レビューを数秒で行う単一のインターフェース。",
    featureTitle1: "即時変換",
    featureDesc1: "フォーマットは追加ステップなしでエディタに直接適用されます。",
    featureTitle2: "対応言語",
    featureDesc2: "日本語、英語、ポルトガル語、スペイン語が同じインターフェースで利用可能。",
    featureTitle3: "シンプルな流れ",
    featureDesc3: "メインブロックを離れずにコピー、クリア、メトリクスの確認が可能。",
    tipsPanelTitle: "クイックヒント",
    tipsPanelCopy: "テキストの一貫性を保つための視覚的なショートカット。",
    tipTitle1: "タイトルを標準化",
    tipDesc1: "見出し、セクション、主要なコーリングに ConvertTextEasy を使用。",
    tipTitle2: "貼り付けたテキストをクリーン",
    tipDesc2: "大文字小文字を正規化し、視覚的なノイズを除去して処理済みテキストを再コピー。",
    upper: "大文字",
    lower: "小文字",
    sentence: "文の形式",
    titleCase: "タイトルケース",
    alternating: "交互ケース",
    reverse: "テキストを反転",
    camelToolbar: "タイトル形式",
    reverseToolbar: "反 転",
    mirror: "ミラーテキスト",
    accent: "アクセントを削除",
    copy: "コピー",
    clear: "クリア",
    sectionBasicTitle: "基本ケース",
    sectionBasicDesc: "テキストを大文字または小文字に変換するか、標準化のために単純なケースを適用します。",
    sectionAdvancedTitle: "高度なケース",
    sectionAdvancedDesc: "動的なテキストのための創造的な交互とプログラミングスタイル。",
    sectionTransformTitle: "テキスト変換",
    sectionTransformDesc: "視覚効果とクリーンアップのための反転、ミラー、アクセント削除。",
    sectionActionsTitle: "アクション",
    sectionActionsDesc: "結果をコピーするか、フィールドをクリアして最初からやり直します。",
    seoTitle: "テキストコンバーターとは？",
    seoText: "テキストをさまざまな形式に変換するオンラインツール。",
    seoExplain: "このエディタでは、テキストを大文字、小文字、タイトルケース、取り消し線、反転、交互ケース、斜体、モールス信号に変換できます。",
    seoUsage: "エディタにテキストを貼り付け、希望の機能を選択し、結果をコピーしてどこでも使用するだけです。",
    toolTitle1: "🔡 小文字",
    toolDesc1: "テキスト全体を小文字に変換します。",
    toolTitle2: "🔡 大文字",
    toolDesc2: "テキスト全体を大文字に変換します。",
    toolTitle3: "🔤 取り消し線テキスト",
    toolDesc3: "自動的に取り消し線テキストを生成します。",
    toolTitle4: "📝 タイトルケース",
    toolDesc4: "各単語の最初の文字を大文字にします。",
    toolTitle5: "🔄 テキストを反転",
    toolDesc5: "テキストを反転します。",
    toolTitle6: "🔀 交互ケース",
    toolDesc6: "大文字と小文字を交互に切り替えます。",
    toolTitle7: "📜 斜体テキスト",
    toolDesc7: "斜体スタイルのテキストを生成します。",
    toolTitle8: "💻 モールス信号",
    toolDesc8: "テキストをモールス信号に翻訳します。",
    sidebarTools: "🛠️ ツール",
    sidebarConverter: "📝 テキスト変換",
    sidebarAbout: "ℹ️ 概要",
    sidebarMoreTools: "🔧 その他のツール",
    sidebarContact: "📧 お問い合わせ",
    sidebarFeatures: "機能",
    footerTitle: "オンラインテキスト変換",
    footerBrandSubtitle: "テキスト変換",
    footerDesc: "テキストをさまざまな形式に変換する無料ツール。複数の言語とテーマをサポート。",
    footerLinks: "便利なリンク",
    footerHome: "ホームページ",
    footerTool1: "取り消し線テキスト",
    footerTool2: "タイトルケース",
    footerTool3: "テキストを反転",
    footerPrivacy: "プライバシーポリシー",
    footerTerms: "利用規約",
    footerAbout: "当社について",
    footerContact: "お問い合わせ",
    footerCopyright: "© 2026 オンラインテキスト変換。全著作権所有。",
    newsletterTitle: "最新情報を受け取る",
    newsletterCopy: "メールでヒントや新しいツールを受け取ります。",
    newsletterPlaceholder: "あなたのメール",
    newsletterButton: "購読",
    allToolsTitle: "すべてのオンラインツール",
    allToolsDesc: "タイトル、説明、チュートリアル、FAQ、例、カノニカル、schema.org を含む個別ページ。",
    blogTitle: "ブログ — テキスト、SEO、開発の実践ガイド",
    blogDesc: "テキスト、JSON、XML、CSV、正規表現、エンコーディング、テクニカルSEOに関する20以上の実践的なガイドで、デジタルコンテンツをより効果的に扱えます。",
    blogEyebrow: "インデックス可能なブログ",
    blogTitleAlt: "テキスト、SEO、開発の実践ガイド",
    blogDescAlt: "説明、例、関連ツールを含む最適化された記事。テキスト、技術データ、検索エンジン最適化をより効果的に扱う方法を学びましょう。",
    skipLink: "メインコンテンツにスキップ",
    langSelectAria: "言語を選択",
    inputAria: "変換用テキストエリア",
    copyBtn: "テキストをコピー",
    clearBtn: "テキストをクリア",
    errorHeading: "ページが見つかりません",
    errorText: "申し訳ございません。お探しのページは存在しないか、移動されました。",
    errorBackHome: "ホームに戻る",
    errorVisitBlog: "ブログを見る",
    cookieTitle: "Cookie通知",
    cookieText: "当サイトでは、体験向上と関連広告表示のためにCookieを使用しています。続けることで、当社の ",
    cookieAccept: "同意する",
    cookiePolicy: "プライバシーポリシー",
    headerBrandSubtitle: "テキスト、開発、SEOツール",
    headerBlog: "ブログ",
    headerTools: "ツール",
    headerTheme: "テーマ",
    drawerBlog: "ブログ",
    breadcrumbHome: "ホーム",
    breadcrumbTools: "ツール",
    breadcrumbBlog: "ブログ",
    onlineTool: "オンラインツール",
    guidedPractice: "実践ガイド",
    pageBackLink: "← ホームに戻る",
    pageAbout: "概要",
    pageContact: "お問い合わせ",
    pagePrivacy: "プライバシー",
    pageTerms: "利用規約",
    mobileMenuBtn: "ツールメニューを開く"
  },

  ru: {
    pageTitle: "Онлайн-конвертер текста",
    desc: "Конвертируйте текст онлайн бесплатно.",
    brandSubtitle: "Конвертируйте заглавные и строчные буквы онлайн бесплатно.",
    theme: "Тема",
    editorPanelTitle: "Редактор",
    editorPanelCopy: "Вставьте текст, преобразуйте его в нужный формат и продолжайте работу, не покидая страницу.",
    mainTitle: "Конвертер текста",
    subtitle: "Преобразуйте текст быстро",
    input: "Введите текст...",
    share: "Поделиться",
    download: "Скачать текст",
    charCountLabel: "Количество символов",
    wordCountLabel: "Количество слов",
    lineCountLabel: "Количество строк",
    toolbarIntro: "Выберите одну из 8 функций ниже, чтобы применить формат непосредственно к тексту.",
    uppercaseToolbar: "Заглавные буквы",
    lowercaseToolbar: "Строчные буквы",
    strikethroughToolbar: "Зачеркнутый текст",
    titleCaseToolbar: "Регистр заголовка",
    reverseToolbarHome: "Обратный текст",
    alternatingToolbar: "Чередование",
    italicToolbar: "Курсив",
    morseToolbar: "Азбука Морзе",
    summaryTitle: "Краткое описание",
    summaryCopy: "Единый интерфейс для редактирования, преобразования и проверки текста за секунды.",
    featureTitle1: "Мгновенное преобразование",
    featureDesc1: "Форматы применяются непосредственно в редакторе без лишних шагов.",
    featureTitle2: "Готовые языки",
    featureDesc2: "Русский, английский, португальский и испанский в одном интерфейсе.",
    featureTitle3: "Простой поток",
    featureDesc3: "Копируйте, очищайте и проверяйте метрики, не выходя из основного блока.",
    tipsPanelTitle: "Быстрые советы",
    tipsPanelCopy: "Визуальные подсказки для поддержания единообразия текста.",
    tipTitle1: "Стандартизируйте заголовки",
    tipDesc1: "Используйте ConvertTextEasy для заголовков, разделов и основных призывов.",
    tipTitle2: "Очищайте вставленный текст",
    tipDesc2: "Нормализуйте регистр, удаляйте визуальный шум и копируйте обработанный текст.",
    upper: "ЗАГЛАВНЫЕ",
    lower: "строчные",
    sentence: "Регистр предложения",
    titleCase: "Регистр заголовка",
    alternating: "Чередование",
    reverse: "Обратный текст",
    camelToolbar: "Формат заголовка",
    reverseToolbar: "О б р а т н ы й",
    mirror: "Зеркальный текст",
    accent: "Удалить диакритические знаки",
    copy: "Копировать",
    clear: "Очистить",
    sectionBasicTitle: "Базовые случаи",
    sectionBasicDesc: "Преобразуйте текст в заглавные или строчные буквы или примените простые случаи для стандартизации.",
    sectionAdvancedTitle: "Продвинутые случаи",
    sectionAdvancedDesc: "Креативные чередования и стили программирования для динамических текстов.",
    sectionTransformTitle: "Преобразования текста",
    sectionTransformDesc: "Инвертируйте, отражайте или удаляйте диакритические знаки для визуальных эффектов и очистки.",
    sectionActionsTitle: "Действия",
    sectionActionsDesc: "Скопируйте результат или очистите поля, чтобы начать заново.",
    seoTitle: "Что такое конвертер текста?",
    seoText: "Онлайн-инструмент для преобразования текста в различные форматы.",
    seoExplain: "Этот редактор позволяет преобразовывать текст в заглавные буквы, строчные, регистр заголовка, зачеркнутый, обратный, чередующийся, курсив и азбуку Морзе.",
    seoUsage: "Просто вставьте текст в редактор, выберите нужную функцию и скопируйте результат для использования где угодно.",
    toolTitle1: "🔡 Строчные буквы",
    toolDesc1: "Преобразуйте весь текст в строчные буквы.",
    toolTitle2: "🔡 Заглавные буквы",
    toolDesc2: "Преобразуйте весь текст в заглавные буквы.",
    toolTitle3: "🔤 Зачеркнутый текст",
    toolDesc3: "Автоматически создавайте зачеркнутый текст.",
    toolTitle4: "📝 Регистр заголовка",
    toolDesc4: "Первая буква каждого слова заглавная.",
    toolTitle5: "🔄 Обратный текст",
    toolDesc5: "Инвертируйте ваш текст.",
    toolTitle6: "🔀 Чередование",
    toolDesc6: "Чередуйте заглавные и строчные буквы.",
    toolTitle7: "📜 Курсив",
    toolDesc7: "Создает стилизованный курсивный текст.",
    toolTitle8: "💻 Азбука Морзе",
    toolDesc8: "Переведите текст в азбуку Морзе.",
    sidebarTools: "🛠️ Инструменты",
    sidebarConverter: "📝 Конвертер текста",
    sidebarAbout: "ℹ️ О нас",
    sidebarMoreTools: "🔧 Другие инструменты",
    sidebarContact: "📧 Контакты",
    sidebarFeatures: "Возможности",
    footerTitle: "Онлайн-конвертер текста",
    footerBrandSubtitle: "Конвертер текста",
    footerDesc: "Бесплатный инструмент для преобразования текста в различные форматы. Поддержка нескольких языков и тем.",
    footerLinks: "Полезные ссылки",
    footerHome: "Главная",
    footerTool1: "Зачеркнутый текст",
    footerTool2: "Регистр заголовка",
    footerTool3: "Обратный текст",
    footerPrivacy: "Политика конфиденциальности",
    footerTerms: "Условия использования",
    footerAbout: "О нас",
    footerContact: "Контакты",
    footerCopyright: "© 2026 Онлайн-конвертер текста. Все права защищены.",
    newsletterTitle: "Будьте в курсе",
    newsletterCopy: "Получайте советы и новые инструменты по электронной почте.",
    newsletterPlaceholder: "Ваш email",
    newsletterButton: "Подписаться",
    allToolsTitle: "Все онлайн-инструменты",
    allToolsDesc: "Отдельные страницы с заголовком, описанием, руководством, FAQ, примерами, canonical и schema.org.",
    blogTitle: "Блог — Практические руководства по тексту, SEO и разработке",
    blogDesc: "Более 20 реальных руководств по тексту, JSON, XML, CSV, regex, кодированию и техническому SEO, чтобы помочь вам лучше работать с цифровым контентом.",
    blogEyebrow: "Индексируемый блог",
    blogTitleAlt: "Практические руководства по тексту, SEO и разработке",
    blogDescAlt: "Оптимизированные статьи с объяснениями, примерами и связанными инструментами. Научитесь лучше работать с текстом, техническими данными и поисковой оптимизацией.",
    skipLink: "Перейти к основному содержанию",
    langSelectAria: "Выбрать язык",
    inputAria: "Текстовая область для преобразования",
    copyBtn: "Копировать текст",
    clearBtn: "Очистить текст",
    errorHeading: "Страница не найдена",
    errorText: "Извините, страница, которую вы ищете, не существует или была перемещена.",
    errorBackHome: "На главную",
    errorVisitBlog: "Посетить блог",
    cookieTitle: "Уведомление о cookie",
    cookieText: "Мы используем cookie для улучшения вашего опыта и показа релевантной рекламы. Продолжая, вы соглашаетесь с нашей ",
    cookieAccept: "Принять",
    cookiePolicy: "Политикой конфиденциальности",
    headerBrandSubtitle: "Инструменты для текста, разработки и SEO",
    headerBlog: "Блог",
    headerTools: "Инструменты",
    headerTheme: "Тема",
    drawerBlog: "Блог",
    breadcrumbHome: "Главная",
    breadcrumbTools: "Инструменты",
    breadcrumbBlog: "Блог",
    onlineTool: "Онлайн-инструмент",
    guidedPractice: "Практическое руководство",
    pageBackLink: "← На главную",
    pageAbout: "О нас",
    pageContact: "Контакты",
    pagePrivacy: "Конфиденциальность",
    pageTerms: "Условия",
    mobileMenuBtn: "Открыть меню инструментов"
  },

  ar: {
    pageTitle: "محول النص أونلاين",
    desc: "حول النص مجانًا أونلاين.",
    brandSubtitle: "حول الأحرف الكبيرة والصغيرة مجانًا أونلاين.",
    theme: "السمة",
    editorPanelTitle: "المحرر",
    editorPanelCopy: "الصق نصك، وحوله إلى التنسيق المطلوب، واستمر في العمل دون مغادرة الصفحة.",
    mainTitle: "محول النص",
    subtitle: "حول نصوصك بسرعة",
    input: "اكتب نصك...",
    share: "مشاركة",
    download: "تحميل النص",
    charCountLabel: "عدد الأحرف",
    wordCountLabel: "عدد الكلمات",
    lineCountLabel: "عدد الأسطر",
    toolbarIntro: "اختر واحدة من 8 وظائف أدناه لتطبيق التنسيق مباشرة على النص.",
    uppercaseToolbar: "أحرف كبيرة",
    lowercaseToolbar: "أحرف صغيرة",
    strikethroughToolbar: "نص مشطوب",
    titleCaseToolbar: "تنسيق العنوان",
    reverseToolbarHome: "نص معكوس",
    alternatingToolbar: "تبادل الأحرف",
    italicToolbar: "نص مائل",
    morseToolbar: "شفرة مورس",
    summaryTitle: "ملخص",
    summaryCopy: "واجهة واحدة لتحرير النص وتحويله ومراجعته في ثوانٍ.",
    featureTitle1: "تحويل فوري",
    featureDesc1: "يتم تطبيق التنسيقات مباشرة في المحرر دون خطوات إضافية.",
    featureTitle2: "لغات جاهزة",
    featureDesc2: "العربية والإنجليزية والبرتغالية والإسبانية في نفس الواجهة.",
    featureTitle3: "تدفق بسيط",
    featureDesc3: "انسخ، امسح، وراجع المقاييس دون مغادرة الكتلة الرئيسية.",
    tipsPanelTitle: "نصائح سريعة",
    tipsPanelCopy: "اختصارات بصرية للحفاظ على اتساق النص.",
    tipTitle1: "توحيد العناوين",
    tipDesc1: "استخدم ConvertTextEasy للعناوين والأقسام والنداءات الرئيسية.",
    tipTitle2: "تنظيف النصوص الملصقة",
    tipDesc2: "طبيع حالة الأحرف، أزل الضوضاء البصرية، وأعد نسخ النص المعالج.",
    upper: "كبير",
    lower: "صغير",
    sentence: "حالة الجملة",
    titleCase: "تنسيق العنوان",
    alternating: "تبادل",
    reverse: "نص معكوس",
    camelToolbar: "تنسيق العنوان",
    reverseToolbar: "مكوسع",
    mirror: "نص مرآة",
    accent: "إزالة التشكيل",
    copy: "نسخ",
    clear: "مسح",
    sectionBasicTitle: "الحالات الأساسية",
    sectionBasicDesc: "حول النص إلى أحرف كبيرة أو صغيرة، أو طبق حالات بسيطة للتوحيد.",
    sectionAdvancedTitle: "الحالات المتقدمة",
    sectionAdvancedDesc: "تبادلات إبداعية وأنماط برمجة للنصوص الديناميكية.",
    sectionTransformTitle: "تحويلات النص",
    sectionTransformDesc: "اعكس، أو مرآة، أو أزل التشكيل للتأثيرات البصرية والتنظيف.",
    sectionActionsTitle: "إجراءات",
    sectionActionsDesc: "انسخ النتيجة أو امسح الحقول لبدء من جديد.",
    seoTitle: "ما هو محول النص؟",
    seoText: "أداة أونلاين لتحويل النص إلى تنسيقات مختلفة.",
    seoExplain: "يتيح لك هذا المحرر تحويل نصك إلى أحرف كبيرة، صغيرة، تنسيق عنوان، مشطوب، معكوس، متبادل، مائل وشفرة مورس.",
    seoUsage: "ما عليك سوى لصق النص في المحرر، اختر الوظيفة المطلوبة، وانسخ النتيجة لاستخدامها في أي مكان.",
    toolTitle1: "🔡 أحرف صغيرة",
    toolDesc1: "حول النص بأكمله إلى أحرف صغيرة.",
    toolTitle2: "🔡 أحرف كبيرة",
    toolDesc2: "حول النص بأكمله إلى أحرف كبيرة.",
    toolTitle3: "🔤 نص مشطوب",
    toolDesc3: "أنشئ نصًا مشطوبًا تلقائيًا.",
    toolTitle4: "📝 تنسيق العنوان",
    toolDesc4: "الحرف الأول من كل كلمة كبير.",
    toolTitle5: "🔄 نص معكوس",
    toolDesc5: "اعكس نصك.",
    toolTitle6: "🔀 تبادل",
    toolDesc6: "تبديل الأحرف الكبيرة والصغيرة.",
    toolTitle7: "📜 نص مائل",
    toolDesc7: "ينشئ نصًا منمقًا مائلًا.",
    toolTitle8: "💻 شفرة مورس",
    toolDesc8: "ترجمة النص إلى شفرة مورس.",
    sidebarTools: "🛠️ أدوات",
    sidebarConverter: "📝 محول النص",
    sidebarAbout: "ℹ️ حول",
    sidebarMoreTools: "🔧 أدوات أخرى",
    sidebarContact: "📧 اتصال",
    sidebarFeatures: "الميزات",
    footerTitle: "محول النص أونلاين",
    footerBrandSubtitle: "محول النص",
    footerDesc: "أداة مجانية لتحويل النص إلى تنسيقات مختلفة. دعم لغات وسمات متعددة.",
    footerLinks: "روابط مفيدة",
    footerHome: "الصفحة الرئيسية",
    footerTool1: "نص مشطوب",
    footerTool2: "تنسيق العنوان",
    footerTool3: "نص معكوس",
    footerPrivacy: "سياسة الخصوصية",
    footerTerms: "شروط الاستخدام",
    footerAbout: "معلومات عنا",
    footerContact: "اتصل بنا",
    footerCopyright: "© 2026 محول النص أونلاين. جميع الحقوق محفوظة.",
    newsletterTitle: "ابق على اطلاع",
    newsletterCopy: "تلقي النصائح والأدوات الجديدة عبر البريد الإلكتروني.",
    newsletterPlaceholder: "بريدك الإلكتروني",
    newsletterButton: "اشتراك",
    allToolsTitle: "جميع الأدوات أونلاين",
    allToolsDesc: "صفحات فردية مع عنوان ووصف ودليل وأسئلة شائعة وأمثلة ورابط أساسي و schema.org.",
    blogTitle: "المدونة — أدلة عملية حول النص وتحسين محركات البحث والتطوير",
    blogDesc: "أكثر من 20 دليلاً حقيقياً حول النص و JSON و XML و CSV والتعبيرات العادية والترميز وتحسين محركات البحث التقني لمساعدتك في العمل بشكل أفضل مع المحتوى الرقمي.",
    blogEyebrow: "مدونة قابلة للفهرسة",
    blogTitleAlt: "أدلة عملية حول النص وتحسين محركات البحث والتطوير",
    blogDescAlt: "مقالات محسّنة مع شروحات وأمثلة وأدوات ذات صلة. تعلم كيفية العمل بشكل أفضل مع النص والبيانات التقنية وتحسين محركات البحث.",
    skipLink: "التجاوز إلى المحتوى الرئيسي",
    langSelectAria: "اختر اللغة",
    inputAria: "منطقة النص للتحويل",
    copyBtn: "نسخ النص",
    clearBtn: "مسح النص",
    errorHeading: "الصفحة غير موجودة",
    errorText: "عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
    errorBackHome: "العودة إلى الصفحة الرئيسية",
    errorVisitBlog: "زيارة المدونة",
    cookieTitle: "إشعار ملفات تعريف الارتباط",
    cookieText: "نستخدم ملفات تعريف الارتباط لتحسين تجربتك وعرض إعلانات ذات صلة. بالمتابعة، أنت توافق على ",
    cookieAccept: "قبول",
    cookiePolicy: "سياسة الخصوصية",
    headerBrandSubtitle: "أدوات النص والتطوير وتحسين محركات البحث",
    headerBlog: "المدونة",
    headerTools: "الأدوات",
    headerTheme: "السمة",
    drawerBlog: "المدونة",
    breadcrumbHome: "الرئيسية",
    breadcrumbTools: "الأدوات",
    breadcrumbBlog: "المدونة",
    onlineTool: "أداة أونلاين",
    guidedPractice: "دليل عملي",
    pageBackLink: "← العودة إلى الرئيسية",
    pageAbout: "حول",
    pageContact: "اتصل بنا",
    pagePrivacy: "الخصوصية",
    pageTerms: "الشروط",
    mobileMenuBtn: "فتح قائمة الأدوات"
  }
};

const toolCardTitles = {
  "uppercase-text": { pt: "Conversor para Maiúsculas", en: "Uppercase Converter", es: "Conversor a Mayúsculas", fr: "Convertisseur en Majuscules", de: "Großbuchstaben-Konverter", it: "Convertitore in Maiuscolo", zh: "大写转换器", ja: "大文字変換", ru: "Преобразователь в заглавные", ar: "محول إلى أحرف كبيرة" },
  "lowercase-text": { pt: "Conversor para Minúsculas", en: "Lowercase Converter", es: "Conversor a Minúsculas", fr: "Convertisseur en Minuscules", de: "Kleinbuchstaben-Konverter", it: "Convertitore in Minuscolo", zh: "小写转换器", ja: "小文字変換", ru: "Преобразователь в строчные", ar: "محول إلى أحرف صغيرة" },
  "capitalize-text": { pt: "Capitalização de Texto", en: "Capitalize Text", es: "Capitalización de Texto", fr: "Capitalisation de Texte", de: "Text kapitalisieren", it: "Capitalizzazione del Testo", zh: "首字母大写", ja: "先頭大文字化", ru: "Капитализация текста", ar: "تكبير النص" },
  "smart-capitalization": { pt: "Capitalização Inteligente", en: "Smart Capitalization", es: "Capitalización Inteligente", fr: "Capitalisation Intelligente", de: "Intelligente Großschreibung", it: "Capitalizzazione Intelligente", zh: "智能大写", ja: "スマート大文字化", ru: "Умная капитализация", ar: "تكبير ذكي" },
  "reverse-text": { pt: "Inverter Texto", en: "Reverse Text", es: "Invertir Texto", fr: "Inverser le Texte", de: "Text umkehren", it: "Inverti Testo", zh: "反转文本", ja: "テキスト反転", ru: "Переворот текста", ar: "عكس النص" },
  "alternating-case": { pt: "Texto Alternado", en: "Alternating Case", es: "Texto Alternado", fr: "Texte Alterné", de: "Wechselnde Groß-/Kleinschreibung", it: "Testo Alternato", zh: "交替大小写", ja: "交互大文字小文字", ru: "Чередование регистра", ar: "حالة متناوبة" },
  "italic-text": { pt: "Texto Itálico Unicode", en: "Italic Text", es: "Texto Itálico", fr: "Texte en Italique", de: "Kursiver Text", it: "Testo in Corsivo", zh: "斜体文本", ja: "斜体テキスト", ru: "Курсивный текст", ar: "نص مائل" },
  "strikethrough-text": { pt: "Texto Tachado", en: "Strikethrough Text", es: "Texto Tachado", fr: "Texte Barré", de: "Durchgestrichener Text", it: "Testo Barrato", zh: "删除线文本", ja: "取り消し線テキスト", ru: "Зачеркнутый текст", ar: "نص مشطوب" },
  "morse-code-translator": { pt: "Tradutor de Código Morse", en: "Morse Code Translator", es: "Traductor de Código Morse", fr: "Traducteur de Code Morse", de: "Morse-Code-Übersetzer", it: "Traduttore di Codice Morse", zh: "摩斯密码翻译器", ja: "モールス信号翻訳", ru: "Переводчик азбуки Морзе", ar: "مترجم شفرة مورس" },
  "contador-caracteres": { pt: "Contador de Caracteres", en: "Character Counter", es: "Contador de Caracteres", fr: "Compteur de Caractères", de: "Zeichenzähler", it: "Contatore di Caratteri", zh: "字符计数器", ja: "文字数カウンター", ru: "Счетчик символов", ar: "عداد الأحرف" },
  "contador-palavras": { pt: "Contador de Palavras", en: "Word Counter", es: "Contador de Palabras", fr: "Compteur de Mots", de: "Wortzähler", it: "Contatore di Parole", zh: "单词计数器", ja: "単語数カウンター", ru: "Счетчик слов", ar: "عداد الكلمات" },
  "removedor-espacos": { pt: "Removedor de Espaços Extras", en: "Extra Spaces Remover", es: "Eliminador de Espacios Extra", fr: "Suppresseur d'Espaces Superflus", de: "Extra-Leerzeichen-Entferner", it: "Rimuovi Spazi Extra", zh: "多余空格删除器", ja: "余分なスペース削除", ru: "Удаление лишних пробелов", ar: "إزالة المسافات الزائدة" },
  "removedor-linhas-vazias": { pt: "Removedor de Linhas Vazias", en: "Empty Lines Remover", es: "Eliminador de Líneas Vacías", fr: "Suppresseur de Lignes Vides", de: "Leerzeilen-Entferner", it: "Rimuovi Righe Vuote", zh: "空行删除器", ja: "空行削除", ru: "Удаление пустых строк", ar: "إزالة الأسطر الفارغة" },
  "texto-aleatorio": { pt: "Gerador de Texto Aleatório", en: "Random Text Generator", es: "Generador de Texto Aleatorio", fr: "Générateur de Texte Aléatoire", de: "Zufallstext-Generator", it: "Generatore di Testo Casuale", zh: "随机文本生成器", ja: "ランダムテキスト生成", ru: "Генератор случайного текста", ar: "مولد نص عشوائي" },
  "json-formatter": { pt: "JSON Formatter", en: "JSON Formatter", es: "JSON Formatter", fr: "JSON Formatter", de: "JSON-Formatierer", it: "JSON Formatter", zh: "JSON 格式化工具", ja: "JSONフォーマッター", ru: "Форматировщик JSON", ar: "منسق JSON" },
  "json-validator": { pt: "Validador de JSON", en: "JSON Validator", es: "Validador de JSON", fr: "Validateur JSON", de: "JSON-Validator", it: "Validatore JSON", zh: "JSON 验证器", ja: "JSONバリデーター", ru: "Валидатор JSON", ar: "مدقق JSON" },
  "jwt-decoder": { pt: "JWT Decoder", en: "JWT Decoder", es: "JWT Decoder", fr: "JWT Decoder", de: "JWT-Decoder", it: "JWT Decoder", zh: "JWT 解码器", ja: "JWTデコーダー", ru: "Декодер JWT", ar: "مفكك JWT" },
  "base64-encode-decode": { pt: "Base64 Encode Decode", en: "Base64 Encode / Decode", es: "Base64 Encode / Decode", fr: "Base64 Encode / Decode", de: "Base64 kodieren / dekodieren", it: "Base64 Encode / Decode", zh: "Base64 编码/解码", ja: "Base64エンコード/デコード", ru: "Base64 кодирование/декодирование", ar: "ترميز/فك Base64" },
  "base64-decode": { pt: "Base64 Decode", en: "Base64 Decode", es: "Base64 Decode", fr: "Base64 Decode", de: "Base64-Dekodierung", it: "Base64 Decode", zh: "Base64 解码", ja: "Base64デコード", ru: "Декодирование Base64", ar: "فك Base64" },
  "base64-encode": { pt: "Base64 Encode", en: "Base64 Encode", es: "Base64 Encode", fr: "Base64 Encode", de: "Base64-Kodierung", it: "Base64 Encode", zh: "Base64 编码", ja: "Base64エンコード", ru: "Кодирование Base64", ar: "ترميز Base64" },
  "url-encoder": { pt: "URL Encoder", en: "URL Encoder", es: "URL Encoder", fr: "Encodeur d'URL", de: "URL-Encoder", it: "URL Encoder", zh: "URL 编码器", ja: "URLエンコーダー", ru: "Кодировщик URL", ar: "مشفر URL" },
  "uuid-generator": { pt: "Gerador de UUID", en: "UUID Generator", es: "Generador de UUID", fr: "Générateur d'UUID", de: "UUID-Generator", it: "Generatore di UUID", zh: "UUID 生成器", ja: "UUID生成器", ru: "Генератор UUID", ar: "مولد UUID" },
  "hash-generator": { pt: "Hash Generator", en: "Hash Generator", es: "Hash Generator", fr: "Générateur de Hash", de: "Hash-Generator", it: "Generatore di Hash", zh: "哈希生成器", ja: "ハッシュ生成器", ru: "Генератор хеша", ar: "مولد التجزئة" },
  "timestamp-converter": { pt: "Timestamp Converter", en: "Timestamp Converter", es: "Conversor de Timestamp", fr: "Convertisseur de Timestamp", de: "Timestamp-Konverter", it: "Convertitore di Timestamp", zh: "时间戳转换器", ja: "タイムスタンプ変換", ru: "Конвертер временных меток", ar: "محول الطابع الزمني" },
  "meta-tag-generator": { pt: "Meta Tag Generator", en: "Meta Tag Generator", es: "Generador de Meta Tags", fr: "Générateur de Meta Tags", de: "Meta-Tag-Generator", it: "Generatore di Meta Tag", zh: "Meta 标签生成器", ja: "メタタグ生成器", ru: "Генератор мета-тегов", ar: "مولد العلامات الوصفية" },
  "slug-generator": { pt: "Slug Generator", en: "Slug Generator", es: "Generador de Slug", fr: "Générateur de Slug", de: "Slug-Generator", it: "Generatore di Slug", zh: "Slug 生成器", ja: "スラッグ生成器", ru: "Генератор слаг-ов", ar: "مولد الرابط النصي" },
  "keyword-density-checker": { pt: "Keyword Density Checker", en: "Keyword Density Checker", es: "Comprobador de Densidad de Palabras Clave", fr: "Vérificateur de Densité de Mots-Clés", de: "Keyword-Density-Prüfer", it: "Controllore di Densità delle Parole Chiave", zh: "关键词密度检查器", ja: "キーワード密度チェッカー", ru: "Проверка плотности ключевых слов", ar: "مدقق كثافة الكلمات المفتاحية" },
  "xml-formatter": { pt: "Formatador de XML", en: "XML Formatter", es: "Formateador de XML", fr: "Formateur XML", de: "XML-Formatierer", it: "Formattatore XML", zh: "XML 格式化工具", ja: "XMLフォーマッター", ru: "Форматировщик XML", ar: "منسق XML" },
  "csv-to-json": { pt: "Conversor CSV para JSON", en: "CSV to JSON Converter", es: "Conversor de CSV a JSON", fr: "Convertisseur CSV en JSON", de: "CSV-zu-JSON-Konverter", it: "Convertitore da CSV a JSON", zh: "CSV 转 JSON 转换器", ja: "CSVからJSONへの変換", ru: "Конвертер CSV в JSON", ar: "محول CSV إلى JSON" },
  "remove-accents": { pt: "Removedor de Acentos", en: "Accent Remover", es: "Eliminador de Acentos", fr: "Suppresseur d'Accents", de: "Akzent-Entferner", it: "Rimuovi Accenti", zh: "重音符号删除器", ja: "アクセント削除", ru: "Удаление диакритических знаков", ar: "إزالة التشكيل" },
  "clean-special-characters": { pt: "Limpador de Caracteres Especiais", en: "Clean Special Characters", es: "Limpiador de Caracteres Especiales", fr: "Nettoyeur de Caractères Spéciaux", de: "Sonderzeichen-Reiniger", it: "Pulisci Caratteri Speciali", zh: "特殊字符清理器", ja: "特殊文字クリーナー", ru: "Очистка специальных символов", ar: "منظف الأحرف الخاصة" },
};

const toolCardDescs = {
  "uppercase-text": { pt: "Converta texto para MAIÚSCULAS online, grátis e com contagem de caracteres.", en: "Convert text to UPPERCASE online, free, with character counting.", es: "Convierta texto a MAYÚSCULAS online, gratis y con conteo de caracteres.", fr: "Convertissez du texte en MAJUSCULES en ligne, gratuitement.", de: "Wandeln Sie Text in GROSSBUCHSTABEN um, kostenlos online.", it: "Converti testo in MAIUSCOLO online, gratis e con conteggio caratteri.", zh: "在线将文本转换为大写，免费且带字符计数功能。", ja: "テキストを大文字に変換、オンラインで無料、文字数カウント付き。", ru: "Преобразуйте текст в ВЕРХНИЙ РЕГИСТР онлайн, бесплатно.", ar: "حوّل النص إلى أحرف كبيرة أونلاين مجاناً مع عدد الأحرف." },
  "lowercase-text": { pt: "Transforme textos em letras minúsculas para padronizar cadastros, listas e conteúdos.", en: "Convert text to lowercase to standardize records, lists and content.", es: "Convierta textos a minúsculas para estandarizar registros, listas y contenidos.", fr: "Convertissez des textes en minuscules pour uniformiser les données.", de: "Wandeln Sie Text in Kleinbuchstaben um, um Einträge zu vereinheitlichen.", it: "Converti testo in minuscolo per standardizzare registri, elenchi e contenuti.", zh: "将文本转为小写，统一记录、列表和内容的格式。", ja: "テキストを小文字に変換し、レコードやリストを統一。", ru: "Преобразуйте текст в нижний регистр для стандартизации записей.", ar: "حوّل النصوص إلى أحرف صغيرة لتوحيد السجلات والقوائم." },
  "capitalize-text": { pt: "Coloque iniciais em maiúsculas e deixe títulos, nomes e chamadas mais legíveis.", en: "Capitalize initials and make titles, names and headlines more readable.", es: "Ponga iniciales en mayúsculas y haga títulos, nombres y titulares más legibles.", fr: "Mettez les initiales en majuscules pour des titres et noms plus lisibles.", de: "Initialen großschreiben für lesbarere Titel, Namen und Überschriften.", it: "Metti le iniziali in maiuscolo per rendere titoli, nomi e intestazioni più leggibili.", zh: "将首字母大写，让标题、名称和标语更易读。", ja: "頭文字を大文字にして、タイトルや名前を見やすくします。", ru: "Сделайте заглавные буквы в начале слов для читаемости.", ar: "اجعل الحروف الأولى كبيرة لتحسين قراءة العناوين والأسماء." },
  "smart-capitalization": { pt: "Ajuste frases com primeira letra maiúscula após pontos, perguntas e exclamações.", en: "Adjust sentences with capital first letter after periods, questions and exclamations.", es: "Ajuste oraciones con primera letra mayúscula tras puntos, preguntas y exclamaciones.", fr: "Corrigez les phrases avec majuscule après points, questions et exclamations.", de: "Sätze mit Großschreibung nach Punkten, Fragen und Ausrufen.", it: "Regola le frasi con la prima lettera maiuscola dopo punti, domande ed esclamazioni.", zh: "调整句子，在句号、问号和感叹号后将首字母大写。", ja: "ピリオド、疑問符、感嘆符の後に最初の文字を大文字に。", ru: "Исправьте предложения с заглавной буквы после точек и знаков.", ar: "اضبط الجمل بحرف أول كبير بعد النقاط وعلامات الاستفهام والتعجب." },
  "reverse-text": { pt: "Inverta caracteres de palavras e frases em segundos.", en: "Reverse characters of words and sentences in seconds.", es: "Invierta caracteres de palabras y frases en segundos.", fr: "Inversez les caractères des mots et phrases en quelques secondes.", de: "Kehren Sie die Zeichen von Wörtern und Sätzen um.", it: "Inverti i caratteri di parole e frasi in pochi secondi.", zh: "在几秒钟内反转单词和句子的字符顺序。", ja: "単語や文章の文字を数秒で反転します。", ru: "Переверните символы слов и предложений за секунды.", ar: "اعكس ترتيب أحرف الكلمات والجمل في ثوانٍ." },
  "alternating-case": { pt: "Gere letras alternadas entre maiúsculas e minúsculas automaticamente.", en: "Generate alternating uppercase and lowercase letters automatically.", es: "Genere letras alternadas entre mayúsculas y minúsculas automáticamente.", fr: "Générez des lettres alternant majuscules et minuscules automatiquement.", de: "Automatisch zwischen Groß- und Kleinbuchstaben wechseln.", it: "Genera lettere alternate tra maiuscolo e minuscolo automaticamente.", zh: "自动生成交替大小写的字母。", ja: "大文字と小文字を自動的に交互に生成します。", ru: "Автоматически чередуйте заглавные и строчные буквы.", ar: "أنشئ أحرفاً متناوبة بين الكبيرة والصغيرة تلقائياً." },
  "italic-text": { pt: "Converta texto comum em caracteres Unicode com aparência itálica.", en: "Convert plain text into Unicode characters with italic appearance.", es: "Convierta texto común en caracteres Unicode con apariencia itálica.", fr: "Convertissez du texte brut en caractères Unicode à l'apparence italique.", de: "Wandeln Sie einfachen Text in Unicode-Zeichen mit kursivem Aussehen um.", it: "Converti testo normale in caratteri Unicode con aspetto corsivo.", zh: "将普通文本转换为具有斜体外观的Unicode字符。", ja: "プレーンテキストを斜体のUnicode文字に変換します。", ru: "Преобразуйте обычный текст в курсивные символы Unicode.", ar: "حوّل النص العادي إلى أحرف يونيكود بمظهر مائل." },
  "strikethrough-text": { pt: "Aplique o efeito riscado em cada caractere do texto.", en: "Apply strikethrough effect to each character of the text.", es: "Aplique el efecto tachado a cada carácter del texto.", fr: "Appliquez l'effet barré à chaque caractère du texte.", de: "Wenden Sie den Durchstreicheffekt auf jedes Zeichen an.", it: "Applica l'effetto barrato a ogni carattere del testo.", zh: "对文本的每个字符应用删除线效果。", ja: "テキストの各文字に打消し線効果を適用します。", ru: "Примените эффект зачёркивания к каждому символу.", ar: "طبّق تأثير الخط المشطوب على كل حرف في النص." },
  "morse-code-translator": { pt: "Converta letras, números e sinais comuns para código Morse.", en: "Convert letters, numbers and common signs to Morse code.", es: "Convierta letras, números y signos comunes a código Morse.", fr: "Convertissez lettres, chiffres et signes courants en code Morse.", de: "Wandeln Sie Buchstaben, Zahlen und Zeichen in Morsecode um.", it: "Converti lettere, numeri e segni comuni in codice Morse.", zh: "将字母、数字和常见符号转换为摩斯密码。", ja: "文字、数字、一般的な記号をモールス信号に変換。", ru: "Преобразуйте буквы, цифры и знаки в азбуку Морзе.", ar: "حوّل الحروف والأرقام والعلامات الشائعة إلى شفرة مورس." },
  "contador-caracteres": { pt: "Conte caracteres, palavras e linhas online em tempo real.", en: "Count characters, words and lines online in real time.", es: "Cuente caracteres, palabras y líneas online en tiempo real.", fr: "Comptez caractères, mots et lignes en ligne en temps réel.", de: "Zählen Sie Zeichen, Wörter und Zeilen online in Echtzeit.", it: "Conta caratteri, parole e righe online in tempo reale.", zh: "在线实时统计字符、单词和行数。", ja: "文字数、単語数、行数をオンラインでリアルタイムにカウント。", ru: "Считайте символы, слова и строки онлайн в реальном времени.", ar: "احسب الأحرف والكلمات والأسطر أونلاين في الوقت الفعلي." },
  "contador-palavras": { pt: "Conte palavras online para artigos, posts, anúncios e trabalhos.", en: "Count words online for articles, posts, ads and assignments.", es: "Cuente palabras online para artículos, publicaciones, anuncios y trabajos.", fr: "Comptez les mots en ligne pour articles, posts, annonces et devoirs.", de: "Zählen Sie Wörter online für Artikel, Beiträge, Anzeigen und Aufgaben.", it: "Conta le parole online per articoli, post, annunci e lavori.", zh: "为文章、帖子、广告和作业在线统计字数。", ja: "記事、投稿、広告、課題の単語数をオンラインでカウント。", ru: "Считайте слова онлайн для статей, постов, рекламы и заданий.", ar: "احسب الكلمات أونلاين للمقالات والمنشورات والإعلانات والواجبات." },
  "removedor-espacos": { pt: "Remova espaços duplicados e normalize textos colados.", en: "Remove duplicate spaces and normalize pasted texts.", es: "Elimine espacios duplicados y normalice textos pegados.", fr: "Supprimez les espaces en double et normalisez les textes collés.", de: "Entfernen Sie doppelte Leerzeichen und normalisieren Sie eingefügte Texte.", it: "Rimuovi spazi duplicati e normalizza testi incollati.", zh: "去除重复空格并规范化粘贴的文本。", ja: "重複するスペースを削除し、貼り付けたテキストを整形。", ru: "Удалите лишние пробелы и нормализуйте вставленный текст.", ar: "أزل المسافات المكررة ووحّد النصوص الملصقة." },
  "removedor-linhas-vazias": { pt: "Apague linhas em branco mantendo somente conteúdo útil.", en: "Delete blank lines keeping only useful content.", es: "Elimine líneas en blanco manteniendo solo contenido útil.", fr: "Supprimez les lignes vides en ne gardant que le contenu utile.", de: "Löschen Sie leere Zeilen und behalten Sie nur nützliche Inhalte.", it: "Elimina righe vuote mantenendo solo contenuti utili.", zh: "删除空行，只保留有用的内容。", ja: "空行を削除し、有用なコンテンツのみを保持。", ru: "Удалите пустые строки, сохраняя только полезный контент.", ar: "احذف الأسطر الفارغة مع الاحتفاظ بالمحتوى المفيد فقط." },
  "texto-aleatorio": { pt: "Gere texto de exemplo para testes de layout, formulários e protótipos.", en: "Generate sample text for layout tests, forms and prototypes.", es: "Genere texto de ejemplo para pruebas de diseño, formularios y prototipos.", fr: "Générez du texte d'exemple pour tests de mise en page, formulaires et prototypes.", de: "Generieren Sie Beispieltext für Layout-Tests, Formulare und Prototypen.", it: "Genera testo di esempio per test di layout, moduli e prototipi.", zh: "生成用于布局测试、表单和原型的示例文本。", ja: "レイアウトテスト、フォーム、プロトタイプ用のサンプルテキストを生成。", ru: "Сгенерируйте пример текста для тестирования макетов и форм.", ar: "أنشئ نصاً نموذجياً لاختبارات التصميم والنماذج الأولية." },
  "json-formatter": { pt: "Formate JSON online com indentação, validação básica e leitura fácil.", en: "Format JSON online with indentation, basic validation and easy reading.", es: "Formatee JSON online con indentación, validación básica y lectura fácil.", fr: "Formatez JSON en ligne avec indentation, validation de base et lecture facile.", de: "JSON online mit Einrückung, Basisvalidierung und lesbar formatieren.", it: "Formatta JSON online con indentazione, validazione base e lettura facile.", zh: "在线格式化JSON，带缩进、基本验证和易于阅读。", ja: "JSONをオンラインで整形、インデントと基本的な検証付き。", ru: "Форматируйте JSON онлайн с отступами и базовой проверкой.", ar: "نسّق JSON أونلاين مع مسافات بادئة والتحقق الأساسي." },
  "json-validator": { pt: "Valide JSON online e identifique erros de sintaxe rapidamente.", en: "Validate JSON online and quickly identify syntax errors.", es: "Valide JSON online e identifique errores de sintaxis rápidamente.", fr: "Validez du JSON en ligne et identifiez rapidement les erreurs de syntaxe.", de: "JSON online validieren und Syntaxfehler schnell erkennen.", it: "Valida JSON online e identifica rapidamente errori di sintassi.", zh: "在线验证JSON并快速识别语法错误。", ja: "JSONをオンラインで検証し、構文エラーをすばやく特定。", ru: "Проверяйте JSON онлайн и быстро находите ошибки синтаксиса.", ar: "تحقق من JSON أونلاين وحدد أخطاء الصياغة بسرعة." },
  "jwt-decoder": { pt: "Decodifique header e payload de tokens JWT sem enviar dados ao servidor.", en: "Decode JWT token headers and payloads without sending data to the server.", es: "Decodifique header y payload de tokens JWT sin enviar datos al servidor.", fr: "Décodez en-têtes et payload de tokens JWT sans envoyer de données au serveur.", de: "Dekodieren Sie JWT-Header und Payloads ohne Daten an den Server zu senden.", it: "Decodifica header e payload di token JWT senza inviare dati al server.", zh: "解码JWT令牌的头部和负载，无需将数据发送到服务器。", ja: "サーバーにデータを送信せずにJWTトークンのヘッダーとペイロードをデコード。", ru: "Декодируйте заголовки и полезную нагрузку JWT без отправки на сервер.", ar: "فك ترميز header و payload لرموز JWT دون إرسال البيانات للخادم." },
  "base64-encode-decode": { pt: "Codifique e decodifique textos em Base64 no navegador.", en: "Encode and decode Base64 text in the browser.", es: "Codifique y decodifique textos en Base64 en el navegador.", fr: "Encodez et décodez du texte en Base64 dans le navigateur.", de: "Base64-Text im Browser kodieren und dekodieren.", it: "Codifica e decodifica testi in Base64 nel browser.", zh: "在浏览器中编码和解码Base64文本。", ja: "ブラウザでテキストをBase64にエンコード／デコード。", ru: "Кодируйте и декодируйте текст в Base64 в браузере.", ar: "شفر وفك تشفير النصوص بصيغة Base64 في المتصفح." },
  "base64-decode": { pt: "Decodifique Base64 online no navegador.", en: "Decode Base64 online in the browser.", es: "Decodifique Base64 online en el navegador.", fr: "Décodez du Base64 en ligne dans le navigateur.", de: "Base64 online im Browser dekodieren.", it: "Decodifica Base64 online nel browser.", zh: "在浏览器中在线解码Base64。", ja: "ブラウザでオンラインでBase64をデコード。", ru: "Декодируйте Base64 онлайн в браузере.", ar: "فك تشفير Base64 أونلاين في المتصفح." },
  "base64-encode": { pt: "Codifique texto em Base64 online no navegador.", en: "Encode text to Base64 online in the browser.", es: "Codifique texto a Base64 online en el navegador.", fr: "Encodez du texte en Base64 en ligne dans le navigateur.", de: "Text im Browser online in Base64 kodieren.", it: "Codifica testo in Base64 online nel browser.", zh: "在浏览器中在线将文本编码为Base64。", ja: "ブラウザでテキストをBase64にオンラインエンコード。", ru: "Кодируйте текст в Base64 онлайн в браузере.", ar: "شفر النص إلى Base64 أونلاين في المتصفح." },
  "url-encoder": { pt: "Codifique e decodifique URLs, parâmetros e caracteres especiais.", en: "Encode and decode URLs, parameters and special characters.", es: "Codifique y decodifique URLs, parámetros y caracteres especiales.", fr: "Encodez et décodez URLs, paramètres et caractères spéciaux.", de: "Kodieren und dekodieren Sie URLs, Parameter und Sonderzeichen.", it: "Codifica e decodifica URL, parametri e caratteri speciali.", zh: "编码和解码URL、参数和特殊字符。", ja: "URL、パラメータ、特殊文字をエンコード／デコード。", ru: "Кодируйте и декодируйте URL, параметры и спецсимволы.", ar: "شفر وفك تشفير الروابط والمعاملات والأحرف الخاصة." },
  "uuid-generator": { pt: "Gere UUID v4 aleatório para testes, registros e identificadores.", en: "Generate random UUID v4 for tests, records and identifiers.", es: "Genere UUID v4 aleatorio para pruebas, registros e identificadores.", fr: "Générez des UUID v4 aléatoires pour tests, enregistrements et identifiants.", de: "Generieren Sie zufällige UUID v4 für Tests, Datensätze und IDs.", it: "Genera UUID v4 casuale per test, registri e identificatori.", zh: "生成随机的UUID v4，用于测试、记录和标识符。", ja: "テスト、レコード、識別子用にランダムなUUID v4を生成。", ru: "Сгенерируйте случайный UUID v4 для тестов и идентификаторов.", ar: "أنشئ UUID v4 عشوائياً للاختبارات والسجلات والمعرفات." },
  "hash-generator": { pt: "Gere hashes SHA-256 de textos diretamente no navegador.", en: "Generate SHA-256 hashes of text directly in the browser.", es: "Genere hashes SHA-256 de textos directamente en el navegador.", fr: "Générez des hachages SHA-256 de texte directement dans le navigateur.", de: "SHA-256-Hashes von Text direkt im Browser generieren.", it: "Genera hash SHA-256 di testi direttamente nel browser.", zh: "直接在浏览器中生成文本的SHA-256哈希值。", ja: "ブラウザ上でテキストのSHA-256ハッシュを直接生成。", ru: "Создавайте SHA-256 хеши текста прямо в браузере.", ar: "أنشئ تجزئات SHA-256 للنصوص مباشرة في المتصفح." },
  "timestamp-converter": { pt: "Converta timestamp Unix para data local e gere timestamps atuais.", en: "Convert Unix timestamp to local date and generate current timestamps.", es: "Convierta timestamp Unix a fecha local y genere timestamps actuales.", fr: "Convertissez un timestamp Unix en date locale et générez des timestamps actuels.", de: "Unix-Zeitstempel in lokales Datum umwandeln und aktuelle generieren.", it: "Converti timestamp Unix in data locale e genera timestamp correnti.", zh: "将Unix时间戳转换为本地日期并生成当前时间戳。", ja: "Unixタイムスタンプを現地時間に変換し、現在のタイムスタンプを生成。", ru: "Конвертируйте Unix-время в локальную дату и создавайте метки.", ar: "حوّل الطابع الزمني Unix إلى تاريخ محلي وأنشئ أختاماً زمنية حالية." },
  "meta-tag-generator": { pt: "Crie title, meta description, canonical e OpenGraph para SEO.", en: "Create title, meta description, canonical and OpenGraph for SEO.", es: "Cree title, meta description, canonical y OpenGraph para SEO.", fr: "Créez title, meta description, canonical et OpenGraph pour le SEO.", de: "Erstellen Sie Title, Meta Description, Canonical und OpenGraph für SEO.", it: "Crea title, meta description, canonical e OpenGraph per SEO.", zh: "创建用于SEO的标题、元描述、规范链接和OpenGraph。", ja: "SEO用のタイトル、メタディスクリプション、正規URL、OpenGraphを作成。", ru: "Создайте title, meta description, canonical и OpenGraph для SEO.", ar: "أنشئ title و meta description و canonical و OpenGraph لتحسين محركات البحث." },
  "slug-generator": { pt: "Transforme títulos em slugs limpos, sem acentos e prontos para URLs.", en: "Transform titles into clean slugs, without accents and ready for URLs.", es: "Transforme títulos en slugs limpios, sin acentos y listos para URLs.", fr: "Transformez des titres en slugs propres, sans accents et prêts pour les URLs.", de: "Wandeln Sie Titel in saubere Slugs ohne Akzente um, bereit für URLs.", it: "Trasforma titoli in slug puliti, senza accenti e pronti per URL.", zh: "将标题转换为干净的slug，去掉重音符号，准备用于URL。", ja: "タイトルをアクセントなしのクリーンなスラグに変換しURL-readyに。", ru: "Преобразуйте заголовки в чистые slugs без акцентов для URL.", ar: "حوّل العناوين إلى slugs نظيفة بدون تشكيل وجاهزة للروابط." },
  "keyword-density-checker": { pt: "Calcule densidade de palavras-chave e termos mais frequentes.", en: "Calculate keyword density and most frequent terms.", es: "Calcule densidad de palabras clave y términos más frecuentes.", fr: "Calculez la densité de mots-clés et les termes les plus fréquents.", de: "Berechnen Sie Keyword-Dichte und häufigste Begriffe.", it: "Calcola densità di parole chiave e termini più frequenti.", zh: "计算关键词密度和最频繁出现的术语。", ja: "キーワード密度と最も頻繁な用語を計算。", ru: "Рассчитайте плотность ключевых слов и частоту терминов.", ar: "احسب كثافة الكلمات المفتاحية وأكثر المصطلحات تكراراً." },
  "xml-formatter": { pt: "Formate XML online com quebras de linha e indentação simples.", en: "Format XML online with line breaks and simple indentation.", es: "Formatee XML online con saltos de línea e indentación simple.", fr: "Formatez du XML en ligne avec sauts de ligne et indentation simple.", de: "XML online mit Zeilenumbrüchen und einfacher Einrückung formatieren.", it: "Formatta XML online con interruzioni di riga e indentazione semplice.", zh: "在线格式化XML，带换行和简单的缩进。", ja: "XMLをオンラインで改行とインデントで整形。", ru: "Форматируйте XML онлайн с переносами строк и отступами.", ar: "نسّق XML أونلاين مع فواصل أسطر ومسافات بادئة بسيطة." },
  "csv-to-json": { pt: "Converta CSV com cabeçalho em uma lista JSON formatada.", en: "Convert CSV with header into formatted JSON list.", es: "Convierta CSV con cabecera en una lista JSON formateada.", fr: "Convertissez un CSV avec en-tête en une liste JSON formatée.", de: "Konvertieren Sie CSV mit Kopfzeile in eine formatierte JSON-Liste.", it: "Converti CSV con intestazione in una lista JSON formattata.", zh: "将带表头的CSV转换为格式化的JSON列表。", ja: "ヘッダー付きCSVをフォーマットされたJSONリストに変換。", ru: "Конвертируйте CSV с заголовком в форматированный список JSON.", ar: "حوّل CSV مع رأس إلى قائمة JSON منسّقة." },
  "remove-accents": { pt: "Remova acentos e marcas diacríticas de textos.", en: "Remove accents and diacritical marks from texts.", es: "Elimine acentos y marcas diacríticas de textos.", fr: "Supprimez les accents et les signes diacritiques des textes.", de: "Entfernen Sie Akzente und diakritische Zeichen aus Texten.", it: "Rimuovi accenti e segni diacritici dai testi.", zh: "移除文本中的重音符号和变音标记。", ja: "テキストからアクセントと発音記号を削除。", ru: "Удалите акценты и диакритические знаки из текста.", ar: "أزل التشكيل والعلامات الصوتية من النصوص." },
  "clean-special-characters": { pt: "Remova caracteres especiais mantendo letras, números e pontuação básica.", en: "Remove special characters keeping letters, numbers and basic punctuation.", es: "Elimine caracteres especiales manteniendo letras, números y puntuación básica.", fr: "Supprimez les caractères spéciaux en gardant lettres, chiffres et ponctuation de base.", de: "Entfernen Sie Sonderzeichen, behalten Sie Buchstaben, Zahlen und Satzzeichen.", it: "Rimuovi caratteri speciali mantenendo lettere, numeri e punteggiatura base.", zh: "移除特殊字符，保留字母、数字和基本标点符号。", ja: "特殊文字を削除し、英字、数字、基本的な句読点を保持。", ru: "Удалите спецсимволы, сохраняя буквы, цифры и пунктуацию.", ar: "أزل الأحرف الخاصة مع الاحتفاظ بالحروف والأرقام وعلامات الترقيم الأساسية." }
};

const blogCardTitles = {
  "como-converter-texto-para-maiusculo": { pt: "Como converter texto para maiúsculo", en: "How to convert text to uppercase", es: "Cómo convertir texto a mayúsculas", fr: "Comment convertir un texte en majuscules", de: "Wie man Text in Großbuchstaben umwandelt", it: "Come convertire il testo in maiuscolo", zh: "如何将文本转换为大写", ja: "テキストを大文字に変換する方法", ru: "Как преобразовать текст в верхний регистр", ar: "كيفية تحويل النص إلى أحرف كبيرة" },
  "diferenca-entre-utf-8-e-ansi": { pt: "Diferença entre UTF-8 e ANSI", en: "Difference between UTF-8 and ANSI", es: "Diferencia entre UTF-8 y ANSI", fr: "Différence entre UTF-8 et ANSI", de: "Unterschied zwischen UTF-8 und ANSI", it: "Differenza tra UTF-8 e ANSI", zh: "UTF-8和ANSI的区别", ja: "UTF-8とANSIの違い", ru: "Разница между UTF-8 и ANSI", ar: "الفرق بين UTF-8 و ANSI" },
  "como-remover-acentos-em-textos": { pt: "Como remover acentos em textos", en: "How to remove accents from text", es: "Cómo eliminar acentos en textos", fr: "Comment supprimer les accents dans les textes", de: "Wie man Akzente in Texten entfernt", it: "Come rimuovere gli accenti dai testi", zh: "如何去除文本中的重音符号", ja: "テキストからアクセントを削除する方法", ru: "Как удалить диакритические знаки из текста", ar: "كيفية إزالة التشكيل من النصوص" },
  "como-formatar-json-online": { pt: "Como formatar JSON online", en: "How to format JSON online", es: "Cómo formatear JSON online", fr: "Comment formater du JSON en ligne", de: "Wie man JSON online formatiert", it: "Come formattare JSON online", zh: "如何在线格式化JSON", ja: "JSONをオンラインでフォーマットする方法", ru: "Как отформатировать JSON онлайн", ar: "كيفية تنسيق JSON عبر الإنترنت" },
  "como-limpar-caracteres-especiais": { pt: "Como limpar caracteres especiais", en: "How to remove special characters", es: "Cómo limpiar caracteres especiales", fr: "Comment supprimer les caractères spéciaux", de: "Wie man Sonderzeichen entfernt", it: "Come rimuovere i caratteri speciali", zh: "如何清除特殊字符", ja: "特殊文字を削除する方法", ru: "Как удалить специальные символы", ar: "كيفية إزالة الأحرف الخاصة" },
  "regex-para-iniciantes": { pt: "Regex para iniciantes", en: "Regex for beginners", es: "Regex para principiantes", fr: "Regex pour débutants", de: "Regex für Anfänger", it: "Regex per principianti", zh: "正则表达式入门", ja: "初心者のための正規表現", ru: "Regex для начинающих", ar: "التعبيرات المنتظمة للمبتدئين" },
  "como-converter-csv-para-json": { pt: "Como converter CSV para JSON", en: "How to convert CSV to JSON", es: "Cómo convertir CSV a JSON", fr: "Comment convertir CSV en JSON", de: "Wie man CSV in JSON konvertiert", it: "Come convertire CSV in JSON", zh: "如何将CSV转换为JSON", ja: "CSVをJSONに変換する方法", ru: "Как преобразовать CSV в JSON", ar: "كيفية تحويل CSV إلى JSON" },
  "como-validar-json": { pt: "Como validar JSON", en: "How to validate JSON", es: "Cómo validar JSON", fr: "Comment valider du JSON", de: "Wie man JSON validiert", it: "Come validare JSON", zh: "如何验证JSON", ja: "JSONを検証する方法", ru: "Как проверить JSON", ar: "كيفية التحقق من صحة JSON" },
  "como-formatar-xml": { pt: "Como formatar XML", en: "How to format XML", es: "Cómo formatear XML", fr: "Comment formater du XML", de: "Wie man XML formatiert", it: "Come formattare XML", zh: "如何格式化XML", ja: "XMLをフォーマットする方法", ru: "Как отформатировать XML", ar: "كيفية تنسيق XML" },
  "como-contar-caracteres-online": { pt: "Como contar caracteres online", en: "How to count characters online", es: "Cómo contar caracteres online", fr: "Comment compter les caractères en ligne", de: "Wie man Zeichen online zählt", it: "Come contare i caratteri online", zh: "如何在线计数字符", ja: "オンラインで文字数を数える方法", ru: "Как посчитать символы онлайн", ar: "كيفية حساب الأحرف عبر الإنترنت" },
  "contador-de-palavras-para-seo": { pt: "Contador de palavras para SEO", en: "Word counter for SEO", es: "Contador de palabras para SEO", fr: "Compteur de mots pour le SEO", de: "Wortzähler für SEO", it: "Contaparole per SEO", zh: "SEO字数统计", ja: "SEOのためのワードカウンター", ru: "Счетчик слов для SEO", ar: "عداد الكلمات لتحسين محركات البحث" },
  "base64-encode-decode-guia": { pt: "Base64 encode/decode: guia rápido", en: "Base64 encode/decode: quick guide", es: "Base64 encode/decode: guía rápida", fr: "Base64 encode/decode : guide rapide", de: "Base64 encodieren/decodieren: Kurzanleitung", it: "Base64 encode/decode: guida rapida", zh: "Base64编码/解码：快速指南", ja: "Base64エンコード/デコード：クイックガイド", ru: "Base64 кодирование/декодирование: краткое руководство", ar: "Base64 ترميز/فك الترميز: دليل سريع" },
  "jwt-decoder-online-seguro": { pt: "JWT decoder online seguro", en: "Secure online JWT decoder", es: "Decoder JWT online seguro", fr: "Décodeur JWT en ligne sécurisé", de: "Sicherer Online-JWT-Decoder", it: "Decodificatore JWT online sicuro", zh: "安全的在线JWT解码器", ja: "安全なオンラインJWTデコーダー", ru: "Безопасный онлайн-декодер JWT", ar: "أداة فك تشفير JWT عبر الإنترنت آمنة" },
  "gerar-slug-seo": { pt: "Como gerar slug SEO", en: "How to generate an SEO slug", es: "Cómo generar un slug SEO", fr: "Comment générer un slug SEO", de: "Wie man einen SEO-Slug generiert", it: "Come generare uno slug SEO", zh: "如何生成SEO友好的URL别名", ja: "SEOスラッグを生成する方法", ru: "Как создать SEO-URL", ar: "كيفية إنشاء رابط SEO" },
  "meta-tags-para-iniciantes": { pt: "Meta tags para iniciantes", en: "Meta tags for beginners", es: "Meta tags para principiantes", fr: "Meta tags pour débutants", de: "Meta-Tags für Anfänger", it: "Meta tag per principianti", zh: "Meta标签入门", ja: "初心者のためのメタタグ", ru: "Мета-теги для начинающих", ar: "العلامات الوصفية للمبتدئين" },
  "densidade-de-palavras-chave": { pt: "Densidade de palavras-chave", en: "Keyword density explained", es: "Densidad de palabras clave", fr: "Densité des mots-clés", de: "Keyword-Dichte erklärt", it: "Densità di parole chiave", zh: "关键词密度解析", ja: "キーワード密度の解説", ru: "Плотность ключевых слов", ar: "كثافة الكلمات المفتاحية" },
  "timestamp-unix-explicado": { pt: "Timestamp Unix explicado", en: "Unix timestamp explained", es: "Timestamp Unix explicado", fr: "Timestamp Unix expliqué", de: "Unix-Timestamp erklärt", it: "Timestamp Unix spiegato", zh: "Unix时间戳详解", ja: "Unixタイムスタンプの解説", ru: "Unix-время объяснено", ar: "شرح الطابع الزمني Unix" },
  "uuid-v4-o-que-e": { pt: "UUID v4: o que é e quando usar", en: "UUID v4: what it is and when to use it", es: "UUID v4: qué es y cuándo usarlo", fr: "UUID v4 : qu'est-ce que c'est et quand l'utiliser", de: "UUID v4: Was es ist und wann man es verwendet", it: "UUID v4: cos'è e quando usarlo", zh: "UUID v4：它是什么以及何时使用", ja: "UUID v4：その概要と使用するタイミング", ru: "UUID v4: что это и когда использовать", ar: "UUID v4: ما هو ومتى يستخدم" },
  "url-encode-e-decode": { pt: "URL encode e decode", en: "URL encode and decode", es: "URL encode y decode", fr: "Encodage et décodage d'URL", de: "URL encodieren und decodieren", it: "URL encode e decode", zh: "URL编码和解码", ja: "URLエンコードとデコード", ru: "URL-кодирование и декодирование", ar: "ترميز وفك ترميز URL" },
  "hash-sha-256-online": { pt: "Hash SHA-256 online", en: "SHA-256 hash online", es: "Hash SHA-256 online", fr: "Hash SHA-256 en ligne", de: "SHA-256-Hash online", it: "Hash SHA-256 online", zh: "在线SHA-256哈希", ja: "SHA-256ハッシュをオンラインで", ru: "SHA-256 хеш онлайн", ar: "تجزئة SHA-256 عبر الإنترنت" },
  "remover-linhas-vazias": { pt: "Como remover linhas vazias", en: "How to remove empty lines", es: "Cómo eliminar líneas vacías", fr: "Comment supprimer les lignes vides", de: "Wie man leere Zeilen entfernt", it: "Come rimuovere righe vuote", zh: "如何删除空行", ja: "空行を削除する方法", ru: "Как удалить пустые строки", ar: "كيفية إزالة الأسطر الفارغة" },
  "capitalizacao-inteligente": { pt: "Capitalização inteligente", en: "Smart capitalization", es: "Capitalización inteligente", fr: "Capitalisation intelligente", de: "Intelligente Großschreibung", it: "Capitalizzazione intelligente", zh: "智能大小写转换", ja: "スマート大文字化", ru: "Умный регистр", ar: "الأحرف الكبيرة الذكية" }
};

const readArticleText = { pt: "Ler artigo", en: "Read article", es: "Leer artículo", fr: "Lire l'article", de: "Artikel lesen", it: "Leggi articolo", zh: "阅读文章", ja: "記事を読む", ru: "Читать статью", ar: "اقرأ المقال" };

const faqTitlePrefix = {
  pt: "Perguntas Frequentes sobre", en: "Frequently Asked Questions about", es: "Preguntas Frecuentes sobre", fr: "Questions Fréquentes sur", de: "Häufig gestellte Fragen zu",
  it: "Domande Frequenti su", zh: "关于的常见问题", ja: "に関するよくある質問", ru: "Часто задаваемые вопросы о", ar: "الأسئلة الشائعة حول"
};

const faqQ = [
  { pt: "{tool} é gratuito?", en: "Is {tool} free?", es: "¿{tool} es gratuito?", fr: "{tool} est-il gratuit?", de: "Ist {tool} kostenlos?", it: "{tool} è gratuito?", zh: "{tool}是免费的吗？", ja: "{tool}は無料ですか？", ru: "{tool} бесплатный?", ar: "هل {tool} مجاني؟" },
  { pt: "Preciso cadastrar ou instalar algo para usar {tool}?", en: "Do I need to register or install anything to use {tool}?", es: "¿Necesito registrarme o instalar algo para usar {tool}?", fr: "Dois-je m'inscrire ou installer quelque chose pour utiliser {tool}?", de: "Muss ich mich registrieren oder etwas installieren, um {tool} zu nutzen?", it: "Devo registrarmi o installare qualcosa per usare {tool}?", zh: "我需要注册或安装任何东西才能使用{tool}吗？", ja: "{tool}を使用するために登録やインストールは必要ですか？", ru: "Нужно ли регистрироваться или устанавливать что-то для использования {tool}?", ar: "هل أحتاج إلى التسجيل أو تثبيت أي شيء لاستخدام {tool}؟" },
  { pt: "Os dados que digito são enviados para servidores externos?", en: "Is the data I type sent to external servers?", es: "¿Los datos que escribo se envían a servidores externos?", fr: "Les données que je saisis sont-elles envoyées à des serveurs externes?", de: "Werden die eingegebenen Daten an externe Server gesendet?", it: "I dati che digito vengono inviati a server esterni?", zh: "我输入的数据会发送到外部服务器吗？", ja: "入力したデータは外部サーバーに送信されますか？", ru: "Отправляются ли введенные данные на внешние серверы?", ar: "هل يتم إرسال البيانات التي أكتبها إلى خوادم خارجية؟" },
  { pt: "Posso usar {tool} no celular?", en: "Can I use {tool} on mobile?", es: "¿Puedo usar {tool} en el móvil?", fr: "Puis-je utiliser {tool} sur mobile?", de: "Kann ich {tool} auf dem Handy nutzen?", it: "Posso usare {tool} sul cellulare?", zh: "我可以在手机上使用{tool}吗？", ja: "携帯電話で{tool}を使用できますか？", ru: "Могу ли я использовать {tool} на телефоне?", ar: "هل يمكنني استخدام {tool} على الجوال؟" },
  { pt: "Qual a diferença entre {tool} e outras ferramentas similares?", en: "What's the difference between {tool} and similar tools?", es: "¿Cuál es la diferencia entre {tool} y otras herramientas similares?", fr: "Quelle est la différence entre {tool} et des outils similaires?", de: "Was ist der Unterschied zwischen {tool} und ähnlichen Werkzeugen?", it: "Qual è la differenza tra {tool} e strumenti simili?", zh: "{tool}和其他类似工具的区别是什么？", ja: "{tool}と類似ツールの違いは何ですか？", ru: "В чем разница между {tool} и аналогичными инструментами?", ar: "ما الفرق بين {tool} والأدوات المماثلة؟" }
];

const faqA = [
  { pt: "Sim. {tool} é totalmente gratuito e pode ser usado sem cadastro diretamente no navegador.", en: "Yes. {tool} is completely free and can be used without registration directly in the browser.", es: "Sí. {tool} es totalmente gratuito y se puede usar sin registro directamente en el navegador.", fr: "Oui. {tool} est entièrement gratuit et peut être utilisé sans inscription directement dans le navigateur.", de: "Ja. {tool} ist völlig kostenlos und kann direkt im Browser ohne Registrierung genutzt werden.", it: "Sì. {tool} è completamente gratuito e può essere usato senza registrazione direttamente nel browser.", zh: "是的。{tool}完全免费，无需注册即可直接在浏览器中使用。", ja: "はい。{tool}は完全無料で、登録不要でブラウザで直接使用できます。", ru: "Да. {tool} полностью бесплатен и может использоваться без регистрации прямо в браузере.", ar: "نعم. {tool} مجاني بالكامل ويمكن استخدامه دون تسجيل مباشرة في المتصفح." },
  { pt: "Não. {tool} funciona diretamente no navegador, sem necessidade de cadastro, download ou instalação.", en: "No. {tool} works directly in the browser with no registration, download or installation required.", es: "No. {tool} funciona directamente en el navegador sin necesidad de registro, descarga o instalación.", fr: "Non. {tool} fonctionne directement dans le navigateur sans inscription, téléchargement ni installation.", de: "Nein. {tool} funktioniert direkt im Browser ohne Registrierung, Download oder Installation.", it: "No. {tool} funziona direttamente nel browser senza registrazione, download o installazione.", zh: "不需要。{tool}直接在浏览器中运行，无需注册、下载或安装。", ja: "いいえ。{tool}は登録、ダウンロード、インストール不要でブラウザで直接動作します。", ru: "Нет. {tool} работает прямо в браузере без регистрации, скачивания или установки.", ar: "لا. {tool} يعمل مباشرة في المتصفح دون حاجة للتسجيل أو التحميل أو التثبيت." },
  { pt: "Não armazenamos o conteúdo digitado. A transformação acontece exclusivamente no seu navegador sem enviar dados para servidores externos.", en: "We do not store typed content. The transformation happens exclusively in your browser without sending data to external servers.", es: "No almacenamos el contenido escrito. La transformación ocurre exclusivamente en su navegador sin enviar datos a servidores externos.", fr: "Nous ne stockons pas le contenu saisi. La transformation a lieu exclusivement dans votre navigateur sans envoi à des serveurs externes.", de: "Wir speichern keine eingegebenen Inhalte. Die Umwandlung erfolgt ausschließlich in Ihrem Browser ohne Datenversand an externe Server.", it: "Non memorizziamo il contenuto digitato. La trasformazione avviene esclusivamente nel tuo browser senza inviare dati a server esterni.", zh: "我们不存储输入的内容。转换完全在您的浏览器中进行，不会将数据发送到外部服务器。", ja: "入力されたコンテンツは保存しません。変換はブラウザ内でのみ実行され、外部サーバーにデータを送信することはありません。", ru: "Мы не храним введенный контент. Преобразование происходит исключительно в вашем браузере без отправки на внешние серверы.", ar: "نحن لا نخزن المحتوى المكتوب. يتم التحويل حصريًا في متصفحك دون إرسال بيانات إلى خوادم خارجية." },
  { pt: "Sim. A página é responsiva e funciona em telas menores, tablets e smartphones.", en: "Yes. The page is responsive and works on smaller screens, tablets and smartphones.", es: "Sí. La página es responsive y funciona en pantallas pequeñas, tablets y smartphones.", fr: "Oui. La page est responsive et fonctionne sur les petits écrans, tablettes et smartphones.", de: "Ja. Die Seite ist responsiv und funktioniert auf kleinen Bildschirmen, Tablets und Smartphones.", it: "Sì. La pagina è responsiva e funziona su schermi piccoli, tablet e smartphone.", zh: "是的。页面是响应式的，适用于小屏幕、平板电脑和智能手机。", ja: "はい。ページはレスポンシブで、小さな画面、タブレット、スマートフォンでも動作します。", ru: "Да. Страница адаптивна и работает на маленьких экранах, планшетах и смартфонах.", ar: "نعم. الصفحة متجاوبة وتعمل على الشاشات الصغيرة والأجهزة اللوحية والهواتف الذكية." },
  { pt: "{tool} foi desenvolvido com foco em simplicidade, privacidade (processamento local) e SEO técnico.", en: "{tool} was developed with focus on simplicity, privacy (local processing) and technical SEO.", es: "{tool} fue desarrollado con enfoque en simplicidad, privacidad (procesamiento local) y SEO técnico.", fr: "{tool} a été développé en mettant l'accent sur la simplicité, la confidentialité (traitement local) et le SEO technique.", de: "{tool} wurde mit Fokus auf Einfachheit, Privatsphäre (lokale Verarbeitung) und technisches SEO entwickelt.", it: "{tool} è stato sviluppato con attenzione a semplicità, privacy (elaborazione locale) e SEO tecnico.", zh: "{tool}专注于简洁性、隐私性（本地处理）和技术SEO。", ja: "{tool}はシンプルさ、プライバシー（ローカル処理）、テクニカルSEOに焦点を当てて開発されました。", ru: "{tool} был разработан с фокусом на простоту, конфиденциальность (локальная обработка) и техническое SEO.", ar: "{tool} تم تطويره مع التركيز على البساطة والخصوصية (المعالجة المحلية) وتحسين محركات البحث التقني." }
];

function translateDataI18n(lang) {
  var t = translations[lang];
  if (!t) return;

  var toolName = null;
  var titleEl = document.querySelector('.page-title');
  if (titleEl) toolName = titleEl.textContent.trim();

  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var val = t[key];
    if (!val) return;
    if (toolName && val.indexOf('{tool}') !== -1) {
      val = val.replace(/\{tool\}/g, toolName);
    }
    el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-label]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-label');
    var val = t[key];
    if (val) el.setAttribute('aria-label', val);
  });
}

function translateCards(lang) {
  document.querySelectorAll('.tool-card[data-slug]').forEach(function(card) {
    var slug = card.getAttribute('data-slug');
    var titleEl = card.querySelector('.tool-title');
    var titleData = toolCardTitles[slug];
    var blogTitleData = blogCardTitles[slug];

    if (titleData) {
      var descEl = card.querySelector('p');
      if (titleEl && titleData[lang]) titleEl.textContent = titleData[lang];
      if (descEl && toolCardDescs[slug] && toolCardDescs[slug][lang]) descEl.textContent = toolCardDescs[slug][lang];
    } else if (blogTitleData) {
      if (titleEl && blogTitleData[lang]) titleEl.textContent = blogTitleData[lang];
      var exampleEl = card.querySelector('.example');
      if (exampleEl) exampleEl.textContent = readArticleText[lang] || "Ler artigo";
    }
  });
}

function changeLang(lang) {
  const t = translations[lang];
  if (!t) return;

  localStorage.setItem('language', lang);

  const langAttrs = { pt: 'pt-BR', en: 'en-US', es: 'es-ES', fr: 'fr-FR', de: 'de-DE', it: 'it-IT', zh: 'zh-CN', ja: 'ja-JP', ru: 'ru-RU', ar: 'ar-SA' };
  document.documentElement.setAttribute('lang', langAttrs[lang] || 'pt-BR');
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  const ogLocale = document.querySelector('meta[property="og:locale"]');
  const ogLocales = { pt: 'pt_BR', en: 'en_US', es: 'es_ES', fr: 'fr_FR', de: 'de_DE', it: 'it_IT', zh: 'zh_CN', ja: 'ja_JP', ru: 'ru_RU', ar: 'ar_SA' };
  if (ogLocale) ogLocale.setAttribute('content', ogLocales[lang] || 'pt_BR');

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', 'ConvertTextEasy - ' + t.pageTitle);
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', t.desc);
  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', 'ConvertTextEasy - ' + t.pageTitle);
  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute('content', t.desc);

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
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t.desc);

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
  setText("seoExplain", t.seoExplain);
  setText("seoUsage", t.seoUsage);

  // Atualizar grid de ferramentas
  for (let i = 1; i <= 8; i++) {
    setText("toolTitle" + i, t["toolTitle" + i]);
    setText("toolDesc" + i, t["toolDesc" + i]);
  }

  translateCards(lang);
  translateDataI18n(lang);

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
  const nlBtn = document.getElementById("newsletterButton");
  if (nlBtn) nlBtn.setAttribute("aria-label", t.newsletterButton);

  setText("allToolsTitle", t.allToolsTitle);
  setText("allToolsDesc", t.allToolsDesc);
  setText("blogTitle", t.blogTitle);
  setText("blogDesc", t.blogDesc);
  setText("skipLink", t.skipLink);

  const mobileBtn = document.getElementById("mobileMenuBtn");
  if (mobileBtn) mobileBtn.setAttribute("aria-label", t.mobileMenuBtn);

  const nlInput = document.getElementById("newsletterInput");
  if (nlInput) nlInput.setAttribute("aria-label", t.newsletterPlaceholder);

  document.querySelectorAll('.lang-select').forEach((select) => {
    select.setAttribute('aria-label', t.langSelectAria);
  });

  const inputEl2 = document.getElementById("input");
  if (inputEl2) inputEl2.setAttribute('aria-label', t.inputAria);

  const copyBtn = document.getElementById("btnCopy");
  if (copyBtn) {
    copyBtn.title = t.copyBtn;
    copyBtn.setAttribute("aria-label", t.copyBtn);
  }

  const clearBtn = document.getElementById("btnClear");
  if (clearBtn) {
    clearBtn.title = t.clearBtn;
    clearBtn.setAttribute("aria-label", t.clearBtn);
  }

  const cookieConsent = document.getElementById("cookie-consent");
  if (cookieConsent) {
    cookieConsent.setAttribute('aria-label', t.cookieTitle);
    const cookieDesc = document.getElementById("cookie-desc");
    if (cookieDesc) {
      cookieDesc.innerHTML = t.cookieText + '<a href="/privacy-policy">' + t.cookiePolicy + '</a>.';
    }
    const cookieBtn = cookieConsent.querySelector('.cookie-btn');
    if (cookieBtn) {
      cookieBtn.textContent = t.cookieAccept;
      cookieBtn.setAttribute('aria-label', t.cookieAccept);
    }
  }

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

function slugifyText(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatXml(text) {
  const compact = text.replace(/>\s*</g, "><").trim();
  if (!compact) return "";

  let level = 0;
  return compact
    .replace(/</g, "\n<")
    .split("\n")
    .filter(Boolean)
    .map((node) => {
      if (/^<\//.test(node)) level = Math.max(level - 1, 0);
      const line = "  ".repeat(level) + node;
      if (/^<[^!?/][^>]*[^/]?>$/.test(node) && !/^<[^>]+>.*<\//.test(node)) level += 1;
      return line;
    })
    .join("\n");
}

function csvToJson(text) {
  const rows = text.trim().split(/\r?\n/).filter(Boolean).map((row) => row.split(",").map((cell) => cell.trim()));
  const headers = rows.shift() || [];
  return JSON.stringify(rows.map((row) => Object.fromEntries(headers.map((header, index) => [header, row[index] || ""]))), null, 2);
}

function decodeJwt(text) {
  const parts = text.trim().split(".");
  if (parts.length < 2) return "JWT inválido: esperado header.payload.signature";

  const decodePart = (part) => JSON.parse(decodeURIComponent(Array.from(atob(part.replace(/-/g, "+").replace(/_/g, "/"))).map((char) => "%" + char.charCodeAt(0).toString(16).padStart(2, "0")).join("")));
  return JSON.stringify({ header: decodePart(parts[0]), payload: decodePart(parts[1]), signature: parts[2] || "" }, null, 2);
}

function randomDemoText() {
  return "ConvertTextEasy ajuda a transformar textos, validar dados e criar conteúdos otimizados. Use este texto aleatório para testar layouts, formulários, contadores e ferramentas online sem depender de conteúdo real.";
}

function keywordDensity(text) {
  const words = (text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").match(/[a-z0-9]+/g) || []).filter((word) => word.length > 2);
  const total = words.length || 1;
  const counts = words.reduce((acc, word) => ({ ...acc, [word]: (acc[word] || 0) + 1 }), {});
  return Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 20).map(([word, count]) => `${word}: ${count} (${((count / total) * 100).toFixed(2)}%)`).join("\n");
}

async function hashText(text) {
  const buffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buffer)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function convert(type) {
  if (!input) return;

  let text = input.value;

  if(type === "upper") text = text.toUpperCase();
  if(type === "lower") text = text.toLowerCase();
  if(type === "sentence") text = text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase());
  if(type === "smart") text = text.toLowerCase().replace(/(^|[.!?]\s+)([a-záàâãéèêíïóôõöúçñ])/gi, (_, prefix, letter) => prefix + letter.toUpperCase());
  if(type === "title") text = text.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
  if(type === "alternating") text = text.split('').map((c, i) => i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()).join('');
  if(type === "camel") text = text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_,c)=>c.toUpperCase());
  if(type === "snake") text = text.toLowerCase().replace(/\s+/g,'_');
  if(type === "reverse") text = text.split('').reverse().join('');
  if(type === "mirror") text = text.split('').map(c => mirrorMap[c] || c).join('');
  if(type === "strikethrough") text = strikethroughText(text);
  if(type === "italic") text = mapCharacters(text, italicMap);
  if(type === "morse") text = morseText(text);
  if(type === "stats") text = `Caracteres: ${text.length}\nPalavras: ${text.trim() ? text.trim().split(/\s+/).length : 0}\nLinhas: ${text ? text.split(/\n/).length : 0}\n\n${text}`;
  if(type === "trimSpaces") text = text.replace(/[ \t]+/g, " ").replace(/ *\n */g, "\n").trim();
  if(type === "removeEmptyLines") text = text.split(/\r?\n/).filter((line) => line.trim()).join("\n");
  if(type === "randomText") text = randomDemoText();
  if(type === "jsonFormat") text = JSON.stringify(JSON.parse(text), null, 2);
  if(type === "jsonValidate") text = JSON.stringify(JSON.parse(text), null, 2) + "\n\n✅ JSON válido";
  if(type === "jwtDecode") text = decodeJwt(text);
  if(type === "base64") text = /^[A-Za-z0-9+/=_-]+$/.test(text.trim()) ? atob(text.trim()) : btoa(unescape(encodeURIComponent(text)));
  if(type === "urlEncode") text = /%[0-9A-Fa-f]{2}/.test(text) ? decodeURIComponent(text) : encodeURIComponent(text);
  if(type === "uuid") text = crypto.randomUUID();
  if(type === "hash") text = await hashText(text);
  if(type === "timestamp") { const raw = text.trim(); const date = raw ? new Date(Number(raw) * (raw.length === 10 ? 1000 : 1)) : new Date(); text = `${Math.floor(date.getTime() / 1000)}\n${date.toISOString()}\n${date.toLocaleString()}`; }
  if(type === "metaTags") { const title = text.split(/\r?\n/)[0] || "Título da página"; const desc = text.split(/\r?\n/)[1] || "Descrição da página com até 160 caracteres."; const slug = slugifyText(title); text = `<title>${title}</title>\n<meta name="description" content="${desc}">\n<link rel="canonical" href="https://exemplo.com/${slug}">\n<meta property="og:title" content="${title}">\n<meta property="og:description" content="${desc}">`; }
  if(type === "slug") text = slugifyText(text);
  if(type === "keywordDensity") text = keywordDensity(text);
  if(type === "xmlFormat") text = formatXml(text);
  if(type === "csvToJson") text = csvToJson(text);
  if(type === "removeAccents") text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  if(type === "cleanSpecial") text = text.normalize("NFKC").replace(/[^\p{L}\p{N}\s.,;:!?()@%&/_-]/gu, "").replace(/\s+/g, " ").trim();

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

function detectBrowserLang() {
  const supported = { pt: 'pt', en: 'en', es: 'es', fr: 'fr', de: 'de', it: 'it', zh: 'zh', ja: 'ja', ru: 'ru', ar: 'ar' };
  const langs = navigator.languages || [navigator.language || 'pt'];
  for (const raw of langs) {
    const code = raw.split('-')[0].toLowerCase();
    if (supported[code]) return supported[code];
  }
  return 'pt';
}

function initLanguage() {
  const savedLanguage = localStorage.getItem('language') || detectBrowserLang();
  changeLang(savedLanguage);
}

// Initialize theme on page load
initTheme();
initLanguage();
updateCounts();

// ===== MOBILE MENU =====
(function () {
  var menuTools = [
    { href: '/uppercase-text', icon: '🔠', key: 'toolTitle2' },
    { href: '/lowercase-text', icon: '🔡', key: 'toolTitle1' },
    { href: '/capitalize-text', icon: '📝', key: 'toolTitle4' },
    { href: '/reverse-text', icon: '🔄', key: 'toolTitle5' },
    { href: '/alternating-case', icon: '🔀', key: 'toolTitle6' },
    { href: '/strikethrough-text', icon: '🔤', key: 'toolTitle3' },
    { href: '/italic-text', icon: '📜', key: 'toolTitle7' },
    { href: '/morse-code-translator', icon: '💻', key: 'toolTitle8' },
  ];

  function stripEmoji(text) {
    if (!text) return '';
    var m = text.match(/^\S+\s+(.*)/);
    return m ? m[1] : text;
  }

  function populateDrawer() {
    var body = document.getElementById('mobileDrawerBody');
    var themeLabel = document.getElementById('drawerThemeLabel');
    if (!body) return;
    var lang = localStorage.getItem('language') || detectBrowserLang();
    var t = translations[lang] || translations.pt;

    var html = '';

    html += '<div class="drawer-section-title">' + (t.sidebarConverter || 'Conversor') + '</div>';
    html += '<a class="drawer-item" href="/">' +
      '<span class="drawer-item-icon">📝</span>' +
      (t.mainTitle || 'Conversor de Texto') +
    '</a>';

    html += '<div class="drawer-section-title">' + (t.sidebarTools || 'Ferramentas') + '</div>';
    for (var i = 0; i < menuTools.length; i++) {
      var tool = menuTools[i];
      var raw = t[tool.key];
      html += '<a class="drawer-item" href="' + tool.href + '">' +
        '<span class="drawer-item-icon">' + tool.icon + '</span>' +
        stripEmoji(raw || '') +
      '</a>';
    }

    html += '<div class="drawer-section-title">' + (t.sidebarMoreTools || 'Mais Ferramentas') + '</div>';
    var jsonFmt = toolCardTitles["json-formatter"];
    var slugGen = toolCardTitles["slug-generator"];
    var contador = toolCardTitles["contador-caracteres"];
    html += '<a class="drawer-item" href="/json-formatter"><span class="drawer-item-icon">🔧</span>' + (jsonFmt && jsonFmt[lang] || 'JSON Formatter') + '</a>';
    html += '<a class="drawer-item" href="/slug-generator"><span class="drawer-item-icon">🔗</span>' + (slugGen && slugGen[lang] || 'Slug Generator') + '</a>';
    html += '<a class="drawer-item" href="/contador-caracteres"><span class="drawer-item-icon">🔢</span>' + (contador && contador[lang] || 'Contador') + '</a>';
    html += '<a class="drawer-item" href="/blog"><span class="drawer-item-icon">📰</span>' + (t.drawerBlog || 'Blog') + '</a>';

    html += '<div class="drawer-section-title">Links</div>';
    html += '<a class="drawer-item" href="/about"><span class="drawer-item-icon">ℹ️</span>' + (t.sidebarAbout || 'Sobre') + '</a>';
    html += '<a class="drawer-item" href="/contact"><span class="drawer-item-icon">📧</span>' + (t.sidebarContact || 'Contato') + '</a>';

    body.innerHTML = html;

    if (themeLabel) {
      themeLabel.textContent = t.theme;
    }
  }

  function initMobileMenu() {
    var topbarActions = document.querySelector('.topbar-actions');
    if (!topbarActions) return;

    var btn = document.querySelector('.mobile-menu-btn');
    if (!btn) {
      btn = document.createElement('button');
      btn.className = 'mobile-menu-btn';
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Abrir menu de ferramentas');
      btn.setAttribute('aria-expanded', 'false');
      btn.innerHTML =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
        'stroke-linecap="round" stroke-linejoin="round">' +
        '<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/>' +
        '<line x1="4" y1="18" x2="20" y2="18"/></svg>';
      topbarActions.insertBefore(btn, topbarActions.firstChild);
    }

    if (document.querySelector('.mobile-drawer')) return;

    var backdrop = document.createElement('div');
    backdrop.className = 'mobile-drawer-backdrop';

    var drawer = document.createElement('aside');
    drawer.className = 'mobile-drawer';
    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-modal', 'true');
    drawer.setAttribute('aria-label', 'Menu de ferramentas');

    var lang = localStorage.getItem('language') || 'pt';
    var t = translations[lang] || translations.pt;
    var theme = document.documentElement.getAttribute('data-theme') || 'dark';

    drawer.innerHTML =
      '<div class="mobile-drawer-header">' +
        '<a href="/" class="drawer-brand">' +
          '<img src="/assets/img/iconeTextLab.png" alt="" width="34" height="34" loading="lazy">' +
          '<span>ConvertTextEasy</span>' +
        '</a>' +
        '<button class="mobile-drawer-close" type="button" aria-label="Fechar menu">✕</button>' +
      '</div>' +
      '<div class="mobile-drawer-body" id="mobileDrawerBody"></div>' +
      '<div class="mobile-drawer-footer">' +
        '<button class="theme-toggle btn btn-sm" onclick="toggleTheme()" type="button" aria-label="Alternar tema">' +
          '<span id="themeIconDrawer" aria-hidden="true">' + (theme === 'dark' ? '🌙' : '☀️') + '</span>' +
          '<small id="drawerThemeLabel">' + t.theme + '</small>' +
        '</button>' +
        '<select onchange="changeLang(this.value)" class="form-select form-select-sm lang-select" aria-label="Idioma">' +
          '<option value="pt"' + (lang === 'pt' ? ' selected' : '') + '>🇧🇷 PT</option>' +
          '<option value="en"' + (lang === 'en' ? ' selected' : '') + '>🇺🇸 EN</option>' +
          '<option value="es"' + (lang === 'es' ? ' selected' : '') + '>🇪🇸 ES</option>' +
          '<option value="fr"' + (lang === 'fr' ? ' selected' : '') + '>🇫🇷 FR</option>' +
          '<option value="de"' + (lang === 'de' ? ' selected' : '') + '>🇩🇪 DE</option>' +
          '<option value="it"' + (lang === 'it' ? ' selected' : '') + '>🇮🇹 IT</option>' +
          '<option value="zh"' + (lang === 'zh' ? ' selected' : '') + '>🇨🇳 中文</option>' +
          '<option value="ja"' + (lang === 'ja' ? ' selected' : '') + '>🇯🇵 日本語</option>' +
          '<option value="ru"' + (lang === 'ru' ? ' selected' : '') + '>🇷🇺 RU</option>' +
          '<option value="ar"' + (lang === 'ar' ? ' selected' : '') + '>🇸🇦 AR</option>' +
        '</select>' +
      '</div>';

    document.body.appendChild(backdrop);
    document.body.appendChild(drawer);

    populateDrawer();

    function openDrawer() {
      backdrop.classList.add('open');
      drawer.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
      document.body.classList.add('drawer-open');
      var closeBtn = drawer.querySelector('.mobile-drawer-close');
      if (closeBtn) closeBtn.focus();
    }

    function closeDrawer() {
      backdrop.classList.remove('open');
      drawer.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('drawer-open');
      btn.focus();
    }

    btn.addEventListener('click', openDrawer);
    var closeBtn = drawer.querySelector('.mobile-drawer-close');
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    backdrop.addEventListener('click', closeDrawer);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeDrawer();
      }
    });

    drawer.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab') return;
      var focusable = drawer.querySelectorAll('button, a, select, [tabindex]:not([tabindex="-1"])');
      if (focusable.length < 2) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });

    document.addEventListener('languagechange', populateDrawer);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
  } else {
    initMobileMenu();
  }
})();
