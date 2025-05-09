import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
  isStaff: false,
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      state.isStaff = state.currentUser
        ? action.payload.role === "TA" || action.payload.role === "FACULTY"
        : false;
    },
  },
});
export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;
