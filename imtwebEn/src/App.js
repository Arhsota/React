// import logo from "./logo.svg";
import React, { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

let inputWeight;
let inputLength = 0;
let inputAge;
let resultIMT; // for progress bar
let message;
let styleBMR;
let isStyle;
let resultIMTColor;

const mes_19 = "Keep Calm! You are too young!";
const mes_19_24 = "from 19 to 24 y.o. your BMI should be in 19 до 24";
const mes_25_34 = "from 25 to 34 y.o. your BMI should be in 20 до 25";
const mes_35_44 = "from 35 to 44 y.o. your BMI should be in 21 до 26";
const mes_45_54 = "from 45 to 54 y.o. your BMI should be in 22 до 27";
const mes_55_64 = "from 55 to 64 y.o. your BMI should be in 23 до 28";
const mes_65 = "from 65 y.o. or elder your BMI should be in 24 до 29";
const App = () => {
  const [result, setResult] = useState(0);
  const [resultBMR, setResultBMR] = useState(0);
  const [valueLength, setValueLength] = useState();
  const [valueWeight, setValueWeight] = useState();
  const [valueAge, setValueAge] = useState();
  const [checked, setChecked] = useState(true);
  const [minPb, setValueMinPb] = useState(0);
  const [maxPb, setValueMaxPb] = useState(0);

  return (
    <div className="App">
      <h1 id="mainresult">
        {<Header />}
        BMI {result} BMR {resultBMR}
      </h1>
      <div>
        <form action="" className="main-form">
          <div className="block">
            <div className="container">
              <div>
                <label for="weight">Weight: </label>

                <input
                  className="mainInput"
                  id="weight"
                  type="number"
                  placeholder="Input weight, kg"
                  value={valueWeight}
                  required
                  onChange={(event) => setValueWeight(event.target.value)}
                />
              </div>
              <div>
                <label for="length">Height: </label>
                <input
                  className="mainInput"
                  id="length"
                  type="number"
                  placeholder="Input height, cm"
                  value={valueLength}
                  required
                  onChange={(event) => setValueLength(event.target.value)}
                />
              </div>
              <div>
                <label for="age">Age:</label>
                <input
                  className="mainInput age"
                  type="number"
                  placeholder="Input years"
                  value={valueAge}
                  required
                  onChange={(event) => setValueAge(event.target.value)}
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      <form ation="" className="second-form">
        <div>
          <label for="styleOfLife">Style of life</label>

          <select className="styleOfLife" id="stLife">
            <option value="">Choose style of life</option>
            <option value="1">Sitting</option>
            <option value="2">Low Active</option>
            <option value="3">Middle Active</option>
            <option value="4">Active</option>
            <option value="5">Sportsman</option>
          </select>
        </div>
      </form>

      {/* <label for="Gender">Пол</label> */}
      <div className="Gender">
        <div className="chFemale">
          <label class="custom-checkbox">
            <input
              id="female-check"
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <span>Female</span>
          </label>
        </div>
        <div className="chMale">
          <label className="custom-checkbox">
            <input
              id="male-check"
              type="checkbox"
              checked={!checked}
              onChange={() => setChecked(!checked)}
            />
            <span>Male</span>
          </label>
        </div>
      </div>
      <div className="block">
        <div className="container">
          <div>
            <label for="progress"> {minPb}</label>
          </div>
          <div>
            <progress className="progressBar" id="progress" max="100" value="0">
              {" "}
              30%
            </progress>
          </div>
          <div>
            <label for="progress"> {maxPb}</label>
          </div>
        </div>
      </div>

      <div>
        <button className="button" type="submit" onClick={resultIMT}>
          Calculate
        </button>
      </div>

      <h2>
        With weight- {inputWeight}, height- {(inputLength * 100).toFixed(0)},
        ages-
        {inputAge} Recomendations: {message}
      </h2>
      {<Footer />}
    </div>
  );
  // only change status
  function chengeCheckbox() {
    setChecked(!checked);
  }

  // document.getElementById("femail-check").onchange = is_checked;

  function resultIMT() {
    // isStyle is 4 help to avoid error of non reading selection
    isStyle = document.getElementById("stLife").value;

    if (isStyle === "") {
      alert("Choose style");
      styleBMR = 0;
    }

    // document.getElementById("stLife").onchange = choose_change;

    switch (isStyle) {
      case "1":
        styleBMR = 1.2;
        break;
      case "2":
        styleBMR = 1.375;
        break;
      case "3":
        styleBMR = 1.55;
        break;
      case "4":
        styleBMR = 1.725;
        break;
      case "5":
        styleBMR = 1.9;
        break;
      case "null": {
        alert("Choose style");
        // styleBMR = 1.2;
        break;
      }
      default: {
        // alert("Выберите стиль");
        // styleBMR = 1.2;
        break;
      }
    }

    inputLength = valueLength / 100;
    inputWeight = valueWeight;
    inputAge = valueAge;
    resultIMT = (inputWeight / (inputLength * inputLength)).toFixed(2);
    document.getElementById("progress").value = resultIMT;

    const myBar = document.getElementById("progress");

    resultIMT = setResult(
      (inputWeight / (inputLength * inputLength)).toFixed(2)
    );
    /*  
    if (resultIMT > 27) {
      resultIMTColor = getElementById("mainresult");
      resultIMTColor.
      document.getElementById("mainresult").-webkit-progress-value() = 19;
    }
*/
    // Recomendations
    if (inputAge < 19) {
      message = mes_19;
      document.getElementById("progress").min = 19;
      document.getElementById("progress").max = 24;
    }

    if (inputAge >= 19 && inputAge <= 24) {
      message = mes_19_24;
      document.getElementById("progress").min = 19;
      document.getElementById("progress").max = 24;
    }
    if (inputAge >= 25 && inputAge <= 34) {
      message = mes_25_34;
      document.getElementById("progress").min = 20;
      document.getElementById("progress").max = 25;
    }
    if (inputAge >= 35 && inputAge <= 44) {
      message = mes_35_44;
      document.getElementById("progress").min = 21;
      document.getElementById("progress").max = 26;
    }
    if (inputAge >= 45 && inputAge <= 54) {
      message = mes_45_54;
      document.getElementById("progress").min = 22;
      document.getElementById("progress").max = 27;
    }
    if (inputAge >= 55 && inputAge <= 64) {
      message = mes_55_64;
      document.getElementById("progress").min = 23;
      document.getElementById("progress").max = 28;
    }

    if (inputAge >= 65) {
      message = mes_65;
      document.getElementById("progress").min = 24;
      document.getElementById("progress").max = 29;
    }

    setValueMinPb(document.getElementById("progress").min);
    setValueMaxPb(document.getElementById("progress").max);

    if (checked) {
      setResultBMR(
        (
          (655.0955 +
            9.5634 * inputWeight +
            1.8496 * inputLength * 100 -
            4.6756 * inputAge) *
          styleBMR
        ).toFixed(0)
      );
    } else {
      setResultBMR(
        (
          (66.473 +
            13.7516 * inputWeight +
            5.0033 * inputLength * 100 -
            6.755 * inputAge) *
          styleBMR
        ).toFixed(0)
      );
    }
  }
};

export default App;
