import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isProject: false,
};

export const eventSlice = createSlice({
  name: "Project",
  initialState,

  reducers: {
    setIsProject: (state, action) => {
      state.isProject = action.payload;
    },
  },
});

export const { setIsProject } = eventSlice.actions;

export default eventSlice.reducer;
