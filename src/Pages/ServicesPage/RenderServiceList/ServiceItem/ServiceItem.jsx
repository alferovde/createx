import React from "react";
import style from "./service_item.module.scss";
import MyButton from "../../../../Components/MyButton/MyButton";
import { useNavigate } from "react-router-dom";
const global_path_server = "http://127.0.0.1:8000/storage/";
const ServiceItem = ({ title, main_img, id, text }) => {
  const navigate = useNavigate();

  const hadlerNavigate = () => {
    navigate(`/service/${title}`, { state: { title, id, text } });
  };

  return (
    <div
      className={`${style.service_item_component} ${
        id % 2 ? style.reverse : ""
      } `}
    >
      <div
        className={style.service_item_img}
        style={{ backgroundImage: `url(${global_path_server + main_img})` }}
      >
        {/* <img src={global_path_server + main_img} alt={title} /> */}
      </div>
      <div className={style.service_item_content}>
        <h3>{title}</h3>
        <p>{text}</p>
        <MyButton onClick={() => hadlerNavigate()}>Learn more</MyButton>
      </div>
    </div>
  );
};

export default ServiceItem;
