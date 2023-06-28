import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col-sm-3">
            <div className="WeatherForecast-day">{forecast[0].dt}</div>

            <WeatherIcon code="01d" size={50} />

            <div className="WeatherForecast-temp">
              <span className="WeatherForecast-temp-max">
                {Math.round(forecast[0].temp.max)}°C •{" "}
              </span>
              <span className="WeatherForecast-temp-min">
                {Math.round(forecast[0].temp.min)}°C
              </span>
            </div>
          </div>

          <div className="col-sm-3">
            Fri <br />
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="cloudy"
            />
            <br />
            21°C
          </div>
          <div className="col-sm-3">
            Sat <br />
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="cloudy"
            />
            <br />
            21°C
          </div>
          <div className="col-sm-3">
            Sun <br />
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="cloudy"
            />
            <br />
            21°C
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
