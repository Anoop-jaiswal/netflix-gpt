import React from "react";
import { IMGAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  console.log(posterPath);
  return (
    <div className="w-48">
      <img alt="poster" src={IMGAGE_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
