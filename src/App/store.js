import { configureStore } from "@reduxjs/toolkit";
import aboutReducer from "./features/aboutSlice";
import headerReducer from "./features/headerSlice";
import featureReducer from "./features/featureSlice";

export default configureStore({
  reducer: {
    header: headerReducer,
    about: aboutReducer,
    feature: featureReducer,
  },
});
