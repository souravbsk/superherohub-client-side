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
            <img className="h-96 md:h-screen w-full  object-top"  src="https://i.ibb.co/Bwkq0BV/banner6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="h-96 md:h-screen w-full  object-top"  src="https://i.ibb.co/gJcyv4b/banner5.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="h-96 md:h-screen w-full  object-top"  src="https://i.ibb.co/jTM2cf3/ravi-palwe-EGJhk2-Gz-PMA-unsplash-1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="h-96 md:h-screen w-full  object-top"  src="https://i.ibb.co/PmyTrw7/banner3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="h-96 md:h-screen w-full  object-top"  src="https://i.ibb.co/k0TKHdY/banner4.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="h-96 md:h-screen w-full  object-top"  src="https://i.ibb.co/S720nX1/banner1.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
