import React from "react";

const Places = ({ placesAPI }) => {
  return (
    <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 md:gap-3">
      {placesAPI.map((place, index) => {
        const { location, distance, placeImg } = place;
        return (
          <div
            className="flex items-center gap-4 md:gap-3 hover:bg-emerald-300 sm:hover:bg-emerald-200 transition-all duration-200 hover:scale-105 rounded-lg cursor-pointer"
            key={index}
          >
            <div className="flex items-center">
              <img
                src={placeImg}
                alt={location}
                className="w-20 h-20 lg:w-16 lg:h-16 md:w-14 md:h-14 rounded-lg"
              />
            </div>
            <div className="flex flex-col items-start justify-center">
              <h1 className="text-xl lg:text-sm font-bold filter drop-shadow-sm">
                {location}
              </h1>
              <p className="text-base md:text-sm sm:text-xs capitalize">
                {distance}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Places;
