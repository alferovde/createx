import React from "react";
import style from "./service_section.module.scss";
import ServiceListRender from "../../../Components/ServiceListRender/ServiceListRender";
import SVGComponent from "../../../Components/SVGComponent/SVGComponent";

const OurServiceSection = ({ data }) => {
  return (
    <div className={style.our_service}>
      <div className={`${style.our_service__wrapper} container`}>
        <div className={style.our_service__title}>
          <h2>Our services</h2>

          <p className="paragraph_title">
            Createx Construction Bureau is a construction giant with a full
            range of construction services.
          </p>
        </div>
        <div className={`${style.our_service__items} `}>
          <ServiceListRender data={data} full={true} />
        </div>
        <div className={style.our_service__btn}>
          <h3>Learn more about our services</h3>
          <button>View services</button>
        </div>
      </div>
    </div>
  );
};

export default OurServiceSection;
