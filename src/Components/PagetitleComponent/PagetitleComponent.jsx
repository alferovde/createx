import React from "react";
import style from "./page_title.module.scss";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
const PagetitleComponent = ({ bgImage, title, text }) => {
  return (
    <div
      className={style.page_title}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={`${style.page_title__wrapper} container`}>
        <Breadcrumb />
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default PagetitleComponent;
