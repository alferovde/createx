import React from "react";
import style from "./world_map.module.scss";
import map from "../../../Images/map.png";
import { worldMapData } from "../../../Store/localStore";
import { useState, useEffect } from "react";
const WorldMap = () => {
  const [activeCountry, setActiveCounty] = useState(1);

  useEffect(() => {
    if (activeCountry == worldMapData.length) {
      setTimeout(() => {
        setActiveCounty(1);
      }, 1500);
    } else {
      let interval = setInterval(() => {
        setActiveCounty(activeCountry + 1);
      }, 1500);

      return () => clearInterval(interval);
    }
  }, [activeCountry]);

  const renderCountry = () => {
    return worldMapData.map((item) => {
      return (
        <div
          className={style.world_map__country}
          style={{ top: item.position.top, left: item.position.left }}
        >
          {item.flag}
          <div
            className={
              activeCountry !== item.id
                ? `${style.world_map__address}`
                : `${style.world_map__address_active} `
            }
          >
            <h3> {item.country}</h3>
            <p> {item.description}</p>
          </div>
        </div>
      );
    });
  };

  const renderListCountry = () => {
    return worldMapData.map((item) => {
      return (
        <li key={item.id} className={style.world_map_country_list_item}>
          <div className={style.world_map_country_list_item__top}>
            <h3> {item.country}</h3>
            {item.flag}
          </div>

          <p> {item.description}</p>
        </li>
      );
    });
  };

  return (
    <div className={style.world_map}>
      <div className={`${style.world_map__wrapper} container`}>
        <h2>We work worldwide</h2>
        <img src={map} alt="map" />

        {renderCountry()}
        <ul className={style.world_map_country_list}>{renderListCountry()}</ul>
      </div>
    </div>
  );
};

export default WorldMap;
