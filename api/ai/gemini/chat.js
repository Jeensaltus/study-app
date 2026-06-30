import { handleAiRoute } from "../../../server/aiProxy.mjs";

export default function handler(req, res) {
  return handleAiRoute(req, res, "/api/ai/gemini/chat");
}

export const config = {
  api: { bodyParser: { sizeLimit: "4mb" } },
};
