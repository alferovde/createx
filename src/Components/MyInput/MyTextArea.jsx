import React from "react";

const MyTextArea = ({ name = "", placeholder = "", required = undefined }) => {
  return (
    <div className="textarea__wrapper">
      <label htmlFor={`${name}+'form`}>
        {name} {required ? "*" : undefined}
      </label>
      <textarea
        type="text"
        id={`${name}+'form`}
        placeholder={placeholder}
        required={required}
      ></textarea>
    </div>
  );
};

export default MyTextArea;
