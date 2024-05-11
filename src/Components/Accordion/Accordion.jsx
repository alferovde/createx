import React, { useState } from "react";
import style from "./accordion.module.scss";
const Accordion = ({ data }) => {
  const [accordionValue, setAccordionValue] = useState(data);

  const handlerToggleButton = (id) => {
    setAccordionValue(
      accordionValue.map((item) => {
        return item.id == id
          ? { ...item, active: true }
          : { ...item, active: false };
      })
    );
  };

  const renderAccordionList = () => {
    return accordionValue?.map((item) => {
      return (
        <div className={style.accordion__title}>
          <div className={style.accordion__title__header}>
            <button
              onClick={() => handlerToggleButton(item.id)}
              className={
                item.active
                  ? style.accordion__plus_btn
                  : style.accordion__minus_btn
              }
            >
              <span></span>
            </button>
            <h4>
              {item.title__offer1}
              {item.title}
            </h4>
          </div>
          <div
            className={
              item.active
                ? style.accordion__value
                : style.accordion__value__hidden
            }
          >
            <p>{item.text}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className={style.accordion__wrapper}>{renderAccordionList()}</div>
  );
};

export default Accordion;
