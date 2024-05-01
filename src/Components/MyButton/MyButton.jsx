import React from "react";
import "./mybutton.scss";
const MyButton = ({ children, color }) => {
  return (
    <button
      className={
        color ? "my_button my_button_color" : "my_button my_button_transparent"
      }
    >
      {children}
    </button>
  );
};

export default MyButton;
