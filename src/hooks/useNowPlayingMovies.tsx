import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, urlConfig } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { movieSelector } from "@/utils/selector";

const useNowPlayingMovies = () => {
  // fetching movies from TMDB and update store
  const dispatch = useDispatch();
  const { nowPlayingMovies } = useSelector(movieSelector);

  useEffect(() => {
    !nowPlayingMovies && fetchNowPlayingMovies();
  }, []);

  const fetchNowPlayingMovies = async () => {
    const response = await fetch(urlConfig.nowPlaying(), API_OPTIONS);
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };
};

export default useNowPlayingMovies;
