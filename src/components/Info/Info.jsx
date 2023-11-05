import React from "react";
import "./Info.css";
import { avatar, iconsVideoFile, group8 } from "../../assets/index";

const Info = () => {
  return (
    <section id="info" className="dark">
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <img src={avatar} alt="" />
            <div className="amount">23,000+</div>
            <div className="type">Students</div>
          </div>
          <div className="info-content">
            <img src={iconsVideoFile} alt="" />
            <div className="amount">26 Hrs</div>
            <div className="type">Video Content</div>
          </div>
        </div>
        <img src={group8} alt="" className="bg-element-2" />
      </div>
    </section>
  );
};

export default Info;
