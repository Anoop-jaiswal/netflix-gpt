import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const Secondarycontainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="-mt-40 relative px-4 z-20">
        <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top rated"} movies={movies.addTopratedMovies} />
        <MovieList title={"Popular"} movies={movies.addPopularMovies} />
        <MovieList title={"Upcoming"} movies={movies.addUpcomingMovies} />
      </div>
    </div>
  );
};

export default Secondarycontainer;
