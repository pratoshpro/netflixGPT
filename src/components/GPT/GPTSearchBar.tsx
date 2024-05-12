import useGPTRecommendation from "@/hooks/useGPTRecommendation";
import { resetGPTState } from "@/utils/gptSlice";
import { lang } from "@/utils/language";
import { appConfigSelector } from "@/utils/selector";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const GPTSearchBar = () => {
  const { preferredLanguage } = useSelector(appConfigSelector);
  const dispatch = useDispatch();
  const fetchGPTQueryResponse = useGPTRecommendation();
  const searchRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    return () => {
      dispatch(resetGPTState());
    };
  }, []);
  const searchMovies = async () => {
    if (searchRef.current?.value)
      fetchGPTQueryResponse(searchRef.current.value);
  };
  return (
    <div className="pt-[30%] md:pt-[8%]">
      <form
        className="rounded-md w-1/2 bg-black bg-opacity-70 grid grid-cols-12 m-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="px-2 py-1 m-3 md:m-4 md:px-4 md:py-2 rounded-lg col-span-8 h-8 md:h-10 text-sm md:text-lg"
          type="text"
          placeholder={
            (
              lang as {
                [key: string]: { search: string; searchPlaceholder: string };
              }
            )?.[preferredLanguage]?.searchPlaceholder
          }
          ref={searchRef}
        />
        <button
          className="px-2 py-1 h-8 m-3 md:h-10 text-sm md:text-lg rounded-lg md:m-4 md:px-4 md:py-2  bg-red-600 text-white col-span-4"
          type="button"
          onClick={searchMovies}
        >
          {
            (
              lang as {
                [key: string]: { search: string; searchPlaceholder: string };
              }
            )?.[preferredLanguage]?.search
          }
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
