import React, { useEffect, useState } from "react";
import PageProvider from "../../Components/PageProvider/PageProvider";
import PagetitleComponent from "../../Components/PagetitleComponent/PagetitleComponent";
import bgImage from "../../Images/singleService.png";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleServicePage } from "../../Store/Reducers/SingleServicePageReducer";
import style from "./single_service_page.module.scss";
import Accordion from "../../Components/Accordion/Accordion";
import { ourBenefits } from "./../../Store/pageStore";
import StepsComponent from "./StepsComponent/StepsComponent";
import { stepsServicePage } from "./../../Store/pageStore";
import ValuesComponent from "../../Components/ValuesComponent/ValuesComponent";
import SliderPortfolio from "../../Components/SliderPortfolio/SliderPortfolio";
import Pricing from "./Pricing/Pricing";
import Clients from "../../Components/Clients/Clients";
import ContactForm from "../../Components/ContactForm/ContactForm";
const global_path_server = "http://127.0.0.1:8000/storage/";
const ServiceSinglePage = () => {
  const ref = useLocation();
  const isLoading = useSelector((state) => state.serviceSinglePage.isLoading);
  const isError = useSelector((state) => state.serviceSinglePage.isError);
  const singleServicePageData = useSelector(
    (state) => state.serviceSinglePage.singleServicePageData
  );

  const dispatch = useDispatch();

  const singlePageData = singleServicePageData.serviceSinglePage;
  const accordionData = singleServicePageData.offerArray;

  useEffect(() => {
    dispatch(fetchSingleServicePage(ref.state.id));
  }, []);

  return (
    <PageProvider isError={isError} isLoading={isLoading}>
      <div className={style.single_service_page}>
        <PagetitleComponent
          title={ref.state.title}
          text={ref.state.text}
          bgImage={bgImage}
        />
        <div className={`${style.single_service_page_content} container`}>
          <div className={style.single_service_page__offer}>
            <div className={style.single_service_page__img}>
              <img
                src={global_path_server + singlePageData?.service_img}
                alt={ref.state.title}
              />
            </div>
            <div className={style.single_service_page__description}>
              <h3>We offer</h3>
              <Accordion data={accordionData} />
            </div>
          </div>
        </div>
        <div className={`${style.single_service_steps} container`}>
          <h2>That’s how we do it</h2>
          <StepsComponent data={stepsServicePage} />
        </div>
        <div className={style.single_service_benefits}>
          <div
            className={`${style.single_service_benefits__wrapper} container`}
          >
            <h2>Our benefits</h2>
            <p>
              Our mission is to set the highest standards for construction
              sphere.
            </p>
            <ValuesComponent data={ourBenefits} />
          </div>
        </div>
        <div className={`${style.single_service_related_projects} container`}>
          <SliderPortfolio
            title={"Related projects"}
            data={singleServicePageData.service_projects}
          />
        </div>
        <Pricing />
        <div className={style.single_service_page__clients}>
          <Clients
            bgColor={"#f4f5f6"}
            title={"Supported by 12+ partners"}
            data={singleServicePageData.service_clients}
          />
        </div>

        <ContactForm />
      </div>
    </PageProvider>
  );
};

export default ServiceSinglePage;
