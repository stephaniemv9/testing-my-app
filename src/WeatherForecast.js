import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

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
          <div className="col-sm">
            <WeatherForecastDay data={forecast[0]} />
          </div>
          <div className="col-sm">
            <WeatherForecastDay data={forecast[1]} />
          </div>
          <div className="col-sm">
            <WeatherForecastDay data={forecast[2]} />
          </div>
          <div className="col-sm">
            <WeatherForecastDay data={forecast[3]} />
          </div>
          <div className="col-sm">
            <WeatherForecastDay data={forecast[4]} />
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
