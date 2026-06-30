import { handleAiRoute } from "../../server/aiProxy.mjs";

export default async function handler(req, res) {
  const handled = await handleAiRoute(req, res);
  if (!handled && !res.headersSent) {
    if (typeof res.status === "function") {
      res.status(404).json({ error: "Unknown AI route" });
      return;
    }
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Unknown AI route" }));
  }
}

export const config = {
  api: { bodyParser: { sizeLimit: "4mb" } },
};
