import { arrowRight } from "@/assets";
import { stats } from "@/constants";
import styles from "@/styles/styles";
import Image from "next/image";
import React from "react";

const StaticBar = () => {
  return (
    <div className={`${styles.paddingY} px-6 md:px-16 my-8`}>
      <div
        className={`${styles.flexStart} flex-col md:flex-row gap-x-20 gap-y-8 
        md:gap-y-0 bg-blue-gradient px-[28px] md:px-[80px] py-[34px] md:py-[87px]`}
      >
        {stats.map((stat, index) => (
          <div key={index} className={`${styles.flexBetween}`}>
            <div className="flex justify-center items-center mr-7 p-[25px] bg-[#ffffff] backdrop-blur-[32px] opacity-20 rounded-[20px]">
              <Image
                className=""
                src={stat.icon}
                alt="icon"
                width={50}
                height={50}
              />
            </div>
            <div>
              <p className="font-poppins text-white font-bold text-base md:text-[20px] leading-[28px]">
                {stat.title}
              </p>
              <button
                className={` text-base text-white font-normal opacity-50 hover:opacity-80 leading-[28px] ${styles.flexBetween} gap-4`}
              >
                Learn more
                <Image
                  src={arrowRight}
                  alt="arrowRight"
                  width={15}
                  height={15}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StaticBar;
