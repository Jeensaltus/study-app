import { handleAiRoute } from "../../../server/aiProxy.mjs";

export default async function handler(req, res) {
  await handleAiRoute(req, res, "/api/ai/nvidia/chat");
}

export const config = {
  api: { bodyParser: { sizeLimit: "4mb" } },
};
