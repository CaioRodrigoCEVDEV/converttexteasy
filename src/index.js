import express from "express"; //importar o express para criar o servidor web
import path from "path"; //importar o path para lidar com caminhos de arquivos
import { fileURLToPath } from "url"; //importar o fileURLToPath para obter o caminho do diretório atual

//importar porta do arquivo .env
import dotenv from "dotenv"; //importar o dotenv para carregar as variáveis de ambiente do arquivo .env
dotenv.config();    //carregar as variáveis de ambiente do arquivo .env para process.env

const __dirname = path.dirname(fileURLToPath(import.meta.url)); //obter o caminho do diretório atual

const app = express(); //criar uma instância do express para configurar o servidor
app.use(express.json()); //configurar o express para lidar com requisições JSON

//servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, "..", "public")));

//rota para servir o arquivo index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
//rota para alternating-case.html
app.get("/alternating-case", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/tools", "alternating-case.html"));
});
//rota para captalize-text.html
app.get("/capitalize-text", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/tools", "capitalize-text.html"));
});
//rota para lowercase-text.html
app.get("/lowercase-text", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/tools", "lowercase-text.html"));
});
//rota para uppercase-text.html
app.get("/uppercase-text", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/tools", "uppercase-text.html"));
});
//rota para italic-text.html
app.get("/italic-text", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/tools", "italic-text.html"));
});
//rota para morse-code-translator.html
app.get("/morse-code-translator", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/tools", "morse-code-translator.html"));
});
//rota para reverse-text.html
app.get("/reverse-text", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/tools", "reverse-text.html"));
});
//rota para strikethrough-text.html
app.get("/strikethrough-text", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/tools", "strikethrough-text.html"));
});
//rota para sitemap.xml
app.get("/sitemap.xml", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "sitemap.xml"));
});

// /Pages
//rota para contact.html
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/pages", "contact.html"));
});
//rota para about.html
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/pages", "about.html"));
});
// rota para terms.html
app.get("/terms", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/pages", "terms.html"));
});
// rota para privacy-policy.html
app.get("/privacy-policy", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/pages", "privacy-policy.html"));
});

// rota para ads.txt pub-1764837779058715
app.get("/ads.txt", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "ads.txt"));
});

// redirecionar para a página 404 caso a rota não seja encontrada
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "..", "public/pages", "404.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor rodando em http://127.0.0.1:${process.env.PORT || 3000}`);
});