import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useRegionMovies from "../hooks/useRegionMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { gptSelector } from "@/utils/selector";
import GPTSearch from "./GPT/GPTSearch";

const Browse = () => {
  const gpt = useSelector(gptSelector);
  useNowPlayingMovies();
  usePopularMovies();
  useRegionMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <div className="w-screen">
        <Header />
      </div>
      {gpt.showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
