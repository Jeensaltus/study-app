import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Brain, Flame, Target } from "lucide-react";
import ProgressBar from "../components/ProgressBar";
import { getSubjectsMeta } from "../data/subjects";
import { useProgress } from "../hooks/useProgress";
import { getAverageQuizScore, getDailyStudyProgress, getStudyStreak, getSubjectProgress } from "../utils/stats";

export default function Home() {
  const progress = useProgress();
  const subjects = getSubjectsMeta(progress.settings);
  const daily = getDailyStudyProgress(progress);
  const average = getAverageQuizScore(progress);
  const streak = getStudyStreak(progress);
  const date = new Intl.DateTimeFormat("th-TH", { dateStyle: "full" }).format(new Date());

  const stats = [
    {
      label: "Daily goal",
      value: `${daily.done}/${daily.goal}`,
      icon: Brain,
      color: "text-primary",
      bg: "bg-blue-50 dark:bg-blue-950/40",
      gradient: "from-primary/20 to-primary/5",
    },
    { label: "คะแนน Quiz เฉลี่ย", value: `${average}%`, icon: Target, color: "text-success", bg: "bg-emerald-50 dark:bg-emerald-950/40", gradient: "from-success/20 to-success/5" },
    { label: "Study streak", value: `${streak} วัน`, icon: Flame, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-950/40", gradient: "from-amber-500/20 to-amber-500/5" },
  ];

  return (
    <div className="relative space-y-8">
      {/* Decorative blobs */}
      <div className="blob blob-blue -left-20 top-0 h-72 w-72" />
      <div className="blob blob-green -right-20 top-40 h-96 w-96" />

      {/* Hero section */}
      <section className="relative grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="animate-fade-in-up rounded-2xl border border-slate-200/80 bg-white/90 p-8 shadow-soft backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-900/80">
          <p className="text-sm font-semibold text-primary">{date}</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-ink dark:text-white sm:text-5xl">
            พร้อมลุยปี 1 <span className="gradient-text">แบบมีระบบ</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            รวมสรุปบทเรียน สูตร Flashcard Quiz และ Dashboard ไว้ในที่เดียว
            เริ่มจากวิชาที่ต้องอ่านวันนี้ได้เลย
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/subjects/calculus1"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-blue-600 px-6 py-3.5 font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.97]"
            >
              เริ่ม Calculus I
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/ai-tutor"
              className="group inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-6 py-3.5 font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-primary hover:shadow-md dark:border-slate-600 dark:bg-slate-800/80 dark:text-slate-200"
            >
              ถาม AI Tutor
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Stats cards */}
        <div className="stagger-children grid gap-3">
          {stats.map(({ label, value, icon: Icon, color, bg }) => (
            <div
              key={label}
              className={`group flex items-center gap-4 rounded-xl border border-slate-200/80 ${bg} p-5 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 dark:border-slate-700/50`}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm transition-transform duration-300 group-hover:scale-110 dark:bg-slate-800`}>
                <Icon className={color} size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
                <p className="text-2xl font-bold text-ink dark:text-white">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick access subjects */}
      <section className="relative">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-ink dark:text-white">Quick Access</h2>
          <Link
            to="/subjects"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-blue-600"
          >
            ดูทุกวิชา
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="stagger-children grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {subjects.map((subject) => (
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
                  <h3 className="mt-1.5 text-lg font-bold text-ink dark:text-white">{subject.title}</h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{subject.thaiTitle}</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 transition-transform duration-300 group-hover:scale-110 dark:bg-slate-800">
                  <BookOpen size={20} className="text-slate-400" />
                </div>
              </div>
              <p className="mt-3 min-h-[40px] text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {subject.description}
              </p>
              <div className="mt-4">
                <ProgressBar value={getSubjectProgress(subject, progress)} color={subject.accent} label="Progress" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}