import React, { useState } from "react";
import Slider from "react-slick";
import "./Design.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Design() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
  return (
    <div >  
    <div className="slider-container first-carousel">
      <Slider {...settings}>
  <div className="slide bamboo">
    <img className="bamboo" src="/bamboo 1.png" alt="bamboo" />
  </div>
  <div className="slide  palpensions">
    <img src="/palpensions 2.png" alt="palpensions" />
  </div>
  <div className="slide verdant">
    <img src="/verdant3.png" alt="verdant" />
  </div>
  <div className="slide gacmotor">
    <img src="/gacmotor 4.png" alt="gacmotor" />
  </div>
</Slider>
</div>
<div className="slider-container second-carousel">
        <Slider {...settings}>
          <div className="slide bayelsa">
            <img src="/bayelsa 7.jpeg" alt="bayelsa" />
          </div>
          <div className="slide flincap">
            <img src="/flincap.jpg" alt="flincap" />
          </div>
          <div className="slide rentease">
            <img src="/OIP rentease.jpg" alt="rentease" />
          </div>
          <div className="slide ohub">
            <img src="/ohub 10.png" alt="ohub" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Design;



