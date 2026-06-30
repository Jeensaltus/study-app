import { useEffect, useMemo, useRef, useState } from "react";
import { Bot, Brain, ChevronUp, Cpu, MessageSquare, Paperclip, Plus, Send, Sparkles, Trash2, X, Zap } from "lucide-react";
import ChatBubble from "../components/ChatBubble";
import ChatAttachments from "../components/ChatAttachments";
import { useProgress } from "../hooks/useProgress";
import { askTutor } from "../utils/aiTutor";
import { updateSettings } from "../utils/storage";
import { fetchAiStatus, getCachedAiStatus } from "../utils/aiApiClient";
import {
  CHAT_ATTACHMENT_ACCEPT,
  filesToAttachments,
  isGeminiModel,
  MAX_CHAT_ATTACHMENTS,
} from "../utils/chatAttachments";
import {
  createConversation,
  readChatState,
  readSelectedModel,
  sortConversations,
  titleFromMessage,
  writeChatState,
  writeSelectedModel,
} from "../utils/aiChatStorage";

const MODEL_OPTIONS = [
  {
    id: "gemini-2.5-flash",
    label: "Gemini 2.5 Flash",
    shortLabel: "Flash",
    provider: "gemini",
    icon: Zap,
    activeClass: "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800",
    dotClass: "bg-blue-500",
    menuClass: "hover:bg-blue-50 dark:hover:bg-blue-950/40",
    selectedMenuClass: "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300",
  },
  {
    id: "gemini-2.5-pro",
    label: "Gemini 2.5 Pro",
    shortLabel: "Pro",
    provider: "gemini",
    icon: Brain,
    activeClass: "bg-violet-50 text-violet-600 border-violet-200 dark:bg-violet-950/50 dark:text-violet-300 dark:border-violet-800",
    dotClass: "bg-violet-500",
    menuClass: "hover:bg-violet-50 dark:hover:bg-violet-950/40",
    selectedMenuClass: "bg-violet-50 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300",
  },
  {
    id: "minimax-m3",
    label: "MiniMax M2.7",
    shortLabel: "MiniMax",
    provider: "nvidia",
    icon: Bot,
    activeClass: "bg-green-50 text-green-600 border-green-200 dark:bg-green-950/50 dark:text-green-300 dark:border-green-800",
    dotClass: "bg-green-500",
    menuClass: "hover:bg-green-50 dark:hover:bg-green-950/40",
    selectedMenuClass: "bg-green-50 text-green-700 dark:bg-green-950/50 dark:text-green-300",
  },
  {
    id: "deepseek-v4-flash",
    label: "DeepSeek V4 Flash",
    shortLabel: "DeepSeek",
    provider: "nvidia",
    icon: Sparkles,
    activeClass: "bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-950/50 dark:text-orange-300 dark:border-orange-800",
    dotClass: "bg-orange-500",
    menuClass: "hover:bg-orange-50 dark:hover:bg-orange-950/40",
    selectedMenuClass: "bg-orange-50 text-orange-700 dark:bg-orange-950/50 dark:text-orange-300",
  },
  {
    id: "nemotron-super",
    label: "Nemotron Super 120B",
    shortLabel: "Nemotron",
    provider: "nvidia",
    icon: Cpu,
    activeClass: "bg-teal-50 text-teal-600 border-teal-200 dark:bg-teal-950/50 dark:text-teal-300 dark:border-teal-800",
    dotClass: "bg-teal-500",
    menuClass: "hover:bg-teal-50 dark:hover:bg-teal-950/40",
    selectedMenuClass: "bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300",
  },
  {
    id: "qwen3.5-122b",
    label: "Qwen 3.5 122B",
    shortLabel: "Qwen",
    provider: "nvidia",
    icon: Brain,
    activeClass: "bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-800",
    dotClass: "bg-rose-500",
    menuClass: "hover:bg-rose-50 dark:hover:bg-rose-950/40",
    selectedMenuClass: "bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300",
  },
];

const DEFAULT_WELCOME =
  "สวัสดีครับ ผมเป็น AI Tutor ถามเรื่อง Calculus, Physics, Chemistry หรือ Programming ได้เลย (Gemini รองรับแนบรูป/PDF ได้ — model NVIDIA ใช้ข้อความอย่างเดียว)";

const initialMessages = [{ role: "assistant", content: DEFAULT_WELCOME }];

function formatUpdatedAt(timestamp) {
  if (!timestamp) return "";
  return new Intl.DateTimeFormat("th-TH", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(timestamp));
}

function chatPreview(messages) {
  const latest = [...messages].reverse().find((message) => message.role === "user") ?? messages[messages.length - 1];
  const text = latest?.content?.replace(/\s+/g, " ").trim();
  if (text) return text.length > 52 ? `${text.slice(0, 52)}...` : text;
  if (latest?.attachments?.length) return `📎 ${latest.attachments.length} ไฟล์แนบ`;
  return "ยังไม่มีข้อความ";
}

function updateConversation(chatState, conversationId, updater) {
  return {
    ...chatState,
    conversations: chatState.conversations.map((conversation) =>
      conversation.id === conversationId ? updater(conversation) : conversation
    ),
  };
}

export default function AiTutor() {
  const progress = useProgress();
  const [aiStatus, setAiStatus] = useState(() => getCachedAiStatus());
  const [chatState, setChatState] = useState(() => readChatState(initialMessages));
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState(() => progress.settings.aiModel ?? readSelectedModel() ?? "gemini-2.5-flash");
  const [modelMenuOpen, setModelMenuOpen] = useState(false);
  const [pendingAttachments, setPendingAttachments] = useState([]);
  const [attachError, setAttachError] = useState("");
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const modelMenuRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchAiStatus().then(setAiStatus);
  }, []);

  const isModelOnline = (option) => {
    if (option.provider === "gemini") return aiStatus.gemini;
    if (option.provider === "nvidia") return aiStatus.nvidia;
    return false;
  };

  const selectedModelOption = MODEL_OPTIONS.find((option) => option.id === model) ?? MODEL_OPTIONS[0];
  const SelectedModelIcon = selectedModelOption?.icon ?? Bot;
  const canAttachFiles = isGeminiModel(model);
  const canSend = Boolean(input.trim() || pendingAttachments.length);

  const conversations = chatState.conversations;
  const sortedConversations = useMemo(() => sortConversations(conversations), [conversations]);
  const activeConversation = conversations.find((conversation) => conversation.id === chatState.activeConversationId) ?? conversations[0];
  const messages = activeConversation?.messages ?? initialMessages;

  const prevConversationId = useRef(null);
  const prevLoading = useRef(false);

  useEffect(() => {
    const conversationChanged = prevConversationId.current !== chatState.activeConversationId;
    const loadingJustStarted = loading && !prevLoading.current;

    if (conversationChanged || loadingJustStarted) {
      prevConversationId.current = chatState.activeConversationId;
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
    prevLoading.current = loading;
  }, [chatState.activeConversationId, loading]);

  useEffect(() => {
    const fromSettings = progress.settings.aiModel;
    if (fromSettings && fromSettings !== model) {
      setModel(fromSettings);
      writeSelectedModel(fromSettings);
    }
  }, [progress.settings.aiModel]);

  useEffect(() => {
    if (!MODEL_OPTIONS.some((option) => option.id === model)) {
      const fallback = progress.settings.aiModel ?? MODEL_OPTIONS[0].id;
      setModel(fallback);
      writeSelectedModel(fallback);
    }
  }, [model, progress.settings.aiModel]);

  useEffect(() => {
    if (!modelMenuOpen) return;
    function handleClickOutside(event) {
      if (!modelMenuRef.current?.contains(event.target)) setModelMenuOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [modelMenuOpen]);

  function saveState(nextState) {
    setChatState(nextState);
    writeChatState(nextState);
  }

  function handleModelChange(nextModel) {
    setModel(nextModel);
    writeSelectedModel(nextModel);
    updateSettings({ aiModel: nextModel });
    setModelMenuOpen(false);
    if (!isGeminiModel(nextModel)) {
      setPendingAttachments([]);
      setAttachError("");
    }
  }

  function startNewChat() {
    if (loading) return;
    const conversation = createConversation(initialMessages);
    saveState({ activeConversationId: conversation.id, conversations: [conversation, ...conversations] });
    setInput("");
    setPendingAttachments([]);
    setAttachError("");
    requestAnimationFrame(() => inputRef.current?.focus());
  }

  function selectConversation(conversationId) {
    if (loading || conversationId === chatState.activeConversationId) return;
    saveState({ ...chatState, activeConversationId: conversationId });
    setInput("");
    requestAnimationFrame(() => inputRef.current?.focus());
  }

  function deleteConversation(conversationId) {
    if (loading) return;
    const remaining = conversations.filter((conversation) => conversation.id !== conversationId);
    if (remaining.length === 0) {
      const conversation = createConversation(initialMessages);
      saveState({ activeConversationId: conversation.id, conversations: [conversation] });
      setInput("");
      return;
    }
    const nextActiveId = conversationId === chatState.activeConversationId ? sortConversations(remaining)[0].id : chatState.activeConversationId;
    saveState({ activeConversationId: nextActiveId, conversations: remaining });
    setInput("");
  }

  async function handleAttachmentPick(event) {
    const picked = Array.from(event.target.files ?? []);
    event.target.value = "";
    if (picked.length === 0) return;

    setAttachError("");
    try {
      const next = await filesToAttachments(picked);
      if (next.length === 0) {
        setAttachError("เลือกไฟล์แล้ว แต่อ่านไม่สำเร็จ — ลองใหม่อีกครั้ง");
        return;
      }
      setPendingAttachments((current) => {
        const merged = [...current, ...next];
        if (merged.length > MAX_CHAT_ATTACHMENTS) {
          setAttachError(`แนบได้สูงสุด ${MAX_CHAT_ATTACHMENTS} ไฟล์ต่อข้อความ`);
          return current;
        }
        return merged;
      });
    } catch (error) {
      setAttachError(error.message ?? "แนบไฟล์ไม่สำเร็จ");
    }
  }

  function removePendingAttachment(attachmentId) {
    setPendingAttachments((current) => current.filter((item) => item.id !== attachmentId));
    setAttachError("");
  }

  async function submit(event) {
    event.preventDefault();
    if (!canSend || loading) return;

    const conversation = activeConversation ?? createConversation(initialMessages);
    const conversationId = conversation.id;
    const trimmed = input.trim();
    const userMessage = {
      role: "user",
      content: trimmed,
      ...(pendingAttachments.length > 0 ? { attachments: pendingAttachments } : {}),
    };
    const nextMessages = [...conversation.messages, userMessage];
    const titleSource = trimmed || (pendingAttachments.length ? "รูป/ไฟล์แนบ" : "New chat");
    const title = conversation.title === "New chat" ? titleFromMessage(titleSource) : conversation.title;
    const baseState = conversations.some((item) => item.id === conversationId)
      ? chatState
      : { activeConversationId: conversationId, conversations: [conversation, ...conversations] };
    const withUserMessage = updateConversation(baseState, conversationId, (item) => ({
      ...item,
      title,
      messages: nextMessages,
      updatedAt: Date.now(),
    }));

    saveState({ ...withUserMessage, activeConversationId: conversationId });
    setInput("");
    setPendingAttachments([]);
    setAttachError("");
    setLoading(true);

    try {
      const reply = await askTutor(nextMessages, model);
      saveState(
        updateConversation({ ...withUserMessage, activeConversationId: conversationId }, conversationId, (item) => ({
          ...item,
          messages: [...nextMessages, { role: "assistant", content: reply }],
          updatedAt: Date.now(),
        }))
      );
    } catch {
      saveState(
        updateConversation({ ...withUserMessage, activeConversationId: conversationId }, conversationId, (item) => ({
          ...item,
          messages: [...nextMessages, { role: "assistant", content: "เกิดข้อผิดพลาดชั่วคราวครับ ลองถามใหม่อีกครั้งได้เลย" }],
          updatedAt: Date.now(),
        }))
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-0 w-full flex-1 flex-col gap-3 overflow-hidden px-3 py-3 sm:px-4">
      <header className="shrink-0 rounded-2xl border border-slate-200/70 bg-white/95 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/95">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary dark:bg-blue-950/60">
            <Bot size={30} />
          </div>
          <div className="min-w-0">
            <h1 className="text-3xl font-bold text-ink dark:text-white">AI Tutor</h1>
            <p className="truncate text-xs text-slate-500 dark:text-slate-400">
              {selectedModelOption ? selectedModelOption.label : "โหมด local"}
            </p>
          </div>
        </div>
      </header>

      <div className="grid min-h-0 flex-1 gap-3 lg:grid-cols-[300px_minmax(0,1fr)]">
        <aside className="flex min-h-0 flex-col rounded-2xl border border-slate-200/70 bg-white/95 p-3 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/95">
          <button
            type="button"
            onClick={startNewChat}
            disabled={loading}
            className="mb-3 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-3 text-sm font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Plus size={18} />
            New chat
          </button>

          <div className="min-h-0 flex-1 space-y-2 overflow-y-auto pr-1">
            {sortedConversations.map((conversation) => {
              const isActive = conversation.id === activeConversation?.id;
              return (
                <div
                  key={conversation.id}
                  className={`group flex items-stretch rounded-xl border transition ${
                    isActive
                      ? "border-primary bg-blue-50 dark:bg-blue-950/40"
                      : "border-transparent bg-slate-50 hover:border-slate-200 hover:bg-white dark:bg-slate-950 dark:hover:border-slate-800 dark:hover:bg-slate-900"
                  }`}
                >
                  <button type="button" onClick={() => selectConversation(conversation.id)} className="flex min-w-0 flex-1 items-start gap-2 p-3 text-left">
                    <MessageSquare size={18} className={isActive ? "mt-0.5 text-primary" : "mt-0.5 text-slate-400"} />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-ink dark:text-white">{conversation.title}</span>
                      <span className="mt-1 block truncate text-xs text-slate-500 dark:text-slate-400">{chatPreview(conversation.messages)}</span>
                      <span className="mt-1 block text-xs text-slate-400 dark:text-slate-500">{formatUpdatedAt(conversation.updatedAt)}</span>
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteConversation(conversation.id)}
                    disabled={loading}
                    className="m-2 grid h-8 w-8 shrink-0 place-items-center self-start rounded text-slate-400 opacity-100 transition hover:bg-red-50 hover:text-red-600 disabled:opacity-40 lg:opacity-0 lg:group-hover:opacity-100 dark:hover:bg-red-950/40"
                    title="Delete chat"
                    aria-label="Delete chat"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        </aside>

        <section className="flex min-h-0 min-w-0 flex-col rounded-2xl border border-slate-200/70 bg-slate-100/80 shadow-sm dark:border-slate-800 dark:bg-slate-950/80">
          <div className="min-h-0 flex-1 overflow-y-auto p-4">
            <div className="space-y-3 pb-3">
              {messages.map((message, index) => (
                <ChatBubble
                  key={`${activeConversation?.id}-${message.role}-${index}`}
                  role={message.role}
                  content={message.content}
                  attachments={message.attachments}
                />
              ))}
              {loading ? <ChatBubble role="assistant" content="กำลังคิดคำตอบ..." /> : null}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <form onSubmit={submit} className="shrink-0 p-3">
            {pendingAttachments.length > 0 ? (
              <div className="mb-2 rounded-xl border border-primary/20 bg-primary/5 p-2 dark:border-primary/30 dark:bg-primary/10">
                <p className="mb-2 text-xs font-semibold text-primary dark:text-blue-300">
                  ไฟล์ที่จะส่ง ({pendingAttachments.length})
                </p>
                <div className="flex flex-wrap gap-2">
                  {pendingAttachments.map((attachment) => (
                    <div key={attachment.id} className="relative">
                      <ChatAttachments attachments={[attachment]} compact tone="light" />
                      <button
                        type="button"
                        onClick={() => removePendingAttachment(attachment.id)}
                        className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-slate-900 text-white shadow dark:bg-slate-100 dark:text-slate-900"
                        aria-label="ลบไฟล์แนบ"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
            {attachError ? (
              <p className="mb-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">
                {attachError}
              </p>
            ) : null}

            <div className="relative flex items-end gap-2 rounded-2xl border border-slate-200/60 bg-white/90 shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-all duration-300 focus-within:border-primary/40 focus-within:shadow-xl focus-within:shadow-primary/10 dark:border-slate-700/60 dark:bg-slate-900/90 dark:shadow-slate-900/50 dark:focus-within:border-primary/30 dark:focus-within:shadow-primary/5">
              {selectedModelOption ? (
                <div ref={modelMenuRef} className="relative shrink-0 self-stretch border-r border-slate-200/60 dark:border-slate-700/60">
                  {modelMenuOpen ? (
                    <div className="absolute bottom-full left-0 z-20 mb-2 w-64 overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">
                      <div className="border-b border-slate-100 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:border-slate-800">
                        เลือก AI Model
                        {!aiStatus.gemini && !aiStatus.nvidia ? (
                          <span className="mt-1 block font-normal normal-case text-amber-600 dark:text-amber-400">
                            ยังไม่เชื่อม API — ตั้ง GEMINI_API_KEY / NVIDIA_API_KEY บน Vercel
                          </span>
                        ) : null}
                        {aiStatus.geminiKeyInvalid ? (
                          <span className="mt-1 block font-normal normal-case text-red-600 dark:text-red-400">
                            Gemini key ผิดรูปแบบ — ใช้ key จาก AI Studio ที่ขึ้นต้น AIza
                          </span>
                        ) : null}
                      </div>
                      <div className="max-h-72 overflow-y-auto p-1">
                        {MODEL_OPTIONS.map((option) => {
                          const Icon = option.icon;
                          const isSelected = option.id === model;
                          const online = isModelOnline(option);
                          return (
                            <button
                              key={option.id}
                              type="button"
                              onClick={() => handleModelChange(option.id)}
                              disabled={loading}
                              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${
                                isSelected ? option.selectedMenuClass : `text-slate-700 dark:text-slate-200 ${option.menuClass}`
                              } ${online ? "" : "opacity-70"}`}
                            >
                              <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${option.dotClass}`} />
                              <Icon size={15} className="shrink-0 opacity-80" />
                              <span className="min-w-0 flex-1 truncate font-medium">{option.label}</span>
                              {!online ? (
                                <span className="shrink-0 text-[10px] font-semibold uppercase text-slate-400">offline</span>
                              ) : null}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}

                  <button
                    type="button"
                    onClick={() => setModelMenuOpen((open) => !open)}
                    disabled={loading}
                    className={`flex h-full min-w-[7.5rem] items-center gap-2 rounded-l-2xl border px-3 py-2.5 text-sm font-semibold transition ${selectedModelOption.activeClass}`}
                  >
                    <span className={`h-2 w-2 shrink-0 rounded-full ${selectedModelOption.dotClass}`} />
                    <SelectedModelIcon size={14} className="shrink-0" />
                    <span className="truncate">{selectedModelOption.shortLabel}</span>
                    <ChevronUp size={14} className={`ml-auto shrink-0 transition-transform ${modelMenuOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>
              ) : null}

              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={canAttachFiles ? "ถามโจทย์หรือแนบรูป/PDF..." : "ถามโจทย์หรือหัวข้อที่ไม่เข้าใจ..."}
                className="min-w-0 flex-1 bg-transparent px-3 py-3 outline-none"
              />
              {canAttachFiles ? (
                <>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept={CHAT_ATTACHMENT_ACCEPT}
                    multiple
                    className="hidden"
                    onChange={handleAttachmentPick}
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={loading || pendingAttachments.length >= MAX_CHAT_ATTACHMENTS}
                    className="mb-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-primary disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-blue-300"
                    title="แนบรูปหรือ PDF (Gemini)"
                    aria-label="แนบรูปหรือ PDF"
                  >
                    <Paperclip size={18} />
                  </button>
                </>
              ) : null}
              <button
                type="submit"
                disabled={loading || !canSend}
                className="m-1 grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
                title="Send"
              >
                <Send size={20} />
              </button>
            </div>
            {canAttachFiles ? (
              <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">
                Gemini: รูป JPG/PNG/WebP/GIF หรือ PDF สูงสุด {MAX_CHAT_ATTACHMENTS} ไฟล์ / 3MB ต่อข้อความ
              </p>
            ) : null}
          </form>
        </section>
      </div>
    </div>
  );
}
