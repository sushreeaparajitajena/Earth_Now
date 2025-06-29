import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../styles/OurWork.css";

import Pic1 from "../assets/Pic1.jpg";
import Pic4 from "../assets/Pic4.jpg";
import Pic3 from "../assets/Pic3.jpg";
import Pic5 from "../assets/Pic5.jpg";
import Pic7 from "../assets/Pic7.jpg";
import Pic8 from "../assets/Pic8.jpg";

const images = [Pic1, Pic3, Pic4, Pic5, Pic7, Pic8];

const ImageSlider = () => {
  return (
    <div className="slider-wrapper">
      <h1 className="slider-heading">Our Work</h1>
      <p className="slider-subheading">
        EarthNow, every step we take is for a better planet. Driven by passion and purpose, we create solutions that matter. Together, we’re building a sustainable future—one action at a time.
      </p>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        className="custom-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="zoom-slide">
            <img src={img} alt={`Slide ${index}`} className="slide-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
