import React from "react";

const Card = ({ planIcon, title, text, planType, planContent, buttonText }) => {
  return (
    <div className="my-4">
      <div className="shadow-slate-400 shadow-lg p-3 rounded-lg">
        {/* head */}
        <div className="flex items-center justify-between gap-6 md:gap-4 ">
          <div className="flex items-center justify-center gap-4 ">
            <div className="flex items-center">
              <img
                src={planIcon}
                alt="card-icon"
                className="w-16 h-16 lg:w-13 lg:h-13 md:w-11 md:h-11"
              />
            </div>
            <div className=" grid items-start justify-items-start gap-1">
              <h1 className="font-bold text-xl md:text-base text-slate-900">
                {title}
              </h1>
              <p className=" text-base md:text-sm sm:text-xs font-normal text-slate-700">
                {text}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="font-semibold text-gray-700 text-base sm:text-xs">
              {planType}
            </h1>
          </div>
        </div>
        {/* body */}
        <hr className="h-[0.3vh] md:h-[0.1vh] bg-slate-500 my-3" />
        <div className="grid items-center justify-items-start gap-5 md:gap-3">
          {planContent.map((content, index) => {
            const { iconBox, text } = content;
            return (
              <div
                key={index}
                className="flex items-center gap-5 md:gap-3 px-5"
              >
                <div className=" flex items-center">
                  <img src={iconBox} alt="" className=" w-5 h-5" />
                </div>
                <h1 className=" text-center text-slate-900 text-base md:text-sm filter drop-shadow-lg">
                  {text}
                </h1>
              </div>
            );
          })}
        </div>
        <div className="grid items-center justify-items-center mt-7 md:mt-5 mb-2 hover:scale-110 transition-all duration-300">
          <button type="button" className="emerald-btn text-base">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

export const CardOpt = React.memo(Card);
