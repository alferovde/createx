import React from "react";
import style from "./modal_sendsv.module.scss";
import MyInput from "../../MyInput/MyInput";
import MyTextArea from "../../MyInput/MyTextArea";
import attach from "../../../Images/Attach.svg";
import MyButton from "../../MyButton/MyButton";
const ModalSendSV = () => {
  return (
    <div className={style.sendsv__wrapper} onClick={(e) => e.stopPropagation()}>
      <div className={style.sendsv__title}>
        <h2>Send your CV</h2>
      </div>

      <form className={style.sendsv__form}>
        <MyInput name="Name" placeholder="Your name" required />
        <MyInput name="Location" placeholder="Enter your location" required />
        <MyInput name="Phone" placeholder="Your phone number" required />
        <MyInput name="Email" placeholder="Your working email" required />
        <MyTextArea name="Сovering letter" placeholder="Your covering letter" />
        <div className={style.sendsv__form_attach}>
          <img src={attach} alt="" />
          <p>Attach your CV*</p>
        </div>
        <MyButton color>send</MyButton>
      </form>
    </div>
  );
};

export default ModalSendSV;
