import { API_OPTIONS, urlConfig } from "@/utils/constants";

const useFetchMovie = () => {
  const fetchMovie = async (movieName: string) => {
    const data = await fetch(urlConfig.getMovieDetails(movieName), API_OPTIONS);
    const json = await data.json();

    return json.results;
  };
  return fetchMovie;
};

export default useFetchMovie;
