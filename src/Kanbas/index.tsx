import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import "./styles.css";
import { useEffect, useState } from "react";
import * as client from "./Courses/client";
import store from "./store";
import { Provider } from "react-redux";
import Account from "./Account";
import ProtectedRoute from "./ProtectedRoute";
import Enroll from "./Dashboard/enroll";

export default function Kanbas() {
  const [enrolledCourses, setCourses] = useState<any[]>([]);
  const [unenrolledCourses, setNewCourses] = useState<any[]>([]);

  const fetchAssociatedCourses = async () => {
    const courses = await client.fetchAssociatedCourses();
    setCourses(courses);
  };

  const fetchUnAssociatedCourses = async () => {
    const courses = await client.fetchUnAssociatedCourses();
    setNewCourses(courses);
  };

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const addNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    setCourses([...enrolledCourses, newCourse]);
  };

  const deleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    setCourses(enrolledCourses.filter((c) => c._id !== courseId));
  };

  const updateCourse = async () => {
    await client.updateCourse(course);
    setCourses(
      enrolledCourses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  const studentEnroll = async (courseId: string) => {
    await client.studentEnroll(courseId);
  };

  // useEffect(() => {
  //   fetchCourses();
  // }, []);

  return (
    <Provider store={store}>
      <div id="wd-kanbas" className="h-100">
        <div className="d-flex h-100">
          <div className="d-none d-md-block bg-black">
            <KanbasNavigation />
          </div>
          <div className="flex-fill p-4">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route
                path="/Enroll"
                element={
                  <Enroll
                    courses={unenrolledCourses}
                    fetchUnAssociatedCourses={fetchUnAssociatedCourses}
                    studentEnroll={studentEnroll}
                  />
                }
              />
              <Route path="/Account/*" element={<Account />} />
              <Route
                path="Dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard
                      courses={enrolledCourses}
                      course={course}
                      setCourse={setCourse}
                      addNewCourse={addNewCourse}
                      deleteCourse={deleteCourse}
                      updateCourse={updateCourse}
                      fetchAssociatedCourses={fetchAssociatedCourses}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="Courses/:cid/*"
                element={
                  <ProtectedRoute>
                    <Courses courses={enrolledCourses} />
                  </ProtectedRoute>
                }
              />
              <Route path="Calendar" element={<h1>Calendar</h1>} />
              <Route path="Inbox" element={<h1>Inbox</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </Provider>
  );
}
