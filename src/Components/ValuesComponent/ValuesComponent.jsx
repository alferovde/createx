import React from "react";
import style from "./values_component.module.scss";
const global_path_server = "http://127.0.0.1:8000/storage/";
const ValuesComponent = ({ data }) => {
  const renderValues = () => {
    return data?.map((item) => {
      return (
        <li key={item.id}>
          {item.icon ? (
            item.icon
          ) : (
            <img src={global_path_server + item.img} alt={item.title} />
          )}
          <h3> {item.title}</h3>
          <p>{item.text}</p>
        </li>
      );
    });
  };
  return <ul className={style.values_component__wrapper}>{renderValues()}</ul>;
};

export default ValuesComponent;
