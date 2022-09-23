import { Swiper, SwiperSlide } from "swiper/react";
import { partnersSliderProps } from "../sliderProps";
const partnersLogo = {
  light: [
    "img/svg/html5-brands.svg",
    "img/svg/js-brands.svg",
    "img/svg/css3-brands.svg",
    "img/svg/git-alt-brands.svg",
    "img/svg/php-brands.svg",
    "img/svg/figma.svg",
    "img/svg/database-solid.svg",
    // "img/partners/7.png",
    // "img/partners/8.png",
  ],
  dark: [
    "img/partners/light/1.png",
    "img/partners/light/2.png",
    "img/partners/light/3.png",
    "img/partners/light/4.png",
    "img/partners/light/5.png",
    "img/partners/light/6.png",
    "img/partners/light/7.png",
    "img/partners/light/8.png",
  ],
};
const Partners = ({ dark }) => {
  return (
    <div className="orido_tm_section">
      <div className="orido_tm_partners">
        <div className="container">
          <div className="partners_list">
            <Swiper {...partnersSliderProps} className="owl-carousel">
              {partnersLogo[dark ? "dark" : "light"].map((partnersLogo, i) => (
                <SwiperSlide className="item" key={i}>
                  <img src={partnersLogo} alt="" height={50} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Partners;
