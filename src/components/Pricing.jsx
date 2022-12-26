import React from "react";
import { pricingApi } from "../utils/data";
import Card from "./Card";

const Pricing = () => {
  const { title, text, btn1, btn2, plans } = pricingApi;
  return (
    <div>
      <div className=" my-16 md:my-8 relative">
        <div className="flex flex-col items-center justify-center travigo-container">
          <h1 className="text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-bold filter drop-shadow-md text-slate-900 capitalize">
            {title}
          </h1>
          <p className="text-xl lg:text-base md:text-sm font-medium sm:text-xs text-gray-600 py-4 md:py-3">
            {text}
          </p>
          <div className="flex items-center justify-center gap-5 md:gap-3 ring-1 ring-slate-100 p-2 rounded-full md:w-full shadow-slate-100 shadow-md text-base">
            <button type="button" className="emerald-btn">
              {btn1}
            </button>
            <button type="button" className="light-btn">
              {btn2}
            </button>
          </div>
        </div>
        <div className="grid items-center justify-items-center grid-cols-2 lg:grid-cols-1 gap-2 md:w-[90vw] m-auto my-8 lg:my-5">
          {plans.map((plan, index) => {
            return (
              <div
                key={index}
                className="grid items-center justify-items-center"
              >
                <Card {...plan} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
