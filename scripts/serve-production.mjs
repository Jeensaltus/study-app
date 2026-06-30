/**
 * Production server: serves Vite build (dist/) + Knowledge Base PDFs from ../subject/
 *
 * Usage: npm run build && npm start
 * Env: PORT (default 4173), GEMINI_API_KEY, NVIDIA_API_KEY
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import { readFileSync, existsSync } from "node:fs";
import { createReadStream, statSync } from "node:fs";
import { createServer } from "node:http";
import { handleAiApiRequest } from "../server/aiProxy.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function loadDotEnv() {
  const envPath = path.resolve(__dirname, "../.env");
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const index = trimmed.indexOf("=");
    if (index === -1) continue;
    const key = trimmed.slice(0, index).trim();
    const value = trimmed.slice(index + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

loadDotEnv();

const distRoot = path.resolve(__dirname, "../dist");
const subjectRoot = path.resolve(__dirname, "../../subject");
const port = Number(process.env.PORT) || 4173;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".pdf": "application/pdf",
};

function isPathInside(root, filePath) {
  const resolvedRoot = path.resolve(root);
  const resolved = path.resolve(filePath);
  return resolved === resolvedRoot || resolved.startsWith(resolvedRoot + path.sep);
}

function sendFile(res, filePath, contentType) {
  const st = statSync(filePath);
  res.writeHead(200, {
    "Content-Type": contentType,
    "Content-Length": st.size,
  });
  const stream = createReadStream(filePath);
  stream.on("error", () => {
    if (!res.headersSent) {
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    }
    res.end("Read error");
  });
  stream.pipe(res);
}

function serveKnowledgeBase(url, res) {
  const rel = decodeURIComponent(url.slice("/kb-files/".length).split("?")[0]);
  const filePath = path.normalize(path.join(subjectRoot, rel));
  if (!isPathInside(subjectRoot, filePath) || !existsSync(filePath)) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }
  const st = statSync(filePath);
  if (!st.isFile()) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }
  sendFile(res, filePath, "application/pdf");
}

function serveStatic(url, res) {
  const safePath = decodeURIComponent(url.split("?")[0]);
  let filePath = path.join(distRoot, safePath === "/" ? "index.html" : safePath);

  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  }

  if (!existsSync(filePath) || !statSync(filePath).isFile()) {
    filePath = path.join(distRoot, "index.html");
  }

  if (!isPathInside(distRoot, filePath) || !existsSync(filePath)) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found — run npm run build first");
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  sendFile(res, filePath, MIME[ext] ?? "application/octet-stream");
}

if (!existsSync(distRoot)) {
  console.error("Missing dist/ — run: npm run build");
  process.exit(1);
}

createServer(async (req, res) => {
  try {
    const url = req.url ?? "/";
    if (await handleAiApiRequest(req, res)) return;
    if (url.startsWith("/kb-files/")) {
      serveKnowledgeBase(url, res);
      return;
    }
    serveStatic(url, res);
  } catch (error) {
    console.error("Request error:", error);
    if (!res.headersSent) {
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    }
    res.end("Internal server error");
  }
}).listen(port, () => {
  console.log(`Freshman Study App → http://localhost:${port}`);
  console.log(`Knowledge Base PDFs → ${subjectRoot}`);
  if (process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY) {
    console.log("Gemini API key loaded");
  }
  if (process.env.NVIDIA_API_KEY || process.env.VITE_NVIDIA_API_KEY) {
    console.log("NVIDIA API key loaded");
  }
});
