import Carousel from "./Carousel";
import ReraBox from "./ReraBox";

const Banner = () => {
  return (
    <div className="w-full h-auto lg:h-[calc(100vh-3.5rem)] xl:h-[calc(100vh-7.125rem)] z-1000">
      <ReraBox parent = {"Banner"} />
      <Carousel/>
    </div>
  );
};

export default Banner;
