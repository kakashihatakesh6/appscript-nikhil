import { Fragment } from "react";
import Head from "next/head";
import "./global.css";
import Footer from "../components/footer";
import Header from "../components/header";

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
      <Header />
      <Component {...pageProps} />

    </Fragment>
  );
}

export default MyApp;
