import { Swiper, SwiperSlide } from "swiper/react";

import Brand from "./Brand";

import aux from "../image/jpg/brands//AUX-logo.png";
import daikin from "../image/jpg/brands/daikin.png";
import fujitsu from "../image/jpg/brands/fuji.png";
import gree from "../image/jpg/brands/gree.png";
import haier from "../image/jpg/brands/haier-logo.png";
import hitachi from "../image/jpg/brands/hitachi.png";
import LG from "../image/jpg/brands/LG.png";
import kaisai from "../image/jpg/brands/logo_kaisai.png";
import mdv from "../image/jpg/brands/mdv.png";
import mitsu from "../image/jpg/brands/Mitsu.png";
import serva from "../image/jpg/brands/serva.png";

import "swiper/css";
import "../style/sass/CarouselBrands.sass";

import { Autoplay } from "swiper";

const CarouselBrands = () => {
  return (
    <aside className="carouselBrands">
      <div className="brands__header">
        <h2>Nasi Partnerzy</h2>
      </div>
      <Swiper
        reverseDirection={true}
        slidesPerView={1}
        spaceBetween={10}
        speed={3000}
        loop={true}
        autoplay={{
          delay: 0.01,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="brands"
      >
        <SwiperSlide>
          <Brand src={aux} alt="AUX logo" />
        </SwiperSlide>
        <SwiperSlide>
          <Brand src={daikin} alt="Daikin logo" />
        </SwiperSlide>
        <SwiperSlide>
          <Brand src={fujitsu} alt="Fujitsu logo" />
        </SwiperSlide>
        <SwiperSlide>
          <Brand src={gree} alt="Gree logo" />
        </SwiperSlide>
        <SwiperSlide>
          <Brand src={haier} alt="Haier logo" />
        </SwiperSlide>
        <SwiperSlide>
          <Brand src={hitachi} alt="Hitachi logo" />
        </SwiperSlide>
        <SwiperSlide>
          <Brand src={LG} alt="Lg logo" />
        </SwiperSlide>
        <SwiperSlide>
          <Brand src={kaisai} alt="Kaisai logo" />
        </SwiperSlide>
        <SwiperSlide>
          <Brand src={mdv} alt="Mdv logo" />
        </SwiperSlide>
        <SwiperSlide>
          <Brand src={mitsu} alt="Mitsubishi logo" />
        </SwiperSlide>
        <SwiperSlide>
          <Brand src={serva} alt="Serva logo" />
        </SwiperSlide>
      </Swiper>
    </aside>
  );
};

export default CarouselBrands;
