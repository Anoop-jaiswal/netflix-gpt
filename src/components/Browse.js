import React from "react";
import Header from "./Header";
import usePlayNowMovies from "../hooks/usePlayNowMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import useTopratedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcoming";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  usePlayNowMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <Maincontainer />
          <Secondarycontainer />
        </>
      )}
    </div>
  );
};

export default Browse;
