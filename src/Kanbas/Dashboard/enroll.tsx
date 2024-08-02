import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Enroll({
  courses,
  fetchUnAssociatedCourses,
  studentEnroll,
}: {
  courses: any[];
  fetchUnAssociatedCourses: () => void;
  studentEnroll: (courseId: string) => void;
}) {
  useEffect(() => {
    fetchUnAssociatedCourses();
  }, []);

  return (
    <div>
      <h1 id="wd-dashboard-title">Un-Enrolled Courses</h1>
      <hr />
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {courses.map((course) => (
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <img src="/images/reactjs.jpg" height={160} />
              <div className="card-body">
                <span
                  className="wd-dashboard-course-link"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  {course.name}
                </span>
                <p
                  className="wd-dashboard-course-title card-text"
                  style={{ maxHeight: 53, overflow: "hidden" }}
                >
                  {course.description}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={(e) => {
                    console.error(course._id);
                    e.currentTarget.disabled = true;
                    e.currentTarget.textContent = "Enrolled";
                    studentEnroll(course._id);
                  }}
                >
                  Enroll
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
