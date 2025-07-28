import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  data: [5, 6, 9],
};

const sortingSlice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setData } = sortingSlice.actions;
export const store = configureStore({
  reducer: sortingSlice.reducer,
});
