import React from "react";
import style from "./clients.module.scss";
const global_path_server = process.env.REACT_APP_STORAGE_SERVER;
const Clients = ({ bgColor, title, data, sub_title = "", full }) => {
  const renderList = () => {
    if (full) {
      return data?.map((item) => {
        return (
          <li key={item.id}>
            <img src={global_path_server + item.img} alt="" />
          </li>
        );
      });
    } else {
      return data?.slice(0, 6).map((item) => {
        return (
          <li key={item.id}>
            <img src={global_path_server + item.img} alt="" />
          </li>
        );
      });
    }
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
