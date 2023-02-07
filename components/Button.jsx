import { rightArrow } from "@/assets";
import Image from "next/image";
import React from "react";

const Button = ({ styles, icon }) => {
  return (
    <button
      type="button"
      className={`${styles} bg-[#264373] text-white px-6 py-4 my-6 my-button flex justify-between items-center`}
    >
      Get Started{" "}
      <Image className="ml-20" src={icon} height={26} width={26} alt={icon} />
    </button>
  );
};

export default Button;
