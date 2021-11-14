import "../src/styles/globals.css";
import SimpleReactLightbox from "simple-react-lightbox";
import type { AppProps } from "next/app";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </React.StrictMode>
  );
}

export default MyApp;
