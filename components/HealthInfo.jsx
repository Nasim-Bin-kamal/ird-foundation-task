import styles from "@/styles/styles";
import React from "react";

const HealthInfo = () => {
  return (
    <div
      className={`flex justify-between items-start md:items-center  flex-col md:flex-row  ${styles.paddingY} px-6 md:px-16 gap-10`}
    >
      <h3 className="text-[#262524] font-bold md:font-normal text-[28px] md:text-[46px]">
        Healthy in side <br /> fresh out side
      </h3>
      <p className={`${styles.paragraph} max-w-[674px]`}>
        Exercise is a very important need for our body. Health and fitness will
        be obtained if you can do regular exercise and run a healthy routine.
        Even at home we still have to be diligent in exercising, either alone or
        with your friends at home. Healthy life makes you more excited to live
        the day
      </p>
    </div>
  );
};

export default HealthInfo;
