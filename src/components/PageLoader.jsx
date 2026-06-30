import { Loader2 } from "lucide-react";

export default function PageLoader({ label = "กำลังโหลด..." }) {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
        <Loader2 className="animate-spin text-primary" size={20} />
        {label}
      </div>
    </div>
  );
}
