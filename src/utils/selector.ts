import { TAppConfig, TGPT, TMovieSelector, TUserSelector } from "./type";

export const userSelector = (state: TUserSelector) => state.user;
export const gptSelector = (state: TGPT) => state.gpt;
export const appConfigSelector = (state: TAppConfig) => state.appConfig;
export const movieSelector = (state: TMovieSelector) => state.movies;
