import React from "react";
import style from "./ConstructiveDecisions.module.scss";
import bg_img from "../../../Images/constructive_img.jpg";
import { constructiveData } from "../../../Store/localStore";
import check from "../../../Images/constr-check.png";
const ConstructiveDecisions = () => {
  const renderList = () => {
    return constructiveData.map((item) => {
      return (
        <li key={item.id}>
          <img src={check} alt="check" />
          <p>{item.title}</p>
        </li>
      );
    });
  };

  return (
    <div className={`${style.constructive}`}>
      <div className={`${style.constructive__wrapper} container`}>
        <div className={style.constructive__imgbg}>
          <img src={bg_img} alt="constructive_img" />
        </div>
        <div className={style.constructive__list}>
          <h2>Constructive decisions</h2>
          <ul>{renderList()}</ul>
        </div>
      </div>
    </div>
  );
};

export default ConstructiveDecisions;
