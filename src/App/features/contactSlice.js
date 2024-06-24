import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  isContact: false,
};

export const eventSlice = createSlice({
  name: "about",
  initialState,

  reducers: {
    setIsContact: (state, action) => {
      state.isContact = action.payload;
    },
  },
});

export const { setIsContact } = eventSlice.actions;

export default eventSlice.reducer;
