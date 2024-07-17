import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
  assignments: <any>[],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState: initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        ...assignment,
        _id: new Date().getTime().toString(),
      };
      state.assignments = [...state.assignments, newAssignment];
    },

    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (assignment: any) => assignment._id != assignmentId
      );
    },

    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((assignment: any) =>
        assignment._id === assignmentId
          ? { ...assignment, editing: true }
          : assignment
      );
    },

    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
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
  setAssignments,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
