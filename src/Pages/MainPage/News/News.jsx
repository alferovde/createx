import React from "react";
import style from "./news.module.scss";
import NewaItem from "../../../Components/NewaItem/NewaItem";
import NewsItemSimple from "../../../Components/NewaItem/NewsItemSimple";
import MyButton from "../../../Components/MyButton/MyButton";
import { useNavigate } from "react-router-dom";
const global_path_server = process.env.REACT_APP_STORAGE_SERVER;
const News = ({ data }) => {
  const navigate = useNavigate();
  const renderList = () => {
    return data?.map((item, index) => {
      {
        return index === 0 ? (
          <NewaItem key={index} data={item} />
        ) : (
          <NewsItemSimple data={item} key={index} />
        );
      }
    });
  };

  return (
    <div className={`${style.news__wrapper} container`}>
      <div className={style.news__title}>
        <h2>Recent news</h2>
      </div>
      <ul className={style.news__content}>{renderList()}</ul>
      <div className={style.news__btn}>
        <h3>Explore all our news posts</h3>
        <MyButton color onClick={() => navigate(`/news/`)}>
          View all news
        </MyButton>
      </div>
    </div>
  );
};

export default News;
