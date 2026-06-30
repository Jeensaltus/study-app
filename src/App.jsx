import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageLoader from "./components/PageLoader";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Subject from "./pages/Subject";
import Subjects from "./pages/Subjects";
import KnowledgeBase from "./pages/KnowledgeBase";
import { useProgress } from "./hooks/useProgress";

const AiTutor = lazy(() => import("./pages/AiTutor"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const FlashcardRoute = lazy(() => import("./pages/FlashcardRoute"));
const AiQuiz = lazy(() => import("./pages/AiQuiz"));
const Slides = lazy(() => import("./pages/Slides"));

function FormulaRedirect() {
  const { subjectId } = useParams();
  return <Navigate to={`/subjects/${subjectId}/knowledge-base`} replace />;
}

function LazyPage({ children, label }) {
  return <Suspense fallback={<PageLoader label={label} />}>{children}</Suspense>;
}

export default function App() {
  const progress = useProgress();

  return (
    <div className={progress.settings.darkMode ? "dark" : ""}>
      <div className="flex h-screen flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        <Navbar />
        <Routes>
          <Route
            path="/ai-tutor"
            element={
              <LazyPage label="กำลังโหลด AI Tutor...">
                <AiTutor />
              </LazyPage>
            }
          />
          <Route
            path="/subjects/:subjectId/slides"
            element={
              <LazyPage label="กำลังโหลด Slides...">
                <Slides />
              </LazyPage>
            }
          />
          <Route
            path="*"
            element={
              <div className="flex-1 overflow-y-auto">
                <main className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:py-8">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/subjects" element={<Subjects />} />
                    <Route path="/subjects/:subjectId" element={<Subject />} />
                    <Route
                      path="/subjects/:subjectId/flashcard"
                      element={
                        <LazyPage label="กำลังโหลด Flashcard...">
                          <FlashcardRoute />
                        </LazyPage>
                      }
                    />
                    <Route
                      path="/subjects/:subjectId/quiz"
                      element={
                        <LazyPage label="กำลังโหลด Quiz...">
                          <AiQuiz />
                        </LazyPage>
                      }
                    />
                    <Route path="/subjects/:subjectId/knowledge-base" element={<KnowledgeBase />} />
                    <Route path="/subjects/:subjectId/formula" element={<FormulaRedirect />} />
                    <Route
                      path="/dashboard"
                      element={
                        <LazyPage label="กำลังโหลด Dashboard...">
                          <Dashboard />
                        </LazyPage>
                      }
                    />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </main>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
