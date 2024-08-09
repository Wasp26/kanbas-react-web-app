import { current } from "@reduxjs/toolkit";

export default function TFOptions({
  question,
  attemptDetails,
  setAttemptDetails,
  currentAnswer,
}: {
  question: any;
  attemptDetails: any;
  setAttemptDetails: (attempt: any) => void;
  currentAnswer: any;
}) {
  const prevAnswerValue = currentAnswer ? currentAnswer.answer : "";

  const handleClick = (event: any) => {
    const cAnswer = event.currentTarget.value;
    const allAnswers = attemptDetails.answers;
    const prevAttempt = currentAnswer;

    let updatedAnswers = [];
    if (prevAttempt) {
      updatedAnswers = allAnswers.map((answer: any) => {
        if (answer.qid === question.id) {
          return {
            ...answer,
            answer: cAnswer,
          };
        }
        return answer;
      });
    } else {
      updatedAnswers = [
        ...allAnswers,
        {
          qid: question.id,
          answer: cAnswer,
        },
      ];
    }

    console.log(updatedAnswers);
    setAttemptDetails({
      ...attemptDetails,
      answers: updatedAnswers,
    });
  };

  return (
    <div className="ms-3 mb-3 me-3">
      <div className="form-check">
        <input
          type="radio"
          id="trueOption"
          name="answer"
          className="form-check-input mb-1"
          value="true"
          onClick={handleClick}
          checked={prevAnswerValue === "true"}
        />
        <label htmlFor="trueOption" className="form-check-label">
          True
        </label>
      </div>
      <hr />
      <div className="form-check">
        <input
          type="radio"
          id="falseOption"
          name="answer"
          className="form-check-input mb-1"
          value="false"
          onClick={handleClick}
          checked={prevAnswerValue === "false"}
        />
        <label htmlFor="falseOption" className="form-check-label">
          False
        </label>
      </div>
    </div>
  );
}
