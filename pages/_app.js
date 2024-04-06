import { Fragment } from "react";
import Head from "next/head";
import "./global.css";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Design Task - APPSCRIPT</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
