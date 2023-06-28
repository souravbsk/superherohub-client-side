import React from "react";
import {Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
const HeroSlider = () => {
  return (
    <div className="pt-8 bg-[#020F22]">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        pagination={true}
        modules={[EffectCoverflow,Autoplay, Pagination,Navigation]}
        className="mySwiper "
      >
        <SwiperSlide className="relative card rounded-3xl  rounded-bl-none rounded-tr-none group  overflow-hidden  bg-transparent backdrop-blur-3xl shadow-2xl border-2 border-[#020F23] ">
            <img className="h-[500px]    w-full object-fill  object-top"  src="https://i.ibb.co/vqQSKcG/pngwing-com-12-1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="relative card rounded-3xl  rounded-bl-none rounded-tr-none group  overflow-hidden  bg-transparent backdrop-blur-3xl shadow-2xl border-2 border-[#020F23]  ">
            <img className="h-[500px]   w-full object-fill  object-top"  src="https://i.ibb.co/QKRTpQQ/pngwing-com-13-1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide  className="relative card rounded-3xl  rounded-bl-none rounded-tr-none group  overflow-hidden  bg-transparent backdrop-blur-3xl shadow-2xl border-2 border-[#020F23]  ">
            <img className="h-[500px]   w-full object-fill  object-top"  src="https://i.ibb.co/8Y12ngH/pngwing-com-15-1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="relative card rounded-3xl  rounded-bl-none rounded-tr-none group  overflow-hidden  bg-transparent backdrop-blur-3xl shadow-2xl border-2 border-[#020F23]  ">
            <img className="h-[500px]   w-full object-fill  object-top"  src="https://i.ibb.co/dWxWbzX/pngwing-com-14-1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="relative card rounded-3xl  rounded-bl-none rounded-tr-none group  overflow-hidden  bg-transparent backdrop-blur-3xl shadow-2xl border-2 border-[#020F23]  ">
            <img className="h-[500px]   w-full object-fill  object-top"  src="https://i.ibb.co/cgkJSHq/Batman-Comics-Transparent-PNG.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="relative card rounded-3xl  rounded-bl-none rounded-tr-none group  overflow-hidden  bg-transparent backdrop-blur-3xl shadow-2xl border-2 border-[#020F23]  ">
            <img className="h-[500px]   w-full object-fill  object-top"  src="https://i.ibb.co/JxtCvJk/spider-man-5998998-1-1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="relative card rounded-3xl  rounded-bl-none rounded-tr-none group  overflow-hidden  bg-transparent backdrop-blur-3xl shadow-2xl border-2 border-[#020F23]  ">
            <img className="h-[500px]   w-full object-fill  object-top"  src="https://i.ibb.co/9v78wfp/Star-Wars-Free-PNG.png" alt="" />
        </SwiperSlide>
        <SwiperSlide className="relative card rounded-3xl  rounded-bl-none rounded-tr-none group  overflow-hidden  bg-transparent backdrop-blur-3xl shadow-2xl border-2 border-[#020F23]  ">
            <img className="h-[500px]   w-full object-fill  object-top"  src="https://i.ibb.co/m8rDBvD/Justice-League-Aquaman-Transparent-PNG.png" alt="" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default HeroSlider;
