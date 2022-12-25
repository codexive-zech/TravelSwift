import React from "react";
import { memory } from "../utils/data";
import Experience from "./Experience";
const Memory = () => {
  const { title, subtitle, text, img, experiences } = memory;
  return (
    <div className="relative my-7 md:my-5">
      <div className="travigo-container flex items-center justify-between lg:flex-col-reverse">
        <div className="flex items-center justify-center w-full max-w-xl lg:max-w-none">
          <img
            src={img}
            alt=""
            className="img-emerald-shadow w-auto h-[60vh] lg:h-[50vh] sm:h-[45vh]"
          />
        </div>
        <div className="flex flex-col items-start lg:items-center justify-center w-full max-w-2xl lg:max-w-none">
          <h1 className="text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold filter drop-shadow-md text-slate-900">
            {title}
          </h1>
          <h1 className="text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold filter drop-shadow-md text-slate-900">
            {subtitle}
          </h1>
          <p className="lg:text-center py-4 text-slate-900 text-base font-medium ">
            {text}
          </p>
          <Experience experiences={experiences} />
        </div>
      </div>
    </div>
  );
};

export default Memory;
