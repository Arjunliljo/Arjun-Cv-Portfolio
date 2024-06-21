import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  isAbout: false,
};

export const eventSlice = createSlice({
  name: "about",
  initialState,

  reducers: {
    setIsAbout: (state, action) => {
      state.isAbout = action.payload;
    },
  },
});

export const { setIsAbout } = eventSlice.actions;

export default eventSlice.reducer;
