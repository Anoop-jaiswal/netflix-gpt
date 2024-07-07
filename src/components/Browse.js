import React from "react";
import Header from "./Header";
import usePlayNowMovies from "../hooks/usePlayNowMovies";

const Browse = () => {
  usePlayNowMovies();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
