import { useSelector } from "react-redux";
import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  const isStaff = useSelector((state: any) => state.accountReducer.isStaff);
  return (
    <div id="wd-home" className="d-flex">
      <div className="flex-fill me-5">
        <Modules />
      </div>
      <div className="d-none d-xl-block">{isStaff && <CourseStatus />}</div>
    </div>
  );
}
