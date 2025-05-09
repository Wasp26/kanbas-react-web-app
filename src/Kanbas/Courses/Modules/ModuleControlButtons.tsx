import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
import { FaPencil } from "react-icons/fa6";
import { useSelector } from "react-redux";
export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  const { isStaff } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="float-end">
      {isStaff && (
        <div>
          <FaPencil
            onClick={() => editModule(moduleId)}
            className="text-primary me-3"
          />
          <FaTrash
            className="text-danger me-2 mb-1"
            onClick={() => deleteModule(moduleId)}
          />
        </div>
      )}

      <GreenCheckmark />
      <BsPlus />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
