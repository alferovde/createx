import React from "react";
import style from "./position_item.module.scss";
import MyButton from "../../Components/MyButton/MyButton";
import clock from "../../Images/Clock.svg";
import location from "../../Images/location.svg";
const PositionItem = ({ city, conditions, position_title }) => {
  return (
    <div className={style.position_item}>
      <div className={style.position_item__left}>
        <div className={style.position_item__top}>
          <p>
            <img src={location} alt="" />
            {city}
          </p>
          <p>
            <img src={clock} alt="" />
            {conditions}
          </p>
        </div>

        <h3>{position_title}</h3>
      </div>
      <div className={style.position_item__right}>
        <MyButton>Apply now</MyButton>
      </div>
    </div>
  );
};

export default PositionItem;
