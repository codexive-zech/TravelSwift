import React from "react";
import { hero } from "../utils/data";

const Hero = () => {
  const { title, subtitle, text, img, btn1, btn2 } = hero;
  return (
    <div className=" flex flex-col items-center justify-items-center bg-gradient-to-b from-emerald-200 to-white w-full h-full py-14 lg:pt-9">
      <div className="travigo-container grid items-center justify-items-center mt-7">
        <div className=" grid items-center justify-items-center">
          <h1 className=" text-7xl lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl font-bold filter drop-shadow-lg text-slate-900 my-2">
            {title}
          </h1>
          <h1 className=" text-7xl lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl font-bold filter drop-shadow-lg text-slate-900 my-2">
            {subtitle}
          </h1>
          <p className=" text-xl sm:text-sm text-center my-2">{text}</p>
          <div className=" flex md:flex-col gap-7 md:gap-4 mb-3 items-center justify-center ">
            <button
              type="button"
              className="emerald-btn transition-all duration-200 active:scale-105"
            >
              {btn1}
            </button>
            <button
              type="button"
              className="light-btn transition-all duration-200 active:scale-105"
            >
              {btn2}
            </button>
          </div>
        </div>
        <div className=" grid items-center justify-items-center mt-4 mb-5">
          <img
            src={img}
            alt="Travigo Hero Banner"
            className=" w-full h-[75vh] lg:h-[50vh] md:[43vh] sm:h-[35vh] object-fill img-emerald-shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
