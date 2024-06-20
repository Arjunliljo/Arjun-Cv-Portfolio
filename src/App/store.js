import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./features/eventSlice";

export default configureStore({
  reducer: {
    event: eventReducer,
  },
});
