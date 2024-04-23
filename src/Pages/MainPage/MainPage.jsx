import React, { useEffect } from "react";
import PageProvider from "../../Components/PageProvider/PageProvider";
import { useDispatch, useSelector } from "react-redux";
import { fetchMainPAge } from "../../Store/Reducers/MainPageReducer";
import MainPageSlider from "./MainPageSlider/MainPageSlider";
import style from "./main_page.module.scss";

const MainPage = () => {
  const isLoading = useSelector((state) => state.mainPage.isLoading);
  const isError = useSelector((state) => state.mainPage.isError);
  const mainPageData = useSelector((state) => state.mainPage.mainPageData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMainPAge());
  }, []);

  return (
    <PageProvider isError={isError} isLoading={isLoading}>
      <div className={style.main_page} data={mainPageData}>
        <MainPageSlider dataSlider={mainPageData.main_slider} />
      </div>
    </PageProvider>
  );
};

export default MainPage;
