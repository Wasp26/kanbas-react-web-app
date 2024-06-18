import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import * as db from "../../Database";
import { useParams } from "react-router";

export default function Modules() {
  const { cid: cid } = useParams();
  const courseModules = db.modules.filter((module) => module.course === cid);
  return (
    <div id="wd-modules">
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {courseModules.map((courseModule) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {courseModule.name}
              <ModuleControlButtons />
            </div>

            {courseModule.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {courseModule.lessons.map((lesson) => (
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name}
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
