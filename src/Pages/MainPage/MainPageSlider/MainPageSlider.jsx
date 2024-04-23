import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import { Button } from "antd";
import "swiper/css";
import "swiper/css/scrollbar";
import "./main_slider.scss";
const global_path_server = "http://127.0.0.1:8000/storage/";
const MainPageSlider = ({ dataSlider }) => {
  const renderSlider = () => {
    return dataSlider?.map((slide) => {
      return (
        <SwiperSlide
          style={{
            backgroundImage: `url(${global_path_server + slide.img})`,
          }}
        >
          <div className="slide__content container">
            <div className="slide__info ">
              <h2> {slide.title}</h2>
              <p>
                Cras ultrices leo vitae non viverra. Fringilla nisi quisque
                consequat, dignissim vitae proin ipsum sed. Pellentesque nec
                turpis purus eget pellentesque integer ipsum elementum felis.
              </p>

              <div className="btn__groupe">
                <Button className="about">Learn more about us</Button>
                <Button className="submit"> SUBMIT REQUEST</Button>
              </div>

              <div className="slide__bg"></div>
            </div>
          </div>
        </SwiperSlide>
      );
    });
  };

  console.log("slier-->", dataSlider);
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">0' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        pagination={pagination}
        modules={[Pagination, EffectFade]}
        className="mySwiper"
        effect={"fade"}
      >
        {renderSlider()}
      </Swiper>
    </>
  );
};

export default MainPageSlider;
