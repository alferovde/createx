import React from "react";
import style from "./comments_news.module.scss";
import CommentsItem from "./CommentsItem";
const CommentsComponent = ({ data }) => {
  const renderComments = () => {
    return data?.comments?.map((item) => {
      return <CommentsItem key={item.id} item={item} users={data.user_array} />;
    });
  };

  return (
    <div className={style.comments__wrapper}>
      <h2>
        {data?.comments?.length > 0 ? data?.comments?.length : "no"} comments{" "}
      </h2>

      <div className={style.comments__items_list}>{renderComments()}</div>
    </div>
  );
};

export default CommentsComponent;
