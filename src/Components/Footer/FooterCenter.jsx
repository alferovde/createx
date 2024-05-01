import React from "react";
import style from "./footer.module.scss";
import { footerMenu } from "../../Store/localStore";
import { simpleRender } from "../../Utils/renderFunctions";
import { NavLink } from "react-router-dom";
const FooterCenter = () => {
  return (
    <div className={style.footer__center}>
      <address className={style.address}>
        <h4>HEAD OFFICE</h4>
        <p>
          <span>Address:</span>8502 Preston Rd. Inglewood, New York
        </p>
        <p>
          <span>Call:</span>(405) 555-0128
        </p>
        <p>
          <span>Email:</span>hello@createx.com
        </p>
      </address>
      <nav className={style.navigation}>
        <div className={style.navigation_section}>
          <h4>WHO WE ARE</h4>
          <ul> {simpleRender(footerMenu.slice(0, 3), NavLink)}</ul>
        </div>
        <div className={style.navigation_section}>
          <h4>OUR EXPERIENCE</h4>
          <ul> {simpleRender(footerMenu.slice(3), NavLink)}</ul>
        </div>
      </nav>
    </div>
  );
};

export default FooterCenter;
