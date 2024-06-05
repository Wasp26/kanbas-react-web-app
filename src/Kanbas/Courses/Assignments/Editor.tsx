export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className=" form ms-5 me-5">
      <div className="form-group">
        <label htmlFor="wd-name">Assignment Name</label>
        <input className="form-control" id="wd-name" value="A1 - ENV + HTML" />
        <br />
        <textarea id="wd-description" className="form-control">
          The assignment is available online Submit a link to the landing page
          of
        </textarea>
      </div>
      <br />
      <br />

      <div className="form-group w-50">
        <div className="mb-3 row">
          <label htmlFor="wd-points-input" className="col-sm-2 col-form-label">
            Points
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="wd-points-input"
              value="100"
            />
          </div>
        </div>
      </div>

      <br />
      <br />
      <div className="row w-50">
        <div className="col">
          <label htmlFor="wd-group" className="form-label">
            Assignment Group
          </label>
        </div>
        <select id="wd-group" className="form-select col">
          <option value="ASSIGNMENTS">Assignments</option>
          <option value="LABS">Labs</option>
        </select>
      </div>

      <br />
      <br />

      <div className="row w-50">
        <label htmlFor="wd-display-grade-as" className="col">
          Display Grade As
        </label>
        <select id="wd-display-grade-as" className="form-select col">
          <option value="Percentage">Percentage</option>
          <option value="Letter">Letter</option>
        </select>
      </div>

      <br />
      <br />

      <div className="row w-50">
        <label className="col"> Submission Type</label>
        <div className="col border rounded">
          <select id="wd-submission-type" className="form-select mt-2">
            <option value="ONLINE">Online</option>
            <option value="ONGROUND">Onground</option>
          </select>
          <br />

          <label className="form-label">Online Entry Options</label>
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="wd-text-entry"
              />
              <label className="form-check-label" htmlFor="wd-website-url">
                Text Entry
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="wd-website-url"
              />
              <label className="form-check-label" htmlFor="wd-website-url">
                Website URL
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="wd-media-recordings"
              />
              <label className="form-check-label" htmlFor="wd-media-recordings">
                Media Recordings
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="wd-student-annotation"
              />
              <label
                className="form-check-label"
                htmlFor="wd-student-annotation"
              >
                Student Annotation
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="wd-file-upload"
              />
              <label className="form-check-label" htmlFor="wd-file-upload">
                File Upload
              </label>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div className="row w-50">
        <label className="form-label col">Assign</label>
        <div className="col border rounded">
          <label htmlFor="wd-assign-to" className="form-label">
            <b>Assign To</b>
          </label>
          <input
            id="wd-assign-to"
            className="form-control"
            value={"Everyone"}
          ></input>
          <label htmlFor="wd-due-date" className="form-label">
            Due
          </label>
          <input type="date" id="wd-due-date" className="form-control"></input>
          <div className="row">
            <label
              htmlFor="wd-available-from"
              className="col justify-content-center align-self-center"
            >
              Available From
            </label>
            <label
              htmlFor="wd-until"
              className="col justify-content-center align-self-center"
            >
              Until
            </label>
          </div>
          <div className="row">
            <input
              type="date"
              id="wd-available-from"
              className="col justify-content-center align-self-center form-control"
            ></input>
            <input
              type="date"
              id="wd-until"
              className="col justify-content-center align-self-center form-control"
            ></input>
          </div>
        </div>
      </div>
      <hr />
      <button
        id="wd-add-asmnt-group-btn"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        Cancel
      </button>
      <button
        id="wd-add-asmnt-btn"
        className="btn btn-lg btn-danger me-1 float-end"
      >
        Save
      </button>
    </div>
  );
}
