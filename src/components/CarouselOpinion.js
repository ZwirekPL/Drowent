import { Swiper, SwiperSlide } from "swiper/react";
import Opinion from "./Opinion";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import "swiper/css/navigation";

import "../assets/style/sass/CarouselOpinion.sass";

import { Autoplay, Keyboard, Pagination, Navigation } from "swiper";

const CarouselOpinion = () => {
  return (
    <aside className="carouselOpinion">
      <Swiper
        navigation={true}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        keyboard={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination, Keyboard, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Opinion />
        </SwiperSlide>
        <SwiperSlide>
          <Opinion />
        </SwiperSlide>
        <SwiperSlide>
          <Opinion />
        </SwiperSlide>
        <SwiperSlide>
          <Opinion />
        </SwiperSlide>
        <SwiperSlide>
          <Opinion />
        </SwiperSlide>
        <SwiperSlide>
          <Opinion />
        </SwiperSlide>
        <SwiperSlide>
          <Opinion />
        </SwiperSlide>
        <SwiperSlide>
          <Opinion />
        </SwiperSlide>
        <SwiperSlide>
          <Opinion />
        </SwiperSlide>
      </Swiper>
    </aside>
  );
};

export default CarouselOpinion;
