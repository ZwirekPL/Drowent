import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Brand from "./PhotoHeadSection"

import klima from "../image/jpg/klima.jpg"
import hala from "../image/jpg/hala.jpg"
import pompaciepla from "../image/jpg/pompaciepla.jpg"
import klapa from "../image/jpg/klapa.jpg"






import "../style/sass/HeaderSections.sass";




function HeaderSections() {
    return (
        <div className="headerSections">
            <Swiper
                reverseDirection= {true}
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
                <SwiperSlide><Brand src={klima} alt="AUX logo" /></SwiperSlide>
                <SwiperSlide><Brand src={hala} alt="Daikin logo"/></SwiperSlide>
                <SwiperSlide><Brand src={pompaciepla} alt="Fujitsu logo"/></SwiperSlide>
                <SwiperSlide><Brand src={klapa} alt="Haier logo"/></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default HeaderSections;