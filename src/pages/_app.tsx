import "@/styles/globals.css";
import "@/styles/icons.css";
import type { AppProps } from "next/app";
import {Layouts} from "@/components/layouts/Layouts";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
  );
}
