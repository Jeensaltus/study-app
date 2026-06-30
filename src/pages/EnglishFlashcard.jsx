import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Brain, RotateCw, Shuffle } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import EnglishFlashCard from "../components/EnglishFlashCard";
import PageLoader from "../components/PageLoader";
import { getSubjectMeta } from "../data/subjects";
import { useFlashcards } from "../hooks/useFlashcards";
import { useProgress } from "../hooks/useProgress";
import {
  CEFR_LEVELS,
  DOMAIN_CATEGORIES,
  countCardsByFilter,
  createDeck,
  filterEnglishCards,
} from "../utils/englishFlashcardDeck";
import { recordEnglishFlashcardReview } from "../utils/englishFlashcardProgress";
import { updateSettings } from "../utils/storage";

const CEFR_TABS = [{ id: "all", label: "รวม" }, ...CEFR_LEVELS.map((l) => ({ id: l, label: l }))];

function TabButton({ id, label, count, active, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      className={`rounded-full px-3 py-1.5 text-sm font-semibold transition-colors ${
        active
          ? "bg-primary text-white shadow-sm"
          : "border border-slate-200 bg-white text-slate-600 hover:border-primary/40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
      }`}
    >
      {label}
      <span className="ml-1 opacity-70">({count})</span>
    </button>
  );
}

export default function EnglishFlashcard() {
  const { subjectId } = useParams();
  const progress = useProgress();
  const subject = getSubjectMeta(subjectId, progress.settings);
  const { cards: allEnglish, loading, error } = useFlashcards("english");

  const [filter, setFilter] = useState(() => progress.settings.englishDefaultFilter ?? "all");
  const pool = useMemo(() => filterEnglishCards(allEnglish, filter), [allEnglish, filter]);
  const counts = useMemo(() => countCardsByFilter(allEnglish), [allEnglish]);

  useEffect(() => {
    setFilter(progress.settings.englishDefaultFilter ?? "all");
  }, [progress.settings.englishDefaultFilter]);

  const [deck, setDeck] = useState(null);
  const [draw, setDraw] = useState(null);
  const [newRoundNotice, setNewRoundNotice] = useState(false);

  const startDeck = useCallback(() => {
    const nextDeck = createDeck(pool);
    setDeck(nextDeck);
    setDraw(nextDeck.next());
    setNewRoundNotice(false);
  }, [pool]);

  useEffect(() => {
    startDeck();
  }, [startDeck]);

  function handleFilterChange(id) {
    setFilter(id);
    updateSettings({ englishDefaultFilter: id });
  }

  function handleReview(rating) {
    if (!draw?.card || !deck) return;
    recordEnglishFlashcardReview(draw.card, rating, subject.id);
    const prevRound = draw.round;
    const next = deck.next();
    if (next && next.round > prevRound) {
      setNewRoundNotice(true);
    }
    setDraw(next);
  }

  function handleReshuffle() {
    if (!deck) return;
    deck.reshuffle();
    setDraw(deck.next());
    setNewRoundNotice(false);
  }

  if (loading) return <PageLoader label="กำลังโหลด English flashcards..." />;
  if (error) {
    return <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</div>;
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <Link to={`/subjects/${subject.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
        <ArrowLeft size={16} />
        กลับไปหน้า {subject.title}
      </Link>

      <header className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-6 text-center backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-900/90">
        <div className="blob blob-blue left-1/2 top-0 h-32 w-32 -translate-x-1/2" />
        <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500/20 to-orange-500/10">
          <Brain className="text-rose-600 dark:text-rose-400" size={28} />
        </div>
        <h1 className="relative mt-3 text-2xl font-bold text-ink dark:text-white">English Vocabulary</h1>
        <p className="relative mt-1 text-sm text-slate-500 dark:text-slate-400">
          CEFR A1–C2 · หมวดวิชาเฉพาะ · สุ่มเล่นต่อเนื่อง
        </p>
      </header>

      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">ระดับ CEFR</p>
        <div className="flex flex-wrap gap-2">
          {CEFR_TABS.map(({ id, label }) => (
            <TabButton
              key={id}
              id={id}
              label={label}
              count={counts[id] ?? 0}
              active={filter === id}
              onClick={handleFilterChange}
            />
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">หมวดวิชาเฉพาะ</p>
        <div className="flex flex-wrap gap-2">
          {DOMAIN_CATEGORIES.map(({ id, label, labelTh }) => (
            <TabButton
              key={id}
              id={id}
              label={`${labelTh} · ${label}`}
              count={counts[id] ?? 0}
              active={filter === id}
              onClick={handleFilterChange}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
        <span>
          {draw
            ? `การ์ดที่ ${draw.sessionCount} · เหลือในรอบ ~${draw.remainingInRound} · ชุด ${pool.length} ใบ`
            : `ชุด ${pool.length} ใบ`}
        </span>
        <button
          type="button"
          onClick={handleReshuffle}
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 font-semibold text-slate-600 transition hover:border-primary/40 hover:text-primary dark:border-slate-700 dark:text-slate-300"
        >
          <Shuffle size={14} />
          สุ่มใหม่
        </button>
      </div>

      {newRoundNotice && (
        <div className="flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-800 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-200">
          <RotateCw size={14} />
          ครบรอบแล้ว — เริ่มสุ่มรอบใหม่
        </div>
      )}

      {draw?.card ? (
        <EnglishFlashCard card={draw.card} onReview={handleReview} />
      ) : (
        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-10 text-center text-slate-600 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-300">
          ไม่มีการ์ดในชุดนี้ — ลองเลือกหมวดอื่น
        </div>
      )}
    </div>
  );
}
