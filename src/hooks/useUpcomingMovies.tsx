import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, urlConfig } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { movieSelector } from "@/utils/selector";

const useUpcomingMovies = () => {
  // fetching movies from TMDB and update store
  const dispatch = useDispatch();
  const { upcomingMovies } = useSelector(movieSelector);

  useEffect(() => {
    !upcomingMovies && fetchUpcomingMovies();
  }, []);

  const fetchUpcomingMovies = async () => {
    const response = await fetch(urlConfig.upcoming(), API_OPTIONS);
    const data = await response.json();
    dispatch(addUpcomingMovies(data.results));
  };
};

export default useUpcomingMovies;
