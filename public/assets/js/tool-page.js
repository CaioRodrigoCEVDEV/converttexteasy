const toolPageConfig = {
  upper: {
    slug: "uppercase-text",
    eyebrow: { pt: "Padronizacao", en: "Standardization", es: "Estandarizacion", fr: "Standardisation", de: "Standardisierung", it: "Standardizzazione", zh: "标准化", ja: "標準化", ru: "Стандартизация", ar: "توحيد" },
    title: { pt: "Letras Maiusculas", en: "Uppercase Letters", es: "Letras Mayusculas", fr: "Lettres Majuscules", de: "Großbuchstaben", it: "Lettere Maiuscole", zh: "大写字母", ja: "大文字", ru: "Заглавные буквы", ar: "أحرف كبيرة" },
    description: {
      pt: "Transforme todo o texto em letras maiusculas para titulos, destaques e revisoes rapidas.",
      en: "Transform the entire text into uppercase letters for headings, emphasis, and quick reviews.",
      es: "Transforma todo el texto en letras mayusculas para titulos, destaques y revisiones rapidas.",
      fr: "Transformez tout le texte en lettres majuscules pour les titres, les mises en évidence et les révisions rapides.",
      de: "Wandeln Sie den gesamten Text in Großbuchstaben um für Überschriften, Hervorhebungen und schnelle Überprüfungen.",
      it: "Trasforma l'intero testo in lettere maiuscole per titoli, evidenziazioni e revisioni rapide.",
      zh: "将整个文本转换为大写字母，用于标题、强调和快速检查。",
      ja: "テキスト全体を大文字に変換して、見出し、強調、クイックレビューに使用します。",
      ru: "Преобразуйте весь текст в заглавные буквы для заголовков, выделения и быстрой проверки.",
      ar: "حول النص بأكمله إلى أحرف كبيرة للعناوين والإبراز والمراجعات السريعة."
    },
    actionLabel: { pt: "Converter para maiusculas", en: "Convert to uppercase", es: "Convertir a mayusculas", fr: "Convertir en majuscules", de: "In Großbuchstaben umwandeln", it: "Converti in maiuscolo", zh: "转换为大写", ja: "大文字に変換", ru: "Преобразовать в заглавные", ar: "تحويل إلى أحرف كبيرة" },
    helperTitle: { pt: "Quando usar", en: "When to use", es: "Cuando usar", fr: "Quand l'utiliser", de: "Wann verwenden", it: "Quando usarlo", zh: "何时使用", ja: "使用するタイミング", ru: "Когда использовать", ar: "متى تستخدم" },
    helperText: {
      pt: "Ideal para titulos, chamadas, siglas e verificacoes visuais em blocos de texto.",
      en: "Ideal for headings, callouts, acronyms, and visual checks across text blocks.",
      es: "Ideal para titulos, llamados, siglas y verificaciones visuales en bloques de texto.",
      fr: "Idéal pour les titres, les appels, les acronymes et les vérifications visuelles dans les blocs de texte.",
      de: "Ideal für Überschriften, Hervorhebungen, Akronyme und visuelle Überprüfungen in Textblöcken.",
      it: "Ideale per titoli, richiami, acronimi e controlli visivi in blocchi di testo.",
      zh: "适用于标题、标注、缩写词以及文本块中的视觉检查。",
      ja: "見出し、コーリング、略語、テキストブロックの視覚的チェックに最適です。",
      ru: "Идеально подходит для заголовков, призывов, аббревиатур и визуальных проверок в текстовых блоках.",
      ar: "مثالي للعناوين والنداءات والاختصارات والفحوصات البصرية في كتل النص."
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
      ],
      fr: [
        "Convertit chaque lettre en majuscule en un clic.",
        "Aide à standardiser les titres et les textes promotionnels.",
        "Préserve les chiffres et les symboles sans modifications inutiles."
      ],
      de: [
        "Wandelt jeden Buchstaben mit einem Klick in Großbuchstaben um.",
        "Hilft bei der Standardisierung von Überschriften und Werbetexten.",
        "Behält Zahlen und Symbole ohne unnötige Änderungen bei."
      ],
      it: [
        "Converte ogni lettera in maiuscolo con un clic.",
        "Aiuta a standardizzare titoli e testi promozionali.",
        "Mantiene numeri e simboli senza modifiche inutili."
      ],
      zh: [
        "一键将每个字母转换为大写。",
        "帮助标准化标题和促销文案。",
        "保持数字和符号不变，避免不必要的更改。"
      ],
      ja: [
        "ワンクリックですべての文字を大文字に変換します。",
        "見出しやプロモーションコピーの標準化に役立ちます。",
        "数字や記号は不必要に変更されません。"
      ],
      ru: [
        "Преобразует каждую букву в заглавную одним щелчком мыши.",
        "Помогает стандартизировать заголовки и рекламные тексты.",
        "Сохраняет цифры и символы без ненужных изменений."
      ],
      ar: [
        "يحول كل حرف إلى كبير بنقرة واحدة.",
        "يساعد في توحيد العناوين والنصوص الترويجية.",
        "يحافظ على الأرقام والرموز دون تغييرات غير ضرورية."
      ]
    }
  },
  lower: {
    slug: "lowercase-text",
    eyebrow: { pt: "Padronizacao", en: "Standardization", es: "Estandarizacion", fr: "Standardisation", de: "Standardisierung", it: "Standardizzazione", zh: "标准化", ja: "標準化", ru: "Стандартизация", ar: "توحيد" },
    title: { pt: "Letras Minusculas", en: "Lowercase Letters", es: "Letras Minusculas", fr: "Lettres Minuscules", de: "Kleinbuchstaben", it: "Lettere Minuscole", zh: "小写字母", ja: "小文字", ru: "Строчные буквы", ar: "أحرف صغيرة" },
    description: {
      pt: "Converta rapidamente todo o conteudo para letras minusculas e remova excessos de caixa alta.",
      en: "Quickly convert all content to lowercase letters and remove excessive capitalization.",
      es: "Convierte rapidamente todo el contenido a minusculas y elimina excesos de mayusculas.",
      fr: "Convertissez rapidement tout le contenu en lettres minuscules et supprimez les excès de majuscules.",
      de: "Wandeln Sie schnell den gesamten Inhalt in Kleinbuchstaben um und entfernen Sie übermäßige Großschreibung.",
      it: "Converti rapidamente tutto il contenuto in lettere minuscole e rimuovi l'eccesso di maiuscole.",
      zh: "快速将所有内容转换为小写字母，并移除过多的大写。",
      ja: "すべてのコンテンツをすばやく小文字に変換し、過剰な大文字を削除します。",
      ru: "Быстро преобразуйте весь текст в строчные буквы и удалите излишнее использование заглавных.",
      ar: "حول كل المحتوى بسرعة إلى أحرف صغيرة وأزل الاستخدام المفرط للأحرف الكبيرة."
    },
    actionLabel: { pt: "Converter para minusculas", en: "Convert to lowercase", es: "Convertir a minusculas", fr: "Convertir en minuscules", de: "In Kleinbuchstaben umwandeln", it: "Converti in minuscolo", zh: "转换为小写", ja: "小文字に変換", ru: "Преобразовать в строчные", ar: "تحويل إلى أحرف صغيرة" },
    helperTitle: { pt: "Melhor para", en: "Best for", es: "Ideal para", fr: "Idéal pour", de: "Am besten geeignet für", it: "Ideale per", zh: "最适合", ja: "最適な用途", ru: "Лучше всего подходит для", ar: "الأفضل لـ" },
    helperText: {
      pt: "Otimo para normalizar textos colados, ajustar frases e preparar conteudo para nova edicao.",
      en: "Great for normalizing pasted text, adjusting sentences, and preparing content for further editing.",
      es: "Ideal para normalizar textos pegados, ajustar frases y preparar contenido para una nueva edicion.",
      fr: "Idéal pour normaliser le texte collé, ajuster les phrases et préparer le contenu pour une nouvelle édition.",
      de: "Großartig zum Normalisieren von eingefügtem Text, Anpassen von Sätzen und Vorbereiten von Inhalten für die weitere Bearbeitung.",
      it: "Ottimo per normalizzare testo incollato, regolare frasi e preparare contenuti per ulteriori modifiche.",
      zh: "非常适合规范化粘贴的文本、调整句子以及为后续编辑准备内容。",
      ja: "貼り付けたテキストの正規化、文の調整、さらなる編集のためのコンテンツ準備に最適です。",
      ru: "Отлично подходит для нормализации вставленного текста, корректировки предложений и подготовки контента к дальнейшему редактированию.",
      ar: "رائع لتطبيع النص الملصق وضبط الجمل وإعداد المحتوى للتحرير الإضافي."
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
      ],
      fr: [
        "Supprime l'excès de majuscules instantanément.",
        "Utile pour nettoyer les textes provenant de PDF, e-mails et anciennes copies.",
        "Préserve les espaces, les chiffres et la ponctuation."
      ],
      de: [
        "Entfernt übermäßige Großschreibung sofort.",
        "Hilfreich beim Bereinigen von Text aus PDFs, E-Mails und älteren Kopien.",
        "Behält Abstände, Zahlen und Satzzeichen bei."
      ],
      it: [
        "Rimuove l'eccesso di maiuscole all'istante.",
        "Utile per pulire testi da PDF, email e copie vecchie.",
        "Preserva spaziatura, numeri e punteggiatura."
      ],
      zh: [
        "立即移除过多的大写字母。",
        "有助于清理来自 PDF、电子邮件和旧副本的文本。",
        "保留间距、数字和标点符号。"
      ],
      ja: [
        "過剰な大文字を即座に削除します。",
        "PDF、メール、古いコピーからのテキストのクリーンアップに役立ちます。",
        "スペース、数字、句読点を保持します。"
      ],
      ru: [
        "Мгновенно удаляет излишнее использование заглавных букв.",
        "Помогает очищать текст из PDF, электронных писем и старых копий.",
        "Сохраняет пробелы, цифры и пунктуацию."
      ],
      ar: [
        "يزيل الاستخدام المفرط للأحرف الكبيرة فورًا.",
        "مفيد لتنظيف النص من ملفات PDF ورسائل البريد الإلكتروني والنسخ القديمة.",
        "يحافظ على المسافات والأرقام وعلامات الترقيم."
      ]
    }
  },
  strikethrough: {
    slug: "strikethrough-text",
    eyebrow: { pt: "Ferramenta de Estilo", en: "Styling Tool", es: "Herramienta de Estilo", fr: "Outil de Style", de: "Stilwerkzeug", it: "Strumento di Stile", zh: "样式工具", ja: "スタイリングツール", ru: "Инструмент стиля", ar: "أداة التصميم" },
    title: { pt: "Texto Tachado", en: "Strikethrough Text", es: "Texto Tachado", fr: "Texte Barré", de: "Durchgestrichener Text", it: "Testo Barrato", zh: "删除线文本", ja: "取り消し線テキスト", ru: "Зачеркнутый текст", ar: "نص مشطوب" },
    description: {
      pt: "Crie texto riscado automaticamente para posts, mensagens, bios e destaques visuais.",
      en: "Create strikethrough text automatically for posts, messages, bios, and visual highlights.",
      es: "Crea texto tachado automaticamente para posts, mensajes, bios y destacados visuales.",
      fr: "Créez du texte barré automatiquement pour les publications, messages, bios et mises en évidence visuelles.",
      de: "Erstellen Sie automatisch durchgestrichenen Text für Beiträge, Nachrichten, Bios und visuelle Hervorhebungen.",
      it: "Crea testo barrato automaticamente per post, messaggi, bio ed evidenziazioni visive.",
      zh: "自动为帖子、消息、个人简介和视觉高亮创建删除线文本。",
      ja: "投稿、メッセージ、自己紹介、視覚的なハイライト用に自動的に取り消し線テキストを作成します。",
      ru: "Автоматически создавайте зачеркнутый текст для публикаций, сообщений, биографий и визуальных выделений.",
      ar: "أنشئ نصًا مشطوبًا تلقائيًا للمنشورات والرسائل والسير الذاتية والإبرازات البصرية."
    },
    actionLabel: { pt: "Gerar texto tachado", en: "Generate strikethrough text", es: "Generar texto tachado", fr: "Générer du texte barré", de: "Durchgestrichenen Text erzeugen", it: "Genera testo barrato", zh: "生成删除线文本", ja: "取り消し線テキストを生成", ru: "Создать зачеркнутый текст", ar: "إنشاء نص مشطوب" },
    helperTitle: { pt: "Como funciona", en: "How it works", es: "Como funciona", fr: "Comment ça marche", de: "Wie es funktioniert", it: "Come funziona", zh: "工作原理", ja: "仕組み", ru: "Как это работает", ar: "كيف يعمل" },
    helperText: {
      pt: "Aplicamos o traço em cada caractere para você copiar o resultado pronto.",
      en: "We apply the strike to each character so you can copy the final result instantly.",
      es: "Aplicamos el trazo en cada caracter para que copies el resultado listo.",
      fr: "Nous appliquons la barre à chaque caractère pour que vous puissiez copier le résultat final instantanément.",
      de: "Wir wenden den Durchstreich auf jedes Zeichen an, damit Sie das Endergebnis sofort kopieren können.",
      it: "Applichiamo la barra a ogni carattere in modo che tu possa copiare il risultato finale immediatamente.",
      zh: "我们对每个字符应用删除线，以便您立即复制最终结果。",
      ja: "各文字に取り消し線を適用し、最終結果をすぐにコピーできるようにします。",
      ru: "Мы применяем зачеркивание к каждому символу, чтобы вы могли сразу скопировать готовый результат.",
      ar: "نطبق الشطب على كل حرف لتتمكن من نسخ النتيجة النهائية فورًا."
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
      ],
      fr: [
        "Collez un texte normal et cliquez pour appliquer l'effet barré.",
        "Utilisez-le dans les titres, comparaisons, publications sur les réseaux sociaux et mises en page ludiques.",
        "Le résultat remplace le contenu de la zone de texte pour une copie immédiate."
      ],
      de: [
        "Fügen Sie normalen Text ein und klicken Sie, um den Durchstreicheffekt anzuwenden.",
        "Verwenden Sie es in Überschriften, Vergleichen, Social-Media-Beiträgen und verspielten Layouts.",
        "Das Ergebnis ersetzt den Textbereichsinhalt für sofortiges Kopieren."
      ],
      it: [
        "Incolla un testo normale e clicca per applicare l'effetto barrato.",
        "Usalo in titoli, confronti, post sui social e layout creativi.",
        "Il risultato sostituisce il contenuto dell'area di testo per la copia immediata."
      ],
      zh: [
        "粘贴普通文本，点击应用删除线效果。",
        "用于标题、比较、社交媒体帖子和趣味布局。",
        "结果将替换文本框内容，方便立即复制。"
      ],
      ja: [
        "通常のテキストを貼り付け、クリックして取り消し線効果を適用します。",
        "見出し、比較、ソーシャル投稿、遊び心のあるレイアウトで使用します。",
        "結果はテキストエリアの内容を置き換え、即座にコピーできます。"
      ],
      ru: [
        "Вставьте обычный текст и нажмите, чтобы применить эффект зачеркивания.",
        "Используйте в заголовках, сравнениях, публикациях в соцсетях и игривых макетах.",
        "Результат заменяет содержимое текстового поля для мгновенного копирования."
      ],
      ar: [
        "الصق نصًا عاديًا وانقر لتطبيق تأثير الشطب.",
        "استخدمه في العناوين والمقارنات ومنشورات التواصل الاجتماعي والتخطيطات المرحة.",
        "تستبدل النتيجة محتوى مربع النص للنسخ الفوري."
      ]
    }
  },
  title: {
    slug: "capitalize-text",
    eyebrow: { pt: "Padronizacao", en: "Standardization", es: "Estandarizacion", fr: "Standardisation", de: "Standardisierung", it: "Standardizzazione", zh: "标准化", ja: "標準化", ru: "Стандартизация", ar: "توحيد" },
    title: { pt: "Iniciais Maiusculas", en: "Title Case", es: "Iniciales Mayusculas", fr: "Casse de Titre", de: "Titelformat", it: "Formato Titolo", zh: "标题格式", ja: "タイトルケース", ru: "Регистр заголовка", ar: "تنسيق العنوان" },
    description: {
      pt: "Transforme rapidamente o texto para que cada palavra comece com letra maiuscula.",
      en: "Quickly transform text so that each word starts with a capital letter.",
      es: "Transforma rapidamente el texto para que cada palabra comience con mayuscula.",
      fr: "Transformez rapidement le texte pour que chaque mot commence par une lettre majuscule.",
      de: "Wandeln Sie Text schnell um, sodass jedes Wort mit einem Großbuchstaben beginnt.",
      it: "Trasforma rapidamente il testo in modo che ogni parola inizi con una lettera maiuscola.",
      zh: "快速转换文本，使每个单词以大写字母开头。",
      ja: "各単語が大文字で始まるようにテキストをすばやく変換します。",
      ru: "Быстро преобразуйте текст так, чтобы каждое слово начиналось с заглавной буквы.",
      ar: "حول النص بسرعة بحيث تبدأ كل كلمة بحرف كبير."
    },
    actionLabel: { pt: "Aplicar iniciais maiusculas", en: "Apply title case", es: "Aplicar iniciales mayusculas", fr: "Appliquer la casse de titre", de: "Titelformat anwenden", it: "Applica il formato titolo", zh: "应用标题格式", ja: "タイトルケースを適用", ru: "Применить регистр заголовка", ar: "تطبيق تنسيق العنوان" },
    helperTitle: { pt: "Ideal para", en: "Best for", es: "Ideal para", fr: "Idéal pour", de: "Am besten für", it: "Ideale per", zh: "最适合", ja: "最適な用途", ru: "Лучше всего подходит для", ar: "الأفضل لـ" },
    helperText: {
      pt: "Titulos, headings, assuntos de email e nomes de secoes que precisam de padrao.",
      en: "Titles, headings, email subjects, and section names that need consistent formatting.",
      es: "Titulos, encabezados, asuntos de email y nombres de secciones que necesitan un patron.",
      fr: "Titres, en-têtes, sujets d'email et noms de sections qui nécessitent un formatage cohérent.",
      de: "Titel, Überschriften, E-Mail-Betreffe und Abschnittsnamen, die eine einheitliche Formatierung benötigen.",
      it: "Titoli, intestazioni, oggetti di email e nomi di sezioni che necessitano di formattazione coerente.",
      zh: "需要一致格式的标题、邮件主题和章节名称。",
      ja: "一貫した書式設定が必要なタイトル、見出し、メール件名、セクション名。",
      ru: "Заголовки, темы писем и названия разделов, требующие единообразного форматирования.",
      ar: "العناوين ورؤوس الأقسام وموضوعات البريد الإلكتروني وأسماء الأقسام التي تحتاج إلى تنسيق متسق."
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
      ],
      fr: [
        "Convertit chaque mot en casse de titre.",
        "Aide à organiser les en-têtes et les noms de pages.",
        "Maintient un flux simple : coller, convertir et copier."
      ],
      de: [
        "Wandelt jedes Wort in Titelformat um.",
        "Hilft bei der Organisation von Überschriften und Seitenamen.",
        "Hält den Ablauf einfach: einfügen, umwandeln und kopieren."
      ],
      it: [
        "Converte ogni parola in formato titolo.",
        "Aiuta a organizzare intestazioni e nomi di pagina.",
        "Mantiene il flusso semplice: incolla, converti e copia."
      ],
      zh: [
        "将每个单词转换为标题格式。",
        "帮助组织标题和页面名称。",
        "保持简单流程：粘贴、转换和复制。"
      ],
      ja: [
        "各単語をタイトルケースに変換します。",
        "見出しやページ名の整理に役立ちます。",
        "貼り付け、変換、コピーのシンプルな流れを維持します。"
      ],
      ru: [
        "Преобразует каждое слово в регистр заголовка.",
        "Помогает организовать заголовки и названия страниц.",
        "Сохраняет простой流程: вставка, преобразование и копирование."
      ],
      ar: [
        "يحول كل كلمة إلى تنسيق عنوان.",
        "يساعد في تنظيم الرؤوس وأسماء الصفحات.",
        "يحافظ على التدفق البسيط: لصق وتحويل ونسخ."
      ]
    }
  },
  reverse: {
    slug: "reverse-text",
    eyebrow: { pt: "Transformacao", en: "Transformation", es: "Transformacion", fr: "Transformation", de: "Umwandlung", it: "Trasformazione", zh: "转换", ja: "変換", ru: "Преобразование", ar: "تحويل" },
    title: { pt: "Texto Reverso", en: "Reverse Text", es: "Texto Inverso", fr: "Texte Inversé", de: "Text umkehren", it: "Testo Inverso", zh: "反转文本", ja: "テキストを反転", ru: "Обратный текст", ar: "نص معكوس" },
    description: {
      pt: "Inverta a ordem dos caracteres do seu texto para criar efeitos, testes ou brincadeiras.",
      en: "Reverse the order of your text characters to create effects, tests, or playful experiments.",
      es: "Invierte el orden de los caracteres de tu texto para crear efectos, pruebas o juegos visuales.",
      fr: "Inversez l'ordre des caractères de votre texte pour créer des effets, des tests ou des expériences ludiques.",
      de: "Kehren Sie die Reihenfolge Ihrer Textzeichen um, um Effekte, Tests oder spielerische Experimente zu erstellen.",
      it: "Inverti l'ordine dei caratteri del tuo testo per creare effetti, test o esperimenti giocosi.",
      zh: "反转文本字符的顺序，以创建效果、测试或有趣的实验。",
      ja: "テキスト文字の順序を反転して、効果、テスト、遊び心のある実験を作成します。",
      ru: "Измените порядок символов текста на обратный, чтобы создавать эффекты, тесты или игровые эксперименты.",
      ar: "اعكس ترتيب أحرف نصك لإنشاء تأثيرات أو اختبارات أو تجارب مرحة."
    },
    actionLabel: { pt: "Inverter texto", en: "Reverse text", es: "Invertir texto", fr: "Inverser le texte", de: "Text umkehren", it: "Inverti testo", zh: "反转文本", ja: "テキストを反転", ru: "Обратить текст", ar: "عكس النص" },
    helperTitle: { pt: "Quando usar", en: "When to use", es: "Cuando usar", fr: "Quand l'utiliser", de: "Wann verwenden", it: "Quando usarlo", zh: "何时使用", ja: "使用するタイミング", ru: "Когда использовать", ar: "متى تستخدم" },
    helperText: {
      pt: "Bom para criacao, desafios visuais, testes de interface e efeitos em posts.",
      en: "Great for creative work, visual experiments, interface tests, and playful posts.",
      es: "Bueno para creatividad, desafios visuales, pruebas de interfaz y efectos en publicaciones.",
      fr: "Idéal pour la création, les défis visuels, les tests d'interface et les effets dans les publications.",
      de: "Gut für kreative Arbeiten, visuelle Experimente, Oberflächentests und verspielte Beiträge.",
      it: "Ottimo per lavori creativi, esperimenti visivi, test di interfaccia e post giocosi.",
      zh: "非常适合创意工作、视觉实验、界面测试和趣味帖子。",
      ja: "クリエイティブな作業、視覚的な実験、インターフェーステスト、遊び心のある投稿に最適です。",
      ru: "Отлично подходит для творческих работ, визуальных экспериментов, тестирования интерфейсов и игривых публикаций.",
      ar: "جيد للإبداع والتحديات البصرية واختبارات الواجهة والتأثيرات في المنشورات."
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
      ],
      fr: [
        "Inverse le texte complet tout en conservant les sauts de ligne.",
        "Fonctionne bien avec les phrases courtes ou les blocs de texte plus longs.",
        "Le résultat est prêt à être copié et partagé."
      ],
      de: [
        "Kehrt den gesamten Text um, während Zeilenumbrüche erhalten bleiben.",
        "Funktioniert gut mit kurzen Sätzen oder größeren Textblöcken.",
        "Das Ergebnis ist bereit zum Kopieren und Teilen."
      ],
      it: [
        "Inverte l'intero testo mantenendo le interruzioni di riga.",
        "Funziona bene con frasi brevi o blocchi di testo più grandi.",
        "Il risultato è pronto per essere copiato e condiviso."
      ],
      zh: [
        "反转整个文本，同时保留换行符。",
        "适用于短句或较大的文本块。",
        "结果可直接复制和分享。"
      ],
      ja: [
        "改行を保持しながらテキスト全体を反転します。",
        "短いフレーズでも大きなテキストブロックでも問題なく動作します。",
        "結果はすぐにコピーして共有できます。"
      ],
      ru: [
        "Переворачивает весь текст, сохраняя разрывы строк.",
        "Хорошо работает как с короткими фразами, так и с большими текстовыми блоками.",
        "Результат готов к копированию и публикации."
      ],
      ar: [
        "يعكس النص بالكامل مع الحفاظ على فواصل الأسطر.",
        "يعمل بشكل جيد مع العبارات القصيرة أو كتل النص الأكبر.",
        "النتيجة جاهزة للنسخ والمشاركة."
      ]
    }
  },
  alternating: {
    slug: "alternating-case",
    eyebrow: { pt: "Estilo Criativo", en: "Creative Style", es: "Estilo Creativo", fr: "Style Créatif", de: "Kreativer Stil", it: "Stile Creativo", zh: "创意风格", ja: "クリエイティブスタイル", ru: "Творческий стиль", ar: "أسلوب إبداعي" },
    title: { pt: "Alternancia de Letras", en: "Alternating Case", es: "Alternancia de Letras", fr: "Alternance de Casse", de: "Wechselnde Groß-/Kleinschreibung", it: "Alternanza di Maiuscole/Minucole", zh: "交替大小写", ja: "交互ケース", ru: "Чередование регистра", ar: "تبادل الأحرف" },
    description: {
      pt: "Alterne letras maiusculas e minusculas automaticamente para criar um visual descontraido.",
      en: "Alternate uppercase and lowercase letters automatically for a more playful style.",
      es: "Alterna letras mayusculas y minusculas automaticamente para lograr un estilo mas relajado.",
      fr: "Alternez automatiquement les lettres majuscules et minuscules pour un style plus ludique.",
      de: "Wechseln Sie automatisch zwischen Groß- und Kleinbuchstaben für einen verspielteren Stil.",
      it: "Alterna automaticamente lettere maiuscole e minuscole per uno stile più giocoso.",
      zh: "自动交替大写和小写字母，以获得更有趣的风格。",
      ja: "大文字と小文字を自動的に交互に切り替えて、より遊び心のあるスタイルに。",
      ru: "Автоматически чередуйте заглавные и строчные буквы для более игривого стиля.",
      ar: "تبديل الأحرف الكبيرة والصغيرة تلقائيًا للحصول على أسلوب أكثر مرحًا."
    },
    actionLabel: { pt: "Gerar alternancia", en: "Generate alternating case", es: "Generar alternancia", fr: "Générer l'alternance", de: "Wechselcase erzeugen", it: "Genera alternanza", zh: "生成交替大小写", ja: "交互ケースを生成", ru: "Создать чередование", ar: "إنشاء تبادل" },
    helperTitle: { pt: "Visual rapido", en: "Quick visual effect", es: "Efecto visual rapido", fr: "Effet visuel rapide", de: "Schneller visueller Effekt", it: "Effetto visivo rapido", zh: "快速视觉效果", ja: "簡単な視覚効果", ru: "Быстрый визуальный эффект", ar: "تأثير بصري سريع" },
    helperText: {
      pt: "Perfeito para memes, posts, comentarios e chamadas com tom mais informal.",
      en: "Perfect for memes, posts, comments, and headlines with a more informal tone.",
      es: "Perfecto para memes, publicaciones, comentarios y llamados con un tono mas informal.",
      fr: "Parfait pour les mèmes, publications, commentaires et appels avec un ton plus informel.",
      de: "Perfekt für Memes, Beiträge, Kommentare und Überschriften mit einem informelleren Ton.",
      it: "Perfetto per meme, post, commenti e richiami con un tono più informale.",
      zh: "非常适合表情包、帖子、评论和非正式语气的标注。",
      ja: "ミーム、投稿、コメント、よりカジュアルなトーンの見出しに最適です。",
      ru: "Идеально подходит для мемов, публикаций, комментариев и призывов в неформальном тоне.",
      ar: "مثالي للميمات والمنشورات والتعليقات والنداءات بنبرة غير رسمية."
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
      ],
      fr: [
        "Alterne le texte caractère par caractère.",
        "Crée un effet visuel marqué sans édition manuelle.",
        "Vous pouvez coller n'importe quel texte et le convertir en un clic."
      ],
      de: [
        "Wechselt den Text Zeichen für Zeichen.",
        "Erzeugt einen starken visuellen Effekt ohne manuelle Bearbeitung.",
        "Sie können jeden Text einfügen und mit einem Klick umwandeln."
      ],
      it: [
        "Alterna il testo carattere per carattere.",
        "Crea un forte effetto visivo senza modifica manuale.",
        "Puoi incollare qualsiasi testo e convertirlo con un clic."
      ],
      zh: [
        "逐字符交替文本。",
        "无需手动编辑即可创建强烈的视觉效果。",
        "您可以粘贴任何文本并一键转换。"
      ],
      ja: [
        "文字ごとにテキストを交互に切り替えます。",
        "手動編集なしで強い視覚効果を生み出します。",
        "任意のテキストを貼り付けてワンクリックで変換できます。"
      ],
      ru: [
        "Чередует текст посимвольно.",
        "Создает сильный визуальный эффект без ручного редактирования.",
        "Вы можете вставить любой текст и преобразовать его одним щелчком мыши."
      ],
      ar: [
        "يتبادل النص حرفًا بحرف.",
        "يخلق تأثيرًا بصريًا قويًا دون تحرير يدوي.",
        "يمكنك لصق أي نص وتحويله بنقرة واحدة."
      ]
    }
  },
  italic: {
    slug: "italic-text",
    eyebrow: { pt: "Tipografia", en: "Typography", es: "Tipografia", fr: "Typographie", de: "Typografie", it: "Tipografia", zh: "排版", ja: "タイポグラフィ", ru: "Типографика", ar: "طباعة" },
    title: { pt: "Texto Italico", en: "Italic Text", es: "Texto Italico", fr: "Texte Italique", de: "Kursiver Text", it: "Testo in Corsivo", zh: "斜体文本", ja: "斜体テキスト", ru: "Курсивный текст", ar: "نص مائل" },
    description: {
      pt: "Converta seu texto em uma versao estilizada em italico para destacar trechos e chamadas.",
      en: "Convert your text into a stylized italic version to highlight phrases and calls to action.",
      es: "Convierte tu texto en una version estilizada en italico para destacar frases y llamados.",
      fr: "Convertissez votre texte en une version stylisée en italique pour mettre en évidence des phrases et des appels.",
      de: "Wandeln Sie Ihren Text in eine stilisierte kursive Version um, um Phrasen und Handlungsaufforderungen hervorzuheben.",
      it: "Converti il tuo testo in una versione stilizzata in corsivo per evidenziare frasi e inviti all'azione.",
      zh: "将文本转换为风格化的斜体版本，以突出显示短语和行动号召。",
      ja: "テキストを様式化された斜体バージョンに変換して、フレーズやコールトゥアクションを強調します。",
      ru: "Преобразуйте текст в стилизованную курсивную версию, чтобы выделить фразы и призывы к действию.",
      ar: "حول نصك إلى نسخة مائلة منمقة لإبراز العبارات والدعوات إلى اتخاذ إجراء."
    },
    actionLabel: { pt: "Gerar texto italico", en: "Generate italic text", es: "Generar texto italico", fr: "Générer du texte italique", de: "Kursiven Text erzeugen", it: "Genera testo in corsivo", zh: "生成斜体文本", ja: "斜体テキストを生成", ru: "Создать курсивный текст", ar: "إنشاء نص مائل" },
    helperTitle: { pt: "Destaque com estilo", en: "Stylish emphasis", es: "Destaca con estilo", fr: "Mise en valeur stylisée", de: "Stilvolle Hervorhebung", it: "Enfasi elegante", zh: "风格化强调", ja: "スタイリッシュな強調", ru: "Стильное выделение", ar: "تأكيد بأناقة" },
    helperText: {
      pt: "Use para bios, legendas, assinaturas, slogans e pequenos destaques tipograficos.",
      en: "Use it for bios, captions, signatures, slogans, and short typographic highlights.",
      es: "Usalo para bios, leyendas, firmas, slogans y pequenos destacados tipograficos.",
      fr: "Utilisez-le pour les bios, légendes, signatures, slogans et petits accents typographiques.",
      de: "Verwenden Sie es für Bios, Bildunterschriften, Signaturen, Slogans und kurze typografische Hervorhebungen.",
      it: "Usalo per bio, didascalie, firme, slogan e brevi evidenziazioni tipografiche.",
      zh: "用于个人简介、标题、签名、标语和简短的排版突出显示。",
      ja: "自己紹介、キャプション、署名、スローガン、短いタイポグラフィのハイライトに使用します。",
      ru: "Используйте для биографий, подписей, слоганов и коротких типографических выделений.",
      ar: "استخدمه للسير الذاتية والتعليقات والتوقيعات والشعارات والإبرازات الطباعية القصيرة."
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
      ],
      fr: [
        "Applique une variation unicode avec un aspect italique.",
        "Idéal pour mettre en évidence des phrases courtes et des noms.",
        "Conserve les caractères sans équivalent si nécessaire."
      ],
      de: [
        "Wendet eine Unicode-Variation mit kursivem Aussehen an.",
        "Ideal zum Hervorheben kurzer Sätze und Namen.",
        "Behält Zeichen ohne Äquivalent bei Bedarf bei."
      ],
      it: [
        "Applica una variazione unicode con aspetto corsivo.",
        "Ideale per evidenziare frasi brevi e nomi.",
        "Mantiene i caratteri senza equivalente quando necessario."
      ],
      zh: [
        "应用具有斜体外观的 Unicode 变体。",
        "非常适合突出显示短句和名称。",
        "必要时保留没有等效项的字符。"
      ],
      ja: [
        "斜体の外観を持つUnicodeバリアントを適用します。",
        "短いフレーズや名前を強調するのに最適です。",
        "必要に応じて同等のものがない文字を保持します。"
      ],
      ru: [
        "Применяет вариацию Unicode с курсивным начертанием.",
        "Идеально подходит для выделения коротких фраз и имен.",
        "Сохраняет символы без эквивалента при необходимости."
      ],
      ar: [
        "يطبق تباينًا في الترميز الموحد مع مظهر مائل.",
        "مثالي لإبراز العبارات القصيرة والأسماء.",
        "يحافظ على الأحرف دون مقابل عند الضرورة."
      ]
    }
  },
  morse: {
    slug: "morse-code-translator",
    eyebrow: { pt: "Codigo", en: "Code", es: "Codigo", fr: "Code", de: "Code", it: "Codice", zh: "代码", ja: "コード", ru: "Код", ar: "رمز" },
    title: { pt: "Codigo Morse", en: "Morse Code", es: "Codigo Morse", fr: "Code Morse", de: "Morsecode", it: "Codice Morse", zh: "摩尔斯电码", ja: "モールス信号", ru: "Азбука Морзе", ar: "شفرة مورس" },
    description: {
      pt: "Traduza letras e numeros para codigo Morse de forma instantanea.",
      en: "Translate letters and numbers into Morse code instantly.",
      es: "Traduce letras y numeros a codigo Morse de forma instantanea.",
      fr: "Traduisez instantanément des lettres et des chiffres en code Morse.",
      de: "Übersetzen Sie Buchstaben und Zahlen sofort in Morsecode.",
      it: "Traduci lettere e numeri in codice Morse all'istante.",
      zh: "立即将字母和数字翻译为摩尔斯电码。",
      ja: "文字と数字を瞬時にモールス信号に翻訳します。",
      ru: "Мгновенно переводите буквы и цифры в азбуку Морзе.",
      ar: "ترجمة الحروف والأرقام إلى شفرة مورس فورًا."
    },
    actionLabel: { pt: "Converter para Morse", en: "Convert to Morse", es: "Convertir a Morse", fr: "Convertir en Morse", de: "In Morsecode umwandeln", it: "Converti in Morse", zh: "转换为摩尔斯电码", ja: "モールス信号に変換", ru: "Преобразовать в азбуку Морзе", ar: "تحويل إلى شفرة مورس" },
    helperTitle: { pt: "Leitura simples", en: "Simple reading", es: "Lectura simple", fr: "Lecture simple", de: "Einfaches Lesen", it: "Lettura semplice", zh: "简单阅读", ja: "簡単な読み方", ru: "Простое чтение", ar: "قراءة بسيطة" },
    helperText: {
      pt: "Cada letra vira uma sequencia de pontos e tracos, com barras separando palavras.",
      en: "Each letter becomes a sequence of dots and dashes, with slashes separating words.",
      es: "Cada letra se convierte en una secuencia de puntos y rayas, con barras separando palabras.",
      fr: "Chaque lettre devient une séquence de points et de tirets, avec des barres séparant les mots.",
      de: "Jeder Buchstabe wird zu einer Folge von Punkten und Strichen, wobei Schrägstriche die Wörter trennen.",
      it: "Ogni lettera diventa una sequenza di punti e linee, con barre che separano le parole.",
      zh: "每个字母变成一系列点和划，斜杠分隔单词。",
      ja: "各文字は点とダッシュの連続になり、スラッシュで単語が区切られます。",
      ru: "Каждая буква превращается в последовательность точек и тире, а косые черты разделяют слова.",
      ar: "يصبح كل حرف سلسلة من النقاط والشرطات، مع شرطات مائلة تفصل بين الكلمات."
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
      ],
      fr: [
        "Convertit les lettres, les chiffres et certains signes de ponctuation.",
        "Utilise des barres pour séparer les mots dans le résultat final.",
        "Excellent pour l'étude, la curiosité et le contenu éducatif."
      ],
      de: [
        "Wandelt Buchstaben, Zahlen und einige Satzzeichen um.",
        "Verwendet Schrägstriche, um Wörter im Endergebnis zu trennen.",
        "Hervorragend zum Lernen, für Neugier und Bildungsinhalte."
      ],
      it: [
        "Converte lettere, numeri e alcuni segni di punteggiatura.",
        "Usa barre per separare le parole nel risultato finale.",
        "Eccellente per studio, curiosità e contenuti educativi."
      ],
      zh: [
        "转换字母、数字和一些标点符号。",
        "在最终输出中使用斜杠分隔单词。",
        "非常适合学习、好奇心和教育内容。"
      ],
      ja: [
        "文字、数字、一部の句読点を変換します。",
        "最終出力ではスラッシュを使用して単語を区切ります。",
        "学習、好奇心、教育コンテンツに最適です。"
      ],
      ru: [
        "Преобразует буквы, цифры и некоторые знаки пунктуации.",
        "Использует косые черты для разделения слов в конечном результате.",
        "Отлично подходит для учебы, любопытства и образовательного контента."
      ],
      ar: [
        "يحول الحروف والأرقام وبعض علامات الترقيم.",
        "يستخدم الشرطات المائلة لفصل الكلمات في النتيجة النهائية.",
        "ممتاز للدراسة والفضول والمحتوى التعليمي."
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
  },

  fr: {
    back: "← Retour à l'accueil",
    editorTitle: "Éditeur",
    editorCopy: "Collez votre texte, appliquez la transformation et copiez le résultat immédiatement.",
    placeholder: "Écrivez ou collez votre texte ici.",
    copyTitle: "Copier le texte",
    clearTitle: "Effacer le texte",
    stats: { chars: "Caractères", words: "Mots", lines: "Lignes" },
    tipsTitle: "Conseils rapides",
    tipsCopy: "Points importants pour utiliser cette fonctionnalité.",
    relatedTitle: "Autres outils",
    relatedCopy: "Naviguez vers d'autres pages dédiées de ConvertTextEasy."
  },

  de: {
    back: "← Zurück zur Startseite",
    editorTitle: "Editor",
    editorCopy: "Fügen Sie Ihren Text ein, wenden Sie die Transformation an und kopieren Sie das Ergebnis sofort.",
    placeholder: "Schreiben oder fügen Sie Ihren Text hier ein.",
    copyTitle: "Text kopieren",
    clearTitle: "Text löschen",
    stats: { chars: "Zeichen", words: "Wörter", lines: "Zeilen" },
    tipsTitle: "Schnelle Tipps",
    tipsCopy: "Wichtige Punkte zur Nutzung dieser Funktion.",
    relatedTitle: "Andere Werkzeuge",
    relatedCopy: "Navigieren Sie zu anderen spezifischen ConvertTextEasy-Seiten."
  },

  it: {
    back: "← Torna alla home",
    editorTitle: "Editor",
    editorCopy: "Incolla il tuo testo, applica la trasformazione e copia il risultato immediatamente.",
    placeholder: "Scrivi o incolla il tuo testo qui.",
    copyTitle: "Copia testo",
    clearTitle: "Cancella testo",
    stats: { chars: "Caratteri", words: "Parole", lines: "Righe" },
    tipsTitle: "Consigli rapidi",
    tipsCopy: "Punti importanti per utilizzare questa funzionalità.",
    relatedTitle: "Altri strumenti",
    relatedCopy: "Naviga verso altre pagine specifiche di ConvertTextEasy."
  },

  zh: {
    back: "← 返回首页",
    editorTitle: "编辑器",
    editorCopy: "粘贴文本，应用转换，立即复制结果。",
    placeholder: "在此处编写或粘贴文本。",
    copyTitle: "复制文本",
    clearTitle: "清除文本",
    stats: { chars: "字符", words: "单词", lines: "行数" },
    tipsTitle: "快速提示",
    tipsCopy: "使用此功能的重要提示。",
    relatedTitle: "其他工具",
    relatedCopy: "导航到其他 ConvertTextEasy 专用页面。"
  },

  ja: {
    back: "← ホームに戻る",
    editorTitle: "エディタ",
    editorCopy: "テキストを貼り付け、変換を適用し、すぐに結果をコピーします。",
    placeholder: "ここにテキストを入力または貼り付けてください。",
    copyTitle: "テキストをコピー",
    clearTitle: "テキストをクリア",
    stats: { chars: "文字", words: "単語", lines: "行" },
    tipsTitle: "クイックヒント",
    tipsCopy: "この機能を使用するための重要なポイント。",
    relatedTitle: "その他のツール",
    relatedCopy: "他の ConvertTextEasy 専用ページに移動します。"
  },

  ru: {
    back: "← На главную",
    editorTitle: "Редактор",
    editorCopy: "Вставьте текст, примените преобразование и сразу скопируйте результат.",
    placeholder: "Напишите или вставьте текст здесь.",
    copyTitle: "Копировать текст",
    clearTitle: "Очистить текст",
    stats: { chars: "Символы", words: "Слова", lines: "Строки" },
    tipsTitle: "Быстрые советы",
    tipsCopy: "Важные моменты для использования этой функции.",
    relatedTitle: "Другие инструменты",
    relatedCopy: "Перейдите к другим страницам ConvertTextEasy."
  },

  ar: {
    back: "← العودة إلى الصفحة الرئيسية",
    editorTitle: "المحرر",
    editorCopy: "الصق نصك، طبق التحويل، وانسخ النتيجة فورًا.",
    placeholder: "اكتب أو الصق نصك هنا.",
    copyTitle: "نسخ النص",
    clearTitle: "مسح النص",
    stats: { chars: "أحرف", words: "كلمات", lines: "أسطر" },
    tipsTitle: "نصائح سريعة",
    tipsCopy: "نقاط مهمة لاستخدام هذه الوظيفة.",
    relatedTitle: "أدوات أخرى",
    relatedCopy: "انتقل إلى صفحات ConvertTextEasy الأخرى."
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

function detectBrowserLang() {
  const supported = { pt: 'pt', en: 'en', es: 'es', fr: 'fr', de: 'de', it: 'it', zh: 'zh', ja: 'ja', ru: 'ru', ar: 'ar' };
  const langs = navigator.languages || [navigator.language || 'pt'];
  for (const raw of langs) {
    const code = raw.split('-')[0].toLowerCase();
    if (supported[code]) return supported[code];
  }
  return 'pt';
}

function initToolPage() {
  const lang = localStorage.getItem("language") || detectBrowserLang();
  renderToolPage(lang);
}

document.addEventListener("languagechange", (event) => {
  renderToolPage(event.detail.lang);
});

initToolPage();
