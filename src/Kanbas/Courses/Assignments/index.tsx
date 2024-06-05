import { BsGripVertical } from "react-icons/bs";
import AssignmentsControl from "./AssignmentsControl";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoEllipsisVertical } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { MdAssignment } from "react-icons/md";
import "./index.css";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentsControl />
      <br />
      <br />
      <br />
      <br />

      <ul className="wd-assignments list-group rounded-0">
        <li className="wd-asmnts-title list-item p-0">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <TiArrowSortedDown className="me-2 fs-3" />
            ASSIGNMENTS
            <div className="float-end">
              <GoPlus className="fs-4" />
              <IoEllipsisVertical className="fs-4" />
            </div>
            <div className="float-end rounded-pill border border-secondary me-4 p-1">
              40% of Total
            </div>
          </div>
        </li>

        <li className="wd-asmnt list-item p-3 ps-1">
          <div className="row">
            <div className="col-1 justify-content-center align-self-center">
              <BsGripVertical className="me-2 fs-3" />
              <MdAssignment />
            </div>

            <div className="col-10">
              <a
                className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123"
              >
                A1 - ENV + HTML
              </a>
              <br />
              Multiple Modules | <b>Not available until</b> May 6 at 12:00 am
              <br />
              <b>Due</b> May 13 at 11:59pm | 100pts
            </div>

            <div className="col-1 justify-content-center align-self-center">
              <LessonControlButtons />
            </div>
          </div>
        </li>

        <li className="wd-asmnt list-item p-3 ps-1">
          <div className="row">
            <div className="col-1 justify-content-center align-self-center">
              <BsGripVertical className="me-2 fs-3" />
              <MdAssignment />
            </div>

            <div className="col-10">
              <a
                className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/456"
              >
                A2 - CSS + BOOTSTRAP
              </a>
              <br />
              Multiple Modules | <b>Not available until</b> May 13 at 12:00 am
              <br />
              <b>Due</b> May 20 at 11:59pm | 100pts
            </div>

            <div className="col-1 justify-content-center align-self-center">
              <LessonControlButtons />
            </div>
          </div>
        </li>

        <li className="wd-asmnt p-3 ps-1 p-0">
          <div className="row">
            <div className="col-1 justify-content-center align-self-center">
              <BsGripVertical className="me-2 fs-3" />
              <MdAssignment />
            </div>

            <div className="col-10">
              <a
                className="wd-assignment-link"
                href="#/Kanbas/Courses/1234/Assignments/123"
              >
                A3 - JAVASCRIPT + REACT
              </a>
              <br />
              Multiple Modules | <b>Not available until</b> May 20 at 12:00 am
              <br />
              <b>Due</b> May 27 at 11:59pm | 100pts
            </div>

            <div className="col-1 justify-content-center align-self-center">
              <LessonControlButtons />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
