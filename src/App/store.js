import { configureStore } from "@reduxjs/toolkit";
import aboutReducer from "./features/aboutSlice";
import headerReducer from "./features/headerSlice";
import featureReducer from "./features/featureSlice";
import projectReducer from "./features/projectSlice";
import techReducer from "./features/techSlice";

export default configureStore({
  reducer: {
    header: headerReducer,
    about: aboutReducer,
    feature: featureReducer,
    project: projectReducer,
    tech: techReducer,
  },
});
