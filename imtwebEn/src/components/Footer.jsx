import React, { useState } from "react";
import "../styles/myfooter.css";
// import mypic from "../images/Health.png";

const Footer = () => {
  return (
    <footer className="myfooter">
      {/* <img src={mypic} alt="Logo" width="200" /> */}
      <h3>
        Этот калькулятор индекса массы тела и BMR, не является медицинским
        продуктом и несет чисто информативный характер.
      </h3>
    </footer>
  );
};
export default Footer;
