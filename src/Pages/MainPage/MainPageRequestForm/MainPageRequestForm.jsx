import React from "react";
import style from "./request_form.module.scss";
const MainPageRequestForm = () => {
  return (
    <div className={`${style.request_form__wrapper} container`}>
      <div className={`${style.request_form__title} `}>
        <h2>Want to know more? Ask us a question:</h2>
      </div>
      <div className={`${style.request_form__form} `}>
        <div className={`${style.request_form__input} `}>
          <label htmlFor="name">
            <span>Name</span>
            <input type="text" id="name" placeholder="Your name" />
          </label>{" "}
          <label htmlFor="Phone">
            <span>Phone</span>
            <input type="text" id="Phone" placeholder="Your phone" />
          </label>{" "}
          <label htmlFor="message">
            <span>Message</span>
            <input type="text" id="message" placeholder="Your message" />
          </label>
        </div>
        <div className={`${style.request_form__btn} `}>
          <button>SEND</button>
        </div>
      </div>
    </div>
  );
};

export default MainPageRequestForm;
