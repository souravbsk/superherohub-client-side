import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
const HeroSlider = () => {
  return (
    <div className="">
      <Swiper navigation={true} autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} loop={true} modules={[Autoplay, Navigation]} className="mySwiper">
        <SwiperSlide>
            <img className="h-[650px] w-full object-fill object-top"  src="https://i.ibb.co/Bwkq0BV/banner6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="h-[650px] w-full object-fill object-top"  src="https://i.ibb.co/gJcyv4b/banner5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="h-[650px] w-full object-fill object-top"  src="https://i.ibb.co/XLGcVVY/banner7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="h-[650px] w-full object-fill object-top"  src="https://i.ibb.co/PmyTrw7/banner3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="h-[650px] w-full object-fill object-top"  src="https://i.ibb.co/k0TKHdY/banner4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="h-[650px] w-full object-fill object-top"  src="https://i.ibb.co/S720nX1/banner1.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
