import React from "react";
import "./Slider.scss";

function Slider() {
  return (
    <div className="slider">
      <div className="slider__track">
        <div className="slider__range"></div>
        <span className="slider__thumb slider__thumb_left"></span>
        <span className="slider__thumb slider__thumb_right"></span>
      </div>
      <span className="slider__range-time slider__range-time_start">09:00</span>
      <span className="slider__range-time slider__range-time_end">16:30</span>
    </div>
  );
}

export default Slider;
