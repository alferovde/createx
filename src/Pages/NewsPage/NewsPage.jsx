import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageProvider from "../../Components/PageProvider/PageProvider";
import PagetitleComponent from "../../Components/PagetitleComponent/PagetitleComponent";
import news_bg from "../../Images/news-background.png";
import style from "./news_page.module.scss";
import { fetchNewsPage } from "../../Store/Reducers/NewsPageReducer";
import NewsList from "./NewsList/NewsList";
import Pagination from "../../Components/Pagination/Pagination";
import ContactForm from "./../../Components/ContactForm/ContactForm";
const NewsPage = () => {
  const isError = useSelector((state) => state.newsPage.isError);
  const isLoading = useSelector((state) => state.newsPage.isLoading);
  const newsPage = useSelector((state) => state.newsPage.newsPageData);
  const dispatch = useDispatch();

  const [dataPage, setDataPage] = useState({
    currentCategory: 0,
    currentPage: 1,
  });

  useEffect(() => {
    dispatch(fetchNewsPage(dataPage));
  }, [dataPage]);

  const renderCategoryList = () => {
    return newsPage.news_category?.map((item) => {
      return (
        <li
          key={item.id}
          className={dataPage.currentCategory === item.id ? style.active : ""}
          onClick={() =>
            setDataPage({
              ...dataPage,
              currentCategory: item.id,
              currentPage: 1,
            })
          }
        >
          {item.name}
        </li>
      );
    });
  };

  return (
    <div className={style.news_page__wrapper}>
      <PagetitleComponent
        bgImage={news_bg}
        title={"NEWS"}
        text={"Stay tuned with our news, expert tips and articles."}
      />
      <PageProvider isError={isError} isLoading={isLoading}>
        <div className={`${style.news_page__list_news} container`}>
          <div className={style.news_page__categories}>
            <h2>Categories</h2>
            <ul>{renderCategoryList()}</ul>
          </div>
          <NewsList data={newsPage.newsArray} />
          <Pagination
            data={newsPage.pagination_data}
            dataPage={dataPage}
            setDataPage={setDataPage}
          />
        </div>
      </PageProvider>
      <ContactForm />
    </div>
  );
};

export default NewsPage;
