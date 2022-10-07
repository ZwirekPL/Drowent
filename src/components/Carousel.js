import { Swiper, SwiperSlide } from "swiper/react";
import Review from "./Review"


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/keyboard"
import "swiper/css/navigation";
import "../style/sass/Carousel.sass";

import { Keyboard, Pagination, Navigation } from "swiper";


const Carousel = () => {
    return (
      <div className="carousel">
        <Swiper
          navigation={true}
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
          clickable: true,
          }}
          keyboard= {true}
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
          modules={[Pagination, Keyboard, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><Review/></SwiperSlide>
          <SwiperSlide><Review/></SwiperSlide>
          <SwiperSlide><Review/></SwiperSlide>
          <SwiperSlide><Review/></SwiperSlide>
          <SwiperSlide><Review/></SwiperSlide>
          <SwiperSlide><Review/></SwiperSlide>
          <SwiperSlide><Review/></SwiperSlide>
          <SwiperSlide><Review/></SwiperSlide>
          <SwiperSlide><Review/></SwiperSlide>
        </Swiper>
        
      </div>
    );
  }
  
  export default Carousel;