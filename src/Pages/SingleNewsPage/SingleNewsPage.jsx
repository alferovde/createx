import React, { useEffect } from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import style from "./single_news_page.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleNewsPage } from "../../Store/Reducers/SingleNewsPagereducer";
import { useLocation, useNavigate } from "react-router-dom";
import clock from "../../Images/Clock.svg";
import chat from "../../Images/Chat.png";
import { svgSprite } from "../../Store/localStore";
import PageProvider from "../../Components/PageProvider/PageProvider";
import ContactForm from "../../Components/ContactForm/ContactForm";
import check from "../../Images/constr-check.png";
import CommentsComponent from "./CommentsComponent/CommentsComponent";
import LeaveComment from "./LeaveComment/LeaveComment";
const global_path_server = process.env.REACT_APP_STORAGE_SERVER;

const SingleNewsPage = () => {
  const isError = useSelector((state) => state.singleNewsPage.isError);
  const isLoading = useSelector((state) => state.singleNewsPage.isLoading);

  const singleNewsPage = useSelector(
    (state) => state.singleNewsPage.singleNewsPageData
  );
  const dispatch = useDispatch();
  const params = useLocation();

  useEffect(() => {
    dispatch(fetchSingleNewsPage(params.state));
  }, []);
  const { title, data, img, article, list, sub_title, text, text2 } =
    singleNewsPage?.newsID !== undefined ? singleNewsPage.newsID[0] : "";

  const typeNews =
    singleNewsPage?.new_category !== undefined
      ? singleNewsPage?.new_category[0].name
      : "";

  const renderSocialLinks = () => {
    return svgSprite.map((item) => {
      return <li key={item.id}>{item.svg}</li>;
    });
  };

  const renderNewsItems = () => {
    return list?.split(",").map((item, index) => {
      return (
        <li key={index}>
          <img src={check} alt="items" /> {item}
        </li>
      );
    });
  };

  return (
    <PageProvider isError={isError} isLoading={isLoading}>
      <div className={style.single_news_page}>
        <div className={style.single_news_page__hero}>
          <div
            className={`${style.single_news_page__hero__container} container`}
          >
            <Breadcrumb />
            <h2>{title}</h2>
            <div className={style.single_news_page__hero__news_data}>
              <div className={style.single_news_page__hero__news_data__info}>
                <p> {typeNews}</p>
                <p>
                  <img src={clock} alt="clock" />
                  {data}
                </p>
                <p>
                  <img src={chat} alt="chat" />
                  {singleNewsPage.new_comment?.comments?.length} comments
                </p>
              </div>

              <ul>{renderSocialLinks()}</ul>
            </div>
          </div>
        </div>

        <div className={`${style.single_news_page__cirrent_news} container`}>
          <div className={style.single_news_page__cirrent_news_img}>
            <img src={global_path_server + img} alt={title} />
          </div>

          <div className={style.single_news_page__cirrent_news__inner}>
            <div className={style.single_news_page__cirrent_news__subtitle}>
              {sub_title}
            </div>
            <div className={style.single_news_page__cirrent_news__text}>
              {text}
            </div>
            <article>{article}</article>

            <div className={style.single_news_page__cirrent_news__list_items}>
              <p>
                Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id
                ut erat mattis. Vitae mus blandit in neque amet non fringilla
                blandit:
              </p>

              <ul>{renderNewsItems()}</ul>

              {text2}
            </div>
            <div className={style.single_news_page__cirrent_news__social_links}>
              <p>Share:</p> <ul>{renderSocialLinks()}</ul>
            </div>

            <CommentsComponent data={singleNewsPage.new_comment} />
            <LeaveComment />
          </div>
        </div>
        <ContactForm />
      </div>
    </PageProvider>
  );
};

export default SingleNewsPage;
