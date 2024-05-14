import React from "react";

import style from "./news_list.module.scss";
import NewsListItem from "./NewsListItem";
const NewsList = ({ data }) => {
  const renderList = () => {
    return data?.map((item) => {
      return <NewsListItem data={item} />;
    });
  };

  return <div className={style.news_list__wrapper}>{renderList()}</div>;
};

export default NewsList;
