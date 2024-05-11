import React from "react";
import style from "./pricing.module.scss";
import { pricingList, listMark } from "../../../Store/pageStore";
import MyButton from "../../../Components/MyButton/MyButton";
const Pricing = () => {
  const renderTable = () => {
    return pricingList.map((item) => {
      return (
        <tr
          key={item.id}
          style={
            item.id % 2
              ? { backgroundColor: "white" }
              : { backgroundColor: "#F4F5F6" }
          }
        >
          <td>{item.title}</td>
          <td>
            {item.basic == "true"
              ? listMark
              : item.basic == "false"
              ? ""
              : item.basic}
          </td>
          <td>
            {item.standart == "true"
              ? listMark
              : item.standart == "false"
              ? ""
              : item.standart}
          </td>
          <td>
            {item.business == "true"
              ? listMark
              : item.business == "false"
              ? ""
              : item.business}
          </td>
        </tr>
      );
    });
  };

  return (
    <div className={style.single_service_pricing}>
      <div className={`${style.single_service_pricing__wrapper} container`}>
        <h2>Pricing</h2>
        <p>We offer you three categories of construction.</p>

        <table>
          <thead>
            <tr>
              <th scope="col">Items</th>
              <th scope="col">
                Basic <br /> <span>$20 per m2</span>
              </th>
              <th scope="col">
                STANDARD <br />
                <span> $30 per m2</span>
              </th>
              <th scope="col">
                BUSINESS <br />
                <span>$40 per m2</span>
              </th>
            </tr>
          </thead>
          <tbody>{renderTable()}</tbody>
          <tfoot>
            <td></td>
            <td>
              <MyButton>send request</MyButton>
            </td>
            <td>
              <MyButton>send request</MyButton>
            </td>
            <td>
              <MyButton>send request</MyButton>
            </td>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Pricing;
