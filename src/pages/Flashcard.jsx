import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Brain } from "lucide-react";
import FlashCard from "../components/FlashCard";
import PageLoader from "../components/PageLoader";
import { getSubjectMeta } from "../data/subjects";
import { useFlashcards } from "../hooks/useFlashcards";
import { useProgress } from "../hooks/useProgress";
import { getDueCards, reviewCard } from "../utils/spacedRepetition";

export default function Flashcard() {
  const { subjectId } = useParams();
  const progress = useProgress();
  const subject = getSubjectMeta(subjectId, progress.settings);
  const { cards, loading, error } = useFlashcards(subject.id);
  const dueCards = getDueCards(cards, progress, subject.id);
  const current = dueCards[0];

  if (loading) return <PageLoader label="กำลังโหลด Flashcard..." />;
  if (error) {
    return <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{error}</div>;
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <Link to={`/subjects/${subject.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
        <ArrowLeft size={16} />
        กลับไปหน้า {subject.title}
      </Link>
      <header className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-8 text-center backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-900/90">
        <div className="blob blob-blue left-1/2 top-0 h-32 w-32 -translate-x-1/2" />
        <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-blue-600/10 dark:from-primary/30 dark:to-blue-600/20">
          <Brain className="text-primary" size={32} />
        </div>
        <h1 className="relative mt-4 text-3xl font-bold text-ink dark:text-white">Flashcard</h1>
        <p className="relative mt-2 text-slate-500 dark:text-slate-400">
          {dueCards.length > 0
            ? <>เหลือ <span className="font-bold text-primary">{dueCards.length}</span> ใบวันนี้</>
            : "ทบทวนครบแล้ววันนี้!"}
        </p>
      </header>

      {current ? (
        <FlashCard card={current} onReview={(rating) => reviewCard(current, rating, subject.id)} />
      ) : (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-10 text-center text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-300">
          ทบทวนครบแล้ววันนี้ — กลับมาใหม่พรุ่งนี้ได้เลย
        </div>
      )}
    </div>
  );
}
