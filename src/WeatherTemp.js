import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemp">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
        <div className="dayNight-temp">
          <span>Day {Math.round(props.celsius)}</span>
          <span>
            °C |{" "}
            <a href="/" onClick={convertToFahrenheit}>
              °F
            </a>
          </span>
          <span> • Night {Math.round(props.celsius)}</span>
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemp">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>{" "}
          | °F
        </span>

        <div className="dayNight-temp">
          <span>Day {Math.round(fahrenheit)}</span>
          <span>
            <a href="/" onClick={convertToCelsius}>
              °C{" "}
            </a>{" "}
            | °F
          </span>

          <span> • Night {Math.round(fahrenheit)}</span>
          <span>
            <a href="/" onClick={convertToCelsius}>
              °C{" "}
            </a>{" "}
            | °F
          </span>
        </div>
      </div>
    );
  }
}