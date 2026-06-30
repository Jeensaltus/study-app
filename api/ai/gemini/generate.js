import { handleAiRoute } from "../../../server/aiProxy.mjs";

export default function handler(req, res) {
  return handleAiRoute(req, res, "/api/ai/gemini/generate");
}

export const config = {
  api: { bodyParser: { sizeLimit: "4mb" } },
};
