import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { movieSelector } from "../utils/selector";

const MainContainer = () => {
  const { nowPlayingMovies } = useSelector(movieSelector);
  if (nowPlayingMovies === null) return;
  const mainMovie = nowPlayingMovies[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div className="bg-black pt-[30%] md:pt-0 md:bg-transparent">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
