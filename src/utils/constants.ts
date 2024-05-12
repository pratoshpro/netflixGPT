export const BG_LOGO_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_large.jpg";

export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_APP_TMDB_API_KEY}`,
  },
};
export const TMBD_IMG_CDN_URL = `https://image.tmdb.org/t/p/original/`;
export const urlConfig = {
  nowPlaying: () => `https://api.themoviedb.org/3/movie/now_playing?page=1`,
  popular: () => `https://api.themoviedb.org/3/movie/popular?page=1`,
  topRated: () => `https://api.themoviedb.org/3/movie/top_rated?page=1`,
  upcoming: () => `https://api.themoviedb.org/3/movie/upcoming?page=1`,
  region: () =>
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&page=1&sort_by=popularity.desc&with_original_language=hi`,
  getMovieVideos: (movieId: number) =>
    `https://api.themoviedb.org/3/movie/${movieId}/videos?`,
  getMovieDetails: (movie: string) =>
    `https://api.themoviedb.org/3/search/movie?query=${movie}&page=1`,
};

export const VIDEO_TYPE = {
  Trailer: "Trailer",
};

export const SUPPORTED_LANGUAGES = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];
export const OPEN_AI_KEY = import.meta.env.VITE_APP_OPEN_AI_API_KEY;
