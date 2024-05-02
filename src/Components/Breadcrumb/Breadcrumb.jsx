import React from "react";
import { useLocation } from "react-router-dom";
import style from "./breadcrumb.module.scss";
const Breadcrumb = () => {
  const ref = useLocation();

  return (
    <div className={style.breadcrumb}>
      <p>
        Homepage <span>/ {ref.pathname.slice(1)}</span>
      </p>
    </div>
  );
};

export default Breadcrumb;
