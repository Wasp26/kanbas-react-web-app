import { useSelector } from "react-redux";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { Link } from "react-router-dom";
import QuizQuestion from "./QuizQuestion";
import { useEffect, useState } from "react";
import * as client from "./client";
import ScoreDisplay from "./ScoreDisplay";

export default function QuizPreview({
  quizDetails,
  fetchQuizDetails,
}: {
  quizDetails: any;
  fetchQuizDetails: (qzid: string) => void;
}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
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
    attemptNo: 0,
    answers: [],
  });

  const submitQuizHandler = () => {
    const givenAnswers = attemptDetails.answers;
    let score = 0;
    givenAnswers.map((answer: any) => {
      const question = questions.find(
        (question: any) => question.id === answer.qid
      );
      if (question.type === "true-false") {
        if (`${question.answer}` === answer.answer) {
          score += question.points;
        }
      } else if (question.type === "multiple-choice") {
        question.choices.map((choice: any) => {
          if (choice.isCorrect && choice.id === parseInt(answer.answer)) {
            score += question.points;
          }
        });
      }
    });

    console.log(score);
    submitAttempt();
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${qzid}/Attempt/Results`);
  };

  const fetchAttemptDetails = async () => {
    const attempt = await client.fetchAttempt(
      currentUser._id,
      cid as string,
      qzid as string
    );
    if (attempt) {
      console.log(attempt);
      setAttemptDetails(attempt);
    }
  };

  const submitAttempt = async () => {
    const attempt = await client.recordAttempt({
      ...attemptDetails,
      attemptNo: attemptDetails.attemptNo + 1,
    });
  };

  useEffect(() => {
    fetchAttemptDetails();
  }, []);

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
              currentQuestionIndex={currentQuestionIndex}
              setCurrentIndex={setCurrentIndex}
            />
          }
        />
        <Route path="Results" element={<ScoreDisplay />} />
      </Routes>

      {!pathname.includes("Results") && (
        <div>
          <div className="row mb-5">
            <div className="col-7"></div>
            <div className="mt-3 border border-dark rounded-2 d-flex flex-row-reverse">
        <button className="btn btn-danger m-2" onClick={submitQuizHandler}>SUBMIT</button>
      </div>
          </div>
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
                   Question {index + 1}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
