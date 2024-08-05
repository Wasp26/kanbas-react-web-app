import { FaPlus, FaRocket } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import * as client from "./client";
import { addQuiz, deleteQuiz, setQuizzes, updateQuiz } from "./reducer";
import { TiArrowSortedDown } from "react-icons/ti";
import { useEffect } from "react";
import { BsGripVertical } from "react-icons/bs";
import { IoEllipsisVertical, IoRocketOutline } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import QuizControls from "./QuizControls";
import { CiSearch } from "react-icons/ci";

export default function QuizList({
  isStaff,
  quizzes,
  fetchAllQuizzes,
  updateQuizDetails,
  deleteQuizDetails,
  filterQuizzesByName,
}: {
  isStaff: Boolean;
  quizzes: any;
  fetchAllQuizzes: () => void;
  updateQuizDetails: (quiz: any) => void;
  deleteQuizDetails: (quizId: string) => void;
  filterQuizzesByName: (name: string) => void;
}) {
  const { cid } = useParams();
  const dateToday = new Date();

  useEffect(() => {
    fetchAllQuizzes();
  }, []);

  return (
    <div id="wd-quizzes">
      {isStaff && (
        <div id="wd-quizzes-control" className="text-nowrap mb-3 row">
          <div className="col-10 justify-content-center">
            <div className="col-5 search-wrapper ms-3">
              <div className="icon">
                <CiSearch />
              </div>
              <input
                className=" col form-control text-center search-bar"
                placeholder="Search Quizzes"
                onChange={(e) => filterQuizzesByName(e.target.value)}
              ></input>
            </div>
          </div>
          <Link
            to={`/Kanbas/Courses/${cid}/Quizzes/Editor/create`}
            className="text-decoration-none col-2 justify-content-center"
          >
            <button className="btn btn-danger">
              <FaPlus
                className="position-relative me-2"
                style={{ bottom: "1px" }}
              />
              Quiz
            </button>
          </Link>
        </div>
      )}
      <hr />

      <ul className="wd-assignments list-group rounded-0 mt-10">
        <li className="wd-asmnts-title list-item p-0">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <TiArrowSortedDown className="me-2 fs-3" />
            Quizzes
          </div>
        </li>
        {quizzes &&
          quizzes.map((quiz: any) => (
            <li className="wd-asmnt list-item p-3">
              <div className="row">
                <div className="col-1 justify-content-center align-self-center text-center h4">
                  <IoRocketOutline className="text-success" />
                </div>
                <div className="col-8">
                  <div>
                    <Link
                      to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}/Details`}
                      className="text-decoration-none text-danger"
                    >
                      <b>{quiz.title}</b>
                    </Link>
                  </div>
                  <div>
                    <span>
                      <b>
                        {(dateToday <
                          new Date(quiz.availableFrom.split("T")[0]) &&
                          `Not Available Until ${
                            quiz.availableFrom.split("T")[0]
                          } `) ||
                          (dateToday >
                            new Date(quiz.availableUntil.split("T")[0]) &&
                            "Closed ") ||
                          "Available "}
                      </b>
                    </span>{" "}
                    | <span>Due {quiz.dueDate.split("T")[0]}</span> |{" "}
                    {quiz.points}
                    {" pts"} | {quiz.numQuestions}
                    {" questions"}
                  </div>
                </div>
                <div className="col-3 justify-content-center align-self-center">
                  <QuizControls
                    quiz={quiz}
                    updateQuizDetails={updateQuizDetails}
                    deleteQuizDetails={deleteQuizDetails}
                  />
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
