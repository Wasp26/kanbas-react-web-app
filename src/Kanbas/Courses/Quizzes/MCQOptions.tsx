export default function MCQOptions({
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
  const choices = question.choices;
  const handleClick = (event: any) => {
    const currentAnswer = event.target.id;
    const newAnswer = {
      qid: question.id,
      answer: currentAnswer,
    };
    const allAnswers = attemptDetails.answers;
    const prevAttempt = allAnswers.find(
      (answer: any) => answer.qid === question.id
    );
    let updatedAnswers = [];
    if (prevAttempt) {
      updatedAnswers = allAnswers.map((answer: any) => {
        if (answer.qid === question.id) {
          return newAnswer;
        }
        return answer;
      });
    } else {
      updatedAnswers = [...allAnswers, newAnswer];
    }

    console.log(updatedAnswers);
    setAttemptDetails({
      ...attemptDetails,
      answers: updatedAnswers,
    });
  };
console.log(currentAnswer)
  return (
    <div className="ms-3 mb-3 me-3">
      {choices.map((choice: any) => (
        <div  className={`form-check mb-1 ${choice.isCorrect ? 'text-success' : ''}`}
        key={choice.id}>
          <input
            type="radio"
            id={choice.id}
            name="answer"
            className="form-check-input mb-1"
            onClick={handleClick}
            checked={parseInt(prevAnswerValue) === choice.id}
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
