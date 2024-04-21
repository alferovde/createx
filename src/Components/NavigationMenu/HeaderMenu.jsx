import React from "react";
import { headerMenu } from "../../Store/localStore";
import { NavLink } from "react-router-dom";
import { simpleRender } from "../../Utils/renderFunctions";
import style from "./navigation.module.scss";
const HeaderMenu = () => {
  let renderMenu = simpleRender(headerMenu, NavLink);

  return <nav className={style.navigation__wrapper}>{renderMenu}</nav>;
};

export default HeaderMenu;
