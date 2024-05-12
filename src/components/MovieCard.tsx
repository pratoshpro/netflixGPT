import { TMBD_IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }: { posterPath: string }) => {
  if (!posterPath) return null;
  return (
    <img
      className="w-28 md:w-[150px] rounded-lg"
      src={`${TMBD_IMG_CDN_URL}${posterPath}`}
      alt="movie poster"
    />
  );
};

export default MovieCard;
