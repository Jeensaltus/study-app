import { lazy } from "react";
import { useParams } from "react-router-dom";

const Flashcard = lazy(() => import("./Flashcard"));
const EnglishFlashcard = lazy(() => import("./EnglishFlashcard"));

export default function FlashcardRoute() {
  const { subjectId } = useParams();
  if (subjectId === "english") {
    return <EnglishFlashcard />;
  }
  return <Flashcard />;
}
