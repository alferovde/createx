import React from "react";
import style from "./figure_item.module.scss";
const FigureItem = ({ currentValue, maxValue, title, procent, color }) => {
  let procentValue =
    currentValue > 100 ? String(currentValue)?.slice(0, 2) : undefined;

  return (
    <div className={style.figure_wrapper}>
      <div
        className={style.figure_item}
        style={{
          background: `conic-gradient(${color} 0 ${
            procentValue ? procentValue : currentValue
          }%, ${color + "69"} 0 ${maxValue}%)`,
        }}
      >
        <div className={style.figure_item__content}>
          {procent ? currentValue + "%" : currentValue}
        </div>
      </div>
      <p> {title}</p>
    </div>
  );
};

export default FigureItem;
