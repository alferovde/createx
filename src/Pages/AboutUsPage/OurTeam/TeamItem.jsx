import React from "react";
import style from "./our_team.module.scss";
import { svgSprite } from "../../../Store/localStore";
const global_path_server = process.env.REACT_APP_STORAGE_SERVER;

const TeamItem = ({ img, name, role }) => {
  const renderSocialLink = () => {
    return svgSprite.map((item) => {
      if (item.id == 2 || item.id == 5) {
        return undefined;
      } else {
        return <li key={item.id}>{item.svg}</li>;
      }
    });
  };

  return (
    <div className={style.team_card}>
      <div className={style.team_card_mg}>
        <img src={global_path_server + img} alt={name} />
        <div className={style.team_card_links}>
          <ul>{renderSocialLink()}</ul>
        </div>
      </div>
      <div className={style.team_card_info}>
        <p>{name}</p>
        <span>{role}</span>
      </div>
    </div>
  );
};

export default TeamItem;
