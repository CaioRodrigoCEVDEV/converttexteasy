export const TOOL_PAGE_CONTENT = {
  "uppercase-text": {
    intro: "Converta frases para caixa alta quando precisar padronizar títulos curtos, rótulos, chamadas ou trechos que realmente pedem destaque visual.",
    howTo: ["Cole o texto no editor.", "Clique em Converter para transformar todas as letras em maiúsculas.", "Revise siglas, nomes próprios e trechos que não devem perder diferenciação antes de copiar."],
    before: "Promoção da semana para clientes VIP",
    after: "PROMOÇÃO DA SEMANA PARA CLIENTES VIP",
    useCases: ["Padronizar headings curtos em peças promocionais.", "Ajustar etiquetas internas e nomes de categorias.", "Preparar chamadas rápidas para artes e banners."],
    mistakes: ["Aplicar caixa alta em parágrafos longos, o que reduz legibilidade.", "Esquecer que siglas e nomes podem exigir revisão manual.", "Usar maiúsculas em excesso em textos SEO, dando aparência agressiva."],
    faq: [
      ["Quando vale a pena usar caixa alta?", "Em títulos curtos, botões, alertas e destaques pontuais. Para blocos longos, o ideal costuma ser manter capitalização normal."],
      ["A ferramenta altera acentos e pontuação?", "Não. Ela apenas converte letras para maiúsculas, preservando números, espaços e sinais."],
      ["Posso usar em listas grandes?", "Sim. Cole várias linhas, converta e revise os pontos onde caixa alta total não for desejada."]
    ],
    related: ["lowercase-text", "capitalize-text", "smart-capitalization"]
  },
  "lowercase-text": {
    intro: "Use esta ferramenta para normalizar textos que vieram com excesso de caixa alta, nomes de campos inconsistentes ou conteúdo colado de sistemas antigos.",
    howTo: ["Cole o texto bruto no editor.", "Converta todo o conteúdo para minúsculas.", "Se necessário, recupere manualmente siglas e nomes próprios importantes."],
    before: "ATENDIMENTO AO CLIENTE - SUPORTE PREMIUM",
    after: "atendimento ao cliente - suporte premium",
    useCases: ["Limpar textos exportados de ERPs e CRMs.", "Padronizar listas para revisão editorial.", "Reduzir ruído visual antes de reaplicar capitalização correta."],
    mistakes: ["Transformar conteúdo jurídico ou técnico sem revisar siglas.", "Assumir que minúsculas resolvem problemas de estilo sozinhas.", "Esquecer nomes de marcas que exigem grafia específica."],
    faq: [["Quando usar minúsculas?", "Quando o objetivo é limpar um texto gritado ou criar uma base neutra para nova revisão."], ["Ela corrige ortografia?", "Não. A ferramenta ajusta apenas a caixa das letras."], ["Funciona em várias linhas?", "Sim, incluindo listas, descrições longas e blocos copiados de planilhas."]],
    related: ["uppercase-text", "smart-capitalization", "removedor-espacos"]
  },
  "capitalize-text": {
    intro: "Capitalize palavras para deixar títulos, nomes de produtos e listas mais legíveis sem precisar editar item por item.",
    howTo: ["Cole o conteúdo no editor.", "Clique em Converter para aplicar inicial maiúscula em cada palavra.", "Revise artigos, preposições e convenções editoriais do seu projeto."],
    before: "guia completo de meta tags para landing pages",
    after: "Guia Completo De Meta Tags Para Landing Pages",
    useCases: ["Padronizar títulos de catálogo.", "Ajustar nomes em listas comerciais.", "Criar variações visuais para menus e cards."],
    mistakes: ["Aceitar o resultado sem revisar palavras que deveriam permanecer minúsculas.", "Usar em títulos jornalísticos sem considerar estilo editorial.", "Aplicar a nomes técnicos com grafia específica."],
    faq: [["Essa capitalização segue regra jornalística?", "Nem sempre. Ela aplica inicial maiúscula em cada palavra e por isso pede revisão final."], ["Posso usar para nomes próprios?", "Sim, especialmente como ponto de partida para limpeza rápida."], ["É útil para SEO?", "Ajuda na apresentação de títulos, mas a decisão final deve seguir clareza e padrão editorial."],],
    related: ["smart-capitalization", "uppercase-text", "slug-generator"]
  },
  "smart-capitalization": {
    intro: "Corrija frases com capitalização irregular e recupere uma leitura natural depois de pontos, interrogações e exclamações.",
    howTo: ["Cole frases digitadas sem padrão.", "Converta para aplicar maiúsculas no início de novas sentenças.", "Revise nomes próprios e siglas que exigem tratamento manual."],
    before: "ola. tudo bem? espero que sim! vamos revisar o texto.",
    after: "Ola. Tudo bem? Espero que sim! Vamos revisar o texto.",
    useCases: ["Ajustar transcrições rápidas.", "Limpar rascunhos de atendimento e suporte.", "Revisar textos copiados de chats e formulários."],
    mistakes: ["Esperar correção gramatical completa.", "Confiar na automação para nomes próprios complexos.", "Não revisar acentuação depois da conversão."],
    faq: [["A ferramenta corrige pontuação?", "Não. Ela usa a pontuação existente para reorganizar a capitalização das sentenças."], ["Serve para textos longos?", "Sim, principalmente rascunhos e respostas de atendimento."], ["Substitui revisão humana?", "Não. Ela economiza tempo, mas a revisão final continua necessária."],],
    related: ["capitalize-text", "lowercase-text", "removedor-linhas-vazias"]
  },
  "reverse-text": {
    intro: "Inverta a ordem dos caracteres para testes visuais, brincadeiras, validação de interfaces e casos em que a ordem do texto precisa ser observada ao contrário.",
    howTo: ["Cole a palavra, frase ou bloco no editor.", "Aplique a inversão.", "Copie o resultado e confira se a ordem invertida atende ao objetivo visual ou técnico."],
    before: "Texto para teste visual",
    after: "lausiv etset arap otxeT",
    useCases: ["Criar efeitos em posts e protótipos.", "Testar alinhamento e leitura em interfaces.", "Gerar exemplos para materiais educacionais."],
    mistakes: ["Usar o resultado como texto final em contexto formal.", "Ignorar que números e sinais também mudam de posição.", "Confundir texto invertido com espelhamento visual."],
    faq: [["Ela espelha visualmente o texto?", "Não. A ferramenta apenas inverte a sequência de caracteres."], ["Posso inverter várias linhas?", "Sim, inclusive blocos maiores."], ["O conteúdo sai do navegador?", "Não. A conversão é feita localmente."],],
    related: ["alternating-case", "italic-text", "texto-aleatorio"]
  },
  "alternating-case": {
    intro: "Gere letras alternadas para memes, chamadas informais e testes de estilo visual com um clique.",
    howTo: ["Cole o texto base.", "Converta para alternar maiúsculas e minúsculas.", "Copie o resultado e ajuste manualmente se quiser um padrão específico."],
    before: "este texto vai virar alternado",
    after: "EsTe TeXtO vAi ViRaR aLtErNaDo",
    useCases: ["Criar posts descontraídos.", "Simular estilo de meme.", "Testar variações de destaque em layouts."],
    mistakes: ["Usar em conteúdo corporativo ou indexável.", "Esperar legibilidade alta em textos longos.", "Aplicar o efeito em informações importantes."],
    faq: [["Esse formato é indicado para SEO?", "Não. Ele é mais útil para humor, redes sociais e experimentos visuais."], ["Posso usar em frases longas?", "Pode, mas a leitura fica pior quanto maior o trecho."], ["A ferramenta muda símbolos?", "Não. Ela atua principalmente sobre as letras."],],
    related: ["reverse-text", "italic-text", "strikethrough-text"]
  },
  "italic-text": {
    intro: "Transforme texto comum em caracteres Unicode com aparência itálica para bios, legendas e destaques rápidos em plataformas que não oferecem formatação nativa.",
    howTo: ["Cole a frase original.", "Converta para gerar a versão estilizada em Unicode.", "Teste o resultado no destino final porque cada plataforma interpreta Unicode de forma um pouco diferente."],
    before: "Perfil editorial ConvertTextEasy",
    after: "𝑃𝑒𝑟𝑓𝑖𝑙 𝑒𝑑𝑖𝑡𝑜𝑟𝑖𝑎𝑙 𝐶𝑜𝑛𝑣𝑒𝑟𝑡𝑇𝑒𝑥𝑡𝐸𝑎𝑠𝑦",
    useCases: ["Destacar bios em redes sociais.", "Criar chamadas estilizadas em legendas.", "Montar exemplos de tipografia Unicode."],
    mistakes: ["Assumir compatibilidade perfeita em toda plataforma.", "Usar em excesso em textos longos.", "Confundir Unicode estilizado com HTML itálico semântico."],
    faq: [["Isso é HTML <i>?", "Não. O resultado usa caracteres Unicode semelhantes a itálico."], ["Funciona em qualquer app?", "Na maioria sim, mas vale testar no ambiente final."], ["Perde acentuação?", "Os acentos normalmente são preservados conforme o conjunto Unicode disponível."],],
    related: ["strikethrough-text", "alternating-case", "uppercase-text"]
  },
  "strikethrough-text": {
    intro: "Aplique efeito tachado para comparações, listas de revisão e posts com contraste visual rápido.",
    howTo: ["Cole o texto que precisa do efeito.", "Converta para gerar o tachado caractere por caractere.", "Teste antes de publicar porque algumas plataformas renderizam o efeito de formas diferentes."],
    before: "Preço antigo",
    after: "P̶r̶e̶ç̶o̶ ̶a̶n̶t̶i̶g̶o̶",
    useCases: ["Mostrar preço antigo em rascunhos.", "Criar comparações visuais em posts.", "Marcar itens revisados em conteúdo informal."],
    mistakes: ["Usar em blocos longos e prejudicar leitura.", "Aplicar em textos acessíveis sem oferecer contexto adicional.", "Supor que o efeito será idêntico em todos os apps."],
    faq: [["O tachado é imagem?", "Não. É texto com combinação Unicode."], ["Serve para documentos oficiais?", "Melhor não. O uso é mais indicado para conteúdo leve e visual."], ["Posso copiar para redes sociais?", "Sim, esse é um dos usos mais comuns."],],
    related: ["italic-text", "alternating-case", "reverse-text"]
  },
  "morse-code-translator": {
    intro: "Converta palavras e frases para código Morse para estudo, demonstração e atividades educacionais básicas.",
    howTo: ["Digite a mensagem desejada.", "Converta para código Morse.", "Revise espaços entre letras e palavras antes de compartilhar ou usar em aula."],
    before: "sos urgente",
    after: "... --- ... / ..- .-. --. . -. - .",
    useCases: ["Explicar o básico de Morse em aulas.", "Criar jogos e desafios educativos.", "Gerar mensagens simples para demonstração."],
    mistakes: ["Esperar suporte a todos os símbolos possíveis.", "Não revisar separação entre palavras.", "Usar a tradução sem validar caracteres fora do padrão."],
    faq: [["Funciona com números?", "Sim, para os caracteres mais comuns suportados pela ferramenta."], ["O resultado é instantâneo?", "Sim, a conversão acontece no navegador."], ["Posso usar para estudar?", "Sim. É útil para exemplos rápidos e prática inicial."],],
    related: ["uppercase-text", "reverse-text", "texto-aleatorio"]
  },
  "contador-caracteres": {
    intro: "Conte caracteres, palavras e linhas em tempo real para revisar limites de formulário, meta descriptions, títulos e trechos para redes sociais.",
    howTo: ["Cole ou digite o texto no editor.", "Acompanhe as métricas abaixo do campo.", "Ajuste o conteúdo até atingir o limite desejado."],
    before: "Meta description com 182 caracteres pode ficar longa demais para muitos resultados de busca.",
    after: "Caracteres: 86 | Palavras: 13 | Linhas: 1",
    useCases: ["Revisar meta descriptions.", "Controlar limites de anúncios e formulários.", "Conferir tamanho de mensagens e snippets."],
    mistakes: ["Confundir caracteres com bytes.", "Ignorar que cada plataforma pode contar espaços de forma diferente.", "Usar apenas contagem sem revisar clareza do texto."],
    faq: [["A contagem atualiza automaticamente?", "Sim, em tempo real enquanto você digita ou cola o conteúdo."], ["Serve para SEO?", "Sim, especialmente para titles, descriptions e trechos curtos."], ["Conta linhas vazias?", "Sim, a métrica de linhas considera o conteúdo presente no editor."],],
    related: ["contador-palavras", "keyword-density-checker", "removedor-linhas-vazias"]
  },
  "contador-palavras": {
    intro: "Use o contador de palavras para planejar artigos, descrições, pautas, redações e conteúdo SEO com metas editoriais claras.",
    howTo: ["Cole o texto completo no editor.", "Leia a contagem de palavras em tempo real.", "Enxugue ou expanda o conteúdo conforme o objetivo editorial."],
    before: "Este rascunho ainda está curto para competir por uma busca informacional mais ampla.",
    after: "Palavras: 13",
    useCases: ["Planejar tamanho de posts e artigos.", "Conferir textos acadêmicos e briefings.", "Ajustar introduções e descrições para SEO."],
    mistakes: ["Perseguir volume sem responder à intenção de busca.", "Contar palavras e esquecer estrutura e clareza.", "Comparar páginas apenas por extensão, sem qualidade editorial."],
    faq: [["Mais palavras significam melhor ranking?", "Não. O mais importante é atender bem à intenção de busca com conteúdo útil."], ["Posso colar textos longos?", "Sim, a ferramenta foi feita para blocos maiores também."], ["Ela mostra caracteres junto?", "Sim, a página também exibe caracteres e linhas."],],
    related: ["contador-caracteres", "keyword-density-checker", "slug-generator"]
  },
  "removedor-espacos": {
    intro: "Remova espaços duplicados e normalize textos colados de e-mails, PDFs, planilhas e sistemas que quebram o espaçamento.",
    howTo: ["Cole o texto com espaçamento irregular.", "Converta para compactar espaços extras.", "Revise quebras de linha e alinhamentos que precisam permanecer."],
    before: "Texto    com   espaços      extras",
    after: "Texto com espaços extras",
    useCases: ["Limpar conteúdo colado de PDF.", "Padronizar descrições de produto.", "Ajustar campos antes de importar em sistema."],
    mistakes: ["Remover espaços significativos em códigos e tabelas.", "Aplicar a conteúdo que depende de alinhamento manual.", "Esquecer de revisar quebras de linha depois da limpeza."],
    faq: [["Ela remove todas as quebras de linha?", "Não. O foco é eliminar espaços sobrando dentro das linhas."], ["Serve para textos grandes?", "Sim, especialmente conteúdos copiados de múltiplas fontes."], ["Posso usar antes de SEO on-page?", "Sim, para limpar rascunhos antes da revisão final."],],
    related: ["removedor-linhas-vazias", "clean-special-characters", "lowercase-text"]
  },
  "removedor-linhas-vazias": {
    intro: "Apague linhas em branco desnecessárias para organizar listas, rascunhos, exports e conteúdo técnico sem perder as linhas com informação.",
    howTo: ["Cole o bloco de texto com espaços vazios entre linhas.", "Converta para remover linhas em branco.", "Revise se a separação visual do texto continua adequada."],
    before: "Item 1\n\n\nItem 2\n\nItem 3",
    after: "Item 1\nItem 2\nItem 3",
    useCases: ["Limpar listas de pauta.", "Organizar trechos exportados de CMS.", "Preparar dados textuais antes de importar."],
    mistakes: ["Remover separações que tinham função editorial.", "Usar em blocos onde as linhas vazias marcavam seções importantes.", "Não revisar o resultado em textos legais ou técnicos."],
    faq: [["A ferramenta apaga linhas com espaços?", "Sim, esse é um dos usos mais comuns."], ["Serve para CSV simples?", "Sim, desde que as linhas vazias realmente sejam ruído."], ["Posso combinar com outras ferramentas?", "Sim, principalmente com removedor de espaços extras e contadores."],],
    related: ["removedor-espacos", "contador-caracteres", "csv-to-json"]
  },
  "texto-aleatorio": {
    intro: "Gere texto de exemplo para protótipos, testes de formulário e validação de layouts sem depender de conteúdo real ou sensível.",
    howTo: ["Abra a ferramenta e gere o texto de demonstração.", "Use o conteúdo como placeholder em layouts e testes.", "Substitua por conteúdo real apenas na etapa final de revisão."],
    before: "",
    after: "ConvertTextEasy ajuda a transformar textos, validar dados e criar conteúdos otimizados.",
    useCases: ["Preencher wireframes e protótipos.", "Testar quebra de linha em componentes.", "Avaliar contadores e campos de formulário."],
    mistakes: ["Publicar placeholder em produção.", "Usar exemplos genéricos como conteúdo final.", "Esquecer de revisar o tamanho do texto gerado."],
    faq: [["O texto é definitivo?", "Não. Ele serve como amostra para testes."], ["Posso copiar e editar?", "Sim, o objetivo é justamente acelerar protótipos e rascunhos."], ["Ele substitui conteúdo editorial?", "Não. Conteúdo final precisa ser escrito para a página real."],],
    related: ["contador-caracteres", "reverse-text", "italic-text"]
  },
  "json-formatter": {
    intro: "Formate JSON para leitura humana, revisão de payloads e depuração de integrações sem depender de IDE ou extensões.",
    howTo: ["Cole o JSON minificado ou desorganizado.", "Formate no editor para aplicar indentação e leitura em bloco.", "Revise chaves, arrays, vírgulas e estrutura antes de copiar o resultado."],
    before: "{\"user\":{\"name\":\"Ana\",\"roles\":[\"admin\",\"editor\"]}}",
    after: "{\n  \"user\": {\n    \"name\": \"Ana\",\n    \"roles\": [\n      \"admin\",\n      \"editor\"\n    ]\n  }\n}",
    useCases: ["Inspecionar respostas de API.", "Revisar arquivos de configuração.", "Entender estruturas aninhadas antes de validar ou documentar."],
    mistakes: ["Confundir formatação com validação completa.", "Colar JSON com comentários e esperar compatibilidade.", "Não revisar aspas curvas ou vírgulas sobrando."],
    faq: [["Formatar JSON corrige erro de sintaxe?", "Não necessariamente. A ferramenta ajuda na leitura, mas JSON inválido pode exigir revisão ou validação adicional."], ["É útil para APIs?", "Sim. Esse é um dos usos mais comuns em debugging."], ["O conteúdo é enviado ao servidor?", "Não. O processamento ocorre localmente no navegador."],],
    related: ["json-validator", "csv-to-json", "xml-formatter"]
  },
  "json-validator": {
    intro: "Valide payloads JSON antes de enviar para APIs, salvar em arquivo ou publicar configurações em produção.",
    howTo: ["Cole o JSON bruto no editor.", "Execute a validação.", "Corrija vírgulas, aspas, chaves ou colchetes apontados pela estrutura inválida."],
    before: "{\"name\":\"Ana\",\"role\":\"admin\",}",
    after: "JSON inválido por vírgula final desnecessária",
    useCases: ["Testar payloads antes de chamadas HTTP.", "Conferir arquivos de configuração.", "Evitar erro simples em importações e automações."],
    mistakes: ["Assumir que JSON visualmente bonito está válido.", "Misturar aspas simples e duplas.", "Esquecer vírgulas ou colchetes em arrays longos."],
    faq: [["Qual a diferença para o formatter?", "O formatter ajuda na leitura; o validator ajuda a identificar se a sintaxe está correta."], ["Posso usar antes de publicar em API?", "Sim, esse é um bom fluxo de segurança."], ["Ele mostra onde está o problema?", "Ajuda a apontar que a estrutura está inválida, facilitando a revisão manual."],],
    related: ["json-formatter", "csv-to-json", "base64-decode"]
  },
  "jwt-decoder": {
    intro: "Decodifique header e payload de tokens JWT para inspeção local sem expor o segredo nem depender de serviços externos.",
    howTo: ["Cole o token JWT completo no editor.", "Decodifique para visualizar header e payload.", "Revise claims como iss, sub, aud, exp e iat antes de seguir."],
    before: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    after: "{ \"alg\": \"HS256\" } / { \"sub\": \"123\", \"exp\": 1715000000 }",
    useCases: ["Inspecionar claims em ambiente de desenvolvimento.", "Conferir expiração de sessão.", "Revisar audience e issuer em integrações."],
    mistakes: ["Confundir decodificação com verificação de assinatura.", "Colar tokens reais sensíveis sem necessidade.", "Esquecer que payload decodificado não prova autenticidade."],
    faq: [["Decodificar valida a assinatura do JWT?", "Não. A ferramenta revela o conteúdo legível, mas não confirma autenticidade."], ["Quais campos devo revisar?", "Principalmente algoritmo, emissor, audiência, assunto e expiração."], ["É seguro usar online?", "Para testes e leitura local, sim, desde que você evite dados sensíveis desnecessários."],],
    related: ["base64-decode", "timestamp-converter", "json-formatter"]
  },
  "base64-encode-decode": {
    intro: "Codifique e decodifique texto em Base64 no mesmo lugar para testes rápidos com APIs, autenticação básica e payloads simples.",
    howTo: ["Cole o texto original ou a string Base64.", "Escolha se quer codificar ou decodificar.", "Confira o resultado antes de usar em documentação, headers ou exemplos técnicos."],
    before: "ConvertTextEasy",
    after: "Q29udmVydFRleHRFYXN5",
    useCases: ["Gerar amostras de payload.", "Ler valores codificados em testes.", "Montar exemplos de documentação técnica."],
    mistakes: ["Confundir Base64 com criptografia.", "Decodificar conteúdo binário esperando texto limpo.", "Publicar dados sensíveis apenas por estarem codificados."],
    faq: [["Base64 protege dados?", "Não. Ele apenas representa os dados em outro formato."], ["Serve para arquivos?", "Para texto e testes rápidos, sim. Arquivos maiores pedem fluxo mais específico."], ["Posso fazer encode e decode na mesma página?", "Sim, essa ferramenta foi pensada para esse uso."],],
    related: ["base64-encode", "base64-decode", "jwt-decoder"]
  },
  "base64-decode": {
    intro: "Leia rapidamente strings em Base64 quando precisar conferir conteúdo de payloads, cabeçalhos ou exemplos recebidos em documentação e suporte.",
    howTo: ["Cole a string Base64.", "Decodifique no navegador.", "Valide se o resultado está no formato esperado antes de reutilizar."],
    before: "Q29udmVydFRleHRFYXN5",
    after: "ConvertTextEasy",
    useCases: ["Inspecionar exemplos de API.", "Ler conteúdo de testes internos.", "Conferir variáveis codificadas em documentação."],
    mistakes: ["Esperar texto válido para qualquer entrada binária.", "Tratar Base64 como dado seguro por padrão.", "Decodificar segredo real sem necessidade."],
    faq: [["Toda string Base64 vira texto legível?", "Não. Algumas representam bytes ou dados binários."], ["Essa ferramenta valida o conteúdo?", "Ela ajuda a converter, mas a interpretação do resultado é sua."], ["Posso usar em payloads JWT?", "Sim, especialmente para leitura rápida de partes codificadas."],],
    related: ["base64-encode", "base64-encode-decode", "jwt-decoder"]
  },
  "base64-encode": {
    intro: "Codifique texto em Base64 para testes, exemplos técnicos, cabeçalhos simples e fluxos de integração que exigem esse formato.",
    howTo: ["Cole o texto original.", "Converta para Base64.", "Copie a saída para o sistema, documentação ou teste desejado."],
    before: "usuario:senha",
    after: "dXN1YXJpbzpzZW5oYQ==",
    useCases: ["Gerar exemplos de autenticação básica.", "Preparar payloads simples.", "Criar amostras para documentação e QA."],
    mistakes: ["Usar Base64 como proteção real.", "Esquecer encoding correto antes da conversão.", "Publicar credenciais reais em exemplos."],
    faq: [["Base64 criptografa?", "Não. É apenas codificação."], ["Posso usar com acentos?", "Sim, mas convém validar o resultado no contexto final."], ["É útil para APIs?", "Sim, em vários fluxos de teste e documentação."],],
    related: ["base64-decode", "base64-encode-decode", "url-encoder"]
  },
  "url-encoder": {
    intro: "Codifique e decodifique URLs e parâmetros para evitar links quebrados quando houver espaços, acentos, barras ou caracteres reservados.",
    howTo: ["Cole a URL completa ou apenas o parâmetro.", "Escolha a conversão adequada.", "Teste o resultado em navegador ou ferramenta de desenvolvimento antes de publicar."],
    before: "q=meta tags para seo técnico",
    after: "q=meta%20tags%20para%20seo%20t%C3%A9cnico",
    useCases: ["Montar query strings seguras.", "Ler parâmetros codificados em logs.", "Corrigir links copiados com caracteres especiais."],
    mistakes: ["Codificar a URL inteira duas vezes.", "Misturar partes já codificadas com partes cruas.", "Ignorar diferença entre path e query string."],
    faq: [["Quando preciso codificar uma URL?", "Sempre que parâmetros incluírem espaços, acentos ou símbolos reservados."], ["Decode também é útil?", "Sim, principalmente para ler logs e URLs de campanhas."], ["A ferramenta altera domínio e protocolo?", "Ela atua sobre os caracteres do texto informado."],],
    related: ["slug-generator", "base64-encode", "meta-tag-generator"]
  },
  "uuid-generator": {
    intro: "Gere UUID v4 para testes, cadastros temporários, filas, objetos distribuídos e exemplos de documentação.",
    howTo: ["Abra a ferramenta.", "Gere um novo UUID v4.", "Copie o identificador e use onde precisar de um valor único de exemplo."],
    before: "",
    after: "550e8400-e29b-41d4-a716-446655440000",
    useCases: ["Criar IDs para QA.", "Popular seeds e exemplos de API.", "Evitar colisão em objetos de teste."],
    mistakes: ["Usar UUID aleatório quando o sistema exige padrão próprio.", "Assumir ordem temporal em UUID v4.", "Publicar IDs reais em exemplos públicos."],
    faq: [["UUID v4 é sequencial?", "Não. Ele é pensado para aleatoriedade, não para ordem."], ["Serve para banco de dados?", "Pode servir, desde que o sistema aceite esse formato."], ["Preciso instalar algo?", "Não. A geração ocorre no navegador."],],
    related: ["hash-generator", "timestamp-converter", "texto-aleatorio"]
  },
  "hash-generator": {
    intro: "Gere hash SHA-256 de textos para comparação de integridade, documentação técnica e verificações simples de conteúdo.",
    howTo: ["Cole o texto de entrada.", "Gere o hash.", "Compare a saída com outra origem ou registre o valor para verificação posterior."],
    before: "conteudo de exemplo",
    after: "d6d5a2f2...",
    useCases: ["Comparar mudanças em strings.", "Criar exemplos técnicos de integridade.", "Registrar assinaturas simples de conteúdo textual."],
    mistakes: ["Confundir hash com criptografia reversível.", "Usar hash simples para armazenar senha sem contexto adequado.", "Comparar entradas sem normalizar espaços e quebras."],
    faq: [["Consigo recuperar o texto a partir do hash?", "Não. SHA-256 é unidirecional."], ["Serve para senhas?", "Sozinho, não é a abordagem recomendada para senha em produção."], ["Posso comparar dois textos?", "Sim. Se o texto for idêntico, o hash também será."],],
    related: ["base64-encode", "json-validator", "uuid-generator"]
  },
  "timestamp-converter": {
    intro: "Converta timestamps Unix para datas legíveis e gere valores atuais para logs, integrações e debugging de expiração.",
    howTo: ["Cole o timestamp em segundos ou milissegundos.", "Converta para visualizar a data correspondente.", "Revise fuso e unidade usada antes de tomar decisão técnica."],
    before: "1715000000",
    after: "2024-05-06 12:53:20 UTC",
    useCases: ["Ler expiração de tokens.", "Interpretar logs de backend.", "Gerar timestamps para testes de API."],
    mistakes: ["Misturar segundos com milissegundos.", "Ignorar diferença de fuso horário.", "Comparar datas sem normalizar timezone."],
    faq: [["Como saber se o valor está em segundos ou milissegundos?", "Valores em milissegundos costumam ter 13 dígitos; em segundos, 10."], ["É útil com JWT?", "Sim, principalmente para revisar exp e iat."], ["A data mostrada depende do navegador?", "A interpretação visual pode variar conforme locale e fuso."],],
    related: ["jwt-decoder", "uuid-generator", "json-formatter"]
  },
  "meta-tag-generator": {
    intro: "Monte rapidamente title, meta description, canonical e Open Graph para páginas que precisam de base SEO técnica antes de publicação.",
    howTo: ["Preencha os campos da página.", "Gere as meta tags sugeridas.", "Revise comprimento, intenção de busca e URL final antes de publicar."],
    before: "Página sem title consistente e sem canonical",
    after: "<meta name=\"description\" content=\"...\">",
    useCases: ["Criar base SEO de landing pages.", "Padronizar snippets em sites pequenos.", "Montar exemplos para documentação interna."],
    mistakes: ["Duplicar a mesma description em várias páginas.", "Usar title genérico sem intenção clara.", "Definir canonical errado apontando para URL incorreta."],
    faq: [["A ferramenta garante bom ranking?", "Não. Ela ajuda na base técnica, mas conteúdo e relevância continuam sendo decisivos."], ["Canonical é obrigatório?", "Nem sempre, mas é muito útil para evitar sinais confusos de duplicidade."], ["Posso usar o resultado sem revisar?", "O ideal é sempre revisar antes de publicar."],],
    related: ["slug-generator", "keyword-density-checker", "contador-caracteres"]
  },
  "slug-generator": {
    intro: "Transforme títulos em URLs curtas e legíveis, removendo acentos, espaços e ruído que costuma atrapalhar consistência editorial.",
    howTo: ["Cole o título ou frase base.", "Gere o slug limpo.", "Revise se a URL final mantém o termo principal sem excesso de palavras."],
    before: "Como formatar JSON online em 3 passos",
    after: "como-formatar-json-online-em-3-passos",
    useCases: ["Padronizar URLs de blog.", "Criar slugs para catálogo e landing pages.", "Apoiar equipes editoriais com regra consistente."],
    mistakes: ["Gerar slugs longos demais.", "Excluir termo principal por excesso de limpeza.", "Mudar URLs já indexadas sem redirecionamento."],
    faq: [["Slug precisa repetir o título inteiro?", "Não. O ideal é ficar claro e curto."], ["A ferramenta remove acentos?", "Sim, esse é um dos objetivos principais."], ["Serve para SEO técnico?", "Sim, ajuda bastante na consistência das URLs."],],
    related: ["remove-accents", "url-encoder", "meta-tag-generator"]
  },
  "keyword-density-checker": {
    intro: "Analise frequência de termos para revisar repetições excessivas e encontrar equilíbrio entre clareza, naturalidade e foco semântico.",
    howTo: ["Cole o texto completo.", "Observe os termos mais frequentes e a densidade calculada.", "Reescreva trechos quando uma palavra estiver exageradamente repetida."],
    before: "SEO técnico melhora SEO quando o SEO está alinhado com conteúdo e UX.",
    after: "seo: 3 ocorrências | densidade aproximada: 25%",
    useCases: ["Revisar artigos antes de publicar.", "Comparar variações de texto para landing pages.", "Evitar keyword stuffing em conteúdos informacionais."],
    mistakes: ["Perseguir porcentagem mágica de densidade.", "Trocar clareza por repetição artificial.", "Analisar texto curto demais e tirar conclusões exageradas."],
    faq: [["Existe densidade ideal universal?", "Não. O mais importante é naturalidade e cobertura real do tema."], ["Essa análise substitui pesquisa de intenção?", "Não. Ela é apenas um apoio de revisão."], ["Serve para páginas curtas?", "Sim, mas a interpretação fica melhor em textos com mais contexto."],],
    related: ["contador-palavras", "contador-caracteres", "meta-tag-generator"]
  },
  "xml-formatter": {
    intro: "Organize XML com indentação e leitura mais clara para revisar feeds, sitemaps, integrações e documentos de configuração.",
    howTo: ["Cole o XML bruto no editor.", "Formate para aplicar quebras e recuos.", "Revise fechamento de tags, atributos e hierarquia antes de usar."],
    before: "<root><item id=\"1\"><name>Ana</name></item></root>",
    after: "<root>\n  <item id=\"1\">\n    <name>Ana</name>\n  </item>\n</root>",
    useCases: ["Ler sitemaps e feeds RSS.", "Revisar payloads SOAP e integrações antigas.", "Conferir arquivos de configuração baseados em XML."],
    mistakes: ["Confundir formatação com validação de schema.", "Editar XML manualmente sem revisar fechamento de tags.", "Colar conteúdo quebrado e esperar reparo automático."],
    faq: [["Serve para sitemap.xml?", "Sim, é um dos usos práticos mais comuns."], ["Formata XML inválido?", "Pode ajudar na leitura, mas estrutura quebrada ainda precisa correção."], ["É útil para integrações legadas?", "Sim, especialmente quando você precisa inspecionar payloads extensos."],],
    related: ["json-formatter", "json-validator", "csv-to-json"]
  },
  "csv-to-json": {
    intro: "Converta planilhas exportadas em JSON para facilitar testes de API, migrações simples e inspeção de dados tabulares.",
    howTo: ["Cole o CSV com cabeçalho.", "Converta para gerar uma lista JSON.", "Revise delimitadores, nomes de colunas e tipos antes de usar o resultado."],
    before: "nome,email\nAna,ana@email.com",
    after: "[{\"nome\":\"Ana\",\"email\":\"ana@email.com\"}]",
    useCases: ["Transformar exportações de planilha.", "Criar payloads de teste.", "Inspecionar rapidamente dados tabulares em formato JSON."],
    mistakes: ["Ignorar delimitador incorreto.", "Assumir tipos numéricos sem revisar strings.", "Usar cabeçalhos duplicados sem padronização."],
    faq: [["Preciso de cabeçalho no CSV?", "Para resultados úteis, sim, porque ele vira a chave do JSON."], ["Funciona com planilhas exportadas?", "Sim, esse é um caso comum."], ["Vale revisar o resultado?", "Sempre, principalmente quando houver campos vazios ou delimitadores especiais."],],
    related: ["json-formatter", "json-validator", "removedor-linhas-vazias"]
  },
  "remove-accents": {
    intro: "Remova acentos e marcas diacríticas para criar slugs, normalizar busca interna e adaptar textos a sistemas que não aceitam caracteres acentuados.",
    howTo: ["Cole o texto com acentos.", "Converta para a versão normalizada.", "Revise se algum termo precisa manter grafia original por exigência editorial."],
    before: "ação, informação, órgão",
    after: "acao, informacao, orgao",
    useCases: ["Preparar URLs amigáveis.", "Normalizar chaves de busca.", "Adaptar dados a integrações legadas."],
    mistakes: ["Publicar versão sem acentos em conteúdo que deveria permanecer natural.", "Usar limpeza total em nomes próprios e marcas.", "Confundir normalização técnica com texto final para leitura humana."],
    faq: [["Quando devo remover acentos?", "Em slugs, identificadores e fluxos técnicos onde a normalização ajuda."], ["É bom para conteúdo final?", "Geralmente não. Para leitura humana, o ideal é manter a ortografia correta."], ["Serve para outros idiomas?", "Sim, desde que o objetivo seja normalização técnica."],],
    related: ["slug-generator", "clean-special-characters", "url-encoder"]
  },
  "clean-special-characters": {
    intro: "Limpe símbolos estranhos, ruídos copiados de PDF e caracteres fora do padrão quando o texto precisa ficar mais estável para uso técnico.",
    howTo: ["Cole o conteúdo com ruído visual.", "Converta para remover caracteres especiais fora da regra da ferramenta.", "Revise se nenhum símbolo importante foi eliminado indevidamente."],
    before: "Texto™ com símbolos§ extras# e ruído…",
    after: "Texto com simbolos extras e ruido",
    useCases: ["Limpar conteúdo de PDF e OCR.", "Preparar importações simples em sistemas antigos.", "Reduzir ruído em bases textuais."],
    mistakes: ["Apagar símbolos relevantes como porcentagem ou moeda.", "Usar limpeza agressiva sem guardar o original.", "Confundir caracteres especiais com pontuação necessária."],
    faq: [["A ferramenta remove tudo que não é letra?", "Ela busca limpar ruídos, mas convém revisar o resultado antes de publicar ou importar."], ["É útil para PDFs?", "Sim, especialmente quando a cópia traz símbolos invisíveis ou estranhos."], ["Devo manter uma cópia do original?", "Sim, essa é uma boa prática sempre que a limpeza for agressiva."],],
    related: ["remove-accents", "removedor-espacos", "removedor-linhas-vazias"]
  }
};

export const ARTICLE_PAGE_CONTENT = {
  "como-converter-texto-para-maiusculo": {
    relatedTool: "uppercase-text",
    updatedAt: "2026-06-06",
    intro: "Converter texto para maiúsculo parece simples, mas o uso correto faz diferença em legibilidade, tom de voz e clareza editorial.",
    sections: [
      ["Quando usar caixa alta", ["Caixa alta funciona bem em títulos curtos, botões, alertas e pequenos destaques. Em blocos longos, a leitura fica mais cansativa e o texto pode parecer agressivo.", "Antes de converter tudo, vale decidir se o objetivo é destacar, padronizar uma lista ou apenas limpar um conteúdo que veio de outro sistema."]],
      ["Exemplo prático", ["Um título como 'promoção da semana para clientes VIP' pode virar 'PROMOÇÃO DA SEMANA PARA CLIENTES VIP' sem perder clareza. Já um parágrafo inteiro em maiúsculas tende a reduzir escaneabilidade.", "Em times editoriais, a melhor prática é usar caixa alta com intenção clara, não como padrão para todo conteúdo."]],
      ["Erros comuns", ["O erro mais frequente é usar caixa alta em excesso e prejudicar a leitura. Outro ponto é esquecer siglas, marcas e nomes que pedem revisão manual depois da conversão."]]
    ]
  },
  "diferenca-entre-utf-8-e-ansi": {
    relatedTool: "remove-accents",
    updatedAt: "2026-06-06",
    intro: "Quando acentos quebram ou símbolos estranhos aparecem, o problema costuma estar na codificação do texto e não no conteúdo em si.",
    sections: [
      ["UTF-8 e ANSI na prática", ["UTF-8 é hoje o padrão mais seguro para web porque lida bem com múltiplos idiomas e caracteres especiais. O termo ANSI costuma aparecer em sistemas antigos, mas nem sempre representa um padrão único.", "Se um arquivo foi salvo em uma codificação e aberto em outra, surgem erros como 'Ã§' no lugar de 'ç'."]],
      ["Como evitar texto quebrado", ["Defina UTF-8 em páginas, arquivos e exportações sempre que possível. Também vale revisar a codificação do editor, da planilha e da origem do arquivo antes de reenviar ou publicar.", "Quando o sistema legado não aceita acentos, normalizar o texto pode ser uma solução técnica, mas não substitui o ajuste correto de encoding." ]],
      ["Onde isso aparece", ["Esse problema é comum em CSVs, importações de banco, feeds XML, e-mails antigos e conteúdo colado de softwares legados."]]
    ]
  },
  "como-remover-acentos-em-textos": {
    relatedTool: "remove-accents",
    updatedAt: "2026-06-06",
    intro: "Remover acentos é útil em contexto técnico, mas não deve virar padrão para conteúdo final voltado a leitura humana.",
    sections: [["Casos em que faz sentido", ["Slugs, identificadores, comparações de busca e integrações antigas são cenários clássicos para normalização sem acentos.", "Também ajuda quando o sistema de destino não lida bem com caracteres acentuados."]], ["Exemplo real", ["O título 'Ação de cobrança urgente' pode virar 'acao-de-cobranca-urgente' em uma URL. Já no corpo do artigo, o ideal é manter a ortografia correta." ]], ["Cuidados", ["Não aplique a limpeza em nomes de pessoas, marcas e conteúdo final indexável sem revisar a intenção. O ganho técnico não compensa a perda editorial nesses casos."]]]
  },
  "como-formatar-json-online": {
    relatedTool: "json-formatter",
    updatedAt: "2026-06-06",
    intro: "JSON minificado é ótimo para transporte, mas ruim para revisão. Formatar melhora leitura, debugging e documentação.",
    sections: [["Por que formatar", ["Um payload em linha única dificulta encontrar chaves faltando, arrays extensos e objetos aninhados. A indentação devolve contexto visual e acelera a inspeção.", "Em times de produto e engenharia, esse passo poupa tempo na análise de erros." ]], ["Exemplo de uso", ["Ao receber uma resposta compacta de API, formate primeiro, valide depois e só então copie para documentação ou issue de suporte.", "Esse fluxo ajuda a separar problema de estrutura de problema de negócio."]], ["Erros comuns", ["Achar que formatar corrige JSON inválido, misturar comentários dentro do JSON e ignorar aspas ou vírgulas sobrando."]]]
  },
  "como-limpar-caracteres-especiais": {
    relatedTool: "clean-special-characters",
    updatedAt: "2026-06-06",
    intro: "Caracteres especiais viram problema quando entram como ruído e não quando fazem parte do significado do texto.",
    sections: [["De onde vem o ruído", ["PDFs, OCR, planilhas e colagens entre sistemas diferentes costumam inserir símbolos invisíveis, marcas estranhas e pontuação fora do padrão.", "Limpar isso ajuda principalmente em importações, bases textuais e formulários." ]], ["Como revisar o resultado", ["Compare antes e depois. Se o texto perdeu informação importante como moedas, porcentagens ou marcadores úteis, a limpeza foi agressiva demais."]], ["Boa prática", ["Guarde uma cópia do original sempre que a transformação puder remover informação relevante."]]]
  },
  "regex-para-iniciantes": {
    relatedTool: "clean-special-characters",
    updatedAt: "2026-06-06",
    intro: "Regex serve para localizar padrões em texto, mas o ganho aparece mesmo quando você começa com casos pequenos e previsíveis.",
    sections: [["Comece simples", ["Antes de escrever uma expressão longa, teste padrões básicos como números, e-mails ou espaços repetidos. Isso ajuda a entender o que cada trecho realmente captura.", "Ferramentas de texto ajudam a preparar exemplos limpos para esse teste." ]], ["Exemplos úteis", ["Buscar múltiplos espaços, localizar palavras em caixa alta e filtrar formatos repetidos são exercícios melhores do que começar com validações complexas."]], ["Onde iniciantes erram", ["O erro mais comum é tentar resolver tudo em uma única regex sem testar por partes. Outro é esquecer caracteres especiais que precisam de escape."]]]
  },
  "como-converter-csv-para-json": {
    relatedTool: "csv-to-json",
    updatedAt: "2026-06-06",
    intro: "CSV para JSON é uma conversão comum em integrações, mas cabeçalho, delimitador e campos vazios fazem diferença no resultado.",
    sections: [["O que revisar antes", ["Confirme se a primeira linha realmente contém os nomes das colunas. Sem isso, o JSON perde clareza e pode virar apenas uma sequência de valores.", "Também vale checar se o separador é vírgula, ponto e vírgula ou tab." ]], ["Exemplo simples", ["Um CSV com 'nome,email' no cabeçalho costuma virar um array de objetos com essas mesmas chaves. Isso já facilita testes de API e importações menores."]], ["Problemas comuns", ["Cabeçalhos duplicados, delimitadores errados e aspas mal fechadas costumam gerar o maior retrabalho."]]]
  },
  "como-validar-json": {
    relatedTool: "json-validator",
    updatedAt: "2026-06-06",
    intro: "Validar JSON antes de enviar para uma API evita erros triviais que parecem complexos quando aparecem só no backend.",
    sections: [["O que normalmente quebra", ["Vírgula final, aspas simples, chaves desequilibradas e arrays mal fechados seguem entre os erros mais comuns.", "Em payloads extensos, a validação economiza tempo porque evita caçar o problema apenas por inspeção visual." ]], ["Fluxo recomendado", ["Primeiro formate para leitura, depois valide a sintaxe. Só então copie o conteúdo para o ambiente final ou para a requisição que será testada."]], ["Ganhos práticos", ["Esse cuidado reduz retrabalho em integrações, documentação técnica e suporte a bugs de API."]]]
  },
  "como-formatar-xml": {
    relatedTool: "xml-formatter",
    updatedAt: "2026-06-06",
    intro: "XML continua presente em integrações, sitemaps, notas e sistemas legados. Formatar é o primeiro passo para conseguir ler a estrutura com calma.",
    sections: [["Por que a indentação ajuda", ["Sem recuo visual, fica difícil identificar quais tags pertencem a cada bloco. Isso atrasa revisão de atributos, fechamentos e hierarquia."]], ["Exemplo de uso", ["Sitemaps, feeds RSS e payloads SOAP são mais fáceis de revisar quando as tags estão separadas por níveis."]], ["Erros recorrentes", ["Tag sem fechamento, atributo mal citado e conteúdo colado com encoding quebrado são os pontos que mais merecem atenção."]]]
  },
  "como-contar-caracteres-online": {
    relatedTool: "contador-caracteres",
    updatedAt: "2026-06-06",
    intro: "A contagem de caracteres é simples, mas influencia títulos, snippets, anúncios, bios e limites de formulários diariamente.",
    sections: [["Onde essa métrica importa", ["Meta descriptions, campos de cadastro, SMS, snippets e títulos de campanha são exemplos clássicos.", "Nesses casos, contar caracteres evita corte, rejeição ou perda de clareza." ]], ["Como usar bem", ["Não basta bater o limite. O ideal é ajustar o texto para continuar claro mesmo depois de encurtado."]], ["Erro comum", ["Focar apenas no número e esquecer intenção, contexto e legibilidade do conteúdo final."]]]
  },
  "contador-de-palavras-para-seo": {
    relatedTool: "contador-palavras",
    updatedAt: "2026-06-06",
    intro: "Contar palavras ajuda a planejar escopo editorial, mas qualidade e adequação à busca continuam pesando mais do que volume puro.",
    sections: [["Como a métrica ajuda", ["A contagem mostra se um texto está curto demais para explicar um tema ou longo demais para a intenção proposta.", "Também facilita comparar versões de briefing e rascunho com mais objetividade." ]], ["O que evitar", ["Expandir texto só para atingir um número mágico de palavras tende a gerar conteúdo inchado e pouco útil."]], ["Uso saudável em SEO", ["Use a contagem como apoio de edição, não como meta isolada de performance orgânica."]]]
  },
  "base64-encode-decode-guia": {
    relatedTool: "base64-encode-decode",
    updatedAt: "2026-06-06",
    intro: "Base64 é muito útil em integrações e documentação, mas continua sendo apenas codificação e não proteção real.",
    sections: [["Quando aparece", ["Headers básicos, payloads, exemplos de API, imagens embutidas e strings de configuração usam Base64 com frequência."]], ["O que ele faz", ["Base64 transforma bytes em representação textual mais fácil de transportar. Qualquer pessoa com a string pode decodificar o conteúdo se ele não estiver protegido por outro mecanismo." ]], ["Erro clássico", ["Tratar Base64 como criptografia e expor informação sensível por falsa sensação de segurança."]]]
  },
  "jwt-decoder-online-seguro": {
    relatedTool: "jwt-decoder",
    updatedAt: "2026-06-06",
    intro: "Ler um JWT ajuda a depurar autenticação, mas segurança depende de assinatura, expiração e contexto, não só do que aparece no payload.",
    sections: [["O que observar", ["No header, vale revisar o algoritmo. No payload, claims como exp, iat, aud, iss e sub costumam responder boa parte das dúvidas de debugging." ]], ["Uso seguro", ["Prefira decodificar localmente, evite tokens de produção sem necessidade e nunca confunda leitura do payload com validação de autenticidade."]], ["Problemas frequentes", ["Timestamp em unidade errada, audience incorreta e token expirado são causas comuns de falha."]]]
  },
  "gerar-slug-seo": {
    relatedTool: "slug-generator",
    updatedAt: "2026-06-06",
    intro: "Slug bom é curto, legível e coerente com o foco principal da página. Nem sempre repetir o título inteiro ajuda.",
    sections: [["O que priorizar", ["Clareza, consistência e termo principal são mais úteis do que URL longa. Remover artigos, datas e excesso de adjetivos costuma melhorar bastante o resultado." ]], ["Exemplo", ["'Como formatar JSON online em 3 passos simples' pode virar 'como-formatar-json-online'. O sentido principal continua preservado com menos ruído."]], ["Cuidados", ["Evite trocar slugs já indexados sem redirecionamento e não gere URLs diferentes para páginas quase iguais."]]]
  },
  "meta-tags-para-iniciantes": {
    relatedTool: "meta-tag-generator",
    updatedAt: "2026-06-06",
    intro: "Meta tags ajudam buscadores e redes sociais a entender a página, mas elas funcionam melhor quando refletem um conteúdo real e bem estruturado.",
    sections: [["Quais são as básicas", ["Title, meta description, canonical e Open Graph cobrem boa parte da base técnica inicial de páginas institucionais, blog e ferramentas."]], ["Como escrever melhor", ["Evite descrições genéricas e titles duplicados. Cada página precisa sinalizar claramente sua utilidade específica."]], ["Erro comum", ["Copiar a mesma meta description em dezenas de URLs e criar um site difícil de diferenciar para crawler e usuário."]]]
  },
  "densidade-de-palavras-chave": {
    relatedTool: "keyword-density-checker",
    updatedAt: "2026-06-06",
    intro: "Densidade de palavra-chave é um indicador de revisão, não uma meta rígida. Texto bom continua parecendo escrito para gente, não para planilha.",
    sections: [["Como interpretar", ["Se um termo aparece demais, talvez o texto esteja artificial. Se aparece de menos, talvez o assunto principal esteja pouco explícito."]], ["Uso editorial", ["A análise funciona melhor junto com revisão de headings, exemplos, intenção de busca e variedade semântica."]], ["O que evitar", ["Procurar uma porcentagem universal e forçar repetições mecânicas."]]]
  },
  "timestamp-unix-explicado": {
    relatedTool: "timestamp-converter",
    updatedAt: "2026-06-06",
    intro: "Timestamp Unix aparece em logs, tokens e integrações porque é compacto, mas precisa ser interpretado com a unidade e o fuso corretos.",
    sections: [["Segundos ou milissegundos", ["Esse é o erro mais comum. Valores com 13 dígitos normalmente estão em milissegundos; com 10, em segundos."]], ["Onde ajuda converter", ["Ler expiração de JWT, investigar eventos em logs e comparar datas entre sistemas são usos frequentes."]], ["Cuidados", ["Sempre revise timezone e formato antes de concluir que um token está adiantado ou vencido."]]]
  },
  "uuid-v4-o-que-e": {
    relatedTool: "uuid-generator",
    updatedAt: "2026-06-06",
    intro: "UUID v4 é útil quando você precisa de identificadores únicos sem depender de sequência centralizada ou contexto de banco local.",
    sections: [["Quando usar", ["Objetos distribuídos, testes, filas, seeds e exemplos de APIs são cenários comuns."]], ["O que ele não resolve", ["UUID v4 não foi feito para ordenação cronológica e pode não ser a melhor escolha para todos os índices de banco."]], ["Boa prática", ["Gere IDs de exemplo para documentação e QA, mas não exponha identificadores reais sem necessidade."]]]
  },
  "url-encode-e-decode": {
    relatedTool: "url-encoder",
    updatedAt: "2026-06-06",
    intro: "Quando uma URL quebra por causa de espaço, acento ou símbolo reservado, quase sempre o problema está na codificação do parâmetro.",
    sections: [["Onde isso aparece", ["Campos de busca, UTMs, filtros e integrações com query string costumam exigir encode correto."]], ["Encode e decode", ["Codificar é útil antes de montar links; decodificar ajuda a entender URLs recebidas por log, analytics ou suporte."]], ["Erro frequente", ["Aplicar encode duas vezes e transformar um parâmetro válido em um valor difícil de interpretar."]]]
  },
  "hash-sha-256-online": {
    relatedTool: "hash-generator",
    updatedAt: "2026-06-06",
    intro: "SHA-256 ajuda a comparar integridade e registrar assinaturas de conteúdo, mas não é ferramenta para recuperar o texto depois.",
    sections: [["Para que serve", ["Verificar se duas entradas são idênticas, registrar checksums e demonstrar integridade são usos clássicos."]], ["O que não faz", ["Hash não comprime nem criptografa de forma reversível. Se o texto original for necessário, você precisa guardá-lo separadamente."]], ["Cuidados", ["Pequena diferença de espaço, quebra de linha ou acento muda completamente o resultado final."]]]
  },
  "remover-linhas-vazias": {
    relatedTool: "removedor-linhas-vazias",
    updatedAt: "2026-06-06",
    intro: "Linhas em branco demais atrapalham leitura, importação e revisão de listas, mas nem toda separação visual é ruído.",
    sections: [["Quando limpar", ["Rascunhos, exports de CMS, blocos copiados de e-mail e listas longas costumam ganhar legibilidade depois da remoção."]], ["O que revisar", ["Se as linhas vazias marcavam seções ou pausas importantes, talvez a limpeza precise ser parcial e não total."]], ["Melhor fluxo", ["Remova as linhas vazias, depois normalize espaços e só então revise a estrutura final do texto."]]]
  },
  "capitalizacao-inteligente": {
    relatedTool: "smart-capitalization",
    updatedAt: "2026-06-06",
    intro: "Capitalização inteligente economiza tempo em rascunhos e textos vindos de chats, mas o resultado ainda pede leitura final.",
    sections: [["Onde ajuda", ["Atendimento, transcrição rápida, anotações internas e textos digitados sem cuidado de caixa são bons candidatos."]], ["Limite da automação", ["A ferramenta melhora o início das frases, mas não entende totalmente contexto de nomes próprios, marcas e abreviações."]], ["Boa prática", ["Use como primeira passada e finalize com revisão humana antes de publicar."]]]
  }
};

export const STATIC_PAGE_CONTENT = {
  about: {
    title: "Sobre o ConvertTextEasy",
    desc: "Conheça quem mantém o ConvertTextEasy, por que o projeto existe e como tratamos utilidade, privacidade e qualidade editorial.",
    leadTitle: "Quem mantém o projeto",
    leadCopy: "O ConvertTextEasy é mantido como uma plataforma editorial e utilitária focada em ferramentas de texto, dados e SEO de uso imediato no navegador.",
    sections: [
      ["Finalidade do site", "O objetivo do ConvertTextEasy é oferecer ferramentas úteis para tarefas reais de edição, normalização, validação e apoio técnico. O projeto prioriza páginas claras, exemplos reproduzíveis e navegação simples para quem precisa resolver uma tarefa rapidamente."],
      ["Como as ferramentas funcionam", "Sempre que possível, o processamento acontece no navegador para reduzir latência e evitar envio desnecessário de conteúdo digitado. Isso é especialmente importante em páginas como JSON, JWT, Base64, slugs, hashes e contadores."],
      ["Compromisso editorial", "Cada ferramenta e artigo passa por revisão para manter tema coerente, exemplos específicos, links internos relacionados ao assunto e atualização gradual do conteúdo. O foco não é volume de páginas, e sim utilidade prática para pessoas que trabalham com texto, SEO e desenvolvimento."],
      ["Quem usa o ConvertTextEasy", "A plataforma atende redatores, analistas de SEO, desenvolvedores, estudantes, suporte técnico, marketing e qualquer pessoa que precise revisar, converter ou validar texto e dados sem instalar software."],
      ["Contato e transparência", "Dúvidas editoriais, correções de conteúdo e solicitações relacionadas ao site podem ser enviadas pela página de contato oficial. Mantemos as páginas públicas essenciais para transparência, privacidade e termos de uso." ]
    ]
  },
  "privacy-policy": {
    title: "Política de Privacidade",
    desc: "Como o ConvertTextEasy trata dados, cookies, medições básicas e sinalizações necessárias para operação e futura monetização com AdSense.",
    leadTitle: "Resumo de privacidade",
    leadCopy: "O ConvertTextEasy foi projetado para usar processamento local sempre que possível e reduzir coleta desnecessária de dados pessoais.",
    sections: [
      ["Dados digitados nas ferramentas", "Os textos inseridos nas ferramentas são processados localmente no navegador sempre que a funcionalidade permitir. Não existe a proposta de armazenar conteúdo digitado apenas para a conversão de texto, formatação ou validação apresentada ao usuário."],
      ["Cookies e armazenamento local", "O site pode usar cookies ou armazenamento local para preferências básicas, como tema visual, idioma e aceite do aviso de cookies. Esses dados servem para melhorar a experiência e não substituem análise jurídica completa do uso de serviços de terceiros."],
      ["Medição e serviços externos", "Podemos usar serviços de medição, segurança e monetização compatíveis com a operação do site. Se o Google AdSense estiver ativo após aprovação, provedores de anúncios podem usar cookies para personalização, limitação de frequência e relatórios conforme suas próprias políticas."],
      ["Links externos e terceiros", "Artigos e páginas podem citar serviços, padrões técnicos e plataformas externas. Ao seguir um link para outro site, o tratamento de dados passa a obedecer à política daquele destino."],
      ["Atualizações desta política", "A política pode ser atualizada conforme o site evolui, novas ferramentas são publicadas ou integrações de medição e anúncios forem ajustadas. A versão pública mais recente será sempre a referência válida nesta página." ]
    ]
  },
  terms: {
    title: "Termos de Uso",
    desc: "Condições básicas de uso do ConvertTextEasy, incluindo finalidade informativa, responsabilidade sobre conteúdo inserido e limitações operacionais do serviço.",
    leadTitle: "Uso permitido",
    leadCopy: "Ao utilizar o ConvertTextEasy, você concorda em usar as ferramentas e conteúdos para fins lícitos, técnicos e editoriais compatíveis com a proposta do site.",
    sections: [
      ["Natureza do serviço", "O ConvertTextEasy oferece ferramentas online e conteúdo informativo para apoio a tarefas de texto, dados e SEO. Embora busquemos precisão e estabilidade, os resultados devem ser revisados pelo usuário antes de uso em produção, ambientes legais ou decisões críticas."],
      ["Responsabilidade sobre o conteúdo inserido", "Cada pessoa usuária é responsável pelo texto, token, dado ou material que decide colar nas ferramentas. Recomendamos evitar o uso de segredos, dados pessoais sensíveis e informações confidenciais desnecessárias em qualquer serviço online."],
      ["Disponibilidade e mudanças", "Ferramentas, páginas, rotas, conteúdos e recursos podem ser ajustados, removidos ou ampliados sem aviso prévio, especialmente quando a alteração melhora qualidade, segurança, clareza editorial ou conformidade técnica do site."],
      ["Limitação de responsabilidade", "O ConvertTextEasy não garante adequação absoluta do resultado para todos os contextos. O uso do material publicado e das saídas geradas pelas ferramentas ocorre por conta e responsabilidade da pessoa usuária."],
      ["Contato sobre termos", "Questões relacionadas a uso do site, conteúdo indevido, correções ou dúvidas gerais podem ser enviadas pelo canal público de contato indicado no próprio projeto." ]
    ]
  },
  contact: {
    title: "Contato",
    desc: "Canal público para dúvidas, correções editoriais, sugestões de ferramentas e assuntos relacionados ao ConvertTextEasy.",
    leadTitle: "Fale com o ConvertTextEasy",
    leadCopy: "Usamos esta página para centralizar solicitações sobre conteúdo, funcionamento do site e oportunidades de melhoria.",
    sections: [
      ["Quando entrar em contato", "Use o contato para reportar erro em ferramenta, link quebrado, problema editorial, sugestão de nova utilidade, correção de artigo, dúvida sobre política pública do site ou questão relacionada à operação da plataforma."],
      ["Como enviar sua mensagem", "Ao entrar em contato, descreva a URL envolvida, o problema encontrado, o que você esperava ver e, se possível, um exemplo curto que ajude a reproduzir a situação. Isso acelera a análise e a correção."],
      ["Prazo e prioridade", "Mensagens sobre falha técnica, links quebrados, páginas incorretas ou problemas de privacidade tendem a receber prioridade. Sugestões editoriais e pedidos de novas ferramentas entram no fluxo de avaliação do projeto."],
      ["Canal público", "Para assuntos do site, utilize o e-mail editorial informado no projeto: contato@converttexteasy.com. Se preferir, também é possível citar a página específica envolvida na solicitação para facilitar o atendimento."],
      ["Sobre anúncios e políticas", "Dúvidas sobre privacidade, cookies, uso de anúncios e páginas institucionais também podem ser enviadas por esse canal, especialmente quando houver necessidade de esclarecimento público adicional." ]
    ]
  }
};

export const EDITORIAL_AUTHOR = "Editorial ConvertTextEasy";
