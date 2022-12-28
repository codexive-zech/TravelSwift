import React from "react";
import { placesAPI } from "../utils/data";
import { PlacesOpt } from "./Places";

const Explore = () => {
  return (
    <div className="relative my-15 md:my-8">
      <div className="travigo-container flex flex-col gap-5">
        <div className="text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold filter drop-shadow-md text-slate-900 text-center">
          Explore The Beauty of The World
        </div>
        <PlacesOpt placesAPI={placesAPI} />
      </div>
    </div>
  );
};

export default Explore;
