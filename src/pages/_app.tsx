import "@/styles/globals.css";
import "@/styles/icons.css";
import type { AppProps } from "next/app";
import {Layouts} from "@/components";
import {Lato, Quicksand} from "next/font/google";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "react-toastify/dist/ReactToastify.min.css"
import {HydrationBoundary, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ToastContainer} from "react-toastify";
import {useState} from "react";
import {ModalContextProvider} from "@/store/ModalContext";
import {AuthContext, AuthContextProvider} from "@/store/AuthContext";
import {CardContextProvider} from "@/store/CardContext";


const quicksand = Quicksand({
    subsets: ["latin"]
})
const lato = Lato({
    subsets: ["latin"],
    weight: ["100", "300"],
    variable: "--font-lato"
})
export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(()=> new QueryClient({
        defaultOptions:{
            queries:{
                refetchOnWindowFocus: false,
                refetchIntervalInBackground: false,
                retry: false,
                staleTime: 60 * 1000
            }
        }
    }))
  return (
      <>
          <style jsx global>{`
              html {
                  font-family: ${quicksand.style.fontFamily};
                  --font-lato : ${lato.style.fontFamily}, sans-serif;
              }
          `}</style>
          <QueryClientProvider client={queryClient}>
              <CardContextProvider>
                  <HydrationBoundary state={pageProps.dehydratedState}>
                      <AuthContextProvider>
                          <ModalContextProvider>
                              <Layouts>
                                  <Component {...pageProps}/>
                                  <ToastContainer autoClose={2000} hideProgressBar={true} closeOnClick={true} draggable={false} theme={"light"} position={"top-right"}/>
                              </Layouts>
                          </ModalContextProvider>
                      </AuthContextProvider>
                  </HydrationBoundary>
              </CardContextProvider>
          </QueryClientProvider>
      </>
  );
}
