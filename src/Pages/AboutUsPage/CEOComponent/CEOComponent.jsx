import React from "react";
import style from "./ceo_component.module.scss";
import signature from "../../../Images/signature.svg";
const CEOComponent = () => {
  return (
    <div className={style.ceo__wrapper}>
      <div className={`${style.ceo__container} container`}>
        {/* <div className={style.ceo__bg}>ss</div> */}
        <div className={style.ceo__content}>
          <p>
            Dapibus nec vitae ante mattis. Aliquam phasellus ac dui augue in.
            Sed aliquet in egestas hac at proin sed quam. Etiam aliquet sagittis
            non, massa cum pulvinar. Et in leo, tempus purus vestibulum ut
            blandit et mi. Odio massa purus vel praesent arcu enim elit felis
            viverra.
          </p>
          <p>
            Magna aliquam interdum mattis ipsum arcu. Elit odio elit viverra
            quis metus amet eleifend amet. Vet suspendisse faucibus tempor ipsum
            integer.
          </p>
          <div className={style.ceo__content__footer}>
            <p>
              Courtney Alexander
              <span>CEO - Createx Construction Bureau </span>
            </p>
            <img src={signature} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEOComponent;
