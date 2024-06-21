import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHeader: true,
};

export const eventSlice = createSlice({
  name: "header",
  initialState,

  reducers: {
    setIsHeader: (state, action) => {
      state.isHeader = action.payload;
    },
  },
});

export const { setIsHeader } = eventSlice.actions;

export default eventSlice.reducer;
