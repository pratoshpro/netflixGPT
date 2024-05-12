import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, VIDEO_TYPE, urlConfig } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { TTrailerVideo } from "../utils/type";
import { movieSelector } from "@/utils/selector";

const useMovieTrailer = (movieId: number) => {
  // fetching movies from TMDB and update store
  const dispatch = useDispatch();
  const { trailerVideo } = useSelector(movieSelector);
  useEffect(() => {
    !trailerVideo && fetchMovieVideo();
  }, []);

  const fetchMovieVideo = async () => {
    const response = await fetch(
      urlConfig.getMovieVideos(movieId),
      API_OPTIONS
    );
    const data = await response.json();

    const filterData = data?.results?.filter(
      (item: TTrailerVideo) => item.type === VIDEO_TYPE.Trailer
    );
    const video = filterData?.length ? filterData[0] : data?.results[0];
    dispatch(addTrailerVideo(video));
  };
};

export default useMovieTrailer;
