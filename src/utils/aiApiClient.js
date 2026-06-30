import { getDeviceId } from "./deviceId";

let cachedStatus = null;
let statusFetchedAt = 0;
const STATUS_TTL_MS = 60_000;

export async function fetchAiStatus(force = false) {
  if (!force && cachedStatus && Date.now() - statusFetchedAt < STATUS_TTL_MS) {
    return cachedStatus;
  }

  try {
    const response = await fetch("/api/ai/status", {
      headers: { "X-Device-Id": getDeviceId() },
    });
    const contentType = response.headers.get("content-type") ?? "";
    if (!response.ok || !contentType.includes("application/json")) {
      throw new Error(`status ${response.status}`);
    }
    cachedStatus = { ...(await response.json()), apiReachable: true };
  } catch (error) {
    cachedStatus = {
      gemini: false,
      nvidia: false,
      apiReachable: false,
      apiError: error?.message ?? "unreachable",
    };
  }

  statusFetchedAt = Date.now();
  return cachedStatus;
}

export function getCachedAiStatus() {
  return cachedStatus ?? { gemini: false, nvidia: false, apiReachable: false };
}

async function postAi(path, body) {
  const response = await fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Device-Id": getDeviceId(),
    },
    body: JSON.stringify(body),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error ?? `AI request failed (${response.status})`);
  }
  return data;
}

export async function proxyGeminiChat({ model, systemInstruction, messages }) {
  const result = await postAi("/api/ai/gemini/chat", { model, systemInstruction, messages });
  return result.text ?? "";
}

export async function proxyGeminiGenerate({ prompt, model, responseMimeType, temperature }) {
  const result = await postAi("/api/ai/gemini/generate", { prompt, model, responseMimeType, temperature });
  return result.text ?? "";
}

export async function proxyNvidiaChat({ model, messages, temperature, max_tokens, top_p }) {
  const result = await postAi("/api/ai/nvidia/chat", { model, messages, temperature, max_tokens, top_p });
  return result.text ?? "";
}
