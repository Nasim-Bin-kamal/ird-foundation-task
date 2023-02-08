import "@/styles/globals.css";
import { Poppins } from "@next/font/google";
// import localFont from "@next/font/local";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// const sportingGrotesque = localFont({
//   src: "../public/fonts/SportingGrotesque-Regular.otf",
//   weight: ["400", "700"],
// });

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );
}
