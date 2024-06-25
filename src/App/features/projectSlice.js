import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isProject: false,
  popupProject: "",
};

export const eventSlice = createSlice({
  name: "Project",
  initialState,

  reducers: {
    setIsProject: (state, action) => {
      state.isProject = action.payload;
    },
    setPopupProject: (state, action) => {
      state.popupProject = action.payload;
    },
  },
});

export const { setIsProject, setPopupProject } = eventSlice.actions;

export default eventSlice.reducer;
