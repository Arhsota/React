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
          Этот калькулятор индекса массы тела и BMR, не является медицинским
          продуктом и несет чисто информативный характер.
        </h3>
        <h3 className="head3">
          Все права зарезервированы. И принадлежат Севастьянову Андрею.
          Copyright (c)2022
        </h3>
      </span>

      <a
        href="https://play.google.com/store/apps/details?id=com.arhsota.android.imt"
        target="_blank"
      >
        {" "}
        <img src={market} alt="Google Market" width="100" />
      </a>
      <a href="№" target="_blank">
        {" "}
        <img src={flag} alt="Union Jack" width="50" />
      </a>
    </footer>
  );
};
export default Footer;
