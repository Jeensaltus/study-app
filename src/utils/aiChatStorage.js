import { VALID_AI_MODELS } from "../config/settingsOptions.js";
import { getDeviceId, migrateLegacyStorage, scopedStorageKey } from "./deviceId.js";
import { readProgress } from "./storage.js";

const LEGACY_CHAT_KEY = "freshman-ai-tutor-chats-v1";
const LEGACY_MODEL_KEY = "freshman-ai-tutor-model-v1";
const EMPTY_TITLE = "New chat";

function modelStorageKey() {
  return scopedStorageKey(LEGACY_MODEL_KEY, getDeviceId());
}

function chatStorageKey() {
  return scopedStorageKey(LEGACY_CHAT_KEY, getDeviceId());
}

function createId() {
  return crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function repairMojibake(text) {
  if (typeof text !== "string" || !/[àâÃð]/.test(text)) return text;
  try {
    const bytes = Uint8Array.from(Array.from(text, (char) => char.charCodeAt(0) & 0xff));
    const decoded = new TextDecoder("utf-8", { fatal: false }).decode(bytes);
    return decoded.includes("�") ? text : decoded;
  } catch {
    return text;
  }
}

function cloneAttachment(attachment) {
  if (!attachment?.mimeType || !attachment?.data) return null;
  return {
    id: attachment.id ?? createId(),
    name: attachment.name ?? "attachment",
    mimeType: attachment.mimeType,
    sizeBytes: attachment.sizeBytes ?? 0,
    data: attachment.data,
  };
}

function cloneMessages(messages) {
  return messages
    .filter((message) => message?.role)
    .map((message) => {
      const attachments = (message.attachments ?? []).map(cloneAttachment).filter(Boolean);
      return {
        role: message.role,
        content: repairMojibake(typeof message.content === "string" ? message.content : ""),
        ...(attachments.length > 0 ? { attachments } : {}),
      };
    })
    .filter((message) => message.content.trim() || message.attachments?.length);
}

function createFallbackState(initialMessages) {
  const conversation = createConversation(initialMessages);
  return {
    activeConversationId: conversation.id,
    conversations: [conversation],
  };
}

export function titleFromMessage(content) {
  const compact = content.replace(/\s+/g, " ").trim();
  if (!compact) return EMPTY_TITLE;
  return compact.length > 38 ? `${compact.slice(0, 38)}...` : compact;
}

export function createConversation(initialMessages = []) {
  const timestamp = Date.now();
  return {
    id: createId(),
    title: EMPTY_TITLE,
    messages: cloneMessages(initialMessages),
    createdAt: timestamp,
    updatedAt: timestamp,
  };
}

export function sortConversations(conversations) {
  return [...conversations].sort((a, b) => (b.updatedAt ?? 0) - (a.updatedAt ?? 0));
}

export function readChatState(initialMessages) {
  try {
    migrateLegacyStorage(LEGACY_CHAT_KEY, chatStorageKey());
    const raw = localStorage.getItem(chatStorageKey());
    if (!raw) return createFallbackState(initialMessages);

    const parsed = JSON.parse(raw);
    const conversations = Array.isArray(parsed?.conversations)
      ? parsed.conversations
          .filter((conversation) => conversation?.id)
          .map((conversation) => ({
            id: conversation.id,
            title: repairMojibake(conversation.title || EMPTY_TITLE),
            messages: cloneMessages(conversation.messages ?? []),
            createdAt: conversation.createdAt ?? Date.now(),
            updatedAt: conversation.updatedAt ?? conversation.createdAt ?? Date.now(),
          }))
      : [];

    if (conversations.length === 0) return createFallbackState(initialMessages);

    const activeConversationId = conversations.some((conversation) => conversation.id === parsed.activeConversationId)
      ? parsed.activeConversationId
      : sortConversations(conversations)[0].id;

    return {
      activeConversationId,
      conversations,
    };
  } catch {
    return createFallbackState(initialMessages);
  }
}

export function writeChatState(chatState) {
  try {
    localStorage.setItem(chatStorageKey(), JSON.stringify(chatState));
  } catch {
    // Keep the in-memory chat usable even when browser storage is unavailable.
  }
}

export function readSelectedModel() {
  try {
    const fromProgress = readProgress().settings?.aiModel;
    if (VALID_AI_MODELS.has(fromProgress)) return fromProgress;

    migrateLegacyStorage(LEGACY_MODEL_KEY, modelStorageKey());
    const raw = localStorage.getItem(modelStorageKey());
    if (VALID_AI_MODELS.has(raw)) return raw;
    return "gemini-2.5-flash";
  } catch {
    return "gemini-2.5-flash";
  }
}

export function writeSelectedModel(model) {
  try {
    if (!VALID_AI_MODELS.has(model)) return;
    localStorage.setItem(modelStorageKey(), model);
  } catch {
    // Keep the in-memory selection usable even when browser storage is unavailable.
  }
}
