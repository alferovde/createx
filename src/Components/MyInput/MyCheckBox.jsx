import React from "react";

const MyCheckBox = ({ index, text }) => {
  return (
    <div className="me_checkbox">
      <input type="checkbox" name="" id={index} className="custom_chekcbox" />
      <label htmlFor={index}>{text}</label>
    </div>
  );
};

export default MyCheckBox;
