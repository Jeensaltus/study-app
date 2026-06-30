import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Brain, BookOpen, ClipboardList, GalleryHorizontalEnd, GraduationCap } from "lucide-react";
import ProgressBar from "../components/ProgressBar";
import { getSubjectMeta, preloadSubject } from "../data/subjects";
import { getKnowledgeBaseCount } from "../data/knowledgeBase";
import { FLASHCARD_SUBJECT_IDS } from "../data/flashcards/manifest";
import { CAL_SUBJECT_IDS, CAL_TRACKS } from "../data/calTrack";
import { clearSubjectCache } from "../data/subjectLoader";
import { useProgress } from "../hooks/useProgress";
import { getSubjectProgress } from "../utils/stats";
import { updateSettings } from "../utils/storage";

function isKbVisible() {
  const source = import.meta.env.VITE_KB_SOURCE ?? "local";
  if (import.meta.env.VITE_ENABLE_KB === "false" && source === "local") return false;
  return true;
}

export default function Subject() {
  const { subjectId } = useParams();
  const progress = useProgress();
  const subject = getSubjectMeta(subjectId, progress.settings);

  useEffect(() => {
    preloadSubject(subject.id);
  }, [subject.id]);

  const kbCount = isKbVisible() ? getKnowledgeBaseCount(subject.id) : 0;
  const hasFlashcards = FLASHCARD_SUBJECT_IDS.includes(subject.id);
  const hasQuiz = hasFlashcards && subject.id !== "english" && subject.id !== "materials";

  const actions = [
    { to: `/subjects/${subject.id}/slides`, label: "Study Slides", detail: "สรุปเนื้อหาฉบับเต็มพร้อมโจทย์ตัวอย่างตามหนังสือเรียน", icon: GalleryHorizontalEnd },
    ...(hasFlashcards
      ? [
          {
            to: `/subjects/${subject.id}/flashcard`,
            label: "Flashcard",
            detail:
              subject.id === "english"
                ? "คำศัพท์ CEFR A1–C2 แบบสุ่ม เลือกระดับหรือรวมทั้งหมด"
                : "ทบทวนสูตรแบบ spaced repetition",
            icon: Brain,
          },
        ]
      : []),
    ...(hasQuiz
      ? [{ to: `/subjects/${subject.id}/quiz`, label: "AI Quiz", detail: "สร้างข้อสอบใหม่ด้วย AI ตามหัวข้อและระดับความยาก", icon: ClipboardList }]
      : []),
    ...(kbCount > 0
      ? [
          {
            to: `/subjects/${subject.id}/knowledge-base`,
            label: "Knowledge Base",
            detail:
              (import.meta.env.VITE_KB_SOURCE ?? "local") !== "local"
                ? `ลิงก์ Google Drive (Year 1) — ${kbCount} โฟลเดอร์ เปิดแล้วเลือก PDF เอง`
                : `คลัง PDF ตำรา แบบฝึกหัด และข้อสอบ — ${kbCount} ไฟล์ ดู preview หรือดาวน์โหลด`,
            icon: BookOpen,
          },
        ]
      : []),
  ];

  return (
    <div className="relative space-y-6">
      <div className="blob blob-blue -left-20 top-0 h-64 w-64" />
      <div className="blob blob-green -right-20 top-40 h-72 w-72" />

      <section className="relative animate-fade-in-up overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-8 shadow-soft backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-900/80">
        <div
          className="absolute inset-0 opacity-5"
          style={{ background: `linear-gradient(135deg, ${subject.accent} 0%, transparent 60%)` }}
        />
        <p className="relative font-semibold" style={{ color: subject.accent }}>
          {subject.code}
          {CAL_SUBJECT_IDS.has(subject.id) && subject.trackLabel && (
            <span className="ml-2 text-sm font-normal text-slate-500 dark:text-slate-400">
              · {subject.trackLabel} ({subject.credits} cr.)
            </span>
          )}
        </p>
        <h1 className="relative mt-2 text-4xl font-bold text-ink dark:text-white">{subject.title}</h1>
        <p className="relative mt-3 max-w-2xl text-slate-600 dark:text-slate-300">{subject.description}</p>
        {CAL_SUBJECT_IDS.has(subject.id) ? (
          <div className="relative mt-4 flex flex-wrap items-center gap-3 rounded-xl border border-violet-200/80 bg-violet-50/50 px-4 py-3 dark:border-violet-900/40 dark:bg-violet-950/20">
            <GraduationCap size={18} className="shrink-0 text-violet-600 dark:text-violet-300" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-violet-900 dark:text-violet-200">Calculus track</p>
              <p className="text-xs text-violet-700/80 dark:text-violet-300/80">วิศวฯ 2301107/1108 · วิทย์ 2301113/1114</p>
            </div>
            <div className="inline-flex rounded-lg border border-violet-200 bg-white/80 p-0.5 dark:border-violet-800 dark:bg-slate-900/80">
              {Object.values(CAL_TRACKS).map((track) => (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => {
                    updateSettings({ calculusTrack: track.id });
                    clearSubjectCache();
                  }}
                  className={`rounded-md px-3 py-1.5 text-sm font-semibold transition ${
                    (progress.settings.calculusTrack ?? "engineering") === track.id
                      ? "bg-primary text-white shadow-sm"
                      : "text-slate-600 hover:text-ink dark:text-slate-300"
                  }`}
                >
                  {track.label}
                </button>
              ))}
            </div>
          </div>
        ) : null}
        <div className="relative mt-6 max-w-xl">
          <ProgressBar value={getSubjectProgress(subject, progress)} color={subject.accent} label="Today" />
        </div>
      </section>

      <section className={`stagger-children relative grid gap-5 md:grid-cols-2 ${actions.length > 2 ? "xl:grid-cols-4" : ""}`}>
        {actions.map(({ to, label, detail, icon: Icon }) => (
          <Link
            key={label}
            to={to}
            className="card-hover group relative overflow-hidden rounded-xl border border-slate-200/80 bg-white/90 p-6 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-900/90"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm transition-transform duration-300 group-hover:scale-110 dark:bg-slate-800">
              <Icon size={28} style={{ color: subject.accent }} />
            </div>
            <h2 className="text-xl font-bold text-ink dark:text-white">{label}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{detail}</p>
            <div className="mt-4 flex items-center gap-1 text-sm font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100" style={{ color: subject.accent }}>
              เข้าเรียน
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
