import Background from "../Background";
import GPTMovieRecommendation from "./GPTMovieRecommendation";
// import GPTSearchBar from "./GPTSearchBar";
import SearchBar from "./SearchBar";

const GPTSearch = () => {
  return (
    <>
      <Background />
      <div>
        {/* <GPTSearchBar /> */}
        <SearchBar />
        <GPTMovieRecommendation />
      </div>
    </>
  );
};

export default GPTSearch;
