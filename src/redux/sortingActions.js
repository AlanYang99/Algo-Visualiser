import { createSlice, configureStore } from "@reduxjs/toolkit";
import StepDescription from "../components/StepDescription";

const initialState = {
  data: [5, 6, 9],
  playing: false,
  previousPlaying: null,
  completed: false,
  highlightLine: null,
  speed: 200,
  stepDescription: "No actions currently",
};

const sortingSlice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setPlaying(state) {
      state.previousPlaying = state.playing;
      state.playing = !state.playing;
    },
    setCompleted(state, action) {
      state.completed = action.payload;
    },
    setHighlightLine(state, action) {
      state.highlightLine = action.payload;
    },
    setSpeed(state, action) {
      state.speed = action.payload;
    },
    setStepDescription(state, action) {
      state.stepDescription = action.payload;
    },
  },
});

export const {
  setData,
  setPlaying,
  setCompleted,
  setHighlightLine,
  setSpeed,
  setStepDescription,
} = sortingSlice.actions;
export const selectData = (state) => state.data;
export const selectPlaying = (state) => state.playing;
export const selectPreviousPlaying = (state) => state.previousPlaying;
export const selectCompleted = (state) => state.completed;
export const selectHighlightLine = (state) => state.highlightLine;
export const selectSpeed = (state) => state.speed;
export const selectStepDescription = (state) => state.stepDescription;
export const store = configureStore({
  reducer: sortingSlice.reducer,
});
