import { BG_LOGO_URL } from "@/utils/constants";

const Background = () => {
  return (
    <div className="fixed -z-10 ">
      <img src={BG_LOGO_URL} className="h-screen w-screen object-cover" />
    </div>
  );
};

export default Background;
