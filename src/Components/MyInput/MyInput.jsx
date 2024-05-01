import React from "react";
import "./myinput.scss";
const MyInput = ({ name = "", placeholder = "", required = undefined }) => {
  return (
    <div className="input__wrapper">
      <label htmlFor={`${name}+'form`}>
        {name} {required ? "*" : undefined}
      </label>
      <input
        type="text"
        id={`${name}+'form`}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default MyInput;
