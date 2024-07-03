import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
console.log("test");
const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState: initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      console.error(assignment.description);
      const newAssignment = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        course: assignment.course,
        description: assignment.description,
        availableFrom: assignment.availableFrom,
        availableUntil: assignment.availableUntil,
        dueDate: assignment.dueDate,
        points: assignment.points,
      };
      state.assignments = [...state.assignments, newAssignment];
    },

    deleteAssignment: (state, { payload: assignmentId }) => {
      console.error(assignmentId);
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id != assignmentId
      );
    },

    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((assignment) =>
        assignment._id === assignmentId
          ? { ...assignment, editing: true }
          : assignment
      );
    },

    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a
      );
    },
  },
});

export const {
  addAssignment,
  editAssignment,
  updateAssignment,
  deleteAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
