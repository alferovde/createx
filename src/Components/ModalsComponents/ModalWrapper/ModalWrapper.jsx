import React, { useState } from "react";
import style from "./modal_wrapper.module.scss";

const ModalWrapper = ({ children, modalActive, setModalActive }) => {
  const [animate, setAnimate] = useState("animate__pulse");
  const [wrapperAnimate, setWrapperAnimate] = useState(undefined);
  const handlerCloseModal = () => {
    setWrapperAnimate(style.hidden);
    setTimeout(() => {
      setModalActive(!modalActive);
    }, 500);
  };

  return (
    <div
      className={`${style.modal_component__wrarpper} ${wrapperAnimate}`}
      onClick={() => handlerCloseModal()}
    >
      <div className="" onClick={() => handlerCloseModal()}>
        <h1>Close</h1>
      </div>
      <div className={`animate__animated ${animate}`}>{children}</div>
    </div>
  );
};

export default ModalWrapper;
