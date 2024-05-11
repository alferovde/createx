import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
const global_path_server = "http://127.0.0.1:8000/storage/";
const SlingleProjectSlider = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const renderSlider = () => {
    return data?.map((item) => {
      return (
        <SwiperSlide>
          <img src={global_path_server + item.img} alt="slider" />
        </SwiperSlide>
      );
    });
  };

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={"mySwiperSingleProject2"}
      >
        {renderSlider()}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={"mySwiperSingleProject"}
      >
        {renderSlider()}
      </Swiper>
    </>
  );
};

export default SlingleProjectSlider;
