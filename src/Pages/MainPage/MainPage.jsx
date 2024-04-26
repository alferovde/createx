import React, { useEffect, useState } from "react";
import PageProvider from "../../Components/PageProvider/PageProvider";
import { useDispatch, useSelector } from "react-redux";
import { fetchMainPAge } from "../../Store/Reducers/MainPageReducer";
import MainPageSlider from "./MainPageSlider/MainPageSlider";
import style from "./main_page.module.scss";
import MainVideoSection from "./MainVideoSection/MainVideoSection";
import MainPageValues from "./MainPageValues/MainPageValues";
import MainPageRequestForm from "./MainPageRequestForm/MainPageRequestForm";
import OurServiceSection from "./OurServiceSection/OurServiceSection";

const MainPage = () => {
  const isLoading = useSelector((state) => state.mainPage.isLoading);
  const isError = useSelector((state) => state.mainPage.isError);
  const mainPageData = useSelector((state) => state.mainPage.mainPageData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMainPAge());

    // window.addEventListener("scroll", () => console.log(window.scrollY));
  }, []);

  return (
    <PageProvider isError={isError} isLoading={isLoading}>
      <div className={style.main_page}>
        <MainPageSlider dataSlider={mainPageData.main_slider} />
        <MainVideoSection />
        <MainPageValues />
        <MainPageRequestForm />
        <OurServiceSection data={mainPageData.service_list} />
      </div>
    </PageProvider>
  );
};

export default MainPage;
