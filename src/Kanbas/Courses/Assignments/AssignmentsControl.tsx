import { CiSearch } from "react-icons/ci";
import "../Grades/SearchStyles.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AssignmentsControl({ cid }: { cid: any }) {
  const { isStaff } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-asmnt-control" className="text-nowrap mb-5">
      {isStaff && (
        <div>
          <Link to={`/Kanbas/Courses/${cid}/Assignments/create`}>
            <button
              id="wd-add-asmnt-btn"
              className="btn btn-lg btn-danger me-1 float-end"
            >
              +Assignment
            </button>
          </Link>
          <button
            id="wd-add-asmnt-group-btn"
            className="btn btn-lg btn-secondary me-1 float-end"
          >
            +Group
          </button>
        </div>
      )}

      <div className="col-5 search-wrapper ms-3">
        <div className="icon">
          <CiSearch />
        </div>
        <input
          className=" col form-control text-center search-bar"
          placeholder="Search Assignments"
        ></input>
      </div>
    </div>
  );
}
