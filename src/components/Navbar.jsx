import React, { useState } from "react";
import { navLinks } from "../utils/data";
import logo from "../assets/images/logo.png";
import menu from "../assets/images/menu.svg";
import { PopupMenuOpt } from "./PopupMenu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [popUp, setPopUp] = useState(false);

  const changePopUp = () => {
    setPopUp(!popUp);
  };
  return (
    <>
      <header className="absolute top-5 left-0 right-0">
        <nav className="flex items-center justify-between travigo-container">
          <div className="flex items-center">
            <img src={logo} alt="logo" className=" w-20 h-14 object-fill" />
          </div>
          <ul className="flex items-center justify-between gap-7 lg:hidden">
            {navLinks.map((navLink) => {
              const { link, id } = navLink;
              return (
                <li key={id}>
                  <Link to="#" className="text-slate-900 capitalize text-2xl">
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="flex items-center lg:hidden">
            <li>
              <button
                type="button"
                className="emerald-btn text-base transition-transform duration-200 active:scale-105"
              >
                Join Us
              </button>
            </li>
          </ul>
          <ul className="hidden lg:flex items-center" onClick={changePopUp}>
            <li>
              <img
                src={menu}
                alt="menu"
                className="w-16 h-7 cursor-pointer object-fill"
              />
            </li>
          </ul>
        </nav>
      </header>
      <PopupMenuOpt navLinks={navLinks} popUp={popUp} />
    </>
  );
};

export default Navbar;
