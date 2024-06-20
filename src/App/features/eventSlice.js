import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  isAbout: false,
  isCards: false,
};

export const eventSlice = createSlice({
  name: "observer",
  initialState,

  reducers: {
    setIsAbout: (state, action) => {
      state.isAbout = action.payload;
    },
    isCards: (state, action) => {
      state.isCards = action.payload;
    },
  },
});

export const { setIsAbout } = eventSlice.actions;

export default eventSlice.reducer;
