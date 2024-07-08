import React from "react";
import Header from "./Header";
import usePlayNowMovies from "../hooks/usePlayNowMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";
import useTopratedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcoming";

const Browse = () => {
  usePlayNowMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <Maincontainer />
      <Secondarycontainer />
    </div>
  );
};

export default Browse;
