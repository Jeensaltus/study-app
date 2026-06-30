import { Maximize2, Minimize2 } from "lucide-react";
import { useFullscreen } from "../hooks/useFullscreen";

export default function NavbarFullscreenButton() {
  const { isActive, isSupported, mode, toggle } = useFullscreen({ immersiveFallback: true });

  if (!isSupported) return null;

  const label = isActive ? "ออกจากเต็มจอ" : "เต็มจอ";
  const hint =
    mode === "immersive"
      ? "โหมดเต็มหน้าจอ (ซ่อนเมนู)"
      : "เต็มจอ — กด Esc หรือปุ่มนี้อีกครั้งเพื่อออก";

  return (
    <button
      type="button"
      onClick={toggle}
      title={hint}
      aria-label={label}
      aria-pressed={isActive}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-ink dark:text-slate-300 dark:hover:bg-slate-800/60 dark:hover:text-white"
    >
      {isActive ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
    </button>
  );
}
