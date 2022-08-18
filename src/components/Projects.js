import { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectSliderProps } from "../sliderProps";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
import DetailsPopup1 from "./popup/DetailsPopup1";
const Projects = () => {
  useEffect(() => {
    dataImage();
  }, []);
  const [detailsPopup, setDetailsPopup] = useState(false);
  const [detailsPopup1, setDetailsPopup1] = useState(false);

  return (
    <Fragment>
      <DetailsPopup close={() => setDetailsPopup(false)} open={detailsPopup} />
      <DetailsPopup1 close={() => setDetailsPopup1(false)} open={detailsPopup1} />
      <div className="orido_tm_section" id="portfolio">
        <div className="orido_tm_portfolio">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Look at my
                  <br />
                  recent projects
                </span>
              </h3>
            </div>
            <div className="portfolio_list">
              <Swiper
                {...projectSliderProps}
                className="owl-carousel gallery_zoom"
              >
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/portfolio/pronedrone.webp" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/pronedrone.webp"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Website</span>
                      <h3 className="title">
                        <span>Pro0ne Drones</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link details_link c-pointer"
                      onClick={() => setDetailsPopup(true)}
                    />
                  </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/portfolio/LeSwan.png" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/LeSwan.png"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Website</span>
                      <h3 className="title">
                        <span>LeSwan</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link details_link c-pointer"
                      onClick={() => setDetailsPopup(true)}
                    />
                  </div>
                </SwiperSlide> */}
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/portfolio/Hbo.webp" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/Hbo.webp"
                      />
                    </div>
                    <div className="details">
                      <span className="category">App</span>
                      <h3 className="title">
                        <span>HBO</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link details_link c-pointer"
                      onClick={() => setDetailsPopup1(true)}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              <a className="prev_button" href="#">
                <img className="svg" src="img/svg/prev.svg" alt="" />
              </a>
              <a className="next_button" href="#">
                <img className="svg" src="img/svg/next.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Projects;
