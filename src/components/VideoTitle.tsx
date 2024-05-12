type Props = {
  title: string;
  overview: string;
};
const VideoTitle = ({ title, overview }: Props) => {
  return (
    <div className="w-screen aspect-video pt-[20%] md:pt-[15%] md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl font-bold md:text-3xl">{title}</h1>
      <span className="hidden md:line-clamp-2 w-1/2 text-lg py-8 text-pretty">
        {overview}
      </span>
      <div className="flex gap-3 mt-3 md:mt-0">
        <button className="text-md px-3 py-1  bg-white rounded-md text-black md:text-lg md:px-5 md:py-2 hover:bg-opacity-80 ">
          ▶️ Play
        </button>
        <button className="hidden md:block bg-slate-700 rounded-md text-white text-lg px-5 py-2 hover:bg-opacity-80">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
