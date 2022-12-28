import React from "react";

const Experience = ({ experiences }) => {
  return (
    <div className="grid items-center grid-cols-3 md:grid-cols-2 justify-center gap-7 md:gap-3">
      {experiences.map((experience, index) => {
        const { number, title } = experience;
        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gradient-to-b from-emerald-500 to-green-300 rounded-lg p-3 lg:p-2 w-full drop-shadow-lg lg:mb-5 transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            <h1 className="text-slate-900 font-semibold filter drop-shadow-sm">
              {number}
            </h1>
            <p className="text-slate-900 font-base filter drop-shadow-sm">
              {title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;

export const ExperienceOpt = React.memo(Experience);
