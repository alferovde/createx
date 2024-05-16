import React, { useEffect } from "react";
import PageProvider from "../../Components/PageProvider/PageProvider";
import { useLocation } from "react-router-dom";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import style from "./project_singlepage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchSingleProjectPage } from "../../Store/Reducers/SingleProjectPageReducer";
import SlingleProjectSlider from "./SlingleProjectSlider";
import ConstructiveDecisions from "./ConstructiveDecisions/ConstructiveDecisions";
import SliderPortfolio from "../../Components/SliderPortfolio/SliderPortfolio";
import ContactForm from "./../../Components/ContactForm/ContactForm";
const ProjectSinglePage = () => {
  const isError = useSelector((state) => state.projectSinglePage.isError);
  const isLoading = useSelector((state) => state.projectSinglePage.isLoading);
  const singleProjectData = useSelector(
    (state) => state.projectSinglePage.SingleProjectData
  );
  const dispatch = useDispatch();
  const params = useLocation();

  const slider = singleProjectData.project_slider;

  useEffect(() => {
    dispatch(fetchSingleProjectPage(params.state.id));
  }, []);

  return (
    <PageProvider isError={isError} isLoading={isLoading}>
      <div className={style.project_single_page}>
        <div className={`${style.project_single_page__hero} container`}>
          <Breadcrumb />

          <h2>{singleProjectData.projectPageData?.title}</h2>
          <SlingleProjectSlider data={slider} />
          <div className={style.project_single_page__description}>
            <div className={style.project_single_page__description__goal}>
              <h3>Project goal</h3>
              {singleProjectData.projectPageData?.project_goal
                .split("&")
                .map((item) => {
                  return <p key={item}>{item}</p>;
                })}
            </div>
            <div className={style.project_single_page__description__attributes}>
              <p>
                <span>location</span>
                {singleProjectData.projectPageData?.location}
              </p>
              <p>
                <span>client</span>
                {singleProjectData.projectPageData?.client}
              </p>
              <p>
                <span>architect</span>
                {singleProjectData.projectPageData?.architect}
              </p>
              <p>
                <span>size</span>
                {singleProjectData.projectPageData?.size}
              </p>
              <p>
                <span>value</span>
                {singleProjectData.projectPageData?.value}
              </p>
              <p>
                <span>completed</span>
                {singleProjectData.projectPageData?.competed}
              </p>
            </div>
          </div>
        </div>
        <ConstructiveDecisions />
        <SliderPortfolio
          data={singleProjectData.service_projects_Array}
          title={"Similar projects"}
        />
        <ContactForm />
      </div>
    </PageProvider>
  );
};

export default ProjectSinglePage;
