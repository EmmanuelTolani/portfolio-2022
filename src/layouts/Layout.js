import Head from "next/head";
import { Fragment, useEffect } from "react";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import {
  dataImage,
  hashtag_,
  imgToSVG,
  scrollSection,
  stickyNav,
} from "../utilits";
// import PreLoader from "./PreLoader";
const Layout = ({ children }) => {
  useEffect(() => {
    imgToSVG();
    dataImage();
    hashtag_();
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scrollSection);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Emmanuel Tolani | Portfolio</title>
        <link rel="apple-touch-icon" sizes="180x180" href="favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="favicon_io/site.webmanifest" />
      </Head>
      {/* <PreLoader /> */}
      <ImageView />
      <VideoPopup />
      <div className="orido_tm_all_wrap" data-magic-cursor="show">
        {children}
      </div>
    </Fragment>
  );
};
export default Layout;
