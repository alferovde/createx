import React from "react";
import style from "./aboutus.module.scss";
import bgImage from "../../Images/background_aboutus.png";
import PagetitleComponent from "../../Components/PagetitleComponent/PagetitleComponent";
import PageProvider from "../../Components/PageProvider/PageProvider";
import { AboutPage } from "../../Store/pageStore";
const AboutUsPage = () => {
  const isError = "sss";
  const isLoading = false;
  return (
    <PageProvider isError={isError} isLoading={isLoading}>
      <div className={style.about_us}>
        <PagetitleComponent
          bgImage={bgImage}
          title={AboutPage.title}
          text={AboutPage.text}
        />
      </div>
    </PageProvider>
  );
};

export default AboutUsPage;
