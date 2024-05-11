import React from "react";
import { useLocation } from "react-router-dom";
import style from "./breadcrumb.module.scss";
const Breadcrumb = () => {
  const ref = useLocation();

  // console.log("path--,", ref.pathname.split("%20").join(" "));

  return (
    <div className={style.breadcrumb}>
      <p>
        Homepage <span> / {ref.pathname.split("%20").join(" ").slice(1)}</span>
      </p>
    </div>
  );
};

export default Breadcrumb;
