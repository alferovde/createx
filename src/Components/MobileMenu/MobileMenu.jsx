import React, { useState, useEffect } from "react";
import style from "./mobilemenu.module.scss";
import "./humburger-btn.css";
import HeaderMenu from "../NavigationMenu/HeaderMenu";
const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [animation, setAnimation] = useState("");

  const handlerOpenMobileMenu = () => {
    setAnimation("animate__fadeInRight");

    if (!openMenu) {
      setOpenMenu(!openMenu);
      setAnimation("animate__fadeInRight");
    } else if (openMenu) {
      setAnimation("animate__fadeOutRight");
      setTimeout(() => setOpenMenu(!openMenu), 600);
    }
  };

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [openMenu]);

  return (
    <div className={style.mobile_menu__wrapper}>
      <div
        className={
          openMenu ? style.mobile_menu__bg__open : style.mobile_menu__bg
        }
      ></div>
      <div className={style.mobile_menu__btn}>
        <input
          id="toggle"
          type="checkbox"
          checked={openMenu}
          onClick={() => handlerOpenMobileMenu()}
        ></input>

        <label for="toggle" className="hamburger">
          <div className="top-bun"></div>
          <div className="meat"></div>
          <div className="bottom-bun"></div>
        </label>
      </div>
      {openMenu ? (
        <div
          className={`${style.mobile_menu__container} animate__animated ${animation}`}
        >
          <HeaderMenu />
        </div>
      ) : undefined}
    </div>
  );
};

export default MobileMenu;
