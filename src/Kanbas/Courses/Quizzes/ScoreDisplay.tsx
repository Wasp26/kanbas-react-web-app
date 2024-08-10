import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as client from "./client";
export default function ScoreDisplay({
  quizDetails,
  attemptDetails,
  setAttemptDetails,
}: {
  quizDetails: any;
  attemptDetails: any;
  setAttemptDetails: (attemptDetails: any) => void;
}) {
  const { isStaff } = useSelector((state: any) => state.accountReducer);
  const { cid, qzid } = useParams();
  const latestScore = attemptDetails.score;
  const navigate = useNavigate();

  const forfeitAndViewAnswersHandler = async () => {
    const updatedAttempt = {
      ...attemptDetails,
      attemptNo: quizDetails.maxAttempts + 1,
    };
    await client.updateAttempt(updatedAttempt);
    setAttemptDetails(updatedAttempt);
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${qzid}/Attempt`, {
      state: { viewAnswer: true },
    });
  };

  return (
    <div>
      <h5>
        You Scored {latestScore}/{quizDetails.points} points in your last
        Attempt
      </h5>
      {(isStaff ||
        (quizDetails.showCorrect &&
          (!quizDetails.multipleAttempt ||
            quizDetails.maxAttempts <= attemptDetails.attemptNo))) && (
        <Link
          to={`/Kanbas/Courses/${cid}/Quizzes/${qzid}/Attempt`}
          state={{ viewAnswer: true }}
        >
          <button className="btn btn-secondary me-2">View Answers</button>
        </Link>
      )}
      <br />
      {!isStaff &&
        quizDetails.showCorrect &&
        quizDetails.multipleAttempt &&
        quizDetails.maxAttempts > attemptDetails.attemptNo && (
          <button
            className="btn btn-danger me-3"
            onClick={forfeitAndViewAnswersHandler}
          >
            View Answers and Forfeit Attempts
          </button>
        )}
      {isStaff ||
        (quizDetails.multipleAttempt &&
          quizDetails.maxAttempts > attemptDetails.attemptNo && (
            <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qzid}/Attempt`}>
              <button className="btn btn-secondary">Re-take quiz</button>
            </Link>
          ))}
    </div>
  );
}
