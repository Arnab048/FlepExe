import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import PrimaryButton from "./primaryButton";

const HeroSwipper = () => {
  const slides = [
    {
      imagePath: "/Images/hero1.png",
      smallHead: "THINK . INNOVATE . CODE",
      slogan1: "WEBSITE",
      slogan2: "DEVELOPMENT",
      btnText: "EXPLORE THE WEB",
      btnLink: "#",
    },
    {
      imagePath: "/Images/hero2.png",
      smallHead: "OPTIMIZE . DEPLOY . MAINTENACE",
      slogan1: "SOFTWARE",
      slogan2: "DEVELOPMENT",
      btnText: "START CODING",
      btnLink: "#",
    },
    {
      imagePath: "/Images/hero3.png",
      smallHead: "DESIGN . SHAPE . ADMIRE",
      slogan1: "GRAPHICS",
      slogan2: "DESIGNING",
      btnText: "LET'S PAINT",
      btnLink: "#",
    },
    {
      imagePath: "/Images/hero4.png",
      smallHead: "RESEARCH . RETHINK . EXCELLENCE",
      slogan1: "DIGITAL",
      slogan2: "MARKETING",
      btnText: "SET THE CROWD",
      btnLink: "#",
    },
  ];

  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
        slidesPerView={1}
        slidesPerGroup={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1200}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[100vh] w-full"
              style={{
                backgroundImage: `url(${slide.imagePath})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <div className="h-full w-full flex items-center justify-center ">
                <div className="flex flex-col items-center  gap-y-10">
                  <motion.div
                    className=" text-pink-400 text-3xl "
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    {slide.smallHead}
                  </motion.div>
                  <motion.div
                    className=" text-white text-9xl font-bold"
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                  >
                    {slide.slogan1}
                  </motion.div>
                  <motion.div
                    className=" text-white text-9xl font-bold"
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                  >
                    {slide.slogan2}
                  </motion.div>
                  <motion.div
                    className=""
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <PrimaryButton text={slide.btnText} href={slide.btnLink} />
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSwipper;
