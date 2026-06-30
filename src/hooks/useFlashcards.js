import { useEffect, useState } from "react";
import { loadFlashcardsBySubject } from "../data/flashcardLoader";

export function useFlashcards(subjectId) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError("");

    loadFlashcardsBySubject(subjectId)
      .then((next) => {
        if (active) setCards(next);
      })
      .catch(() => {
        if (active) {
          setCards([]);
          setError("โหลด flashcard ไม่สำเร็จ");
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [subjectId]);

  return { cards, loading, error };
}
