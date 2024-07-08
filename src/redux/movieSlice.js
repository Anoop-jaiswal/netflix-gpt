import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    addNewTrailer: null,
    addPopularMovies: null,
    addTopratedMovies: null,
    addUpcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.addPopularMovies = action.payload;
    },
    addTopratedMovies: (state, action) => {
      state.addTopratedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.addUpcomingMovies = action.payload;
    },
    addNewTrailer: (state, action) => {
      state.addNewTrailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovie,
  addNewTrailer,
  addPopularMovies,
  addTopratedMovies,
  addUpcomingMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
