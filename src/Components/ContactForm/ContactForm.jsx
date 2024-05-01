import React from "react";
import style from "./contact_form.module.scss";
import MyInput from "../MyInput/MyInput";
import MyTextArea from "../MyInput/MyTextArea";
import MyCheckBox from "../MyInput/MyCheckBox";
import MyButton from "./../MyButton/MyButton";
const ContactForm = () => {
  return (
    <div className={style.contact_form_wapper}>
      <div className={`${style.contact_form_container} container`}>
        <div className={style.contact_form}>
          <div className={style.contact_form__title}>
            <p>A quick way to discuss details</p>
          </div>
          <div className={style.contact_form__input}>
            <MyInput name={"name"} placeholder="Your name" required />
            <MyInput name={"phone"} placeholder="Your phone number" required />
            <MyInput name={"email"} placeholder="Your working email" />
            <MyTextArea name={"message"} placeholder="Your message" required />
            <MyCheckBox
              text="I agree to receive communications from Createx Construction Bureau."
              index={1}
            />
            <MyButton color>send request</MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
