import React from "react";
import { statisticAboutUs } from "../../../Store/localStore";
import style from "./statick.module.scss";
const StatisticList = () => {
  const renderList = () => {
    return statisticAboutUs.map((item) => {
      let specialTitle = item.title.split(" ")[1];
      let title = item.title.split(" ")[0];

      return (
        <li key={item.id} className={style.static__item}>
          {item.img}
          <h2>
            {title}
            <span> {specialTitle}</span>
          </h2>
          <p>{item.subTitle}</p>
        </li>
      );
    });
  };
  return <ul className={style.static__wrapper}>{renderList()}</ul>;
};

export default StatisticList;
