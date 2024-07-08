import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ id }) => {
  useMovieTrailer(id);
  const trailerVideo = useSelector((store) => store.movies.addNewTrailer);

  return (
    <div>
      <iframe
        className="w-screen h-screen"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
