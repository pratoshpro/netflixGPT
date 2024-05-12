import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, urlConfig } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";
import { movieSelector } from "@/utils/selector";

const useTopRatedMovies = () => {
  // fetching movies from TMDB and update store
  const dispatch = useDispatch();
  const { topRatedMovies } = useSelector(movieSelector);
  useEffect(() => {
    !topRatedMovies && fetchTopRatedMMovies();
  }, []);

  const fetchTopRatedMMovies = async () => {
    const response = await fetch(urlConfig.topRated(), API_OPTIONS);
    const data = await response.json();
    dispatch(addTopRatedMovies(data.results));
  };
};

export default useTopRatedMovies;
