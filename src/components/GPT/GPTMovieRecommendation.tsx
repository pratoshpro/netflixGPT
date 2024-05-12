import { gptSelector } from "@/utils/selector";
import { useSelector } from "react-redux";
import MovieList from "../MovieList";

const GPTMovieRecommendation = () => {
  const { movieResults, movieNames } = useSelector(gptSelector);
  if (!movieNames?.length && !movieResults?.length) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-70 rounded-lg flex gap-8 flex-col">
      {movieNames?.map((movieName) => (
        <MovieList
          key={movieName}
          title={movieName}
          // movies={movieResults[index]} it will run for GPT response
          movies={movieResults}
        />
      ))}
    </div>
  );
};

export default GPTMovieRecommendation;
