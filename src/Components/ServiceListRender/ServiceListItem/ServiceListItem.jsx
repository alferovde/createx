import React from "react";
import style from "./service_item.module.scss";

import parse from "html-react-parser";
const global_path_server = "http://127.0.0.1:8000/storage/";
const ServiceListItem = ({ id, title, main_img, icon_svg }) => {
  let svg_img = parse(icon_svg);

  return (
    <li
      className={style.service_item}
      style={{ backgroundImage: `url(${global_path_server + main_img})` }}
    >
      <div className={style.bg_layout}></div>
      <div className={style.service_item__title}>
        {svg_img}
        <h3>{title}</h3>
      </div>
    </li>
  );
};

export default ServiceListItem;
