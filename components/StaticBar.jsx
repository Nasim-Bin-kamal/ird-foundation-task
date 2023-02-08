import { arrowRight } from "@/assets";
import { stats } from "@/constants";
import styles from "@/styles/styles";
import Image from "next/image";
import React from "react";

const StaticBar = () => {
  return (
    <div className={`mx-10 my-32 bg-blue-gradient`}>
      <div className={`${styles.flexBetween} px-[85px] py-[87px]`}>
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex justify-between items-center gap-x-[30px]"
          >
            <div className="bg-[#ffffff] backdrop-blur-[32px] opacity-20 w-[100px]  h-[100px] rounded-[20px]">
              <Image
                className=""
                src={stat.icon}
                alt="icon"
                width={50}
                height={50}
              />
            </div>
            <div>
              <p className="pb-3 text-white font-bold text-[20px]">
                {stat.title}
              </p>
              <button
                className={`text-base text-white font-normal opacity-50 leading-[28px] ${styles.flexBetween} gap-6`}
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
