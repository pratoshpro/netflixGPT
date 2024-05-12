import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { movieSelector } from "../utils/selector";

type Props = {
  movieId: number;
};
const VideoBackground = ({ movieId }: Props) => {
  useMovieTrailer(movieId);
  const { trailerVideo } = useSelector(movieSelector);
  if (trailerVideo === null) return;
  return (
    <iframe
      className="w-screen aspect-video"
      src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1&showInfo=0`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
};

export default VideoBackground;
