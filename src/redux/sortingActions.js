import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  data: [5, 6, 9],
  playing: false,
  previousPlaying: null,
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
  },
});

export const { setData, setPlaying } = sortingSlice.actions;
export const selectData = (state) => state.data;
export const selectPlaying = (state) => state.playing;
export const selectPreviousPlaying = (state) => state.previousPlaying;
export const store = configureStore({
  reducer: sortingSlice.reducer,
});
