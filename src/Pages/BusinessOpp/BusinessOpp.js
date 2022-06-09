import React from "react";
import "./BusinessOpp.css";

export default function BusinessOpp() {
  return (
    <div>
      {/* <CustomHeader /> */}
      <div className="BusinessOppContainer">
        <p className="heading">
          <span>BUSINESS</span> OPPOTUNITIES
        </p>
        <p className="headingInfoO">
          Very often customers or partners upgrade their productions and put
          their old production lines up for sale.
        </p>
        <p className="headingInfoO">
          It also allows you to pay less and slowly start making a product by
          learning about the productive industry.
        </p>
        <p className="headingInfoO">
          We offer a wide range of complete production lines available
          immediately.
        </p>
        <p className="headingInfo">As well in</p>
        <ol className="orderList">
          <p>Agrifood</p>
          <li>Milk, water or juice production line</li>
          <li>Egg tray production line</li>
          <li>Butter production line</li>
          <li>Ice cream production line</li>
        </ol>
        <p className="headingInfoO">
          And many other lines related to the food industry in all its forms.
        </p>

        <ol className="orderList">
          <p>Plastics</p>
          <li>PET bottle production line</li>
          <li>Plastic table chair manufacturing line</li>
          <li>Plastics accessories production line</li>
          <li>Line and production of all accessories injected into molds</li>
          <li>PP PE PPR PRR PVC pipe production line</li>
        </ol>
        <ol className="orderList">
          <p>Chemical</p>
          <li>Paint mixing production lines</li>
          <li>Chemical packaging production line</li>
        </ol>
        <ol className="orderList">
          <p>Drug production</p>
          <li>Medicine packaging production line</li>
          <li>
            Assembly and packaging production line for medicines, syrups,
            powder, ointments
          </li>
        </ol>
        <ol className="orderList">
          <p>Electronic assembly line</p>
          <li>
            Assembly and packaging production line for telephony, television,
            electronic components, etc.
          </li>
          <li>Solar panel assembly line</li>
        </ol>

        <p className="headingInfoO">
          And many other opportunities. Of course, these production lines are
          100% reviewed by our experts and set up, commissioned and guaranteed
          by us.
        </p>
      </div>
    </div>
  );
}
