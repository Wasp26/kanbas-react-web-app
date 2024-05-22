import Lab1 from "./Lab1";
import { Route, Routes, Navigate } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>
      <p>
        <b>First Name: </b>Sai Swapnil
      </p>
      <br />
      <p>
        <b>Last Name: </b>Aremanda
      </p>
      <p>
        <b>Term: </b>
      </p>
      Summer 2024 (Full)
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
