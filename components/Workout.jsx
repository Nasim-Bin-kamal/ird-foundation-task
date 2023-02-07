import React from "react";
import { arrowRight, workoutImage } from "@/assets";
import Image from "next/image";
import Button from "./Button";
import styles from "@/styles/styles";

const Workout = () => {
  return (
    <div className={` flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className="mr-16">
        <Image src={workoutImage} alt="image" />
      </div>
      <div className="">
        <h2 className="text-[#262524] font-normal text-[46px] leading-[73px]">
          Best full body <br className="sm:block hidden" /> workout to lose fat
        </h2>
        <p className="py-[30px] text-base text-[#262524] opacity-50 font-normal max-w-[553px]">
          Exercise is a very important need for our body. Health and fitness
          will be obtained if you can do regular exercise and run a healthy
          routine. Even at home we still have to be diligent in exercising,
          either alone or with your friends at home.
        </p>
        <Button styles="" icon={arrowRight} />
      </div>
    </div>
  );
};

export default Workout;
