import React from "react";
import style from "./newsitem.module.scss";
import chat from "../../Images/Chat.png";
import { useNavigate } from "react-router-dom";
const global_path_server = "http://127.0.0.1:8000/storage/";

const NewsItemSimple = ({ data }) => {
  const navigate = useNavigate();
  return (
    <li
      className={style.news__item__simple}
      onClick={() =>
        navigate(`/news/${data.news.title}`, { state: data.news.id })
      }
    >
      <div
        className={style.bg_img}
        style={{
          backgroundImage: `url(${global_path_server + data.news.img})`,
        }}
      ></div>
      <div className={style.news__item__content}>
        <h3 style={{ fontSize: data.news.title.length > 40 ? "17px" : "20px" }}>
          {data.news.title}
        </h3>
        <div className={style.news__item__bottom}>
          <p>{data.new_category[0].name}</p>
          <p>{data.news.data}</p>
          <p>
            <img src={chat} alt="" />
            {data.new_comment.length === 0
              ? "No comments"
              : data.new_comment.length + " comments"}
          </p>
        </div>
      </div>
    </li>
  );
};

export default NewsItemSimple;
