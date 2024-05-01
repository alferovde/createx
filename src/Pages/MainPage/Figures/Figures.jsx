import React from "react";
import style from "./figures.module.scss";
import { figureItems } from "../../../Store/localStore";
import FigureItem from "../../../Components/FigureItem/FigureItem";
import News from "../News/News";
const Figures = ({ data }) => {
  const renderList = () => {
    return figureItems.map((item) => {
      return <FigureItem key={item.id} {...item} />;
    });
  };
  return (
    <div className={style.figures}>
      <div className={`${style.figures__wrapper} container`}>
        <h2>Some facts and figures</h2>

        <ul className={style.figures__items}>{renderList()}</ul>
      </div>
      <News data={data} />
    </div>
  );
};

export default Figures;
