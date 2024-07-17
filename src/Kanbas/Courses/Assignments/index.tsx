import { BsGripVertical } from "react-icons/bs";
import AssignmentsControl from "./AssignmentsControl";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoEllipsisVertical } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { MdAssignment } from "react-icons/md";
import { useParams } from "react-router";
import "./index.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  setAssignments,
  updateAssignment,
} from "./reducer";
import * as client from "./client";
import { useEffect } from "react";
export default function Assignments() {
  const { cid: cid } = useParams();

  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  const removeAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(cid as string, assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div id="wd-assignments">
      <AssignmentsControl cid={cid} />
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
        {assignments
          .filter((asmnt: any) => asmnt.course === cid)
          .map((assignment: any) => (
            <li className="wd-asmnt list-item p-3 ps-1">
              <div className="row">
                <div className="col-1 justify-content-center align-self-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdAssignment />
                </div>

                <div className="col-8">
                  <Link
                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                  >
                    {assignment.title}
                  </Link>
                  <br />
                  Multiple Modules | <b>Not available until </b>
                  {assignment.availableFrom
                    ? assignment.availableFrom
                    : "2024-06-10"}
                  <br />
                  <b>Due </b>
                  {assignment.dueDate
                    ? assignment.dueDate
                    : "2024-07-01"} |{" "}
                  {assignment.points ? assignment.points : "100"} pts
                </div>

                <div className="col-3 justify-content-center align-self-center">
                  <AssignmentControlButtons
                    assignmentId={assignment._id}
                    deleteAssignment={(assignmentId) => {
                      removeAssignment(assignmentId);
                    }}
                  />
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
