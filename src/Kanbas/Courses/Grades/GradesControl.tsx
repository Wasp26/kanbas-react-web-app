import { LiaFileImportSolid } from "react-icons/lia";
import { TbFileExport } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";

import "./SearchStyles.css";
export default function GradesControl() {
  return (
    <div className="mt-5">
      <div id="wd-grades-controls" className="text-nowrap w-100 float-end mb-3">
        <button
          id="wd-settings-btn"
          className="btn btn-lg btn-secondary me-1 float-end"
        >
          <IoSettingsOutline />
        </button>

        <button
          id="wd-export-btn"
          className="btn btn-lg btn-secondary me-1 float-end"
        >
          <TbFileExport />
          Export
          <TiArrowSortedDown />
        </button>

        <button
          id="wd-import-btn"
          className="btn btn-lg btn-secondary me-1 float-end"
        >
          <LiaFileImportSolid />
          Import
        </button>
      </div>

      <div id="wd-grades-search-panel">
        <div id="wd-search-panel-titles" className="row">
          <div className="col justify-content-center align-self-center">
            <b>Student Names</b>
          </div>
          <div className="col justify-content-center align-self-center">
            <b>Assignment Names</b>
          </div>
        </div>

        <div id="wd-search-actual" className="row">
          <div className="col-5 search-wrapper">
            <div className="icon">
              <CiSearch />
            </div>
            <input
              className=" col form-control text-center"
              placeholder="Search Students"
            ></input>
          </div>

          <div className="col-5 search-wrapper">
            <div className="icon">
              <CiSearch />
            </div>
            <input
              className=" col form-control text-center"
              placeholder="Search Assignments"
            ></input>
          </div>
        </div>
      </div>
      <button
        id="wd-import-btn"
        className="btn btn-lg btn-secondary me-1 mt-3 mb-3"
      >
        <CiFilter />
        Apply Filters
      </button>
    </div>
  );
}
