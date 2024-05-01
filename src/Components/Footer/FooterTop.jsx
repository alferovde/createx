import React from "react";
import style from "./footer.module.scss";
import logo from "../../Images/logo_footer.svg";
import { svgSprite } from "../../Store/localStore";

const FooterTop = () => {
  const renderList = () => {
    return svgSprite.map((item) => {
      return (
        <li key={item.id}>
          <a href="#">{item.svg}</a>
        </li>
      );
    });
  };

  return (
    <div className={style.footer__top}>
      <div className={style.footer__top__left}>
        <img src={logo} alt="logo" />
        <ul>{renderList()}</ul>
        <p>
          Createx Construction Bureau has been successfully operating in the USA
          construction market since 2000. We are proud to offer you quality
          construction and exemplary service. Our mission is to set the highest
          standards for construction sphere.
        </p>
      </div>
      <div className={style.footer__top__right}>
        <h3>Let’s stay in touch</h3>
        <div className={style.footer__top__right__form}>
          <input type="text" placeholder="Your email address " />
          <button>subscribe</button>
        </div>

        <p>
          *Subscribe to our newsletter to receive communications and early
          updates from Createx Construction Bureau.
        </p>
      </div>
    </div>
  );
};

export default FooterTop;
