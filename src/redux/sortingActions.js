import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  data: [5, 6, 9],
  playing: false,
  previousPlaying: null,
  completed: false,
  highlightLine: null,
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
  },
});

export const { setData, setPlaying, setCompleted, setHighlightLine } =
  sortingSlice.actions;
export const selectData = (state) => state.data;
export const selectPlaying = (state) => state.playing;
export const selectPreviousPlaying = (state) => state.previousPlaying;
export const selectCompleted = (state) => state.completed;
export const selectHighlightLine = (state) => state.highlightLine;
export const store = configureStore({
  reducer: sortingSlice.reducer,
});
