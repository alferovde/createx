import React, { useState, useEffect } from "react";
import style from "./mobilemenu.module.scss";
import "./humburger-btn.css";
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

        <label for="toggle" class="hamburger">
          <div class="top-bun"></div>
          <div class="meat"></div>
          <div class="bottom-bun"></div>
        </label>
      </div>
      {openMenu ? (
        <div
          className={`${style.mobile_menu__container} animate__animated ${animation}`}
        >
          sss
        </div>
      ) : undefined}
    </div>
  );
};

export default MobileMenu;
