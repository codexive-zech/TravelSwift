import React from "react";
import { Link } from "react-router-dom";

const PopupMenu = ({ navLinks, popUp }) => {
  return (
    <div
      className={`fixed top-16 right-16 bg-white py-5 px-6 lg:flex items-center justify-start opacity-100 z-10 rounded-lg backdrop-filter backdrop-blur-md w-36 h-auto hidden transition-transform duration-200 ${
        popUp ? " visible opacity-100" : " invisible opacity-0"
      }`}
    >
      <ul className="flex flex-col gap-2 items-start text-xl">
        {navLinks.map((navLink) => {
          const { link, id } = navLink;
          return (
            <li key={id} className="flex items-center">
              <Link to="#">{link}</Link>
            </li>
          );
        })}
        <li>
          <button
            type="button"
            className="light-btn rounded-md sm:w-full text-xl shadow-slate-200"
          >
            Join Us
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PopupMenu;
