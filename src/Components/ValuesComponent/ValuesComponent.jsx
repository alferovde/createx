import React from "react";
import style from "./values_component.module.scss";

const global_path_server = process.env.REACT_APP_STORAGE_SERVER;
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
