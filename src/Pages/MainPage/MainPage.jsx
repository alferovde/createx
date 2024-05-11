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
import SliderPortfolio from "../../Components/SliderPortfolio/SliderPortfolio";
import Clients from "../../Components/Clients/Clients";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Figures from "./Figures/Figures";
import ContactForm from "../../Components/ContactForm/ContactForm";

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
        <SliderPortfolio
          data={mainPageData.service_projects}
          title={"Browse our selected projects and learn more about our work"}
        />
        <Clients
          bgColor={"#f4f5f6"}
          title={"Supported by 12+ partners"}
          data={mainPageData.service_clients}
        />
        <Testimonials data={mainPageData.clients_reviews} />
        <Figures data={mainPageData.recent_news} />
        <ContactForm />
      </div>
    </PageProvider>
  );
};

export default MainPage;
