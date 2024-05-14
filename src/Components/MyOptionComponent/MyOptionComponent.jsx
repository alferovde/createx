import React from "react";
import "./myoptions.scss";
const MyOptionComponent = ({ name = "", data, required = undefined }) => {
  const renderList = () => {
    return data.map((item) => {
      return (
        <option value={item.title} key={item.id}>
          {item.title}
        </option>
      );
    });
  };

  return (
    <div className="option__wrapper">
      <label htmlFor={`${name}+'form`}>
        {name} {required ? "*" : undefined}
      </label>

      <select name={name} id={name}>
        {renderList()}
      </select>
    </div>
  );
};

export default MyOptionComponent;
