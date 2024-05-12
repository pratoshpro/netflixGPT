import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { movieSelector } from "../utils/selector";

const SecondaryContainer = () => {
  const {
    nowPlayingMovies,
    regionMovies,
    popularMovies,
    upcomingMovies,
    topRatedMovies,
  } = useSelector(movieSelector);

  return (
    <div className="flex flex-col gap-4 bg-black ">
      <div className="mt-0 md:-mt-64 relative z-10 flex flex-col gap-4 md:gap-8">
        {popularMovies !== null && (
          <MovieList movies={popularMovies} title="Trending" />
        )}
        {regionMovies !== null && (
          <MovieList movies={regionMovies} title="Region" />
        )}

        {nowPlayingMovies !== null && (
          <MovieList movies={nowPlayingMovies} title="Now Playing" />
        )}

        {topRatedMovies !== null && (
          <MovieList movies={topRatedMovies} title="Top Rated" />
        )}

        {upcomingMovies !== null && (
          <MovieList movies={upcomingMovies} title="Upcoming" />
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
