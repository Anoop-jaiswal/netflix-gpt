import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-12 fixed text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black text-xl py-2 px-12 opacity-70 rounded-md hover:opacity-60">
          ▶ Play
        </button>
        <button className="bg-white text-black text-xl py-2 px-12 opacity-70 rounded-md mx-2 hover:opacity-60">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
