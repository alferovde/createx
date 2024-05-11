import React, { useEffect, useState } from "react";
import PageProvider from "../../Components/PageProvider/PageProvider";
import { useSelector, useDispatch } from "react-redux";
import PagetitleComponent from "../../Components/PagetitleComponent/PagetitleComponent";
import bgImage from "../../Images/background_positions.png";
import { fetchPositionPAge } from "../../Store/Reducers/AvailablePositionReducer";
import style from "./AvailablePosition.module.scss";
import MyButton from "../../Components/MyButton/MyButton";
import PositionItem from "./PositionItem";
import ValuesComponent from "../../Components/ValuesComponent/ValuesComponent";
import ContactForm from "../../Components/ContactForm/ContactForm";
import ModalWrapper from "../../Components/ModalsComponents/ModalWrapper/ModalWrapper";
import ModalSendSV from "../../Components/ModalsComponents/ModalSendSV/ModalSendSV";
import ModalSubscribe from "../../Components/ModalsComponents/ModalSubscribe/ModalSubscribe";

const AvailablePosition = () => {
  const [modalActive, setModalActive] = useState(false);
  const [activeModalChildren, setActiveModalChildren] = useState(undefined);
  const isLoading = useSelector((state) => state.positionPage.isLoading);
  const isError = useSelector((state) => state.positionPage.isError);
  const positionPageData = useSelector(
    (state) => state.positionPage.positionPageData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPositionPAge());
  }, []);

  const renderList = () => {
    return positionPageData.positions?.map((item) => {
      return <PositionItem key={item.id} {...item} />;
    });
  };

  const handlerGetModalComponent = (typeChildren) => {
    if (typeChildren === "subscribe") setActiveModalChildren(ModalSubscribe);
    if (typeChildren === "send cv") setActiveModalChildren(ModalSendSV);
    setModalActive(!modalActive);
  };
  return (
    <PageProvider isError={isError} isLoading={isLoading}>
      <div className={style.position_page}>
        <PagetitleComponent
          bgImage={bgImage}
          title={"AVAILABLE POSITIONS"}
          text={"Build your career with Createx Construction Bureau."}
        />
        <div className={`${style.position_page__positions} container`}>
          <div className={style.position_page__list}>{renderList()}</div>
          <div className={style.position_page__info}>
            <h3>Didn’t find what you were looking for?</h3>
            <p>
              Send your CV or subscribe to our newsletter to receive information
              about new vacancies.
            </p>
            <div className={style.position_page__btn}>
              <MyButton onClick={() => handlerGetModalComponent("subscribe")}>
                subscribe
              </MyButton>
              <MyButton
                color
                onClick={() => handlerGetModalComponent("send cv")}
              >
                send cv
              </MyButton>
            </div>
          </div>
        </div>
        <div className={`${style.position_page__values} container`}>
          <h2>Employee benefits</h2>
          <p className="paragraph_title">There’s always room for talent.</p>
          <ValuesComponent data={positionPageData.values_items} />
        </div>
        <ContactForm />
        {modalActive && (
          <ModalWrapper
            modalActive={modalActive}
            setModalActive={setModalActive}
          >
            {activeModalChildren}
          </ModalWrapper>
        )}
      </div>
    </PageProvider>
  );
};

export default AvailablePosition;
