import React from "react";
import style from "./service_item.module.scss";

const ServiceListItemFull = ({ id, title, text }) => {
  return (
    <div className={style.service_item__full}>
      <h3>FULL - {title}</h3>
    </div>
  );
};

export default ServiceListItemFull;
