import { TbFileExport } from "react-icons/tb";
import GradesControl from "./GradesControl";

export default function Grades() {
  return (
    <div id="wd-grades-panel" className="ms-5">
      <GradesControl />
      <div className="table-responsive mt-5">
        <table className="table table-striped table-bordered grades-table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">
                <p>
                  <b>Student name</b>
                </p>
              </th>
              <th scope="col">
                <p>A1 Setup</p>
                <p>Out of 100</p>
              </th>
              <th scope="col">
                <p>A2 HTML</p>
                <p>Out of 100</p>
              </th>
              <th scope="col">
                <p>A3 CSS</p>
                <p>Out of 100</p>
              </th>
              <th scope="col">
                <p>A4 Bootstrap</p>
                <p>Out of 100</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="text-danger">
                Jane Adams
              </th>
              <td>100%</td>
              <td>96.67%</td>
              <td>92.18%</td>
              <td>66.22%</td>
            </tr>
            <tr>
              <th scope="row" className="text-danger">
                Christina Allen
              </th>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <th scope="row" className="text-danger">
                Samreen Ansari
              </th>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <th scope="row" className="text-danger">
                Han Bao
              </th>
              <td>100%</td>
              <td>100%</td>
              <td>
                <div className="row ps-3 pb-2">
                  <input
                    className="col form-control text-center"
                    placeholder="100"
                  ></input>
                  <div className="col pt-1">
                    <TbFileExport />
                  </div>
                </div>
              </td>
              <td>98.99%</td>
            </tr>
            <tr>
              <th scope="row" className="text-danger">
                Jane Adams
              </th>
              <td>100%</td>
              <td>96.67%</td>
              <td>98.37%</td>
              <td>100%</td>
            </tr>
            <tr>
              <th scope="row" className="text-danger">
                Jane Adams
              </th>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
