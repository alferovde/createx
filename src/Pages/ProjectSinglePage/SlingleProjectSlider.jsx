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
    if (data?.length) {
      return data?.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <img src={global_path_server + item.img} alt="slider" />
          </SwiperSlide>
        );
      });
    } else {
      return (
        <SwiperSlide>
          <h2>no image</h2>
        </SwiperSlide>
      );
    }
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
      {data?.length !== 0 ? (
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
      ) : undefined}
    </>
  );
};

export default SlingleProjectSlider;
