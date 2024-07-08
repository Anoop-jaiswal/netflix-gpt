import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const Secondarycontainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div>
      <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
      {/* {
      movielist - popular
      movielist - trending
      movielist - now playing
      movielist - horror
    } */}
    </div>
  );
};

export default Secondarycontainer;
