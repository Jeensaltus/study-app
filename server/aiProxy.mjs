/**
 * Server-side AI proxy — keys stay in process.env, never sent to browser bundle.
 */
const MAX_BODY_BYTES = 4 * 1024 * 1024;

const NVIDIA_MODELS = {
  // minimax-m3 alias → M2.7 (M3 is not on NVIDIA integrate API yet; M2.5/M2.7 are)
  "minimax-m3": "minimaxai/minimax-m2.7",
  "minimax-m2.7": "minimaxai/minimax-m2.7",
  "deepseek-v4-flash": "deepseek-ai/deepseek-v4-flash",
  "nemotron-super": "nvidia/nemotron-3-super-120b-a12b",
  "qwen3.5-122b": "qwen/qwen3.5-122b-a10b",
};

function getGeminiApiKey() {
  return process.env.GEMINI_API_KEY ?? process.env.VITE_GEMINI_API_KEY ?? "";
}

function isLikelyGeminiApiKey(key) {
  if (typeof key !== "string") return false;
  const trimmed = key.trim();
  if (trimmed.length < 20) return false;
  // Standard keys (legacy) and Auth keys (AI Studio default since 2026)
  return trimmed.startsWith("AIza") || trimmed.startsWith("AQ.");
}

function geminiRequestHeaders(apiKey) {
  return {
    "Content-Type": "application/json",
    "x-goog-api-key": apiKey.trim(),
  };
}

function getNvidiaApiKey() {
  return process.env.NVIDIA_API_KEY ?? process.env.VITE_NVIDIA_API_KEY ?? "";
}

export function getAiStatus() {
  const geminiKey = getGeminiApiKey();
  return {
    gemini: Boolean(geminiKey) && isLikelyGeminiApiKey(geminiKey),
    nvidia: Boolean(getNvidiaApiKey()),
  };
}

function readJsonBody(req) {
  if (req.body !== undefined && req.body !== null) {
    if (typeof req.body === "string") {
      try {
        return Promise.resolve(req.body ? JSON.parse(req.body) : {});
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.resolve(req.body);
  }

  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;

    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(new Error("Request body too large"));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });

    req.on("end", () => {
      try {
        const raw = Buffer.concat(chunks).toString("utf8");
        resolve(raw ? JSON.parse(raw) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

function sendJson(res, status, payload) {
  if (typeof res.status === "function" && typeof res.json === "function") {
    res.status(status).json(payload);
    return;
  }
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
  });
  res.end(body);
}

function resolveRequestPath(req, routeOverride) {
  if (routeOverride) return routeOverride.replace(/\/$/, "");

  const fromQuery = req.query?.path;
  if (fromQuery) {
    const suffix = Array.isArray(fromQuery) ? fromQuery.join("/") : String(fromQuery);
    return `/api/ai/${suffix}`.replace(/\/+/g, "/").replace(/\/$/, "");
  }

  const rawUrl = req.url ?? "";
  const path = rawUrl.startsWith("http") ? new URL(rawUrl).pathname : rawUrl.split("?")[0];
  return path.replace(/\/$/, "") || "/";
}

function buildGeminiParts(message) {
  const parts = [];
  const text = message?.content?.trim();
  if (text) parts.push({ text });

  for (const attachment of message?.attachments ?? []) {
    if (!attachment?.mimeType || !attachment?.data) continue;
    parts.push({
      inlineData: {
        mimeType: attachment.mimeType,
        data: attachment.data,
      },
    });
  }

  if (parts.length === 0) parts.push({ text: "" });
  return parts;
}

function mapGeminiHistory(messages = []) {
  return messages.slice(0, -1).map((message) => ({
    role: message.role === "assistant" ? "model" : "user",
    parts: buildGeminiParts(message),
  }));
}

async function geminiChat(body) {
  const apiKey = getGeminiApiKey();
  if (!apiKey) throw new Error("Gemini API key not configured on server");
  if (!isLikelyGeminiApiKey(apiKey)) {
    throw new Error(
      "Gemini API key format looks wrong — use a key from Google AI Studio (AIza… or AQ.…)"
    );
  }

  const model = body.model ?? "gemini-2.5-flash";
  const latestMessage = body.messages?.[body.messages.length - 1];
  const trimmedKey = apiKey.trim();
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(trimmedKey)}`;

  const payload = {
    systemInstruction: body.systemInstruction
      ? { parts: [{ text: body.systemInstruction }] }
      : undefined,
    contents: [
      ...mapGeminiHistory(body.messages ?? []),
      { role: "user", parts: buildGeminiParts(latestMessage ?? { content: body.message ?? "" }) },
    ],
  };

  const response = await fetch(url, {
    method: "POST",
    headers: geminiRequestHeaders(trimmedKey),
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.error?.message ?? `Gemini error ${response.status}`);
  }

  const text = data.candidates?.[0]?.content?.parts?.map((part) => part.text).join("") ?? "";
  return { text };
}

async function geminiGenerate(body) {
  const apiKey = getGeminiApiKey();
  if (!apiKey) throw new Error("Gemini API key not configured on server");
  if (!isLikelyGeminiApiKey(apiKey)) {
    throw new Error(
      "Gemini API key format looks wrong — use a key from Google AI Studio (AIza… or AQ.…)"
    );
  }

  const model = body.model ?? "gemini-2.5-flash";
  const trimmedKey = apiKey.trim();
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(trimmedKey)}`;

  const response = await fetch(url, {
    method: "POST",
    headers: geminiRequestHeaders(trimmedKey),
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: body.prompt ?? "" }] }],
      generationConfig: {
        responseMimeType: body.responseMimeType ?? "application/json",
        temperature: body.temperature ?? 0.9,
      },
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.error?.message ?? `Gemini error ${response.status}`);
  }

  const text = data.candidates?.[0]?.content?.parts?.map((part) => part.text).join("") ?? "";
  return { text };
}

async function nvidiaChat(body) {
  const apiKey = getNvidiaApiKey();
  if (!apiKey) throw new Error("NVIDIA API key not configured on server");

  const modelId = NVIDIA_MODELS[body.model] ?? body.modelId;
  if (!modelId) throw new Error(`Unknown NVIDIA model: ${body.model}`);

  const response = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: modelId,
      messages: body.messages ?? [],
      temperature: body.temperature ?? 0.7,
      max_tokens: body.max_tokens ?? 2048,
      top_p: body.top_p ?? 0.9,
    }),
    signal: AbortSignal.timeout(25_000),
  });

  const data = await response.json();
  if (!response.ok) {
    const message = data?.error?.message ?? `NVIDIA error ${response.status}`;
    throw new Error(`${message} (model: ${modelId})`);
  }

  return { text: data.choices?.[0]?.message?.content ?? "" };
}

export async function handleAiRoute(req, res, routeOverride) {
  const url = resolveRequestPath(req, routeOverride);

  if (req.method === "GET" && url === "/api/ai/status") {
    sendJson(res, 200, getAiStatus());
    return true;
  }

  if (req.method !== "POST" || !url.startsWith("/api/ai/")) {
    return false;
  }

  const deviceId = (req.headers ?? {})["x-device-id"];
  if (deviceId && typeof res.setHeader === "function") {
    res.setHeader("X-Device-Id-Ack", String(deviceId).slice(0, 36));
  }

  try {
    const body = await readJsonBody(req);

    if (url === "/api/ai/gemini/chat") {
      sendJson(res, 200, await geminiChat(body));
      return true;
    }
    if (url === "/api/ai/gemini/generate") {
      sendJson(res, 200, await geminiGenerate(body));
      return true;
    }
    if (url === "/api/ai/nvidia/chat") {
      sendJson(res, 200, await nvidiaChat(body));
      return true;
    }

    sendJson(res, 404, { error: "Unknown AI route" });
    return true;
  } catch (error) {
    if (error.name === "TimeoutError" || error.name === "AbortError") {
      sendJson(res, 504, {
        error: "NVIDIA model took too long — try Gemini Flash on free hosting, or retry",
      });
      return true;
    }
    const status = error.message === "Request body too large" ? 413 : 500;
    sendJson(res, status, { error: error.message ?? "AI proxy error" });
    return true;
  }
}

/** @deprecated use handleAiRoute — kept for local dev server */
export async function handleAiApiRequest(req, res) {
  return handleAiRoute(req, res);
}
