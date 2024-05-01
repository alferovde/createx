import React from "react";
import style from "./clients.module.scss";
const global_path_server = "http://127.0.0.1:8000/storage/";
const Clients = ({ bgColor, title, data, sub_title = "" }) => {
  const renderList = () => {
    return data?.slice(0, 6).map((item) => {
      return (
        <li key={item.id}>
          <img src={global_path_server + item.img} alt="" />
        </li>
      );
    });
  };

  return (
    <div
      className={style.slients__wrapper}
      style={{ backgroundColor: bgColor }}
    >
      <div className="container">
        <h2>{title}</h2>
        <span>{sub_title}</span>
        <ul className={style.slients__items}>{renderList()}</ul>
      </div>
    </div>
  );
};

export default Clients;
