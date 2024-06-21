import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFeature: false,
};

export const eventSlice = createSlice({
  name: "Feature",
  initialState,

  reducers: {
    setIsFeature: (state, action) => {
      state.isFeature = action.payload;
    },
  },
});

export const { setIsFeature } = eventSlice.actions;

export default eventSlice.reducer;
