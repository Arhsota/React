import React, { useState } from "react";
import "../styles/myheader.css";
import "./Description.jsx";
// import market from "../images/google_market.png";
// import flag from "../images/unionjack.png";

const Header = () => {
  return (
    <header className="myheader">
      {/* <img src={market} alt="Logo" width="100" /> */}
      {/* <img src={flag} alt="Logo" width="50" /> */}
      {/* <h1>Ваше здоровье</h1> */}

      <a href="#" onClick={" "}>
        {" "}
        Description
      </a>
    </header>
  );
};
export default Header;
