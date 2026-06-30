/**
 * Runs before vite build. Skips KB manifest when deploying without Knowledge Base.
 */
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

if (process.env.VITE_ENABLE_KB === "false") {
  console.log("prebuild: skip KB manifest (VITE_ENABLE_KB=false)");
  process.exit(0);
}

const result = spawnSync(process.execPath, [path.join(__dirname, "knowledge-base/build-manifest.mjs")], {
  stdio: "inherit",
});

process.exit(result.status ?? 1);
