import React from "react";
import "./mycheckbox.scss";
const MyCheckBox1 = ({ name = "", data, required = undefined }) => {
  return (
    <div className="checkbox__wrapper">
      <label htmlFor={`${name}+'form`}>
        {name} {required ? "*" : undefined}
      </label>

      <input type="checkbox" name={name} id={name} />
    </div>
  );
};

export default MyCheckBox1;
