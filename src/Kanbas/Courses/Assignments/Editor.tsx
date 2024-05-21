export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="left">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="LABS">LABS</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="left">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="Percentage">Percentage</option>
              <option value="Letter">Letter</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="online">Online</option>
              <option value="onground">Onground</option>
            </select>
            <br />
            <label id="wd-checkboxes">Online Entry Options</label>
            <br />
            <input type="checkbox" name="check-text-entry" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input
              type="checkbox"
              name="check-website-url"
              id="wd-website-url"
            />
            <label htmlFor="wd-website-url">Website URLs</label>
            <br />
            <input
              type="checkbox"
              name="check-media-recordings"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input
              type="checkbox"
              name="check-student-annotation"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input
              type="checkbox"
              name="check-file-upload"
              id="wd-file-upload"
            />
            <label htmlFor="wd-file-upload">File Uploads</label>
            <br />
          </td>
        </tr>
        <tr>
          <td align="left" valign="top">
            <label>Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign To</label>
            <br />
            <input id="wd-assign-to" value="Everyone"></input>
            <br />
            <label htmlFor="wd-due-date">Due</label>
            <br />
            <input type="date" id="wd-due-date"></input>
            <br />
            <label htmlFor="wd-available-from">Available From</label>
            <input type="date" id="wd-available-from"></input>
            <br />
            <label htmlFor="wd-available-until"> Until</label>
            <input type="date" id="wd-available-until"></input>
            <br />
          </td>
        </tr>
      </table>
      <hr />
      <button id="wd-cancel-editor">Cancel</button>
      <button id="wd-save-editor">Save</button>
    </div>
  );
}
