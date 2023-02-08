import { menuIcon } from "@/assets";
import navLinks from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 md:px-10 justify-between items-center navbar">
      <p className=" text-[#6765F0] w-[141px] h-[38px] absoulte">
        <span className="text-white bg-logo px-2 py-1 ">Gym</span> baran
      </p>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={index}
            className="font-poppins cursor-pointer text-[16px] text-black font-normal mr-10"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <li>
          <button className="font-poppins my-button text-white bg-[#264373] py-3 px-9">
            Log in
          </button>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center relative z-10">
        <Image
          className="w-[24px] h-[24px] object-contain "
          src={menuIcon}
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          }  p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl `}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={index}
                className={`font-poppins font-normal cursor-pointer text-base text-primary mb-4`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li>
              <button className="font-poppins my-button text-white bg-[#264373] py-2 px-4 ">
                Log in
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
