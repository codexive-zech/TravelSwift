import React from "react";
import { brands } from "../utils/data";

const Advertise = () => {
  return (
    <div className="my-16 lg:my-10">
      <div className="flex items-center justify-between w-9/12 m-auto gap-9 lg:gap-7 md:gap-5 overflow-x-scroll scroll-smooth scroll-hidden">
        {brands.map((img, index) => {
          const { iconSrc } = img;
          return (
            <img
              className="h-auto w-[18vw] lg:w-[16vw] object-cover transition-all duration-200 hover:scale-105"
              src={iconSrc}
              key={index}
              alt="brand-image"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Advertise;
