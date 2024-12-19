import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patientDetails: {
    basicDetails: {},
    legalDocuments: {},
    demographics: {},
  },
  resources: {},
  doctorTestReport: {},
};

const patientFormSlice = createSlice({
  name: "patientForm",
  initialState,
  reducers: {
    setPatientDetails: (state, action) => {
      state.patientDetails = { ...state.patientDetails, ...action.payload };
    },
    setResources: (state, action) => {
      state.resources = action.payload;
    },
    setDoctorTestReport: (state, action) => {
      state.doctorTestReport = action.payload;
    },
  },
});

export const { setPatientDetails, setResources, setDoctorTestReport } =
  patientFormSlice.actions;

export default patientFormSlice.reducer;
