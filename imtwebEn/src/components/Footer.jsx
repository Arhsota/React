import React, { useState } from "react";
import "../styles/myfooter.css";
// import mypic from "../images/Health.png";
import market from "../images/google_market.png";
import flag from "../images/unionjack.png";

const Footer = () => {
  return (
    <footer className="myfooter">
      {/* <img src={mypic} alt="Logo" width="200" /> */}
      <div>
        <h3 className="head3">
          This application Body Mass Index (BMI) is not medical product, but
          only for your information
        </h3>
      </div>
      <div className="lastString">
        <h3 className="head3">
          Version 1.1, All Rights Reserved, Copyright (c)2022{" "}
        </h3>
        <a
          href="https://play.google.com/store/apps/details?id=com.arhsota.android.imt"
          target="_blank"
          className="googleMarket"
        >
          {" "}
          <img src={market} alt="Google Market" width="100" />
        </a>
        <a href="https://imt-web-en.vercel.app/" target="_blank">
          {" "}
          <img src={flag} alt="Union Jack" width="50" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
