import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopratedMovies } from "../redux/movieSlice";

const useTopratedMovies = () => {
  const dispatch = useDispatch();
  const getTopratedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const response = await data.json();
    dispatch(addTopratedMovies(response.results));
  };

  useEffect(() => {
    getTopratedMovies();
  }, []);
};
export default useTopratedMovies;
