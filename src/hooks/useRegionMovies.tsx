import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, urlConfig } from "../utils/constants";
import { addRegionMovies } from "../utils/movieSlice";
import { movieSelector } from "@/utils/selector";

const useRegionMovies = () => {
  // fetching movies from TMDB and update store
  const dispatch = useDispatch();
  const { regionMovies } = useSelector(movieSelector);

  useEffect(() => {
    !regionMovies && fetchRegionMovies();
  }, []);

  const fetchRegionMovies = async () => {
    const response = await fetch(urlConfig.region(), API_OPTIONS);
    const data = await response.json();
    dispatch(addRegionMovies(data.results));
  };
};

export default useRegionMovies;
