import http from "http";
import { spawn } from "child_process";
import fs from "fs";

const port = String(3300 + Math.floor(Math.random() * 1000));
const manifest = JSON.parse(fs.readFileSync("public/content-manifest.json", "utf8"));
const paths = [
  "/en/",
  "/en/about",
  "/en/contact",
  "/en/privacy-policy",
  "/en/terms",
  ...manifest.tools.map((tool) => `/en/${tool.slug}`),
  "/en/blog",
  ...manifest.articles.map((article) => `/en/blog/${article.slug}`)
];

const forbidden = [
  "Editor de",
  "Como usar",
  "Ferramentas relacionadas",
  "Conversor para",
  "Capitalização",
  "Cole seu",
  "Cole o conteúdo",
  "Clique em",
  "Copie o resultado",
  "Caracteres:",
  "Palavras:",
  "Linhas:",
  "Perguntas Frequentes",
  "Ferramenta relacionada",
  "Abrir ferramenta",
  "Por que isso importa?",
  "Passo a passo e boas práticas",
  "Exemplos e erros comuns",
  "Página Inicial",
  "Sobre Nós",
  "Política de Privacidade",
  "Termos de Uso",
  "Fique Atualizado",
  "Aviso de cookies"
];

function request(path) {
  return new Promise((resolve, reject) => {
    http.get(
      {
        hostname: "127.0.0.1",
        port,
        path,
        headers: { "accept-encoding": "identity" }
      },
      (res) => {
        let body = "";
        res.setEncoding("utf8");
        res.on("data", (chunk) => { body += chunk; });
        res.on("end", () => resolve({ status: res.statusCode, body }));
      }
    ).on("error", reject);
  });
}

const child = spawn(process.execPath, ["src/index.js"], {
  env: { ...process.env, PORT: port },
  stdio: ["ignore", "pipe", "pipe"]
});

let output = "";
child.stdout.on("data", (chunk) => { output += chunk.toString(); });
child.stderr.on("data", (chunk) => { output += chunk.toString(); });

try {
  await new Promise((resolve, reject) => {
    const started = setInterval(() => {
      if (output.includes(`127.0.0.1:${port}`)) {
        clearInterval(started);
        clearTimeout(timeout);
        resolve();
      }
    }, 50);
    const timeout = setTimeout(() => {
      clearInterval(started);
      reject(new Error(`Server did not start on port ${port}`));
    }, 5000);
  });

  const failures = [];
  for (const path of paths) {
    const response = await request(path);
    if (response.status !== 200) {
      failures.push(`${path}: expected 200, got ${response.status}`);
      continue;
    }

    for (const term of forbidden) {
      if (response.body.includes(term)) {
        failures.push(`${path}: found hardcoded PT-BR text "${term}"`);
      }
    }
  }

  if (failures.length) {
    console.error("i18n hardcoded text check failed:");
    for (const failure of failures) console.error(`- ${failure}`);
    process.exitCode = 1;
  } else {
    console.log("i18n hardcoded text check passed");
  }
} finally {
  child.kill();
}
