import React, { useState } from "react";
import style from "./service_item.module.scss";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
const global_path_server = process.env.REACT_APP_STORAGE_SERVER;
const ServiceListItem = ({ id, title, text, main_img, icon_svg }) => {
  let svg_img = parse(icon_svg);
  const navigate = useNavigate();
  const [animation, setAnimation] = useState("");
  const handlerRedirect = () => {
    setAnimation("animate__bounceIn");
    setTimeout(() => {
      navigate(`/service/${title}`, { state: { title, id, text } });
    }, 1000);
  };

  return (
    <li
      className={`${style.service_item} animate__animated ${animation}`}
      style={{ backgroundImage: `url(${global_path_server + main_img})` }}
      onClick={() => handlerRedirect()}
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
