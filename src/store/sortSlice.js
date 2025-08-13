import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  data: [9, 3, 12, 6],
  status: "idle",
  steps: [],
  currentStep: null,
  speed: 200,
};

const sortSlice = createSlice({
  name: "sortSlice",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    setSteps(state, action) {
      state.steps = action.payload;
      state.currentStep = 0;
    },
    setCurrentStep(state, action) {
      state.currentStep = action.payload;
    },
    setSpeed(state, action) {
      state.speed = action.payload;
    },
  },
});

export const { setData, setStatus, setCurrentStep, setSpeed, setSteps } =
  sortSlice.actions;

export const store = configureStore({
  reducer: sortSlice.reducer,
});
