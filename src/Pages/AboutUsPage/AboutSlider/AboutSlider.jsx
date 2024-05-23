import style from "./about_slider.module.scss";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./about_slider.scss";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
const global_path_server = process.env.REACT_APP_STORAGE_SERVER;
const AboutSlider = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const renderSlider = () => {
    return data?.map((item) => {
      return (
        <SwiperSlide key={item.id}>
          <img src={global_path_server + item.slider_img} alt="slider" />
          <p>{item.slider_text}</p>
        </SwiperSlide>
      );
    });
  };

  const renderSecondSlide = () => {
    return data?.map((item) => {
      return (
        <SwiperSlide key={item.id}>
          <p className="history">
            <div className="circle"></div>
            {item.history}
          </p>
        </SwiperSlide>
      );
    });
  };

  return (
    <div className={`${style.about_slide} `}>
      <div className={`${style.about_slide__wrapper} container`}>
        <h2>Our history</h2>
        <div className="slider__wrapper">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className={"mySwiperAbout2"}
          >
            {renderSlider()}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={data?.length}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className={"mySwiperAbout"}
            direction={"vertical"}
          >
            {renderSecondSlide()}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutSlider;
