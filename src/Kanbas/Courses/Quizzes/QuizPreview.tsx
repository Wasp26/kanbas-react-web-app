import { useSelector } from "react-redux";
import { Navigate, Route, Routes, useParams } from "react-router";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { Link } from "react-router-dom";
import QuizQuestion from "./QuizQuestion";
import { current } from "@reduxjs/toolkit";
import { useState } from "react";

export default function QuizPreview({
  quizDetails,
  fetchQuizDetails,
}: {
  quizDetails: any;
  fetchQuizDetails: (qzid: string) => void;
}) {
  const { cid, qzid } = useParams();
  const { currentUser, isStaff } = useSelector(
    (state: any) => state.accountReducer
  );
  const [currentQuestionIndex, setCurrentIndex] = useState(0);
  const questions = quizDetails.questions;

  const [attemptDetails, setAttemptDetails] = useState({
    quizId: qzid,
    courseId: cid,
    userId: currentUser._id,
    attemptNo: 1,
    answers: [],
  });

  return (
    <div id="wd-quiz-questions" className="clearfix">
      <Routes>
        <Route
          path="/"
          element={<Navigate to={`Question/${questions[0].id}`} />}
        ></Route>
        <Route
          path="Question/:qid"
          element={
            <QuizQuestion
              quizDetails={quizDetails}
              questions={questions}
              attemptDetails={attemptDetails}
              setAttemptDetails={setAttemptDetails}
            />
          }
        />
      </Routes>

      <h6>Questions</h6>
      <ul className="list-group">
        {questions.map((question: any, index: number) => {
          return (
            <li className="list-group-item border-none w-25">
              <RxQuestionMarkCircled className="me-1" />
              <Link
                to={`/Kanbas/Courses/${cid}/Quizzes/${qzid}/Attempt/Question/${question.id}`}
                className="text-decoration-none text-danger"
              >
                {question.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
