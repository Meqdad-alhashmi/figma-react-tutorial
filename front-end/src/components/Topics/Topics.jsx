import React, { useState } from "react";
import "./Topics.css";
import {
  rectangle13,
  rectangle14,
  rectangle15,
  rectangle16,
  rectangle17,
  rectangle18,
  group7,
} from "../../assets/index";

const Topics = () => {
  const [currentImg, setCurrentImg] = useState(rectangle13);

  return (
    <section id="topics" className="black">
      <div className="wrapper">
        <h2>What will you learn?</h2>
        <div className="content-container">
          <ul className="topics-list">
            <li onMouseEnter={() => setCurrentImg(rectangle14)}>
              What are frequencies?
            </li>
            <li onMouseEnter={() => setCurrentImg(rectangle13)}>
              Using the DAW
            </li>
            <li onMouseEnter={() => setCurrentImg(rectangle15)}>
              Vocals Processing
            </li>
            <li onMouseEnter={() => setCurrentImg(rectangle16)}>Mixing</li>
            <li onMouseEnter={() => setCurrentImg(rectangle17)}>
              Mixing Console
            </li>
            <li onMouseEnter={() => setCurrentImg(rectangle18)}>Mastering</li>
          </ul>
          <div className="topic-img">
            <img src={currentImg} alt="" />
          </div>
        </div>
        <img src={group7} alt="" className="bg-element-1" />
      </div>
    </section>
  );
};

export default Topics;
