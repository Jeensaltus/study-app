import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import ProgressBar from "../components/ProgressBar";
import { getSubjectsMeta } from "../data/subjects";
import { useProgress } from "../hooks/useProgress";
import { getSubjectProgress } from "../utils/stats";

export default function Subjects() {
  const progress = useProgress();
  const subjects = getSubjectsMeta(progress.settings);
  const grouped = ["Term 1", "Term 2"].map((term) => ({ term, rows: subjects.filter((subject) => subject.term === term) }));

  return (
    <div className="relative space-y-10">
      {/* Decorative blobs */}
      <div className="blob blob-blue -left-20 top-0 h-64 w-64" />
      <div className="blob blob-amber -right-20 top-20 h-72 w-72" />

      <header className="relative animate-fade-in-down">
        <p className="text-sm font-semibold text-primary">Subjects</p>
        <h1 className="mt-2 text-4xl font-bold text-ink dark:text-white">เลือกวิชาที่จะอ่าน</h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">เลือกหัวข้อที่ต้องการเรียนและติดตามความคืบหน้า</p>
      </header>
      {grouped.map((group) => (
        <section key={group.term} className="relative">
          <div className="mb-4 flex items-center gap-3">
            <h2 className="text-lg font-bold text-ink dark:text-white">{group.term}</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-700" />
          </div>
          <div className="stagger-children grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {group.rows.map((subject) => (
              <Link
                key={subject.id}
                to={`/subjects/${subject.id}`}
                className="card-hover group relative overflow-hidden rounded-xl border border-slate-200/80 bg-white/90 p-6 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-900/90"
              >
                {/* Accent top border */}
                <div
                  className="absolute inset-x-0 top-0 h-1 rounded-t-xl transition-all duration-300 group-hover:h-1.5"
                  style={{ backgroundColor: subject.accent }}
                />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold tracking-wide" style={{ color: subject.accent }}>
                      {subject.code}
                    </p>
                    <h3 className="mt-1.5 text-xl font-bold text-ink dark:text-white">{subject.title}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{subject.thaiTitle}</p>
                  </div>
                  <ArrowRight className="mt-1 text-slate-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary dark:text-slate-600" size={20} />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {subject.description}
                </p>
                <div className="mt-4">
                  <ProgressBar value={getSubjectProgress(subject, progress)} color={subject.accent} label="Progress" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}