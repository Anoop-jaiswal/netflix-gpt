import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(title, movies?.[0]?.poster_path);
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <div>
          {movies.map((movie) => (
            <MovieCard posterPath={movies?.[0]?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
