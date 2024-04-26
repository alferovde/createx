import React, { useState, useRef, useEffect } from "react";
import style from "./main_video.module.scss";
import video from "../../../Images/about-video.mp4";
const MainVideoSection = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();
  const handlerPalyVideo = () => {
    if (!playVideo) {
      setPlayVideo(!playVideo);
      videoRef.current.play();
    } else if (playVideo) {
      setPlayVideo(!playVideo);
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    videoRef.current.addEventListener("ended", () => setPlayVideo(!playVideo));
  }, [playVideo]);

  return (
    <div className={`${style.main_video__wrapper} container`}>
      <div className={`${style.main_video__title}`}>
        <h2>We are Createx Construction Bureau </h2>
        <p className="paragraph_title">
          We are rightfully considered to be the best construction company in
          the USA.
        </p>
      </div>

      <div className={`${style.main_video__videp}`}>
        {!playVideo ? (
          <div className={`${style.main_video__overlay}`}>
            <div
              className={`${style.main_video__play_btn}`}
              onClick={() => handlerPalyVideo()}
            ></div>
          </div>
        ) : (
          <div
            className={`${style.main_video__pause_btn}`}
            onClick={() => handlerPalyVideo()}
          ></div>
        )}

        <video src={video} ref={videoRef} type="video/mp4" controls />
      </div>
    </div>
  );
};

export default MainVideoSection;
