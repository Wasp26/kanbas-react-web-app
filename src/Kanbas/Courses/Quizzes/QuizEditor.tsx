import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import * as client from "./client";
import { useEffect, useState } from "react";
import QuizDetailsEditor from "./QuizDetailsEditor";
import QuizQuestionsEditor from "./Questions/QuizQuestionsEditor";
import QuizEditorNavigation from "./QuizEditorNavigation";
import TrueFalseEditor from "./Questions/TrueFalseEditor";
import FillInBlanksEditor from "./Questions/FillInBlanksEditor";
import MultipleChoiceEditor from "./Questions/MultipleChoiceEditor";
export default function QuizEditor() {
  const { cid, qzid } = useParams();
  const { pathname } = useLocation();

  const isCreate = pathname.includes("create");

  const [quizDetails, setQuizDetails] = useState<any>({
    courseId: cid,
    numQuestions: 0,
    published: false,
    title: "New Quiz title",
    description: "New quiz description",
    quizType: "GRADEDQUIZ",
    points: 0,
    group: "QUIZ",
    shuffle: true,
    hasTimeLimit: true,
    timeLimit: 20,
    multipleAttempt: false,
    showCorrect: false,
    accessCode: "",
    oneQView: true,
    webcamReq: false,
    lockAfterAttempt: false,
    dueDate: "2024-07-01",
    availableFrom: "2024-06-01",
    availableUntil: "2024-07-08",
  });

  const fetchQuizDetails = async () => {
    const quiz = await client.fetchQuizDetails(cid as string, qzid as string);
    setQuizDetails(quiz);
  };

  const createQuizDetails = async () => {
    const quiz = await client.createQuizDetails(cid as string, quizDetails);
    setQuizDetails(quiz);
  };

  const saveQuizDetails = async () => {
    await client.updateQuizDetails(cid as string, quizDetails);
  };

  const fetchQuizQuestions = async () => {};

  useEffect(() => {
    if (!isCreate) {
      fetchQuizDetails();
    }
  });

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
