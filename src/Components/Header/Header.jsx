import React from "react";
import style from "./header.module.scss";
import logo from "../../Images/logo.svg";
import phone from "../../Images/phone.svg";
import email from "../../Images/chat.svg";
import HeaderMenu from "../NavigationMenu/HeaderMenu";
import { NavLink } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
const Header = () => {
  return (
    <header className={style.header}>
      <div className={`${style.header__wrapper} container`}>
        <div className={style.header__logo}>
          <NavLink to={"/"}>
            <img src={logo} alt="createx logo" />
          </NavLink>
        </div>
        <div className={style.header__menu}>
          <HeaderMenu />
        </div>
        <div className={style.header__contact}>
          <div className={style.header__contact__phone}>
            <img src={phone} alt="phone number" />
            <p>
              <span>Call us</span>
              <a href="tel:+777">(405) 555-0128</a>
            </p>
          </div>
          <div className={style.header__contact__email}>
            <img src={email} alt="email" />
            <p>
              <span>Talk to us</span>
              <a href="mailto:hello@createx.com">hello@createx.com</a>
            </p>
          </div>
        </div>
        <div className={style.header__mobile_menu}>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
