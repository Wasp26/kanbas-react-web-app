export default function AssignmentDeleteModal({
  assignmentId,
  deleteAssignment,
}: {
  assignmentId: string;
  deleteAssignment: (aid: string) => void;
}) {
  console.error(assignmentId);
  return (
    <div
      id={`wd-delete-assignment-dialog-${assignmentId}`}
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Delete Assignment?
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {`Delete assignment with id: ${assignmentId}?`}
            </h1>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>

            <button
              type="button"
              data-bs-dismiss="modal"
              className="btn btn-danger"
              onClick={() => deleteAssignment(assignmentId)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
