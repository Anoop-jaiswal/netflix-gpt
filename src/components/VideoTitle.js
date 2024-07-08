import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-gray-700 text-white text-xl py-2 px-12 opacity-60 rounded-md">
          ▶ Play
        </button>
        <button className="bg-gray-700 text-white text-xl py-2 px-12 opacity-60 rounded-md mx-2">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
