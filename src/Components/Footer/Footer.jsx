import React from "react";
import style from "./footer.module.scss";
import FooterTop from "./FooterTop";
import FooterCenter from "./FooterCenter";
import vector_footer from "../../Images/vector_footer.png";
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={`${style.footer__wrapper} container`}>
        <FooterTop />
        <FooterCenter />
        <div className={style.footer__bottom}>
          <p>
            © All rights reserved. Made with
            <span>
              <img src={vector_footer} alt="" />
            </span>
            by Createx Studio{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
