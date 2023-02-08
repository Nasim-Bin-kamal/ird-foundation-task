import React from "react";
import { arrowRight, workoutImage } from "@/assets";
import Image from "next/image";
import Button from "./Button";
import styles from "@/styles/styles";

const Workout = () => {
  return (
    <div
      className={`flex md:flex-row flex-col-reverse gap-x-28  gap-y-12 md:gap-y-0 ${styles.paddingY} px-6 md:px-16`}
    >
      <div className="object-contain">
        <Image src={workoutImage} alt="image" />
      </div>
      <div className="">
        <h2 className="text-[#262524] font-bold md:font-normal text-[28px] md:text-[46px]">
          Best full body <br className="sm:block hidden" /> workout to lose fat
        </h2>
        <p className={`${styles.paragraph} py-[30px] max-w-[553px]`}>
          Exercise is a very important need for our body. Health and fitness
          will be obtained if you can do regular exercise and run a healthy
          routine. Even at home we still have to be diligent in exercising,
          either alone or with your friends at home.
        </p>
        <Button icon={arrowRight} />
      </div>
    </div>
  );
};

export default Workout;
