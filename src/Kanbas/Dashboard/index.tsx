export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card">
              <img src="/images/reactjs.jpg" style={{ height: "155px" }} />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS1234 React JS
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a
                  href="#/Kanbas/Courses/1234/Home"
                  className="btn btn-primary"
                >
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card">
              <img src="/images/pdp.jpg" style={{ height: "155px" }} />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5010/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS5010 PDP
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Programming Design Paradigms
                </p>
                <a
                  href="#/Kanbas/Courses/5010/Home"
                  className="btn btn-primary"
                >
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card">
              <img src="/images/fai.jpg" style={{ height: "155px" }} />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5100/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS5100 FAI
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Foundations of Artificial Intelligence
                </p>
                <a
                  href="#/Kanbas/Courses/5100/Home"
                  className="btn btn-primary"
                >
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card">
              <img src="/images/webdev.jpg" style={{ height: "155px" }} />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5600/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS5600 Webdev
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Web Development
                </p>
                <a
                  href="#/Kanbas/Courses/5600/Home"
                  className="btn btn-primary"
                >
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card">
              <img src="/images/fcn.jpg" style={{ height: "155px" }} />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5700/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS5700 FCN
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Foundations of Computer Networks
                </p>
                <a
                  href="#/Kanbas/Courses/5700/Home"
                  className="btn btn-primary"
                >
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card">
              <img src="/images/algo.jpg" style={{ height: "155px" }} />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5800/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS5800 Algo
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Algorithms
                </p>
                <a
                  href="#/Kanbas/Courses/5800/Home"
                  className="btn btn-primary"
                >
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card">
              <img src="/images/coop.jpg" style={{ height: "155px" }} />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/0000/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS0000 Co-op
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Co-op course
                </p>
                <a
                  href="#/Kanbas/Courses/0000/Home"
                  className="btn btn-primary"
                >
                  Go
                </a>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card">
              <img src="/images/dbms.png" style={{ height: "155px" }} />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/5020/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS5020 DBMS
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Database Management System
                </p>
                <a
                  href="#/Kanbas/Courses/5020/Home"
                  className="btn btn-primary"
                >
                  Go
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
