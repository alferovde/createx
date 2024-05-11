import React from "react";
import ProjectItem from "./ProjectItem";
import style from "./worklist.module.scss";
const WorkListRender = ({ data }) => {
  const renderList = () => {
    return data?.service_projects.map((item) => {
      let subTitle = "";

      data?.types.map((item1) => {
        return item1.type === item.sub_title
          ? (subTitle = item1.type)
          : undefined;
      });

      return <ProjectItem key={item.id} subTitle={subTitle} {...item} />;
    });
  };

  return (
    <div className={`${style.worklist__wrapper} container`}>{renderList()}</div>
  );
};

export default WorkListRender;
