import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Brand from "./PhotoHeadSection";

import klima from "../assets/image/jpg/headerSections/color/klima.jpg";
import hala from "../assets/image/jpg/headerSections/color/hala.jpg";
import pompaciepla from "../assets/image/jpg/headerSections/color/pompaciepla.jpg";
import klapa from "../assets/image/jpg/headerSections/color/klapa.jpg";

import "../assets/style/sass/HeaderSections.sass";

function HeaderSections() {
  return (
    <header className="headerSections">
      <Swiper
        reverseDirection={true}
        slidesPerView={1}
        spaceBetween={0}
        speed={4000}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        modules={[Autoplay]}
        className="brands"
      >
        <SwiperSlide>
          <Brand src={klima} alt="photo of air conditioner" />
        </SwiperSlide>
        <SwiperSlide>
          <Brand src={hala} alt="photo of ventilation in the storage" />
        </SwiperSlide>
        <SwiperSlide>
          <Brand src={pompaciepla} alt="photo of heat pump" />
        </SwiperSlide>
        <SwiperSlide>
          <Brand src={klapa} alt="photo of the fire damper" />
        </SwiperSlide>
      </Swiper>
    </header>
  );
}

export default HeaderSections;
