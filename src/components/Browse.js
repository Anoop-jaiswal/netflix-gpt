import React from "react";
import Header from "./Header";
import usePlayNowMovies from "../hooks/usePlayNowMovies";
import Maincontainer from "./Maincontainer";
import Secondarycontainer from "./Secondarycontainer";

const Browse = () => {
  usePlayNowMovies();
  return (
    <div>
      <Header />
      <Maincontainer />
      <Secondarycontainer />
    </div>
  );
};

export default Browse;
