import React from "react";
import style from "./services_list_render.module.scss";
import ServiceItem from "./ServiceItem/ServiceItem";
const RenderServiceList = ({ data }) => {
  console.log(data);

  const renderList = () => {
    return data?.service_list?.slice(1, 5).map((item) => {
      return <ServiceItem key={item.id} {...item} />;
    });
  };

  return (
    <div className={`${style.service_list} container`}>{renderList()}</div>
  );
};

export default RenderServiceList;
