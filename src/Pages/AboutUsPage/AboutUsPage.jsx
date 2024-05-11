import React, { useEffect } from "react";
import style from "./aboutus.module.scss";
import bgImage from "../../Images/background_aboutus.png";
import PagetitleComponent from "../../Components/PagetitleComponent/PagetitleComponent";
import PageProvider from "../../Components/PageProvider/PageProvider";
import { AboutPage } from "../../Store/pageStore";
import StatisticList from "./StatisticList/StatisticList";
import CEOComponent from "./CEOComponent/CEOComponent";
import ValuesComponent from "../../Components/ValuesComponent/ValuesComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchAboutPAge } from "../../Store/Reducers/AboutPageReducer";
import AboutSlider from "./AboutSlider/AboutSlider";
import Clients from "../../Components/Clients/Clients";
import OurTeam from "./OurTeam/OurTeam";
import WorldMap from "./WorldMap/WorldMap";
import ContactForm from "../../Components/ContactForm/ContactForm";
const AboutUsPage = () => {
  const isLoading = useSelector((state) => state.aboutPage.isLoading);
  const isError = useSelector((state) => state.aboutPage.isError);
  const aboutPageData = useSelector((state) => state.aboutPage.aboutPageData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAboutPAge());
  }, []);
  return (
    <PageProvider isError={isError} isLoading={isLoading}>
      <div className={style.about_us}>
        <PagetitleComponent
          bgImage={bgImage}
          title={AboutPage.title}
          text={AboutPage.text}
        />
        <div className={`${style.about_us_statistik} container`}>
          <StatisticList />
        </div>

        <CEOComponent />
      </div>

      <div className={`${style.about_us_values} `}>
        <div className="container">
          <div className={`${style.about_us_values__title}`}>
            <h2>Our core values</h2>
            <p className="paragraph_title">
              Our mission is to set the highest standards for construction
              sphere.
            </p>
          </div>
          <ValuesComponent data={aboutPageData.values_items} />
        </div>
      </div>

      <AboutSlider data={aboutPageData.about_slider} />
      <Clients
        bgColor={"#fff"}
        title={"Our partners"}
        sub_title={"We are supported by 12+ industry bodies and media partners"}
        data={aboutPageData.service_clients}
        full
      />

      <OurTeam data={aboutPageData.our_team} />
      <WorldMap />
      <ContactForm />
    </PageProvider>
  );
};

export default AboutUsPage;
