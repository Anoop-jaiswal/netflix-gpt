import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../redux/movieSlice";

const usePlayNowMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const response = await data.json();
    dispatch(addNowPlayingMovie(response.results));
    console.log(response.results);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
export default usePlayNowMovies;
