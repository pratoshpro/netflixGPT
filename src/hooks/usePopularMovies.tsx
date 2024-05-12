import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, urlConfig } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { movieSelector } from "@/utils/selector";

const usePopularMovies = () => {
  // fetching movies from TMDB and update store
  const dispatch = useDispatch();
  const { popularMovies } = useSelector(movieSelector);

  useEffect(() => {
    !popularMovies && fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    const response = await fetch(urlConfig.popular(), API_OPTIONS);
    const data = await response.json();
    dispatch(addPopularMovies(data.results));
  };
};

export default usePopularMovies;
