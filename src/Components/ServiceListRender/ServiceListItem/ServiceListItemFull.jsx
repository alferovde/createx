import React, { useContext } from "react";
import style from "./service_item.module.scss";
import parse from "html-react-parser";
import { ServiceListActiveValue } from "../../../Pages/WorkPage/WorkPage";

const global_path_server = "http://127.0.0.1:8000/storage/";

const ServiceListItemFull = ({ title, icon_svg, id, text }) => {
  let svg_img = parse(icon_svg);
  const currentValue = useContext(ServiceListActiveValue);

  return (
    <div
      className={`${style.service_item__full} ${
        currentValue.loadValue.type === id ? style.active : ""
      } `}
      onClick={() =>
        currentValue.setLoadValue({ ...currentValue.loadValue, type: id })
      }
    >
      {svg_img}
      <h3>{title}</h3>
    </div>
  );
};

export default ServiceListItemFull;
