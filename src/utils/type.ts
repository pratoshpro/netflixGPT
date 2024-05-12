export type TMovie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};
export type TTrailerVideo = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};
export type TMovieSelector = {
  movies: {
    nowPlayingMovies: TMovie[];
    popularMovies: TMovie[];
    upcomingMovies: TMovie[];
    topRatedMovies: TMovie[];
    regionMovies: TMovie[];
    trailerVideo: TTrailerVideo;
  };
};
export type TUserSelector = {
  user: {
    uid: number;
    email: string;
    displayName: string;
    photoURL: string;
  };
};
export type TUser = {
  uid?: string;
  email: string;
  displayName: string;
  photoURL: string;
};

export type TGPT = {
  gpt: {
    showGPTSearch: boolean;
    movieNames: Array<string>;
    // movieResults: Array<Array<TMovie>>; it will use for GPT response
    movieResults: Array<TMovie>;
  };
};

export type TAppConfig = {
  appConfig: {
    preferredLanguage: string;
  };
};
