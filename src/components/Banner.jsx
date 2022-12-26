import React from "react";
import { bannerAPI } from "../utils/data";

const Banner = () => {
  const { title, text, btnText, imgSrc } = bannerAPI;
  return (
    <div className=" my-5 relative">
      <div className=" relative w-full max-w-5xl mx-auto lg:w-[95vw]">
        <div className=" flex flex-col items-center justify-center">
          <img
            src={imgSrc}
            alt="banner"
            className=" w-full h-[50vh] md:h-[40vh] sm:h-[35vh] xs:h-[30vh] object-fill rounded-lg"
          />
        </div>
        <div className=" absolute top-20 xs:top-10 left-7 right-0 flex flex-col items-start justify-center md:items-center md:justify-center md:left-0 gap-3 md:gap-2">
          <h1 className=" text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold text-slate-900 filter drop-shadow-md">
            {title}
          </h1>
          <p className=" text-3xl lg:text-2xl md:text-xl sm:text-base text-gray-700 font-semibold">
            {text}
          </p>
          <button
            className=" text-base font-bold bg-slate-800 text-slate-100 py-1.5 px-2 rounded-lg cursor-pointer active:scale-105 duration-300 transition-all shadow-md shadow-slate-700"
            type="button"
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
