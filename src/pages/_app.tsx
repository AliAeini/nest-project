import "@/styles/globals.css";
import "@/styles/icons.css";
import type { AppProps } from "next/app";
import {Layouts} from "@/components";
import {Lato, Quicksand} from "next/font/google";
import "swiper/css";
import "swiper/css/autoplay"

const quicksand = Quicksand({
    subsets: ["latin"]
})
const lato = Lato({
    subsets: ["latin"],
    weight: ["100", "300"],
    variable: "--font-lato"
})
export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
          <style jsx global>{`
              html {
                  font-family: ${quicksand.style.fontFamily};
                  --font-lato : ${lato.style.fontFamily}, sans-serif;
              }
          `}</style>
          <Layouts>
              <Component {...pageProps} />
          </Layouts>
      </>
  );
}
