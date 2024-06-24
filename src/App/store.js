import { configureStore } from "@reduxjs/toolkit";
import aboutReducer from "./features/aboutSlice";
import headerReducer from "./features/headerSlice";
import featureReducer from "./features/featureSlice";
import projectReducer from "./features/projectSlice";
import techReducer from "./features/techSlice";
import contactReducer from "./features/contactSlice";

export default configureStore({
  reducer: {
    header: headerReducer,
    about: aboutReducer,
    feature: featureReducer,
    project: projectReducer,
    tech: techReducer,
    contact: contactReducer,
  },
});
