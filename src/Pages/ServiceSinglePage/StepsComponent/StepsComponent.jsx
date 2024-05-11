import React, { useState } from "react";
import style from "./steps.module.scss";
const StepsComponent = ({ data }) => {
  const [active, setActive] = useState(2);

  const renderSteps = () => {
    return data.map((item) => {
      return (
        <li onClick={() => setActive(item.id)}>
          <span className={item.id == active ? style.active : ""}>
            0{item.id}
          </span>
          <span className={style.border}></span>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </li>
      );
    });
  };

  return (
    <div className={style.steps}>
      <ul>{renderSteps()}</ul>
    </div>
  );
};

export default StepsComponent;
