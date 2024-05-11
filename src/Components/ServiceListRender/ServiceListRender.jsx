import React, { useState, useContext } from "react";
import ServiceListItem from "./ServiceListItem/ServiceListItem";
import style from "./service_list.module.scss";
import ServiceListItemFull from "./ServiceListItem/ServiceListItemFull";
import { ServiceListActiveValue } from "../../Pages/WorkPage/WorkPage";
const ServiceListRender = ({ data, full }) => {
  const renderList = () => {
    if (!full) {
      return data?.map((item) => {
        return <ServiceListItemFull key={item.id} {...item} />;
      });
    } else if (full) {
      return data?.slice(1, 5).map((item) => {
        return <ServiceListItem key={item.id} {...item} />;
      });
    }
  };

  return (
    <ul className={`${style.service_list__wrapper} container`}>
      {renderList()}
    </ul>
  );
};

export default ServiceListRender;
