import React, { useState } from "react";
import navBarMenu from "../dataColl/data";
import { FaDumbbell } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="container">
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <FaDumbbell />
            <p>Coders</p>
            <p className="text-orange-400">Gym</p>
          </div>
          {/* Menu section */}
          <div className="hidden md:block items-center">
            <ul className="flex items-center gap-6 text-gray-600">
              {navBarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a href={item.link}>{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Icons section */}
          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-orange-400 hover:text-white rounded-full p-2 duration-200">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-orange-400 hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartThin />
            </button>
            <button className="hover:bg-orange-400 text-orange-400 font-semibold hover:text-white rounded-md border-2 border-orange-400 px-6 py-2 duration-200 hidden md:block">
              Login
            </button>
          </div>
          {/* Mobile hamburger Menu section */}
          <div
            className="md:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      {/* Mobile or responsive sidebar section */}
      <ResponsiveMenu open={open} />
    </>
  );
}

export default Navbar;
