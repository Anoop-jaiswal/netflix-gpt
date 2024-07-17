import React from "react";
import { IMGAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="w-48 pr-4">
      <img alt="poster" src={IMGAGE_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
