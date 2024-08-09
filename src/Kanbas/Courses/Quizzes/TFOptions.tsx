export default function TFOptions({
  question,
  attemptDetails,
  setAttemptDetails,
}: {
  question: any;
  attemptDetails: any;
  setAttemptDetails: (attempt: any) => void;
}) {
  const handleClick = (event: any) => {
    const currentAnswer = event.currentTarget.value;
    const allAnswers = attemptDetails.answers;
    const prevAttempt = allAnswers.find(
      (answer: any) => answer.qid === question.id
    );

    let updatedAnswers = [];
    if (prevAttempt) {
      updatedAnswers = allAnswers.map((answer: any) => {
        if (answer.qid === question.id) {
          return {
            ...answer,
            answer: currentAnswer,
          };
        }
        return answer;
      });
    } else {
      updatedAnswers = [
        ...allAnswers,
        {
          qid: question.id,
          answer: currentAnswer,
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
        />
        <label htmlFor="falseOption" className="form-check-label">
          False
        </label>
      </div>
    </div>
  );
}
