import React from "react";
import style from "./our_team.module.scss";
import TeamItem from "./TeamItem";
import { useNavigate } from "react-router-dom";
const OurTeam = ({ data }) => {
  const navigate = useNavigate();

  const renderList = () => {
    return data?.map((item) => {
      return <TeamItem key={item.id} {...item} />;
    });
  };

  return (
    <div className={`${style.our_team__wrapper} container`}>
      <div className={style.our_team__title}>
        <h2>Our team</h2>
        <p>People are at the heart of Createx Construction Bureau </p>
      </div>
      <div className={style.our_team__list}>{renderList()}</div>
      <div className={style.our_team__bottom}>
        <p>
          Become a part of the best team in the construction market of the USA.
          <br className={style.our_team__bottom_br} />
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/about/positions");
            }}
          >
            Available Positions
          </a>
        </p>
      </div>
    </div>
  );
};

export default OurTeam;
