import { configureStore } from "@reduxjs/toolkit";
import patientFormReducer from "./features/patientForm/patientFormSlice";

const store = configureStore({
  reducer: {
    patientForm: patientFormReducer,
  },
});

export default store;
