import React from "react";
import { useState, useEffect } from "react";
import style from "./ontop.module.scss";
import { upArrow } from "../../Store/localStore";
const OnTop = () => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  const [height, setHeight] = useState(0);
  const [styleTop, setStyleTop] = useState("none");
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
        setHeight(window.scrollY);
      }

      window.addEventListener("scroll", handleResize);
      return () => window.removeEventListener("scroll", handleResize);
    }, [windowDimensions]);

    return windowDimensions;
  }
  useWindowDimensions();

  useEffect(() => {
    if (height > 1000) {
      setStyleTop("block");
    }

    window.addEventListener("scroll", getWindowDimensions());
    return () => {
      window.removeEventListener("scroll", getWindowDimensions());
    };
  }, [height, styleTop]);

  return (
    <div
      className={
        height > 1000
          ? `${style.ontop}  animate__animated animate__bounceInRight`
          : `${style.ontop}  animate__animated animate__bounceOutRight`
      }
      style={{ display: styleTop }}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      {upArrow}
    </div>
  );
};

export default OnTop;
