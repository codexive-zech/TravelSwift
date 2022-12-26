import React from "react";
import { footerAPI } from "../utils/data";

const Footer = () => {
  const { socialLinks, links, titles } = footerAPI;
  return (
    <footer className=" mt-4 bg-gradient-to-b from-emerald-500 to-green-300">
      <div className="travigo-container w-full max-w-4xl md:w-[85vw]">
        <div className=" grid items-center justify-items-center gap-5 md:gap-4 grid-cols-3 py-7 md:py-5">
          {titles.map((value, index) => {
            const { title } = value;
            return (
              <div
                key={index}
                className=" grid items-center justify-items-center"
              >
                <h1 className=" font-bold text-xl text-slate-900 capitalize">
                  {title}
                </h1>
              </div>
            );
          })}
          {links.map((linkList, index) => {
            return (
              <ul
                key={index}
                className="grid items-center justify-items-center gap-1"
              >
                {linkList.map((list, index) => {
                  const { link } = list;
                  return (
                    <li key={index} className=" text-sm md:text-xs font-normal">
                      {link}
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div>
          <div className="h-[0.1vh] bg-slate-800"></div>
          <div className=" grid items-center justify-items-center grid-cols-4 w-full max-w-2xl md:w-[85vw] m-auto py-3">
            {socialLinks.map((links, index) => {
              const { icon } = links;
              return (
                <img
                  src={icon}
                  alt="social-links"
                  className="w-7 h-7 lg:w-6 lg:h-6 md:w-5 md:h-5 cursor-pointer"
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
