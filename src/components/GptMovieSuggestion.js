import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { moviesData, moviesName } = gpt;

  return (
    <div className="p-4 m-4 bg-black text-white">
      <MovieList title={moviesName} movies={moviesData} />
    </div>
  );
};

export default GptMovieSuggestion;
