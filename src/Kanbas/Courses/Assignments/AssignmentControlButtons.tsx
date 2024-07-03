import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import AssignmentDeleteModal from "./AssignmentDeleteModal";
export default function LessonControlButtons({
  assignmentId,
  deleteAssignment,
}: {
  assignmentId: string;
  deleteAssignment: (aid: string) => void;
}) {
  return (
    <div className="float-end">
      <button
        data-bs-target={`#wd-delete-assignment-dialog-${assignmentId}`}
        data-bs-toggle="modal"
        className="btn btn-lg"
      >
        <FaTrash className="text-danger" />
      </button>

      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
      <AssignmentDeleteModal
        assignmentId={assignmentId}
        deleteAssignment={deleteAssignment}
      />
    </div>
  );
}
