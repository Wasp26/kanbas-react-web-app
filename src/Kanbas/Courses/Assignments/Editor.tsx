import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid: cid, aid: aid } = useParams();
  const { pathname } = useLocation();
  const isCreate = pathname.includes("create");
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const [assignment, setAssignment] = useState<any>(
    isCreate
      ? {
          course: cid,
          title: "New Assignment title",
          description: "New assignment description",
          points: 100,
          dueDate: "2024-07-01",
          availableFrom: "2024-06-01",
          availableUntil: "2024-07-08",
        }
      : assignments.find((a: any) => a._id == aid)
  );

  const dispatch = useDispatch();
  //

  // if (!isCreate) {
  //   setAssignment(db.);
  // }

  return (
    <div id="wd-assignments-editor" className=" form ms-5 me-5">
      <div className="form-group mt-5 mb-5">
        <label htmlFor="wd-name">Assignment Name</label>
        <input
          className="form-control mb-2"
          id="wd-name"
          value={`${assignment?.title}`}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
        />
        <textarea
          id="wd-description"
          className="form-control"
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
        >
          {assignment.description
            ? assignment.description
            : "The assignment is availabl/e online Submit a link to the landing page of"}
        </textarea>
      </div>

      <div className="form-group float-end w-75 mb-3">
        <div className="mb-3 row">
          <label
            htmlFor="wd-points-input"
            className="col-sm-2 col-form-label float-end"
          >
            Points
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="wd-points-input"
              value={assignment.points ? assignment.points.toString() : "100"}
              onChange={(e) =>
                setAssignment({
                  ...assignment,
                  points: parseInt(e.target.value),
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="row float-end w-75 mb-3">
        <div className="col">
          <label htmlFor="wd-group" className="form-label float-end">
            Assignment Group
          </label>
        </div>
        <select id="wd-group" className="form-select col">
          <option value="ASSIGNMENTS">Assignments</option>
          <option value="LABS">Labs</option>
        </select>
      </div>

      <div className="row w-75 float-end mb-3">
        <div className="col">
          <label htmlFor="wd-display-grade-as" className="form-label float-end">
            Display Grade As
          </label>
        </div>
        <select id="wd-display-grade-as" className="form-select col">
          <option value="Percentage">Percentage</option>
          <option value="Letter">Letter</option>
        </select>
      </div>

      <div className="row w-75 float-end mb-3">
        <div className="col">
          <label className="float-end"> Submission Type</label>
        </div>
        <div className="col border rounded">
          <select id="wd-submission-type" className="form-select mt-2 mb-2">
            <option value="ONLINE">Online</option>
            <option value="ONGROUND">Onground</option>
          </select>

          <label className="form-label justify-content-center align-self-center">
            Online Entry Options
          </label>
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="wd-text-entry"
              />
              <label className="form-check-label" htmlFor="wd-website-url">
                Text Entry
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="wd-website-url"
              />
              <label className="form-check-label" htmlFor="wd-website-url">
                Website URL
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="wd-media-recordings"
              />
              <label className="form-check-label" htmlFor="wd-media-recordings">
                Media Recordings
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="wd-student-annotation"
              />
              <label
                className="form-check-label"
                htmlFor="wd-student-annotation"
              >
                Student Annotation
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="wd-file-upload"
              />
              <label className="form-check-label" htmlFor="wd-file-upload">
                File Upload
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="row w-75 float-end mb-5">
        <div className="col">
          <label className="form-label float-end">Assign</label>
        </div>

        <div className="col border rounded">
          <label htmlFor="wd-assign-to" className="form-label">
            <b>Assign To</b>
          </label>
          <input
            id="wd-assign-to"
            className="form-control"
            value={"Everyone"}
          ></input>
          <label htmlFor="wd-due-date" className="form-label mt-3">
            Due
          </label>
          <input
            type="date"
            id="wd-due-date"
            className="form-control"
            value={
              assignment.dueDate ? assignment.dueDate.toString() : "2024-05-13"
            }
            onChange={(e) =>
              setAssignment({ ...assignment, dueDate: e.target.value })
            }
          ></input>
          <div className="row mt-3">
            <label
              htmlFor="wd-available-from"
              className="col justify-content-center align-self-center"
            >
              Available From
            </label>
            <label
              htmlFor="wd-until"
              className="col justify-content-center align-self-center"
            >
              Until
            </label>
          </div>
          <div className="row">
            <input
              type="date"
              id="wd-available-from"
              className="col justify-content-center align-self-center form-control"
              value={
                assignment.availableFrom
                  ? assignment.availableFrom
                  : "2024-05-06"
              }
              onChange={(e) =>
                setAssignment({ ...assignment, availableFrom: e.target.value })
              }
            ></input>
            <input
              type="date"
              id="wd-until"
              className="col justify-content-center align-self-center form-control"
              value={
                assignment.availableUntil
                  ? assignment.availableUntil
                  : "2024-06-06"
              }
              onChange={(e) =>
                setAssignment({ ...assignment, availableUntil: e.target.value })
              }
            ></input>
          </div>
        </div>
      </div>
      <div className="footer float-end w-75 mb-5">
        <hr />
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          id="wd-add-asmnt-group-btn"
          className="btn btn-lg btn-secondary me-1 float-end"
        >
          Cancel
        </Link>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
          <button
            id="wd-add-asmnt-btn"
            className="btn btn-lg btn-danger me-1 float-end"
            onClick={() =>
              isCreate
                ? dispatch(addAssignment(assignment))
                : dispatch(updateAssignment(assignment))
            }
          >
            Save
          </button>
        </Link>
      </div>
    </div>
  );
}
