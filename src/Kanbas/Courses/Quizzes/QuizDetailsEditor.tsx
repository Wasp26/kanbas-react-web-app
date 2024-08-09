import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

export default function QuizDetailsEditor({
  quizDetails,
  setQuizDetails,
  createQuizDetails,
  saveQuizDetails,
}: {
  quizDetails: any;
  setQuizDetails: (quiz: any) => void;
  createQuizDetails: () => void;
  saveQuizDetails: () => void;
}) {
  const navigate = useNavigate();
  const { cid } = useParams();
  const { pathname } = useLocation();
  const isCreate = pathname.includes("create");
  let qzid = quizDetails._id;

  console.log(`saved questions: ${quizDetails.questions}`);
  const saveAndPublishHandler = async (e: any) => {
    if (isCreate) {
     qzid = await createQuizDetails();
    } else {
      saveQuizDetails();
    }
    navigate(`/Kanbas/Courses/${cid}/Quizzes`);
  };

  const saveHandler = async (e: any) => {
    setQuizDetails({ ...quizDetails, published: true });
    if (isCreate) {
      qzid = await createQuizDetails();
    } else {
      saveQuizDetails();
    }
    navigate(`/Kanbas/Courses/${cid}/Quizzes/${qzid}/Details`);
  };

  return (
    <div id="wd-quiz-details-editor ms-5">
      <label htmlFor="wd-quiz-title">Quiz Title</label>
      <input
        className="form-control mb-2"
        id="wd-quiz-title"
        value={quizDetails.title}
        onChange={(e) =>
          setQuizDetails({ ...quizDetails, title: e.target.value })
        }
      />
      <label htmlFor="wd-quiz-description">Quiz Instructions</label>
      <textarea
        id="wd-quiz-description"
        className="form-control"
        onChange={(e) =>
          setQuizDetails({ ...quizDetails, description: e.target.value })
        }
      >
        {quizDetails.description}
      </textarea>
      <hr />
      <div className="row form-group w-75 mb-3 mt-5">
        <div className="col">
          <label htmlFor="wd-type" className="form-label">
            Quiz Type
          </label>
        </div>
        <select
          id="wd-group"
          className="form-select col"
          onChange={(e) =>
            setQuizDetails({ ...quizDetails, quizType: e.target.value })
          }
        >
          <option value="GRADEDQUIZ">Graded Quiz</option>
          <option value="PRACTICEQUIZ">Practice Quiz</option>
          <option value="GRADEDSURVEY">Graded Survey</option>
          <option value="UNGRADEDSURVEY">Ungraded Survey</option>
        </select>
      </div>

      <div className="row form-group w-75 mb-3 mt-3">
        <div className="col">
          <label htmlFor="wd-group" className="form-label">
            Assignment Group
          </label>
        </div>
        <select
          id="wd-group"
          className="form-select col"
          onChange={(e) =>
            setQuizDetails({ ...quizDetails, group: e.target.value })
          }
        >
          <option value="QUIZ">Quiz</option>
          <option value="ASSIGNMENT">Assignment</option>
          <option value="EXAM">Exam</option>
          <option value="Project">Project</option>
        </select>
      </div>
      <hr />
      <h4> Options </h4>

      <div className="form-check mb-2 w-75">
        <input
          className="form-check-input"
          type="checkbox"
          id="wd-shuffle-answers"
          defaultChecked={quizDetails.shuffle}
          onChange={(e) => {
            setQuizDetails({ ...quizDetails, shuffle: e.target.checked });
          }}
        />
        <label className="form-check-label" htmlFor="wd-shuffle-answers">
          Shuffle Answers
        </label>
      </div>

      <div className="row mb-2 w-75">
        <div className="col">
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="wd-time-limit"
              defaultChecked={quizDetails.hasTimeLimit}
              onChange={(e) => {
                setQuizDetails({
                  ...quizDetails,
                  hasTimeLimit: e.target.checked,
                });
              }}
            />
            <label className="form-check-label" htmlFor="wd-time-limit">
              Time Limit
            </label>
          </div>
        </div>
      </div>
      {quizDetails.hasTimeLimit && (
        <div className="row mb-2 w-50">
          {" "}
          <div className="col">
            {" "}
            <input
              type="number"
              className="form-control"
              id="wd-time-limit"
              value={quizDetails.timeLimit}
              onChange={(e) =>
                setQuizDetails({
                  ...quizDetails,
                  timeLimit: parseInt(e.target.value),
                })
              }
            />{" "}
          </div>{" "}
        </div>
      )}

      <div className="form-check mb-2 w-75">
        <input
          className="form-check-input"
          type="checkbox"
          id="wd-multiple-attempts"
          defaultChecked={quizDetails.multipleAttempt}
          onChange={(e) => {
            setQuizDetails({
              ...quizDetails,
              multipleAttempt: e.target.checked,
            });
          }}
        />
        <label className="form-check-label" htmlFor="wd-multiple-attempts">
          Allow Multiple Attempts
        </label>
      </div>

      <div className="form-check mb-2 w-75">
        <input
          className="form-check-input"
          type="checkbox"
          id="wd-show-correct"
          defaultChecked={quizDetails.showCorrect}
          onChange={(e) => {
            setQuizDetails({ ...quizDetails, showCorrect: e.target.checked });
          }}
        />
        <label className="form-check-label" htmlFor="wd-show-correct">
          Show Correct Answers
        </label>
      </div>

      <div className="form-check mb-2 w-75">
        <input
          className="form-check-input"
          type="checkbox"
          id="wd-one-question-view"
          defaultChecked={quizDetails.oneQView}
          onChange={(e) => {
            setQuizDetails({ ...quizDetails, oneQView: e.target.checked });
          }}
        />
        <label className="form-check-label" htmlFor="wd-one-question-view">
          One Question View
        </label>
      </div>

      <div className="form-check mb-2 w-75">
        <input
          className="form-check-input"
          type="checkbox"
          id="wd-webcam-required"
          defaultChecked={quizDetails.webcamReq}
          onChange={(e) => {
            setQuizDetails({ ...quizDetails, webcamReq: e.target.checked });
          }}
        />
        <label className="form-check-label" htmlFor="wd-webcam-required">
          Webcam Required
        </label>
      </div>

      <div className="form-check mb-2 w-75">
        <input
          className="form-check-input"
          type="checkbox"
          id="wd-lock-after-attempt"
          defaultChecked={quizDetails.lockAfterAttempt}
          onChange={(e) => {
            setQuizDetails({
              ...quizDetails,
              lockAfterAttempt: e.target.checked,
            });
          }}
        />
        <label className="form-check-label" htmlFor="wd-lock-after-attempt">
          Lock After Attempt
        </label>
      </div>

      <hr />

      <div className="row w-75 mb-5">
        <div className="col">
          <label className="form-label">Available From</label>
        </div>

        <div className="col">
          <input
            type="date"
            className="form-control"
            value={
              quizDetails.availableFrom &&
              quizDetails.availableFrom.split("T")[0]
            }
            onChange={(e) =>
              setQuizDetails({ ...quizDetails, availableFrom: e.target.value })
            }
          />
        </div>
      </div>

      <div className="row w-75 mb-5">
        <div className="col">
          <label className="form-label">Due Date</label>
        </div>

        <div className="col">
          <input
            type="date"
            className="form-control"
            value={quizDetails.dueDate && quizDetails.dueDate.split("T")[0]}
            onChange={(e) =>
              setQuizDetails({ ...quizDetails, dueDate: e.target.value })
            }
          />
        </div>
      </div>

      <div className="row w-75 mb-5">
        <div className="col">
          <label className="form-label">Available Until</label>
        </div>

        <div className="col">
          <input
            type="date"
            className="form-control"
            value={
              quizDetails.availableUntil &&
              quizDetails.availableUntil.split("T")[0]
            }
            onChange={(e) =>
              setQuizDetails({
                ...quizDetails,
                availableUntil: e.target.value,
              })
            }
          />
        </div>
      </div>

      <div className="row w-75 mb-5">
        <div className="col">
          <label className="form-label">Access Code</label>
        </div>
        <input
          type="text"
          className="form-control w-50"
          onChange={(e) =>
            setQuizDetails({ ...quizDetails, accessCode: e.target.value })
          }
        />
      </div>
      <hr />

      <Link
        to={`/Kanbas/Courses/${cid}/Quizzes`}
        className="btn btn-secondary float-end me-1"
      >
        Cancel
      </Link>

      <button
        className="btn btn-danger float-end me-1"
        onClick={saveAndPublishHandler}
      >
        Save and Publish
      </button>

      <button className="btn btn-danger float-end me-1" onClick={saveHandler}>
        Save
      </button>
    </div>
  );
}


