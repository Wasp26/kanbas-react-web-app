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

  const retakeQuizHandler = () => {
    setAttemptDetails({
      ...attemptDetails,
      answers: [],
    });
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${qzid}/Attempt`);
  };

  return (
    <div className="d-flex justify-content-center mt-5 p-5">
      <div className="text-center">
        <h5>
          You scored:
          <div>
            <h2>
              <label className=" p-3 my-3 ms-5 me-3 rounded-3 bg-secondary text-dark">
                {latestScore}
              </label>
              <label style={{ fontSize: "50px" }}>/</label>
              <label className="bg-danger text-light p-3 m-3 rounded-3">
                {quizDetails.points}
              </label>
              pts
            </h2>
          </div>{" "}
          in your last attempt
        </h5>
        {!isStaff && (
          <p className="mt-2">
            You have {quizDetails.maxAttempts - attemptDetails.attemptNo}{" "}
            attempt(s) left
          </p>
        )}

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
        <br />
        <br />
        {(isStaff ||
          (quizDetails.multipleAttempt &&
            quizDetails.maxAttempts > attemptDetails.attemptNo)) && (
          <button className="btn btn-secondary" onClick={retakeQuizHandler}>
            Re-take quiz
          </button>
        )}
      </div>
    </div>
  );
}
