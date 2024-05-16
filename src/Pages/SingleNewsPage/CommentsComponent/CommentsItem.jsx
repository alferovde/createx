import React from "react";
import style from "./comments_news.module.scss";
const CommentsItem = ({ users, item }) => {
  const renderUsers = () => {
    return users.map((user, index) => {
      return user[0].id === item.user_id ? (
        <p key={index}>{user[0].name}</p>
      ) : (
        ""
      );
    });
  };

  return (
    <div className={style.comments_item}>
      <div className={style.comments_item__left}>
        {renderUsers()}
        {item.date}
      </div>
      <div className={style.comments_item__right}>{item.comment}</div>
    </div>
  );
};

export default CommentsItem;
