import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    moviesName: null,
    moviesData: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMoviesResults: (state, action) => {
      const { moviesName, moviesData } = action.payload;
      state.moviesName = moviesName;
      state.moviesData = moviesData;
    },
  },
});

export const { toggleGptSearchView, addGptMoviesResults } = gptSlice.actions;

export default gptSlice.reducer;
