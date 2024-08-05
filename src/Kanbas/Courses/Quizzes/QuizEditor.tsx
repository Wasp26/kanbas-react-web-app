import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import { useEffect } from "react";
import QuizDetailsEditor from "./QuizDetailsEditor";
import QuizQuestionsEditor from "./Questions/QuizQuestionsEditor";
import QuizEditorNavigation from "./QuizEditorNavigation";
import TrueFalseEditor from "./Questions/TrueFalseEditor";
import MultipleChoiceEditor from "./Questions/MultipleChoiceEditor";
import FillInBlanksEditor from "./Questions/FillInBlanksEditor";

export default function QuizEditor({
  quizDetails,
  setQuizDetails,
  createQuizDetails,
  saveQuizDetails,
  fetchQuizDetails,
}: {
  quizDetails: any;
  setQuizDetails: (quiz: any) => void;
  createQuizDetails: () => Promise<any>;
  saveQuizDetails: () => void;
  fetchQuizDetails: (qzid: string) => void;
}) {
  const { cid, qzid } = useParams();
  const { pathname } = useLocation();

  const isCreate = pathname.includes("create");

  useEffect(() => {
    if (!isCreate) {
      fetchQuizDetails(qzid as string);
    }
  }, []);

  return (
    <div className="ms-3">
      <div>Points: {quizDetails.points}</div>
      <hr />
      <QuizEditorNavigation cid={cid as string} qzid={qzid as string} />
      <hr />
      <Routes>
        <Route path="/" element={<Navigate to="Details" />} />
        <Route
          path="Details/"
          element={
            <QuizDetailsEditor
              quizDetails={quizDetails}
              setQuizDetails={setQuizDetails}
              createQuizDetails={createQuizDetails}
              saveQuizDetails={saveQuizDetails}
            />
          }
        />
        <Route path="Questions/" element={<QuizQuestionsEditor />} />
        <Route path="Questions/edit/true-false/:id" element={<TrueFalseEditor />} />
          <Route path="Questions/edit/multiple-choice/:id" element={<MultipleChoiceEditor />} />
          <Route path="Questions/edit/fill-in-multiple-blanks/:id" element={<FillInBlanksEditor />} />
      </Routes>
    </div>
  );
}
