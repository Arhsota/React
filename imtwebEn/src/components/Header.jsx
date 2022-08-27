import React, { useState } from "react";
import "../styles/myheader.css";
// import "./description.jsx";
// import market from "../images/google_market.png";
// import flag from "../images/unionjack.png";

const Header = () => {
  return (
    <header className="myheader">
      {/* <img src={market} alt="Logo" width="100" /> */}
      {/* <img src={flag} alt="Logo" width="50" /> */}
      {/* <h1>Ваше здоровье</h1> */}

      <div className="myhref">
        <a href="https://arhsota.github.io/imt-en-desc.html">Description</a>
      </div>
    </header>
  );
};
export default Header;
