import { handleAiApiRequest } from "../../server/aiProxy.mjs";

/** Vercel Serverless — same AI routes as local npm start */
export default async function handler(req, res) {
  const handled = await handleAiApiRequest(req, res);
  if (!handled && !res.headersSent) {
    res.status(404).json({ error: "Not found" });
  }
}
