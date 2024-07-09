import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[8%] flex justify-center">
      <form className=" bg-black w-1/2 grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder="what do you want to watch today"
        />
        <button className="col-span-3 py-2 px-4 bg-red-700 text-white rounded-md m-4">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
