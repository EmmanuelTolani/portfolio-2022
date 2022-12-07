import { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectSliderProps } from "../sliderProps";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
import DetailsPopup1 from "./popup/DetailsPopup1";
import DetailsPopup2 from "./popup/DetailsPopup2";
import DetailsPopup3 from "./popup/DetailsPopup3";
import Image from "next/image";
const Projects = () => {
  useEffect(() => {
    dataImage();
  }, []);
  const [detailsPopup, setDetailsPopup] = useState(false);
  const [detailsPopup1, setDetailsPopup1] = useState(false);
  const [detailsPopup2, setDetailsPopup2] = useState(false);
  const [detailsPopup3, setDetailsPopup3] = useState(false);
  return (
    <Fragment>
      <DetailsPopup close={() => setDetailsPopup(false)} open={detailsPopup} />
      <DetailsPopup1
        close={() => setDetailsPopup1(false)}
        open={detailsPopup1}
      />
      <DetailsPopup2
        close={() => setDetailsPopup2(false)}
        open={detailsPopup2}
      />
      <DetailsPopup3
        close={() => setDetailsPopup3(false)}
        open={detailsPopup3}
      />
      <div className="orido_tm_section" id="portfolio">
        <div className="orido_tm_portfolio">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Look at my
                  <br />
                  Portfolio
                </span>
              </h3>
            </div>
            <div className="portfolio_list">
              <Swiper
                slidesPerView={1}
                {...projectSliderProps}
                className="owl-carousel gallery_zoom"
              >
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <Image
                        src="/img/portfolio/pronedrone.webp"
                        alt="prone drones project"
                        height={400}
                        width={600}
                        objectFit="contain"
                      />
                      <div
                        className="main"
                        data-img-url="/img/portfolio/pronedrone.webp"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Landing Page</span>
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
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <Image
                        src="/img/portfolio/shopify-email.png"
                        alt="Shopify Transactional Email"
                        height={400}
                        width={600}
                        objectFit="contain"
                      />
                      <div
                        className="main"
                        data-img-url="/img/portfolio/shopify-email.png"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Newsletter Email</span>
                      <h3 className="title">
                        <span>Shopify Newsletter</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link details_link c-pointer"
                      href="/html/shopify-email.html"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <Image
                        src="/img/portfolio/papa-johns.png"
                        alt="Papa Johns Promo"
                        height={400}
                        width={600}
                        objectFit="contain"
                      />
                      <div
                        className="main"
                        data-img-url="/img/portfolio/papa-johns.png"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Promotional Email</span>
                      <h3 className="title">
                        <span>Papa Johns Email</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link details_link c-pointer"
                      href="/html/papa-johns.html"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <Image
                        src="/img/portfolio/expedia-email.png"
                        alt="Expedia Transactional Email"
                        height={400}
                        width={600}
                        objectFit="contain"
                      />
                      <div
                        className="main"
                        data-img-url="/img/portfolio/expedia-email.png"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Transactional Email</span>
                      <h3 className="title">
                        <span>Expedia Transactional Email</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link details_link c-pointer"
                      href="/html/expedia-transac.html"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <Image
                        src="/img/portfolio/leswan.png"
                        alt="LeSwan Restuarant project"
                        height={400}
                        width={600}
                        objectFit="contain"
                      />
                      <div
                        className="main"
                        data-img-url="/img/portfolio/leswan.png"
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
                      onClick={() => setDetailsPopup2(true)}
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <Image
                        src="/img/portfolio/Hbo.webp"
                        alt="Hbo streaming platform project"
                        height={400}
                        width={600}
                        objectFit="contain"
                      />
                      <div
                        className="main"
                        data-img-url="/img/portfolio/Hbo.webp"
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
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <Image
                        src="/img/portfolio/anki.png"
                        alt="Anki project"
                        height={400}
                        width={600}
                        objectFit="contain"
                      />
                      <div
                        className="main"
                        data-img-url="/img/portfolio/anki.png"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Website</span>
                      <h3 className="title">
                        <span>Anki</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link details_link c-pointer"
                      onClick={() => setDetailsPopup3(true)}
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              <a className="prev_button" href="#">
                <img
                  className="svg"
                  src="img/svg/prev.svg"
                  alt="previous button"
                />
              </a>
              <a className="next_button" href="#">
                <img className="svg" src="img/svg/next.svg" alt="next button" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Projects;
