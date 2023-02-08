import Image from "next/image";
import React from "react";

const Button = ({ styles, icon }) => {
  return (
    <button
      type="button"
      className={`${styles} bg-[#264373] text-white text-xs md:text-base px-4 md:px-6 py-3 md:py-4 my-6 my-button flex justify-start items-center`}
    >
      Get Started{" "}
      <Image
        className="ml-14 md:ml-20"
        src={icon}
        height={26}
        width={26}
        alt={icon}
      />
    </button>
  );
};

export default Button;
