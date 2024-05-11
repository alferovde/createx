import React from "react";
import style from "./modalsuvscrie.module.scss";
import MyInput from "../../MyInput/MyInput";
import MyButton from "../../MyButton/MyButton";
const ModalSubscribe = () => {
  return (
    <div
      className={style.subscribe__wrapper}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={style.subscribe__wrapper__title}>
        <h2>Subscribe to our newsletter</h2>
      </div>
      <form className={style.subscribe__wrapper__form}>
        <MyInput name="Name" placeholder="Your name" required={true} />
        <MyInput
          name="Email"
          placeholder="Your working email"
          required={true}
        />
        <MyButton color>send</MyButton>
      </form>
    </div>
  );
};

export default ModalSubscribe;
