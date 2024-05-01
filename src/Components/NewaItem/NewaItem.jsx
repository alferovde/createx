import React from "react";
import style from "./newsitem.module.scss";
import chat from "../../Images/Chat.png";
const global_path_server = "http://127.0.0.1:8000/storage/";
const NewaItem = ({ data }) => {
  return (
    <li className={style.news__item}>
      <img src={global_path_server + data.news.img} alt="" />
      <div className={style.news__item_content}>
        <h3>{data.news.title}</h3>
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
        <p>{data.news.text.slice(0, 130) + "..."}</p>
      </div>
    </li>
  );
};

export default NewaItem;
