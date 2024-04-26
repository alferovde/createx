import React from "react";
import style from "./main_values.module.scss";
import ValuesComponent from "../../../Components/ValuesComponent/ValuesComponent";

import { useSelector } from "react-redux";
const MainPageValues = () => {
  const mainPageData = useSelector((state) => state.mainPage.mainPageData);

  return (
    <div className={`${style.main_value} container`}>
      <div className={`${style.main_value__title}`}>
        <h2>Our core values</h2>
        <p className="paragraph_title">
          Our mission is to set the highest standards for construction sphere.
        </p>
      </div>
      <div className={`${style.main_value__items} `}>
        <ValuesComponent data={mainPageData.values_items?.slice(0, 3)} />
      </div>
    </div>
  );
};

export default MainPageValues;
