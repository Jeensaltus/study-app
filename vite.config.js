import { loadEnv } from "vite";
import { createReadStream, existsSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { handleAiApiRequest } from "./server/aiProxy.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const subjectRoot = path.resolve(__dirname, "../subject");

function serveKnowledgeBaseFiles() {
  return (req, res, next) => {
    if (!req.url?.startsWith("/kb-files/")) return next();

    const rel = decodeURIComponent(req.url.slice("/kb-files/".length).split("?")[0]);
    const filePath = path.normalize(path.join(subjectRoot, rel));
    if (!filePath.startsWith(subjectRoot) || !existsSync(filePath)) {
      res.statusCode = 404;
      res.end("Not found");
      return;
    }

    const st = statSync(filePath);
    if (!st.isFile()) {
      res.statusCode = 404;
      res.end("Not found");
      return;
    }

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Length", st.size);
    createReadStream(filePath).pipe(res);
  };
}

function serveAiApi(env) {
  process.env.GEMINI_API_KEY = process.env.GEMINI_API_KEY ?? env.GEMINI_API_KEY ?? env.VITE_GEMINI_API_KEY ?? "";
  process.env.NVIDIA_API_KEY = process.env.NVIDIA_API_KEY ?? env.NVIDIA_API_KEY ?? env.VITE_NVIDIA_API_KEY ?? "";

  return (req, res, next) => {
    handleAiApiRequest(req, res)
      .then((handled) => {
        if (!handled) next();
      })
      .catch(next);
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
  plugins: [
    react(),
    mode === "analyze" &&
      visualizer({
        filename: "dist/bundle-stats.html",
        gzipSize: true,
        brotliSize: true,
        open: false,
      }),
    {
      name: "knowledge-base-static",
      configureServer(server) {
        server.middlewares.use(serveKnowledgeBaseFiles());
      },
      configurePreviewServer(server) {
        server.middlewares.use(serveKnowledgeBaseFiles());
      },
    },
    {
      name: "ai-api-proxy",
      configureServer(server) {
        server.middlewares.use(serveAiApi(env));
      },
      configurePreviewServer(server) {
        server.middlewares.use(serveAiApi(env));
      },
    },
  ].filter(Boolean),
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("recharts")) return "vendor-recharts";
            if (id.includes("jspdf") || id.includes("html2canvas") || id.includes("html-to-image")) return "vendor-pdf";
          if (id.includes("@google/genai")) return "vendor-genai";
          if (id.includes("katex") || id.includes("react-katex")) return "vendor-katex";
          if (id.includes("react-dom") || id.includes("react-router")) return "vendor-react";
          }
          if (id.includes("/src/data/flashcards/")) {
            const shard = id.match(/flashcards\/([^/]+)\.json/)?.[1];
            if (shard) return `flashcards-${shard}`;
            return "flashcards-manifest";
          }
          if (id.includes("/src/data/mathExamProblems")) return "data-exam-problems";
          if (id.includes("/src/data/mathExamSolutions")) return "data-exam-solutions";
          if (id.includes("/src/data/textbook/")) return "data-textbook";
          if (id.includes("/src/data/calculus1")) return "subject-calculus1";
          if (id.includes("/src/data/calculus2")) return "subject-calculus2";
          if (id.includes("/src/data/physics1")) return "subject-physics1";
          if (id.includes("/src/data/physics2")) return "subject-physics2";
          if (id.includes("/src/data/chemistry")) return "subject-chemistry";
          if (id.includes("/src/data/programming")) return "subject-programming";
        },
      },
    },
  },
  server: {
    fs: {
      allow: [path.resolve(__dirname, "..")],
    },
    middlewareMode: false,
  },
};
});
