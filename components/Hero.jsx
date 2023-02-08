import styles from "@/styles/styles";
import React from "react";
import Button from "./Button";
import { arrow, brands, caretRight, heroImage } from "../assets";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className={`grid grid-cols-1 lg:grid-cols-2 gap-y-10 md:gap-y-0  ${styles.paddingY}`}
    >
      <div className={`flex-1 ${styles.flexStart} flex-col px-6 md:px-16 `}>
        <div>
          <h1 className="text-primary text-[28px] md:text-[56px] font-bold leading-[39px] md:leading-[73px] not-italic">
            Healthy in side <br className="block md:hidden" />{" "}
            <span className="text-[#8382EB]">fresh</span> out side
          </h1>
          <p className={`${styles.paragraph} py-2`}>
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine.
          </p>
          <div className={`flex justify-start items-center gap-x-6 md:gap-x-9`}>
            <Button icon={caretRight} />
            <button
              // type="button"
              className={`${styles.flexBetween} font-poppins my-button bg-white text-xs md:text-base lg:text-base px-3 md:px-4 py-3 md:py-4 `}
            >
              <Image className="mr-4" src={arrow} alt="arrow" />
              Learn More
            </button>
          </div>
          <div className="pt-6">
            <p className=" font-poppins text-[#262524] text-base font-normal py-2">
              Brands:
            </p>
            <Image src={brands} alt="brands" />
          </div>
        </div>
      </div>
      <div className="object-contain ">
        <Image src={heroImage} alt="image" />
      </div>
    </section>
  );
};

export default Hero;
