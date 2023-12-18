import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // Import the navigation module
// import "swiper/css/lazy"; // Import the lazy loading module (optional)
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

const Brands = () => {
  return (
    <div className="mb-10">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        navigation={false}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-center">
            <img src="/Images/brand1.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img src="/Images/brand3.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img src="/Images/brand4.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img src="/Images/brand2.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img src="/Images/brand1.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img src="/Images/brand3.png" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Brands;
