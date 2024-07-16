import React, { useRef, useState } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMoviesResults } from "../redux/gptSearchSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  //This function will take and search movie in TMDB database
  const searchMovieTmdb = async (movieName) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  if (error) {
    const searchMovieTmdbByName = async (movieName) => {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await data.json();

      dispatch(
        addGptMoviesResults({
          moviesName: searchText.current.value,
          moviesData: json.results,
        })
      );
    };
    searchMovieTmdbByName();
  }

  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a movie recomendation system and suggets some movie for the query :" +
      searchText.current.value +
      ". only give me a name of 5 movies, comma separated like the example result given ahead. Example Result : gadar,sholay,golmal,koi mil gya,don";

    try {
      const gptResponse = await openai.chat.completions.create({
        messages: [{ role: "user", content: gptQuery }],
        model: "gpt-3.5-turbo",
      });
      const getMoviesName = gptResponse.choices[0]?.message?.content.split(",");

      //search for each movie, this will return array of promise
      const promiseDataArray = getMoviesName.map((movie) =>
        searchMovieTmdb(movie)
      );
      const resultTmdb = await Promise.all(promiseDataArray);
      dispatch(
        addGptMoviesResults({
          moviesName: getMoviesName,
          moviesData: resultTmdb,
        })
      );
    } catch (e) {
      setError(e);
      console.log(error, "eerpr");
    }
  };

  return (
    <div className="pt-[8%] flex justify-center">
      <form
        className=" bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder="what do you want to watch today"
        />
        <button
          onClick={handleGptSearch}
          className="col-span-3 py-2 px-4 bg-red-700 text-white rounded-md m-4"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
