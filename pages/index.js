import dynamic from "next/dynamic";
import { useEffect } from "react";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import ExpertAreas from "../src/components/ExpertAreas";
import Feedback from "../src/components/Feedback";
import Home from "../src/components/Home";
import Services from "../src/components/Services";
import CopyRight from "../src/layouts/CopyRight";
import Header from "../src/layouts/Header";
import Layout from "../src/layouts/Layout";
import MobileMenu from "../src/layouts/MobileMenu";
import Mouse from "../src/layouts/Mouse";
import ProgressBar from "../src/layouts/ProgressBar";
import { hotjar } from "react-hotjar";
import ReactGA from "react-ga";
import LazyLoad from "react-lazyload";

const Projects = dynamic(() => import("../src/components/Projects"), {
  ssr: false,
});
const Partners = dynamic(() => import("../src/components/Partners"), {
  ssr: false,
});
{
}

const Index = () => {
  useEffect(() => {
    hotjar.initialize(2439022, 6);
  }, []);
  return (
    <Layout>
      <MobileMenu />
      <Header />
      <Home />
      {/* <Partners /> */}
      <About />
      <LazyLoad offset={50}>
        <ExpertAreas />
      </LazyLoad>

      {/* <Services /> */}
      <LazyLoad offset={100}>
        <Projects />
      </LazyLoad>
      {/* <Feedback /> */}
      <LazyLoad offset={50}>
        <Blog />
      </LazyLoad>
      <Contact />
      <CopyRight />
      <Mouse />
      <ProgressBar />
    </Layout>
  );
};
export default Index;
