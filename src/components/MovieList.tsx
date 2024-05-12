import { TMovie } from "../utils/type";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }: { movies: TMovie[]; title: string }) => {
  return (
    <div className="flex flex-col gap-3 md:px-6">
      <h1 className="text-sm md:text-lg font-bold text-white capitalize">
        {title}
      </h1>

      <div>
        <div className="flex overflow-x-scroll gap-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
