import { useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { useParams } from "react-router";
import "./styles.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function QuizDetails({
  quizDetails,
  fetchQuizDetails,
}: {
  quizDetails: any;
  fetchQuizDetails: (qzid: string) => void;
}) {
  const { cid, qzid } = useParams();
  const { isStaff } = useSelector((state: any) => state.accountReducer);

  useEffect(() => {
    fetchQuizDetails(qzid as string);
  }, []);

  return (
    <div id="wd-quiz-details">
      <div className="w-100 justify-content-center align-self-center row mb-3 ps-5">
        {(isStaff && (
          <div className="col-md-4">
            <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qzid}/Attempt/`}>
              <button className="btn btn-secondary me-3">Preview</button>
            </Link>

            <Link to={`/Kanbas/Courses/${cid}/Quizzes/Editor/${qzid}`}>
              <button className="btn btn-secondary">
                <CiEdit className="me-1" />
                Edit
              </button>
            </Link>
          </div>
        )) || (
          <div className="col-md-4">
            <Link to={`/Kanbas/Courses/${cid}/Quizzes/${qzid}/Attempt/`}>
              <button className="btn btn-danger me-3">Take Quiz</button>
            </Link>
          </div>
        )}
      </div>
      <hr />
      <div id="wd-quiz-details-section">
        <h1 className="mb-5">{quizDetails.title}</h1>
        <div id="wd-details" className="ms-5 mt-3 mb-5 w-50">
          <div className="row">
            <div className="col-5">
              <b>Quiz Type</b>
            </div>
            <div className="col-7">
              <p>
                {(quizDetails.quizType === "GRADEDQUIZ" && "Graded Quiz") ||
                  (quizDetails.quizType === "PRACTICEQUIZ" &&
                    "Practice Quiz") ||
                  (quizDetails.quizType === "GRADEDSURVEY" &&
                    "Graded Survey") ||
                  (quizDetails.quizType === "UNGRADEDSURVEY" &&
                    "Ungraded Survey")}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <b>Points</b>
            </div>
            <div className="col-7">
              <p>{quizDetails.points}</p>
            </div>
          </div>
          <div className="row align-self-right">
            <div className="col-5">
              <b>Assignment Group</b>
            </div>
            <div className="col-7">
              <p>{quizDetails.group}</p>
            </div>
          </div>
          <div className="row align-self-right">
            <div className="col-5">
              <b>Shuffle Answers</b>
            </div>
            <div className="col-7">
              <p>{quizDetails.shuffle ? "Yes" : "No"}</p>
            </div>
          </div>
          <div className="row align-self-right">
            <div className="col-5">
              <b>Time Limit</b>
            </div>
            <div className="col-7">
              <p>
                {quizDetails.hasTimeLimit
                  ? `${quizDetails.timeLimit} Minutes`
                  : "None"}
              </p>
            </div>
          </div>
          <div className="row align-self-right">
            <div className="col-5">
              <b>Multiple Attempts</b>
            </div>
            <div className="col-7">
              <p>{quizDetails.multipleAttempt ? "Yes" : "No"}</p>
            </div>
          </div>
          <div className="row align-self-right">
            <div className="col-5">
              <b>One Question At a Time</b>
            </div>
            <div className="col-7">
              <p>{quizDetails.oneQView ? "Yes" : "No"}</p>
            </div>
          </div>
          <div className="row align-self-right">
            <div className="col-5">
              <b>Lock Questions after answering</b>
            </div>
            <div className="col-7">
              <p>{quizDetails.lockAfterAttempt ? "Yes" : "No"}</p>
            </div>
          </div>
          <div className="row align-self-right">
            <div className="col-5">
              <b>Webcam Required</b>
            </div>
            <div className="col-7">
              <p>{quizDetails.webcamReq ? "Yes" : "No"}</p>
            </div>
          </div>
        </div>
      </div>
      <table className="table">
        <tr>
          <th scope="col">
            <b>Due</b>
          </th>
          <th scope="col">
            <b>For</b>
          </th>
          <th scope="col">
            <b>Available From</b>
          </th>
          <th scope="col">
            <b>Available Until</b>
          </th>
        </tr>
        <tr>
          <td>{quizDetails.dueDate.split("T")[0]}</td>
          <td>Everyone</td>
          <td>{quizDetails.availableFrom.split("T")[0]}</td>
          <td>{quizDetails.availableUntil.split("T")[0]}</td>
        </tr>
      </table>
    </div>
  );
  // ) <div>QuizDetails</div>;
}
