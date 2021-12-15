import React from "react";

import LightIcon from "../../../resources/lightIcon.svg";
import SliderImage from "../../../resources/card_01.png";
import "./index.css";

export const SliderItem = ({ animation, title, content, ...rest }) => (
  <div className={`slider-item animate__animated ${animation}`} {...rest}>
    <div className="slider-item-image-container">
      <img src={SliderImage} alt="slider" />
    </div>
    <div className="slider-item-content-container box">
      <img className="slider-icon" src={LightIcon} alt="light-icon" />
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  </div>
);
