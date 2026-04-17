const toolPageConfig = {
  upper: {
    slug: "uppercase-text",
    eyebrow: { pt: "Padronizacao", en: "Standardization", es: "Estandarizacion" },
    title: { pt: "Letras Maiusculas", en: "Uppercase Letters", es: "Letras Mayusculas" },
    description: {
      pt: "Transforme todo o texto em letras maiusculas para titulos, destaques e revisoes rapidas.",
      en: "Transform the entire text into uppercase letters for headings, emphasis, and quick reviews.",
      es: "Transforma todo el texto en letras mayusculas para titulos, destaques y revisiones rapidas."
    },
    actionLabel: { pt: "Converter para maiusculas", en: "Convert to uppercase", es: "Convertir a mayusculas" },
    helperTitle: { pt: "Quando usar", en: "When to use", es: "Cuando usar" },
    helperText: {
      pt: "Ideal para titulos, chamadas, siglas e verificacoes visuais em blocos de texto.",
      en: "Ideal for headings, callouts, acronyms, and visual checks across text blocks.",
      es: "Ideal para titulos, llamados, siglas y verificaciones visuales en bloques de texto."
    },
    example: "TEXTO EM MAIUSCULAS",
    tips: {
      pt: [
        "Converte todas as letras para caixa alta em um clique.",
        "Ajuda a padronizar titulos e textos promocionais.",
        "Mantem numeros e simbolos sem alteracoes desnecessarias."
      ],
      en: [
        "Converts every letter to uppercase in one click.",
        "Helps standardize headings and promotional copy.",
        "Keeps numbers and symbols unchanged when appropriate."
      ],
      es: [
        "Convierte cada letra a mayusculas con un clic.",
        "Ayuda a estandarizar titulos y textos promocionales.",
        "Mantiene numeros y simbolos sin cambios innecesarios."
      ]
    }
  },
  lower: {
    slug: "lowercase-text",
    eyebrow: { pt: "Padronizacao", en: "Standardization", es: "Estandarizacion" },
    title: { pt: "Letras Minusculas", en: "Lowercase Letters", es: "Letras Minusculas" },
    description: {
      pt: "Converta rapidamente todo o conteudo para letras minusculas e remova excessos de caixa alta.",
      en: "Quickly convert all content to lowercase letters and remove excessive capitalization.",
      es: "Convierte rapidamente todo el contenido a minusculas y elimina excesos de mayusculas."
    },
    actionLabel: { pt: "Converter para minusculas", en: "Convert to lowercase", es: "Convertir a minusculas" },
    helperTitle: { pt: "Melhor para", en: "Best for", es: "Ideal para" },
    helperText: {
      pt: "Otimo para normalizar textos colados, ajustar frases e preparar conteudo para nova edicao.",
      en: "Great for normalizing pasted text, adjusting sentences, and preparing content for further editing.",
      es: "Ideal para normalizar textos pegados, ajustar frases y preparar contenido para una nueva edicion."
    },
    example: "texto em minusculas",
    tips: {
      pt: [
        "Remove excesso de maiusculas de forma imediata.",
        "Ajuda na limpeza de textos vindos de PDFs, emails e copias antigas.",
        "Preserva espacamentos, numeros e pontuacao."
      ],
      en: [
        "Removes excessive capitalization instantly.",
        "Helpful for cleaning text from PDFs, emails, and older copies.",
        "Preserves spacing, numbers, and punctuation."
      ],
      es: [
        "Elimina el exceso de mayusculas al instante.",
        "Ayuda a limpiar textos de PDFs, emails y copias antiguas.",
        "Preserva espaciados, numeros y puntuacion."
      ]
    }
  },
  strikethrough: {
    slug: "strikethrough-text",
    eyebrow: { pt: "Ferramenta de Estilo", en: "Styling Tool", es: "Herramienta de Estilo" },
    title: { pt: "Texto Tachado", en: "Strikethrough Text", es: "Texto Tachado" },
    description: {
      pt: "Crie texto riscado automaticamente para posts, mensagens, bios e destaques visuais.",
      en: "Create strikethrough text automatically for posts, messages, bios, and visual highlights.",
      es: "Crea texto tachado automaticamente para posts, mensajes, bios y destacados visuales."
    },
    actionLabel: { pt: "Gerar texto tachado", en: "Generate strikethrough text", es: "Generar texto tachado" },
    helperTitle: { pt: "Como funciona", en: "How it works", es: "Como funciona" },
    helperText: {
      pt: "Aplicamos o traço em cada caractere para você copiar o resultado pronto.",
      en: "We apply the strike to each character so you can copy the final result instantly.",
      es: "Aplicamos el trazo en cada caracter para que copies el resultado listo."
    },
    example: "T̶e̶x̶t̶o̶ ̶t̶a̶c̶h̶a̶d̶o̶",
    tips: {
      pt: [
        "Cole um texto comum e clique para aplicar o efeito tachado.",
        "Use em títulos, comparativos, brincadeiras visuais e redes sociais.",
        "O resultado substitui o conteúdo da caixa para cópia imediata."
      ],
      en: [
        "Paste normal text and click to apply the strikethrough effect.",
        "Use it in headings, comparisons, social posts, and playful layouts.",
        "The result replaces the textarea content for instant copying."
      ],
      es: [
        "Pega un texto normal y haz clic para aplicar el efecto tachado.",
        "Usalo en titulos, comparaciones, redes sociales y recursos visuales.",
        "El resultado reemplaza el contenido de la caja para copiar al instante."
      ]
    }
  },
  title: {
    slug: "capitalize-text",
    eyebrow: { pt: "Padronizacao", en: "Standardization", es: "Estandarizacion" },
    title: { pt: "Iniciais Maiusculas", en: "Title Case", es: "Iniciales Mayusculas" },
    description: {
      pt: "Transforme rapidamente o texto para que cada palavra comece com letra maiuscula.",
      en: "Quickly transform text so that each word starts with a capital letter.",
      es: "Transforma rapidamente el texto para que cada palabra comience con mayuscula."
    },
    actionLabel: { pt: "Aplicar iniciais maiusculas", en: "Apply title case", es: "Aplicar iniciales mayusculas" },
    helperTitle: { pt: "Ideal para", en: "Best for", es: "Ideal para" },
    helperText: {
      pt: "Titulos, headings, assuntos de email e nomes de secoes que precisam de padrao.",
      en: "Titles, headings, email subjects, and section names that need consistent formatting.",
      es: "Titulos, encabezados, asuntos de email y nombres de secciones que necesitan un patron."
    },
    example: "Este E Um Exemplo De Titulo",
    tips: {
      pt: [
        "Converte cada palavra para formato de titulo.",
        "Ajuda a organizar cabecalhos e nomes de paginas.",
        "Mantem o fluxo simples: colar, converter e copiar."
      ],
      en: [
        "Converts each word into title case.",
        "Helps organize headings and page names.",
        "Keeps the flow simple: paste, convert, and copy."
      ],
      es: [
        "Convierte cada palabra al formato de titulo.",
        "Ayuda a organizar encabezados y nombres de paginas.",
        "Mantiene el flujo simple: pegar, convertir y copiar."
      ]
    }
  },
  reverse: {
    slug: "reverse-text",
    eyebrow: { pt: "Transformacao", en: "Transformation", es: "Transformacion" },
    title: { pt: "Texto Reverso", en: "Reverse Text", es: "Texto Inverso" },
    description: {
      pt: "Inverta a ordem dos caracteres do seu texto para criar efeitos, testes ou brincadeiras.",
      en: "Reverse the order of your text characters to create effects, tests, or playful experiments.",
      es: "Invierte el orden de los caracteres de tu texto para crear efectos, pruebas o juegos visuales."
    },
    actionLabel: { pt: "Inverter texto", en: "Reverse text", es: "Invertir texto" },
    helperTitle: { pt: "Quando usar", en: "When to use", es: "Cuando usar" },
    helperText: {
      pt: "Bom para criacao, desafios visuais, testes de interface e efeitos em posts.",
      en: "Great for creative work, visual experiments, interface tests, and playful posts.",
      es: "Bueno para creatividad, desafios visuales, pruebas de interfaz y efectos en publicaciones."
    },
    example: ".otxet od odnetnoc otrevnI",
    tips: {
      pt: [
        "Inverte o texto completo, mantendo quebras de linha.",
        "Funciona bem com frases curtas ou textos maiores.",
        "Resultado pronto para copiar e compartilhar."
      ],
      en: [
        "Reverses the full text while keeping line breaks.",
        "Works well with short phrases or larger text blocks.",
        "The result is ready to copy and share."
      ],
      es: [
        "Invierte todo el texto manteniendo los saltos de linea.",
        "Funciona bien con frases cortas o textos mas largos.",
        "El resultado queda listo para copiar y compartir."
      ]
    }
  },
  alternating: {
    slug: "alternating-case",
    eyebrow: { pt: "Estilo Criativo", en: "Creative Style", es: "Estilo Creativo" },
    title: { pt: "Alternancia de Letras", en: "Alternating Case", es: "Alternancia de Letras" },
    description: {
      pt: "Alterne letras maiusculas e minusculas automaticamente para criar um visual descontraido.",
      en: "Alternate uppercase and lowercase letters automatically for a more playful style.",
      es: "Alterna letras mayusculas y minusculas automaticamente para lograr un estilo mas relajado."
    },
    actionLabel: { pt: "Gerar alternancia", en: "Generate alternating case", es: "Generar alternancia" },
    helperTitle: { pt: "Visual rapido", en: "Quick visual effect", es: "Efecto visual rapido" },
    helperText: {
      pt: "Perfeito para memes, posts, comentarios e chamadas com tom mais informal.",
      en: "Perfect for memes, posts, comments, and headlines with a more informal tone.",
      es: "Perfecto para memes, publicaciones, comentarios y llamados con un tono mas informal."
    },
    example: "eStE e Um ExEmPlO aLtErNaDo",
    tips: {
      pt: [
        "Alterna o texto caractere por caractere.",
        "Cria um efeito visual marcante sem precisar editar manualmente.",
        "Voce pode colar qualquer texto e converter em um clique."
      ],
      en: [
        "Alternates the text character by character.",
        "Creates a strong visual effect without manual editing.",
        "You can paste any text and convert it in one click."
      ],
      es: [
        "Alterna el texto caracter por caracter.",
        "Crea un efecto visual marcado sin editar manualmente.",
        "Puedes pegar cualquier texto y convertirlo con un clic."
      ]
    }
  },
  italic: {
    slug: "italic-text",
    eyebrow: { pt: "Tipografia", en: "Typography", es: "Tipografia" },
    title: { pt: "Texto Italico", en: "Italic Text", es: "Texto Italico" },
    description: {
      pt: "Converta seu texto em uma versao estilizada em italico para destacar trechos e chamadas.",
      en: "Convert your text into a stylized italic version to highlight phrases and calls to action.",
      es: "Convierte tu texto en una version estilizada en italico para destacar frases y llamados."
    },
    actionLabel: { pt: "Gerar texto italico", en: "Generate italic text", es: "Generar texto italico" },
    helperTitle: { pt: "Destaque com estilo", en: "Stylish emphasis", es: "Destaca con estilo" },
    helperText: {
      pt: "Use para bios, legendas, assinaturas, slogans e pequenos destaques tipograficos.",
      en: "Use it for bios, captions, signatures, slogans, and short typographic highlights.",
      es: "Usalo para bios, leyendas, firmas, slogans y pequenos destacados tipograficos."
    },
    example: "𝑇𝑒𝑥𝑡𝑜 𝑒𝑚 𝑖𝑡𝑎𝑙𝑖𝑐𝑜",
    tips: {
      pt: [
        "Aplica uma variacao unicode com visual italico.",
        "Ideal para destacar frases curtas e nomes.",
        "Mantem caracteres sem equivalente quando necessario."
      ],
      en: [
        "Applies a unicode variation with an italic look.",
        "Ideal for highlighting short phrases and names.",
        "Keeps characters without an equivalent when necessary."
      ],
      es: [
        "Aplica una variacion unicode con apariencia italica.",
        "Ideal para destacar frases cortas y nombres.",
        "Mantiene caracteres sin equivalente cuando es necesario."
      ]
    }
  },
  morse: {
    slug: "morse-code-translator",
    eyebrow: { pt: "Codigo", en: "Code", es: "Codigo" },
    title: { pt: "Codigo Morse", en: "Morse Code", es: "Codigo Morse" },
    description: {
      pt: "Traduza letras e numeros para codigo Morse de forma instantanea.",
      en: "Translate letters and numbers into Morse code instantly.",
      es: "Traduce letras y numeros a codigo Morse de forma instantanea."
    },
    actionLabel: { pt: "Converter para Morse", en: "Convert to Morse", es: "Convertir a Morse" },
    helperTitle: { pt: "Leitura simples", en: "Simple reading", es: "Lectura simple" },
    helperText: {
      pt: "Cada letra vira uma sequencia de pontos e tracos, com barras separando palavras.",
      en: "Each letter becomes a sequence of dots and dashes, with slashes separating words.",
      es: "Cada letra se convierte en una secuencia de puntos y rayas, con barras separando palabras."
    },
    example: "... --- ...",
    tips: {
      pt: [
        "Converte letras, numeros e alguns sinais de pontuacao.",
        "Usa barra para separar palavras no resultado final.",
        "Excelente para estudos, curiosidades e conteudo educativo."
      ],
      en: [
        "Converts letters, numbers, and some punctuation marks.",
        "Uses slashes to separate words in the final output.",
        "Great for learning, curiosity, and educational content."
      ],
      es: [
        "Convierte letras, numeros y algunos signos de puntuacion.",
        "Usa barras para separar palabras en el resultado final.",
        "Excelente para estudio, curiosidad y contenido educativo."
      ]
    }
  }
};

const toolPageUi = {
  pt: {
    back: "← Voltar para a home",
    editorTitle: "Editor",
    editorCopy: "Cole seu texto, aplique a transformacao e copie o resultado imediatamente.",
    placeholder: "Escreva ou cole o seu texto aqui.",
    copyTitle: "Copiar texto",
    clearTitle: "Limpar texto",
    stats: { chars: "Letras", words: "Palavras", lines: "Linhas" },
    tipsTitle: "Dicas rapidas",
    tipsCopy: "Pontos importantes para usar esta funcionalidade.",
    relatedTitle: "Outras ferramentas",
    relatedCopy: "Navegue para outras paginas especificas do ConvertTextEasy."
  },
  en: {
    back: "← Back to home",
    editorTitle: "Editor",
    editorCopy: "Paste your text, apply the transformation, and copy the result immediately.",
    placeholder: "Write or paste your text here.",
    copyTitle: "Copy text",
    clearTitle: "Clear text",
    stats: { chars: "Characters", words: "Words", lines: "Lines" },
    tipsTitle: "Quick tips",
    tipsCopy: "Important points for using this feature.",
    relatedTitle: "Other tools",
    relatedCopy: "Navigate to other dedicated ConvertTextEasy pages."
  },
  es: {
    back: "← Volver al inicio",
    editorTitle: "Editor",
    editorCopy: "Pega tu texto, aplica la transformacion y copia el resultado de inmediato.",
    placeholder: "Escribe o pega tu texto aqui.",
    copyTitle: "Copiar texto",
    clearTitle: "Limpiar texto",
    stats: { chars: "Caracteres", words: "Palabras", lines: "Lineas" },
    tipsTitle: "Consejos rapidos",
    tipsCopy: "Puntos importantes para usar esta funcionalidad.",
    relatedTitle: "Otras herramientas",
    relatedCopy: "Navega a otras paginas especificas de ConvertTextEasy."
  }
};

function getLocalizedValue(value, lang) {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[lang] || value.pt || Object.values(value)[0];
  }

  return value;
}

function renderRelatedTools(currentTool, lang) {
  const container = document.getElementById("relatedTools");
  if (!container) return;

  const links = Object.entries(toolPageConfig)
    .filter(([toolKey]) => toolKey !== currentTool)
    .map(([, tool]) => '<a class="related-tool-link" href="./' + tool.slug + '">' + getLocalizedValue(tool.title, lang) + '</a>')
    .join("");

  container.innerHTML = links;
}

function renderToolTips(tips) {
  const container = document.getElementById("toolTips");
  if (!container) return;

  container.innerHTML = tips.map((tip) => '<li>' + tip + '</li>').join("");
}

function renderToolPage(lang) {
  const currentTool = document.body ? document.body.getAttribute("data-tool-page") : null;
  const config = currentTool ? toolPageConfig[currentTool] : null;
  const ui = toolPageUi[lang] || toolPageUi.pt;

  if (!config) return;

  document.title = "ConvertTextEasy - " + getLocalizedValue(config.title, lang);

  const desc = document.getElementById("desc");
  if (desc) desc.setAttribute("content", getLocalizedValue(config.description, lang));

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.innerText = value;
  };

  setText("pageEyebrow", getLocalizedValue(config.eyebrow, lang));
  setText("pageTitle", getLocalizedValue(config.title, lang));
  setText("pageDescription", getLocalizedValue(config.description, lang));
  setText("helperTitle", getLocalizedValue(config.helperTitle, lang));
  setText("helperText", getLocalizedValue(config.helperText, lang));
  setText("toolExample", config.example);
  setText("backToHome", ui.back);
  setText("editorTitle", ui.editorTitle);
  setText("editorCopy", ui.editorCopy);
  setText("tipsTitle", ui.tipsTitle);
  setText("tipsCopy", ui.tipsCopy);
  setText("relatedTitle", ui.relatedTitle);
  setText("relatedCopy", ui.relatedCopy);

  const input = document.getElementById("input");
  if (input) input.placeholder = ui.placeholder;

  const copyButton = document.getElementById("copyButton");
  if (copyButton) {
    copyButton.title = ui.copyTitle;
    copyButton.setAttribute("aria-label", ui.copyTitle);
  }

  const clearButton = document.getElementById("clearButton");
  if (clearButton) {
    clearButton.title = ui.clearTitle;
    clearButton.setAttribute("aria-label", ui.clearTitle);
  }

  const charsLabel = document.getElementById("charsLabel");
  if (charsLabel) charsLabel.innerText = ui.stats.chars;

  const wordsLabel = document.getElementById("wordsLabel");
  if (wordsLabel) wordsLabel.innerText = ui.stats.words;

  const linesLabel = document.getElementById("linesLabel");
  if (linesLabel) linesLabel.innerText = ui.stats.lines;

  const actionButton = document.getElementById("toolActionButton");
  if (actionButton) {
    actionButton.innerHTML = '<span>Go</span>' + getLocalizedValue(config.actionLabel, lang);
    actionButton.setAttribute("onclick", 'convert("' + currentTool + '")');
  }

  renderToolTips(getLocalizedValue(config.tips, lang));
  renderRelatedTools(currentTool, lang);
}

function initToolPage() {
  const lang = localStorage.getItem("language") || "pt";
  renderToolPage(lang);
}

document.addEventListener("languagechange", (event) => {
  renderToolPage(event.detail.lang);
});

initToolPage();
