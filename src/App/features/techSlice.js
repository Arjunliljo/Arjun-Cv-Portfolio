import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isTech: false,
};

export const eventSlice = createSlice({
  name: "Project",
  initialState,

  reducers: {
    setIsTech: (state, action) => {
      state.isTech = action.payload;
    },
  },
});

export const { setIsTech } = eventSlice.actions;

export default eventSlice.reducer;
