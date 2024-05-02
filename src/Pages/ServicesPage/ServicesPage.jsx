import React, { useEffect } from "react";
import PageProvider from "../../Components/PageProvider/PageProvider";
import style from "./service_page.module.scss";
import PagetitleComponent from "../../Components/PagetitleComponent/PagetitleComponent";
import service_bg from "../../Images/background_service.png";
import { ServicePage } from "../../Store/pageStore";
import { useDispatch, useSelector } from "react-redux";
import { fetchServicePage } from "../../Store/Reducers/ServicePageReducer";
import RenderServiceList from "./RenderServiceList/RenderServiceList";
import ContactForm from "../../Components/ContactForm/ContactForm";
const ServicesPage = () => {
  const isError = useSelector((state) => state.servicePage.isError);
  const isLoading = useSelector((state) => state.servicePage.isLoading);
  const serviceData = useSelector((state) => state.servicePage.servicePageData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServicePage());
  }, []);

  return (
    <PageProvider isError={isError} isLoading={isLoading}>
      <div className={style.service__page}>
        <PagetitleComponent
          bgImage={service_bg}
          title={ServicePage.title}
          text={ServicePage.text}
        />
        <RenderServiceList data={serviceData} />
        <ContactForm />
      </div>
    </PageProvider>
  );
};

export default ServicesPage;
