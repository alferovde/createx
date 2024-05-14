import React from "react";
import style from "./our_offices.module.scss";
import { officesAddress, svgSprite } from "../../../Store/localStore";
const OurOffices = () => {
  const renderSocialLinks = () => {
    return svgSprite.map((item) => {
      return <li key={item.id}>{item.svg}</li>;
    });
  };

  const renderOffices = () => {
    return officesAddress.map((item) => {
      return (
        <div className={style.our__office__item_office}>
          <h3>{item.title}</h3>
          <p>{item.address}</p>
          <a href="#">{item.link}</a>
          <p>
            <span>Call:</span>
            {item.phone}
          </p>
          <p>
            <span>Email::</span>
            {item.email}
          </p>
          <p>
            <span>Schedule::</span>
            {item.schudule}
          </p>
        </div>
      );
    });
  };

  return (
    <div className={style.our__office}>
      <div className={`${style.our__office__wrepper} container`}>
        <h2>Our offices</h2>
        <p>
          Give us a call, send us a note or visit our office. We can’t wait to
          hear from you!
        </p>

        <div className={style.our__office__offices}>{renderOffices()}</div>

        <h2>Find us at</h2>
        <ul>{renderSocialLinks()}</ul>
      </div>
    </div>
  );
};

export default OurOffices;
