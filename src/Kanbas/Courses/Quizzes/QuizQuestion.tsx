import { useParams } from "react-router";
import TFOptions from "./TFOptions";
import MCQOptions from "./MCQOptions";
import { useEffect } from "react";

export default function QuizQuestion({
  quizDetails,
  questions,
  attemptDetails,
  setAttemptDetails,
  currentQuestionIndex,
  setCurrentIndex,
}: {
  quizDetails: any;
  questions: any[];
  attemptDetails: any;
  setAttemptDetails: (attempt: any) => void;
  currentQuestionIndex: number;
  setCurrentIndex: (index: number) => void;
}) {
  const { cid, qzid, qid } = useParams();

  const getQuestionById = () => {
    return questions.filter((question: any) => question.id === qid)[0];
  };

  const getQuestionIndex = () => {
    return questions.findIndex((question: any) => question.id === qid);
  };

  useEffect(() => {
    setCurrentIndex(getQuestionIndex());
  }, []);

  const question = getQuestionById();

  return (
    <div>
      <h1 className="mb-4">{quizDetails.title}</h1>
      <h1>{question.title}</h1>
      <hr />
      <div id="wd-question-content" className="mt-5 mb-5 border border-dark">
        <div id="wd-question-title" className="align-middle row">
          <div className="col-8 ms-2">
            <h4>{question.title}</h4>
          </div>
          <div className="col-2">
            <h6>{question.points} points</h6>
          </div>
        </div>
        <hr />
        <div id="wd-question mb-2">
          <div className="ps-5 pt-3 pb-5 pe-5 justify-content-center self-align-center">
            {question.question}
          </div>
        </div>
        <hr />
        {(question.type === "true-false" && (
          <TFOptions
            question={question}
            attemptDetails={attemptDetails}
            setAttemptDetails={setAttemptDetails}
          />
        )) ||
          (question.type === "multiple-choice" && (
            <MCQOptions
              question={question}
              attemptDetails={attemptDetails}
              setAttemptDetails={setAttemptDetails}
            />
          ))}
      </div>
    </div>
  );
}
