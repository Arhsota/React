import React, { useState } from "react";
import "../styles/myheader.css";
import market from "../images/google_market.png";
import flag from "../images/unionjack.png";

const Header = () => {
  return (
    <header className="myheader">
      {/* <img src={market} alt="Logo" width="100" /> */}
      {/* <img src={flag} alt="Logo" width="50" /> */}
      {/* <h1>Ваше здоровье</h1> */}
      <a href="№" target="_blank">
        {" "}
        ?
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.arhsota.android.imt"
        target="_blank"
      >
        {" "}
        <img src={market} alt="Google Market" width="100" />
      </a>
      <a href="№" target="_blank">
        {" "}
        <img src={flag} alt="Google Market" width="50" />
      </a>
    </header>
  );
};
export default Header;
