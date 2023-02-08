import styles from "@/styles/styles";
import React from "react";
import Button from "./Button";
import { arrow, brands, caretRight, heroImage } from "../assets";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={` grid grid-cols-1 lg:grid-cols-2  ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}
      >
        <div>
          <h1 className="text-[#262524] text-[56px] font-bold leading-[73px] not-italic">
            Healthy in side <br className="sm:block hidden" />{" "}
            <span className="text-[#8382EB]">fresh</span> out side
          </h1>
          <p className="text-base font-normal text-[#262524] opacity-6 leading-[28px]">
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine.
          </p>
          <div className={`flex justify-start items-center gap-x-9`}>
            <Button styles="" icon={caretRight} />
            <button
              className={`${styles.flexBetween} my-button bg-white text-base px-5 py-4`}
            >
              <Image className="mr-4" src={arrow} alt="arrow" />
              Learn More
            </button>
          </div>
          <div className="pt-10">
            <p className="text-[#262524] text-base font-normal">Brands:</p>
            <Image src={brands} alt="brands" />
          </div>
        </div>
      </div>
      <div>
        <Image src={heroImage} alt="image" />
      </div>
    </section>
  );
};

export default Hero;
