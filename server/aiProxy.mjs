/**
 * Server-side AI proxy — keys stay in process.env, never sent to browser bundle.
 */
const MAX_BODY_BYTES = 4 * 1024 * 1024;

const NVIDIA_MODELS = {
  "minimax-m3": "minimaxai/minimax-m3",
  "deepseek-v4-flash": "deepseek-ai/deepseek-v4-flash",
  "nemotron-super": "nvidia/nemotron-3-super-120b-a12b",
  "qwen3.5-122b": "qwen/qwen3.5-122b-a10b",
};

function getGeminiApiKey() {
  return process.env.GEMINI_API_KEY ?? process.env.VITE_GEMINI_API_KEY ?? "";
}

function getNvidiaApiKey() {
  return process.env.NVIDIA_API_KEY ?? process.env.VITE_NVIDIA_API_KEY ?? "";
}

export function getAiStatus() {
  return {
    gemini: Boolean(getGeminiApiKey()),
    nvidia: Boolean(getNvidiaApiKey()),
  };
}

function readJsonBody(req) {
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
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
  });
  res.end(body);
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

  const model = body.model ?? "gemini-2.5-flash";
  const latestMessage = body.messages?.[body.messages.length - 1];
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

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
    headers: { "Content-Type": "application/json" },
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

  const model = body.model ?? "gemini-2.5-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
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
      max_tokens: body.max_tokens ?? 8192,
      top_p: body.top_p ?? 0.9,
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data?.error?.message ?? `NVIDIA error ${response.status}`);
  }

  return { text: data.choices?.[0]?.message?.content ?? "" };
}

export async function handleAiApiRequest(req, res) {
  const url = req.url?.split("?")[0] ?? "";

  if (req.method === "GET" && url === "/api/ai/status") {
    sendJson(res, 200, getAiStatus());
    return true;
  }

  if (req.method !== "POST" || !url.startsWith("/api/ai/")) {
    return false;
  }

  const deviceId = req.headers["x-device-id"];
  if (deviceId) {
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
    const status = error.message === "Request body too large" ? 413 : 500;
    sendJson(res, status, { error: error.message ?? "AI proxy error" });
    return true;
  }
}
