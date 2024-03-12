import "@/styles/globals.css";
import "@/styles/icons.css";
import type { AppProps } from "next/app";
import {Layouts} from "@/components";
import {Lato, Quicksand} from "next/font/google";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "react-toastify/dist/ReactToastify.min.css"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ToastContainer} from "react-toastify";


const quicksand = Quicksand({
    subsets: ["latin"]
})
const lato = Lato({
    subsets: ["latin"],
    weight: ["100", "300"],
    variable: "--font-lato"
})
export default function App({ Component, pageProps }: AppProps) {
    const queryClint = new QueryClient({
        defaultOptions:{
            queries:{
                refetchOnWindowFocus: false,
                refetchIntervalInBackground: false,
                retry: false
            }
        }
    })
  return (
      <>
          <style jsx global>{`
              html {
                  font-family: ${quicksand.style.fontFamily};
                  --font-lato : ${lato.style.fontFamily}, sans-serif;
              }
          `}</style>
          <QueryClientProvider  client={queryClint}>
              <Layouts>
                  <Component {...pageProps}/>
                  <ToastContainer autoClose={false} hideProgressBar={false} closeOnClick={true} draggable={false} theme={"light"} position={"top-right"}/>
              </Layouts>
          </QueryClientProvider>
      </>
  );
}
