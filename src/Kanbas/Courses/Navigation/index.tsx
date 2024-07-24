import "./index.css";
import { courses } from "../../Database";
import { useParams, useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function CoursesNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  const { cid: cid } = useParams();
  const { pathname } = useLocation();
  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          to={`/Kanbas/Courses/${cid}/${link}`}
          className={`list-group-item ${
            pathname.includes(link) ? "active" : "text-danger"
          } border border-0`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
