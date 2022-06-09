import React from "react";
import "./OurBusinessPage.css";
import BGPhoto from "../../Images/service4.jpg"

export default function OurBusinessPage() {
  return (
    <div>
      <div className="ourBusinessContainer">
    
        <p className="heading">
          <span>OUR</span> BUSINESS
        </p>
        <div className="firstRowBusiness">
          <div>
        <p>
                - We study the preliminary project with you and its economic
                profitability
              </p>
              <p>
                - We select for you the best equipment adapted to your situation
                and location
              </p>
              <p>- We install the equipment and start your production</p>
              <p>
                - It is an integrated turnkey solution that respects your needs
              </p>
              </div>
              <img src={BGPhoto} className="firstRowImage" alt="Our-Business-Image"/>
        </div>
       
        <p className="headingInfoO">
          We define together the specifications of your project.
        </p>
        <p className="headingInfoO">
          We study together the feasibility and economic reality ... it is not a
          question of dreaming but of realizing and winning.
        </p>
        <p className="headingInfoO">
          We seek for you the best technical solutions adapted to your budget
          and to the economic, climatic and social environment of the project.
        </p>
        <p className="headingInfoO">
          For example, in some very humid countries, electromechanical rather
          than electronic technology will be preferred.
        </p>
        <p className="headingInfoO">
          After having chosen the technical solutions and adapted certain
          machines, we move on to the on-site installation phase and especially
          the start-up of the production line and the quality monitoring of the
          product.
        </p>
        <p className="headingInfoO">
          Our job is to match your budget, your product, the machines, the
          people.
        </p>
        <p className="headingInfoO">
          We manage it all for you…Focus on commercial launch.
        </p>
      </div>
    </div>
  );
}
