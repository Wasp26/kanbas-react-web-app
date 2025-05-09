import { TbFileExport } from "react-icons/tb";
import GradesControl from "./GradesControl";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Grades() {
  const { cid: cid } = useParams();

  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === cid
  );

  const userIds = enrollments.map((enrollment) => enrollment.user);

  const assignments = db.assignments.filter(
    (assignment) => assignment.course === cid
  );

  return (
    <div id="wd-grades-panel" className="ms-5">
      <GradesControl />
      <div className="table-responsive">
        <table className="table table-striped table-bordered grades-table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">
                <p>
                  <b>Student name</b>
                </p>
              </th>
              {assignments.map((assignment) => (
                <th scope="col">
                  <p>{assignment.title}</p>
                  <p>Out of 100</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {userIds.map((userId) => {
              const user = db.users.find((user) => user._id === userId);
              return (
                <tr>
                  <th scope="row" className="text-danger">
                    {user?.firstName + " " + user?.lastName}
                  </th>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === userId &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
