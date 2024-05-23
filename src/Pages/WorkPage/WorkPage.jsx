import React, { useEffect, createContext, useContext, useState } from "react";
import PageProvider from "../../Components/PageProvider/PageProvider";
import style from "./work_page.module.scss";
import PagetitleComponent from "../../Components/PagetitleComponent/PagetitleComponent";
import { WorkPageData } from "../../Store/pageStore";
import work_bg from "../../Images/background_work.png";
import { useSelector, useDispatch } from "react-redux";
import loadMoreImg from "../../Images/Convert.png";
import {
  fetchWorkPage,
  fetchWorkPageServiceId,
} from "../../Store/Reducers/WorkPageReducer";
import ServiceListRender from "../../Components/ServiceListRender/ServiceListRender";
import WorkListRender from "./WorkListRender/WorkListRender";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Clients from "../../Components/Clients/Clients";
import ContactForm from "../../Components/ContactForm/ContactForm";
export const ServiceListActiveValue = createContext(null);

const WorkPage = () => {
  const isError = useSelector((state) => state.workPage.isError);
  const isLoading = useSelector((state) => state.workPage.isLoading);
  const workPage = useSelector((state) => state.workPage.workPageData);
  const dispatch = useDispatch();
  const [active, setActive] = useState(1);
  const [loadValue, setLoadValue] = useState({ type: active, limit: 6 });
  const isErrorProjectArray = useSelector(
    (state) => state.workPage.isErrorProjectArray
  );
  const isLoadingProjectArray = useSelector(
    (state) => state.workPage.isLoadingProjectArray
  );
  const projectArray = useSelector((state) => state.workPage.projectArray);

  useEffect(() => {
    dispatch(fetchWorkPageServiceId(loadValue));
  }, [loadValue]);

  useEffect(() => {
    dispatch(fetchWorkPage());
  }, []);

  const loadMore = () => {
    console.log(projectArray.service_types_count);

    if (!projectArray.service_projects_Array.service_types_count) {
      setLoadValue({ ...loadValue, limit: loadValue.limit + 3 });
    }
  };

  return (
    <PageProvider isError={isError} isLoading={isLoading}>
      <div className={style.work_page}>
        <PagetitleComponent
          bgImage={work_bg}
          title={WorkPageData.title}
          text={WorkPageData.text}
        />
        <div className={`${style.work_page_list} `}>
          <ServiceListActiveValue.Provider value={{ loadValue, setLoadValue }}>
            <ServiceListRender data={workPage.service_list} full={false} />
            <PageProvider
              isError={isErrorProjectArray}
              isLoading={isLoadingProjectArray}
              style={{ height: " 100%" }}
            >
              <WorkListRender data={projectArray.service_projects_Array} />
            </PageProvider>
          </ServiceListActiveValue.Provider>

          {!projectArray.service_projects_Array?.service_types_count ? (
            <div className={`${style.work_page_loadMore} container`}>
              <img src={loadMoreImg} alt="loadMoreImg" />
              <h2 onClick={() => loadMore()}>Load more</h2>
            </div>
          ) : (
            ""
          )}

          <Testimonials data={workPage.clients_reviews} />
          <div className="" style={{ marginBottom: "150px" }}>
            <Clients
              bgColor={"#fff"}
              title={"Our clients"}
              data={workPage.service_clients}
            />
          </div>

          <ContactForm />
        </div>
      </div>
    </PageProvider>
  );
};

export default WorkPage;
