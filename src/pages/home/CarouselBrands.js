import { Swiper, SwiperSlide } from "swiper/react";

import Brand from "./Brand";

import aux from "../../assets/image/jpg/brands/color/AUX-logo.png";
import daikin from "../../assets/image/jpg/brands/color/daikin.png";
import fujitsu from "../../assets/image/jpg/brands/color/fuji.png";
import gree from "../../assets/image/jpg/brands/color/gree.png";
import haier from "../../assets/image/jpg/brands/color/haier-logo.png";
import hitachi from "../../assets/image/jpg/brands/color/hitachi.png";
import LG from "../../assets/image/jpg/brands/color/LG.png";
import kaisai from "../../assets/image/jpg/brands/color/logo_kaisai.png";
import mdv from "../../assets/image/jpg/brands/color/mdv.png";
import mitsu from "../../assets/image/jpg/brands/color/Mitsu.png";
import serva from "../../assets/image/jpg/brands/color/serva.png";

import "swiper/css";
import "../../assets/style/sass/CarouselBrands.sass";

import { Autoplay } from "swiper";

const CarouselBrands = () => {
  return (
    <aside className="carouselBrands">
      <div className="brands__header">
        <h1>Nasi Partnerzy</h1>
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
