import { RotateCcw, ThumbsUp, Meh, ThumbsDown } from "lucide-react";
import { useState } from "react";
import MathText from "./MathText";

export default function FlashCard({ card, onReview }) {
  const [flipped, setFlipped] = useState(false);

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
          className={`flip-card min-h-[300px] w-full ${flipped ? "flipped" : ""}`}
        >
          {/* Front */}
          <div className="flip-card-front flex flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white/90 p-10 shadow-soft backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-primary/40 dark:border-slate-700/50 dark:bg-slate-900/90">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-primary dark:bg-blue-950/50">
              <RotateCcw size={24} className="animate-pulse-soft" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
              ด้านหน้า
            </p>
            <h2 className="mt-6 text-2xl font-bold text-ink dark:text-white">
              <MathText text={card.front} />
            </h2>
            <p className="mt-4 text-xs text-slate-400 dark:text-slate-500">แตะเพื่อพลิก</p>
          </div>

          {/* Back */}
          <div className="flip-card-back flex flex-col items-center justify-center rounded-2xl border border-success/30 bg-gradient-to-br from-emerald-50/90 to-white/90 p-10 shadow-soft backdrop-blur-sm dark:from-emerald-950/30 dark:to-slate-900/90 dark:border-emerald-900/50">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-success dark:bg-emerald-950/50">
              <RotateCcw size={24} />
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest text-success dark:text-emerald-400">
              ด้านหลัง
            </p>
            <h2 className="mt-6 text-2xl font-bold text-ink dark:text-white">
              <MathText text={card.back} />
            </h2>
            <p className="mt-4 text-xs text-slate-400 dark:text-slate-500">แตะเพื่อกลับ</p>
          </div>
        </button>
      </div>

      {/* Rating buttons */}
      <div className="stagger-children grid gap-3 sm:grid-cols-3">
        <button
          onClick={() => handleReview("again")}
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 px-4 py-3.5 font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-rose-500/25 active:scale-[0.97]"
        >
          <ThumbsDown size={16} className="transition-transform duration-300 group-hover:scale-110" />
          ยังไม่รู้
        </button>
        <button
          onClick={() => handleReview("okay")}
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-3.5 font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-amber-500/25 active:scale-[0.97]"
        >
          <Meh size={16} className="transition-transform duration-300 group-hover:scale-110" />
          จำได้บ้าง
        </button>
        <button
          onClick={() => handleReview("good")}
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-success to-emerald-600 px-4 py-3.5 font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-success/25 active:scale-[0.97]"
        >
          <ThumbsUp size={16} className="transition-transform duration-300 group-hover:scale-110" />
          จำได้ดี
        </button>
      </div>
    </div>
  );
}