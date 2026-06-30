import { RotateCcw, ThumbsUp, Meh, ThumbsDown } from "lucide-react";
import { useMemo, useState } from "react";
import MathText from "./MathText";
import { LEVEL_COLORS, DOMAIN_COLORS } from "../utils/englishFlashcardDeck";

function parseCardBack(card) {
  if (card.translations?.length) {
    const metaMatch = card.back.match(/\([^)]+\)$/m);
    const meta = metaMatch?.[0] ?? (card.domain ? `(${card.domainLabel} · ${card.pos})` : `(${card.pos} · ${card.level})`);
    const extra = card.back
      .split("\n")
      .filter((line) => !line.startsWith("• ") && line !== meta && line !== "— ไม่พบคำแปล —");
    return { translations: card.translations, meta, extra };
  }

  const lines = card.back.split("\n");
  const meta = lines.find((l) => /^\(.+·.+\)$/.test(l)) ?? "";
  const translations = lines
    .filter((l) => l.startsWith("• "))
    .map((l) => l.slice(2))
    .filter(Boolean);
  if (!translations.length && lines[0] && lines[0] !== meta && !lines[0].startsWith("—")) {
    translations.push(lines[0]);
  }
  const extra = lines.filter((l) => l !== meta && !l.startsWith("• ") && l !== translations[0]);
  return { translations, meta, extra };
}

function formatPos(pos) {
  if (!pos) return "";
  return pos.replace(/-/g, " ");
}

export default function EnglishFlashCard({ card, onReview }) {
  const [flipped, setFlipped] = useState(false);
  const levelClass = LEVEL_COLORS[card.level] ?? LEVEL_COLORS.B1;
  const domainClass = card.domain ? DOMAIN_COLORS[card.domain] : null;
  const badgeClass = domainClass ?? levelClass;
  const badgeLabel = card.domainLabel ?? card.level;
  const { translations, extra } = useMemo(() => parseCardBack(card), [card]);

  function handleReview(rating) {
    setFlipped(false);
    onReview(rating);
  }

  return (
    <div className="space-y-6">
      <div className="perspective">
        <button
          type="button"
          onClick={() => setFlipped((value) => !value)}
          className={`flip-card min-h-[420px] w-full ${flipped ? "flipped" : ""}`}
        >
          {/* Front */}
          <div className="flip-card-front flex min-h-[420px] flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 shadow-soft backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-900/95">
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3 dark:border-slate-800">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">English</span>
              <div className="flex items-center gap-2">
                {card.pos && (
                  <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    {formatPos(card.pos)}
                  </span>
                )}
                {(card.level || card.domain) && (
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${badgeClass}`}>{badgeLabel}</span>
                )}
              </div>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center px-6 py-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-primary/20">
                <RotateCcw size={20} className="opacity-70" />
              </div>
              <h2 className="max-w-full break-words text-center text-4xl font-bold leading-tight text-ink dark:text-white sm:text-5xl">
                <MathText text={card.front} />
              </h2>
            </div>

            <p className="border-t border-slate-100 py-3 text-center text-xs text-slate-400 dark:border-slate-800">
              แตะเพื่อดูคำแปล
            </p>
          </div>

          {/* Back */}
          <div className="flip-card-back flex min-h-[420px] flex-col overflow-hidden rounded-2xl border border-emerald-200/60 bg-gradient-to-b from-emerald-50/95 to-white/95 shadow-soft backdrop-blur-sm dark:border-emerald-900/40 dark:from-emerald-950/40 dark:to-slate-900/95">
            <div className="flex items-center justify-between border-b border-emerald-100 px-5 py-3 dark:border-emerald-900/50">
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                คำแปลไทย
              </span>
              <div className="flex items-center gap-2">
                {card.pos && (
                  <span className="rounded-md bg-emerald-100/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                    {formatPos(card.pos)}
                  </span>
                )}
                {(card.level || card.domain) && (
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${badgeClass}`}>{badgeLabel}</span>
                )}
              </div>
            </div>

            <div className="border-b border-emerald-50 px-5 py-3 text-center dark:border-emerald-900/30">
              <p className="text-sm text-slate-400 dark:text-slate-500">ความหมายของ</p>
              <p className="mt-0.5 text-xl font-bold text-ink/80 dark:text-white/90">{card.front}</p>
            </div>

            <div className="flex min-h-0 flex-1 flex-col justify-center px-5 py-4">
              {translations.length ? (
                <ul className="max-h-[220px] space-y-0 overflow-y-auto rounded-xl border border-emerald-100/80 bg-white/70 shadow-inner dark:border-emerald-900/40 dark:bg-slate-950/50">
                  {translations.map((th, index) => (
                    <li
                      key={`${index}-${th}`}
                      className={`flex gap-3 px-4 py-3 ${
                        index < translations.length - 1
                          ? "border-b border-emerald-50 dark:border-emerald-900/30"
                          : ""
                      }`}
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-[11px] font-bold text-white">
                        {index + 1}
                      </span>
                      <span className="flex-1 text-left text-[15px] leading-relaxed text-ink dark:text-white">{th}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="rounded-xl border border-dashed border-slate-200 bg-white/50 px-4 py-10 text-center dark:border-slate-700 dark:bg-slate-950/30">
                  <p className="text-slate-500 dark:text-slate-400">— ไม่พบคำแปล —</p>
                </div>
              )}

              {extra.length > 0 && (
                <p className="mt-3 text-center text-xs italic leading-relaxed text-slate-500 dark:text-slate-400">
                  {extra.join(" · ")}
                </p>
              )}

              {translations.length > 1 && (
                <p className="mt-3 text-center text-[11px] text-slate-400">
                  {translations.length} ความหมายที่เป็นไปได้
                </p>
              )}
            </div>

            <p className="border-t border-emerald-100 py-3 text-center text-xs text-slate-400 dark:border-emerald-900/40">
              แตะเพื่อกลับ
            </p>
          </div>
        </button>
      </div>

      <div className="stagger-children grid gap-3 sm:grid-cols-3">
        <button
          type="button"
          onClick={() => handleReview("again")}
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 px-4 py-3.5 font-semibold text-white shadow-sm transition-all hover:shadow-md active:scale-[0.97]"
        >
          <ThumbsDown size={16} />
          ยังไม่รู้
        </button>
        <button
          type="button"
          onClick={() => handleReview("okay")}
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-3.5 font-semibold text-white shadow-sm transition-all hover:shadow-md active:scale-[0.97]"
        >
          <Meh size={16} />
          จำได้บ้าง
        </button>
        <button
          type="button"
          onClick={() => handleReview("good")}
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-success to-emerald-600 px-4 py-3.5 font-semibold text-white shadow-sm transition-all hover:shadow-md active:scale-[0.97]"
        >
          <ThumbsUp size={16} />
          จำได้ดี
        </button>
      </div>
    </div>
  );
}
