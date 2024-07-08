import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    addNewTrailer: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNewTrailer: (state, action) => {
      state.addNewTrailer = action.payload;
    },
  },
});

export const { addNowPlayingMovie, addNewTrailer } = movieSlice.actions;

export default movieSlice.reducer;
