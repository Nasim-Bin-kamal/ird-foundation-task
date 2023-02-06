import navLinks from "@/constants";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="w-[141px] h-[38px] absoulte">
        <p className="text-[#6765F0] text-[20px]">
          <span className="text-white bg-[#6765F0]  rounded-lg px-2 py-1 leading-tight">
            Gym
          </span>{" "}
          Baran
        </p>
        <ul>
          {navLinks.map((nav, index) => (
            <li key={nav.id}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
