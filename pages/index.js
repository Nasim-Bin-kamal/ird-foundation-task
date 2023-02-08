import Head from "next/head";
import { HealthInfo, Hero, Navbar, StaticBar, Workout } from "@/components";
import styles from "@/styles/styles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gym Baran</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[#FFFFFF] w-full overflow-hidden">
        <div className="z-1 purple_gradient" />
        <div className="z-0 yellow_gradient" />
        <div className="z-2 light_purple_gradient" />
        <div className="mx-5 relative z-5  ">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
          {/* <div>
            <div className={`${styles.boxWidth}`}>
              <Hero />
            </div>
          </div> */}

          {/* <HealthInfo /> */}
          {/* <StaticBar /> */}
          {/* <Workout /> */}
        </div>
      </main>
    </>
  );
}
