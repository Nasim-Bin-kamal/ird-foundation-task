import navLinks from "@/constants";
import React from "react";

const Navbar = () => {
  return (
    <nav className="px-10 w-full flex py-6 justify-end items-center ">
      <p className="text-[#6765F0] text-[20px] w-[141px] h-[38px] absoulte ">
        <span className="text-white bg-[#6765F0]  rounded-[10px] px-2 py-1">
          Gym
        </span>{" "}
        Baran
      </p>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className="cursor-pointer text-[16px] text-black font-normal mr-10"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <button className="bg-[#264373] text-base text-white font-normal rounded-[10px] py-3 px-9">
        Log in
      </button>
    </nav>
  );
};

export default Navbar;
