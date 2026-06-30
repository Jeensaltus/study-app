import { useEffect, useState } from "react";
import { loadSubject, clearSubjectCache } from "../data/subjectLoader";
import { subjectMetaMap } from "../data/subjectsMeta";
import { resolveSubjectMeta } from "../data/calTrack";
import { useProgress } from "./useProgress";

export function useSubject(subjectId) {
  const progress = useProgress();
  const baseMeta = subjectMetaMap[subjectId] ?? subjectMetaMap.calculus1;
  const meta = resolveSubjectMeta(baseMeta, progress.settings);
  const trackKey = progress.settings?.calculusTrack ?? "engineering";
  const [subject, setSubject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError("");

    loadSubject(subjectId)
      .then((loaded) => {
        if (active) setSubject(loaded);
      })
      .catch((err) => {
        if (active) setError(err.message ?? "โหลดวิชาไม่สำเร็จ");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [subjectId, trackKey]);

  return { subject, meta, loading, error };
}