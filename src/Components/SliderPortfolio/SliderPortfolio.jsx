import React from "react";
import style from "./slider_portfolio.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./slide_item.scss";
import { Navigation, FreeMode } from "swiper/modules";
const global_path_server = "http://127.0.0.1:8000/storage/";
const SliderPortfolio = ({ data, title }) => {
  let dataProjects = data?.service_projects;
  let dataTypes = data?.types;

  console.log("data-->", data);
  const renderSlider = () => {
    return dataProjects?.map((item) => {
      let subTitle = "";

      dataTypes?.map((item1) => {
        return item1.type === item.sub_title
          ? (subTitle = item1.type)
          : undefined;
      });

      return (
        <SwiperSlide
          key={item.id}
          style={{ backgroundImage: `url(${global_path_server + item.img})` }}
        >
          <div className="slide_info">
            <p>{item.title}</p>
            <span>{subTitle}</span>
            <button>View Project</button>
          </div>
        </SwiperSlide>
      );
    });
  };

  return (
    <div className={style.slider_portfolio}>
      <div className={`${style.slider_portfolio__wrapper} container `}>
        <div className={style.slider_title}>
          <h2>{title}</h2>
        </div>
        <div className={style.slider_slider}>
          <Swiper
            navigation={true}
            modules={[Navigation, FreeMode]}
            slidesPerView={3}
            className="mySwiperProject"
            freeMode={true}
            spaceBetween={30}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              400: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {renderSlider()}
          </Swiper>
          <div className={style.slider_btn}>
            <h3>Explore all our works</h3>
            <button>View portfolio</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderPortfolio;
