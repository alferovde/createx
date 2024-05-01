import React from "react";
import style from "./testimonials.module.scss";
import logo from "../../Images/testimonials_img.jpg";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./testimonials_slider.scss";
const Testimonials = ({ data }) => {
  const renderSlider = () => {
    return data?.map((item) => {
      return (
        <SwiperSlide key={item.id}>
          <img src={"https://i.pravatar.cc/100"} alt="" />
          <p>{item.text}</p>
          <div className="user_info">
            <b>{item.name}</b>
            <p>
              {item.user_position}, {item.company_name}
            </p>
          </div>
        </SwiperSlide>
      );
    });
  };

  return (
    <div className={`${style.testimonials} `}>
      <div className={`${style.testimonials__wrapper} container `}>
        <div className={style.testimonials__slider}>
          <h2>What our clients are saying</h2>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper_testimonials"
          >
            {renderSlider()}
          </Swiper>
        </div>
        <div className={style.testimonials__img}></div>
      </div>
    </div>
  );
};

export default Testimonials;
