import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";
import ReactGA from "react-ga";
const TRACKING_ID = "UA-196269208-1";
ReactGA.initialize(TRACKING_ID);
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head></Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
