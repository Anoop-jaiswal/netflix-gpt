import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNewTrailer } from "../redux/movieSlice";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const result = await data.json();
    const filterTrailerData = result?.results?.filter(
      (video) => video.type === "Teaser"
    );

    const filterTeaserData = result?.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailerData?.length
      ? filterTrailerData?.[0]
      : filterTeaserData?.[0];
    dispatch(addNewTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMovieTrailer;
