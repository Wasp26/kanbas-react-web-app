import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import * as client from "./client";
import { setQuizzes } from "./reducer";
import { TiArrowSortedDown } from "react-icons/ti";
import { useEffect } from "react";
import { BsGripVertical } from "react-icons/bs";

export default function Quizzes() {
  const { cid } = useParams();
  const { isStaff } = useSelector((state: any) => state.accountReducer);
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const dispatch = useDispatch();

  const fetchAllQuizzes = async () => {
    const quizzes = await client.fetchQuizzes(cid as string);
    dispatch(setQuizzes(quizzes));
  };

  useEffect(() => {
    fetchAllQuizzes();
  }, []);

  return (
    <div id="wd-quizzes">
      {isStaff && (
        <Link
          to={`/Kanbas/Courses/${cid}/Quizzes/create`}
          className="text-decoration-none btn btn-danger"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Quiz
        </Link>
      )}
      <hr />

      <ul className="wd-assignments list-group rounded-0">
        <li className="wd-asmnts-title list-item p-0">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <TiArrowSortedDown className="me-2 fs-3" />
            Quizzes
          </div>
        </li>
        {quizzes &&
          quizzes.map((quiz: any) => (
            <li className="wd-asmnt list-item p-3 ps-1">
              <div className="row">
                <div className="col-8">
                  <Link to={`/Kanbas/Courses/${cid}/Assignments/${quiz._id}`}>
                    {quiz.title}
                  </Link>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
