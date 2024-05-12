import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showGPTSearch: true,
  movieNames: [],
  movieResults: [],
};
const gptSlice = createSlice({
  name: "gpt",
  initialState,
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    resetGPTState: (state) => {
      state.movieNames = [];
      state.movieResults = [];
    },
  },
});
export const { toggleGPTSearchView, addGPTResults, resetGPTState } =
  gptSlice.actions;
export default gptSlice.reducer;
