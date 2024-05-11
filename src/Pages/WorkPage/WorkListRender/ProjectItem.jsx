import React from "react";
import style from "./work_item.module.scss";
import { useNavigate } from "react-router-dom";
const global_path_server = "http://127.0.0.1:8000/storage/";
const ProjectItem = ({ title, img, subTitle, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className={style.work__item}
      style={{ backgroundImage: `url(${global_path_server + img})` }}
    >
      <div className={style.slide_info}>
        <p>{title}</p>
        <span>{subTitle}</span>
        <button
          onClick={() => {
            navigate(`/work/${title}`, { state: { id: id } });
          }}
        >
          View Project
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
