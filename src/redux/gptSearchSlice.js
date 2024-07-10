import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMoviesResults: (state, action) => {
      state.gptMovies = action.payload;
    },
  },
});

export const { toggleGptSearchView, addGptMoviesResults } = gptSlice.actions;

export default gptSlice.reducer;
