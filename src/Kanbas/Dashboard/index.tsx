export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home"
            >
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/pdp.jpg" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5010/Home"
            >
              CS5010 PDP
            </a>
            <p className="wd-dashboard-course-title">
              Programming Design Paradigms
            </p>
            <a href="#/Kanbas/Courses/5010/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/fai.jpg" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5100/Home"
            >
              CS5100 FAI
            </a>
            <p className="wd-dashboard-course-title">
              Foundations of Artificial Intelligence
            </p>
            <a href="#/Kanbas/Courses/5100/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/webdev.jpg" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5600/Home"
            >
              CS5600 Webdev
            </a>
            <p className="wd-dashboard-course-title">Web Development</p>
            <a href="#/Kanbas/Courses/5600/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/fcn.jpg" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5700/Home"
            >
              CS5700 FCN
            </a>
            <p className="wd-dashboard-course-title">
              Foundations of Computer Networks
            </p>
            <a href="#/Kanbas/Courses/5700/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/algo.jpg" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5800/Home"
            >
              CS5800 Algo
            </a>
            <p className="wd-dashboard-course-title">Algorithms</p>
            <a href="#/Kanbas/Courses/5800/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/coop.jpg" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/0000/Home"
            >
              CS0000 Co-Op
            </a>
            <p className="wd-dashboard-course-title">Co-Op course</p>
            <a href="#/Kanbas/Courses/0000/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
          <img src="/images/dbms.png" width={200} />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/5020/Home"
            >
              CS5010 DBMS
            </a>
            <p className="wd-dashboard-course-title">
              Database Management System
            </p>
            <a href="#/Kanbas/Courses/5020/Home"> Go </a>
          </div>
        </div>
      </div>
    </div>
  );
}
