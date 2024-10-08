import { useState, useEffect } from "react";
import { BY_NATURE, carouselImages, COLLECTION } from "../utils/constants";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        return (prev + 1) % carouselImages.length;
      });
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative w-full h-screen  flex items-center">
      <div className="w-full h-[90vh]">
        <img
          className="w-full h-full object-cover"
          src={carouselImages[currentIndex].src}
        />
      </div>
      <div className="absolute w-1/2 text-white  top-16 right-10  flex  flex-col items-end  h-[80vh] ">
        <p className="uppercase text-2xl font-normal tracking-widest">
          {carouselImages[currentIndex].collection} {COLLECTION}
        </p>
        <div className="p-2  w-28 border-b-2 border-white "></div>
        <div className="p-2 flex flex-col items-end ">
          <p className="text-[4rem] tracking-widest">
            {carouselImages[currentIndex].tagline}
          </p>
          <p className="text-3xl uppercase tracking-widest">{BY_NATURE}</p>
        </div>
      </div>
      <div className="absolute w-1/2 bottom-12 right-10 flex flex-col items-end ">
        <div className="text-white  p-4 flex flex-col items-end w-full">
          <p className="text-xl uppercase whitespace-nowrap sm:whitespace-normal break-words  max-w-[450px] text-end tracking-widest">
            {carouselImages[currentIndex].description}
          </p>
          <div className="flex justify-center w-1/3 p-4 ">
            <button className="uppercase bg-white py-3 px-10 text-black hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out hover:bg-black hover:text-white">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
