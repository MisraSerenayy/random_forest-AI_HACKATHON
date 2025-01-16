/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";
// Import your image file
import ICON08  from './image/ICONsS-08 1.png';

export const Group = ({ className }) => {
  return (
    <div className={`group ${className}`}>
      <div className="text-wrapper">DATASET</div>

      <div className="overlap-group">
        <img
          className="ICONS"
          alt="Icons"
          src="https://c.animaapp.com/S6ZzFu8i/img/icons-04-1-1.png"
        />

        <img
          className="line"
          alt="Line"
          src="https://c.animaapp.com/S6ZzFu8i/img/line-18-1.svg"
        />

        <img
          className="img"
          alt="Line"
          src="https://c.animaapp.com/S6ZzFu8i/img/line-14-1.svg"
        />

        <div className="div">RESULT 1</div>

        <div className="text-wrapper-2">RESULT 2</div>

        <div className="text-wrapper-3">RESULT 3</div>
      </div>

      <div className="overlap">
        <img
          className="line-2"
          alt="Line"
          src="https://c.animaapp.com/S6ZzFu8i/img/line-9-1.svg"
        />

        <img
          className="line-3"
          alt="Line"
          src="https://c.animaapp.com/S6ZzFu8i/img/line-10-1.svg"
        />

        <img
          className="line-4"
          alt="Line"
          src="https://c.animaapp.com/S6ZzFu8i/img/line-12-1.svg"
        />
      </div>

      <img
        className="line-5"
        alt="Line"
        src="https://c.animaapp.com/S6ZzFu8i/img/line-11-1.svg"
      />

      <img
        className="line-6"
        alt="Line"
        src="https://c.animaapp.com/S6ZzFu8i/img/line-9-1.svg"
      />

      <div className="text-wrapper-4">MAJORITY VOTING</div>

      <div className="text-wrapper-5">FINAL RESULT</div>
    
    </div>
  );
};