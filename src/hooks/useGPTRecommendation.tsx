import openAI from "@/utils/openai";
import { useDispatch } from "react-redux";
import useFetchMovie from "./useFetchMovie";
import { addGPTResults } from "@/utils/gptSlice";

const useGPTRecommendation = () => {
  const dispatch = useDispatch();
  const fetchMovie = useFetchMovie();
  const fetchGPTQueryResponse = async (query: string) => {
    const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query :  ${query}.
    only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Tamasha, RockStar, Don, Golmaal, Singham`;

    const gptResults = await openAI.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (gptResults?.choices?.[0]?.message?.content) {
      const GPTMovies = gptResults?.choices?.[0]?.message?.content.split(", ");
      const promiseArray = GPTMovies.map((movie) => fetchMovie(movie));
      const TMDBResults = await Promise.all(promiseArray);
      dispatch(
        addGPTResults({ movieNames: GPTMovies, movieResults: TMDBResults })
      );
    } else {
      console.log("Failed to fetch movie result from GPT");
    }
  };
  return fetchGPTQueryResponse;
};

export default useGPTRecommendation;
