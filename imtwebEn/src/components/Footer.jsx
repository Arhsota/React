import React, { useState } from "react";
import "../styles/myfooter.css";
// import mypic from "../images/Health.png";
import market from "../images/google_market.png";
import flag from "../images/unionjack.png";

const Footer = () => {
  return (
    <footer className="myfooter">
      {/* <img src={mypic} alt="Logo" width="200" /> */}
      <span>
        <h3 className="head3">
          This application is not medical product, and is only for your info
        </h3>
        <h3 className="head3">All rights reserved. Copyright (c)2022</h3>
      </span>

      <a
        href="https://play.google.com/store/apps/details?id=com.arhsota.android.imt"
        target="_blank"
      >
        {" "}
        <img src={market} alt="Google Market" width="100" />
      </a>
      <a href="https://imt-web-en.vercel.app/" target="_blank">
        {" "}
        <img src={flag} alt="Union Jack" width="50" />
      </a>
    </footer>
  );
};
export default Footer;
