import React from "react";
import style from "./pagination.module.scss";
const Pagination = ({ data, dataPage, setDataPage }) => {
  let arr = new Array(data).fill("");

  const renderPaginationLinks = () => {
    return arr.map((item, index) => {
      return (
        <li
          key={index}
          className={dataPage.currentPage === index + 1 ? style.active : ""}
          onClick={() => setDataPage({ ...dataPage, currentPage: index + 1 })}
        >
          {index + 1}
        </li>
      );
    });
  };

  return (
    <ul className={style.pagination__wrapper}>{renderPaginationLinks()}</ul>
  );
};

export default Pagination;
