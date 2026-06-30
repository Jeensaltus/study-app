import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Brain, ClipboardList, Flame, TrendingUp } from "lucide-react";
import { useProgress } from "../hooks/useProgress";
import { getFlashcardStats } from "../utils/spacedRepetition";
import { getActivitySeries, getAverageQuizScore, getDashboardRows, getStudyStreak, getTotalQuizzes } from "../utils/stats";

export default function Dashboard() {
  const progress = useProgress();
  const flashcardStats = getFlashcardStats(progress);
  const rows = getDashboardRows(progress);
  const activity = getActivitySeries(progress);
  const streak = getStudyStreak(progress);

  const stats = [
    { label: "Flashcards reviewed", value: flashcardStats.reviewed, icon: Brain, color: "text-primary", bg: "from-primary/20 to-primary/5" },
    { label: "Quizzes done", value: getTotalQuizzes(progress), icon: ClipboardList, color: "text-success", bg: "from-success/20 to-success/5" },
    { label: "Current streak", value: `${streak} วัน`, icon: Flame, color: "text-amber-500", bg: "from-amber-500/20 to-amber-500/5" },
    { label: "Quiz average", value: `${getAverageQuizScore(progress)}%`, icon: TrendingUp, color: "text-violet-500", bg: "from-violet-500/20 to-violet-500/5" },
  ];

  return (
    <div className="relative space-y-8">
      {/* Decorative blobs */}
      <div className="blob blob-blue -left-20 top-0 h-64 w-64" />
      <div className="blob blob-amber -right-20 top-40 h-80 w-80" />

      <header className="relative animate-fade-in-down">
        <p className="text-sm font-semibold text-primary">Dashboard</p>
        <h1 className="mt-2 text-4xl font-bold text-ink dark:text-white">ภาพรวมการเรียน</h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">ติดตามความคืบหน้าและสถิติการเรียนของคุณ</p>
      </header>

      {/* Stats grid */}
      <section className="stagger-children relative grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, icon: Icon, color, bg }) => (
          <div
            key={label}
            className="group relative overflow-hidden rounded-xl border border-slate-200/80 bg-white/90 p-6 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:border-slate-700/50 dark:bg-slate-900/90"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${bg} opacity-50`} />
            <div className="relative flex items-start justify-between">
              <div className={`rounded-xl bg-white p-3 shadow-sm transition-transform duration-300 group-hover:scale-110 dark:bg-slate-800`}>
                <Icon className={color} size={24} />
              </div>
            </div>
            <p className="relative mt-4 text-sm text-slate-500 dark:text-slate-400">{label}</p>
            <p className="relative text-3xl font-bold text-ink dark:text-white">{value}</p>
          </div>
        ))}
      </section>

      {/* Charts */}
      <section className="stagger-children relative grid gap-6 xl:grid-cols-2">
        <div className="rounded-xl border border-slate-200/80 bg-white/90 p-6 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-900/90">
          <h2 className="text-lg font-bold text-ink dark:text-white">Quiz scores per subject</h2>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={rows}>
                <CartesianGrid strokeDasharray="3 3" stroke="#CBD5E1" strokeOpacity={0.4} />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis domain={[0, 100]} />
                <Tooltip
                  contentStyle={{
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    background: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(8px)',
                  }}
                />
                <Bar dataKey="score" fill="#378ADD" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200/80 bg-white/90 p-6 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-900/90">
          <h2 className="text-lg font-bold text-ink dark:text-white">Study activity over 30 days</h2>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={activity}>
                <CartesianGrid strokeDasharray="3 3" stroke="#CBD5E1" strokeOpacity={0.4} />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis allowDecimals={false} />
                <Tooltip
                  contentStyle={{
                    borderRadius: '12px',
                    border: '1px solid #e2e8f0',
                    background: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(8px)',
                  }}
                />
                <Line type="monotone" dataKey="activity" stroke="#1D9E75" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Calendar heatmap */}
      <section className="relative rounded-xl border border-slate-200/80 bg-white/90 p-6 backdrop-blur-sm dark:border-slate-700/50 dark:bg-slate-900/90">
        <h2 className="text-lg font-bold text-ink dark:text-white">Calendar heatmap</h2>
        <div className="mt-4 grid grid-cols-10 gap-1.5 sm:grid-cols-[repeat(15,minmax(0,1fr))] md:grid-cols-[repeat(30,minmax(0,1fr))]">
          {activity.map((day) => {
            const level = Math.min(day.activity, 4);
            const colors = [
              "bg-slate-100 dark:bg-slate-800",
              "bg-emerald-200 dark:bg-emerald-900",
              "bg-emerald-400 dark:bg-emerald-700",
              "bg-emerald-600 dark:bg-emerald-500",
              "bg-emerald-800 dark:bg-emerald-400",
            ];
            return (
              <div
                key={day.fullDate}
                title={`${day.fullDate}: ${day.activity} activities`}
                className={`aspect-square rounded-md transition-all duration-200 hover:scale-110 hover:ring-2 hover:ring-primary/50 ${colors[level]}`}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}