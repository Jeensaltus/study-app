import { useEffect, useState } from "react";
import { readProgress } from "../utils/storage";

export function useProgress() {
  const [progress, setProgress] = useState(() => readProgress());

  useEffect(() => {
    const sync = () => setProgress(readProgress());
    window.addEventListener("storage", sync);
    window.addEventListener("freshman-progress", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("freshman-progress", sync);
    };
  }, []);

  return progress;
}
