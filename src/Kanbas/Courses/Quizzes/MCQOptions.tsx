export default function MCQOptions({
  question,
  attemptDetails,
  setAttemptDetails,
}: {
  question: any;
  attemptDetails: any;
  setAttemptDetails: (attempt: any) => void;
}) {
  const choices = question.choices;
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
      {choices.map((choice: any) => (
        <div className="form-check mb-1" key={choice.id}>
          <input
            type="radio"
            id={choice.id}
            name="answer"
            className="form-check-input mb-1"
            value={choice.isCorrect ? "true" : "false"}
            onClick={handleClick}
          />
          <label htmlFor={choice.id} className="form-check-label">
            {choice.text}
          </label>
          <hr />
        </div>
      ))}
    </div>
  );
}
