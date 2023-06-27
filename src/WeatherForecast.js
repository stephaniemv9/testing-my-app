import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-sm-3">
          <div className="WeatherForecast-day">Thu</div>

          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="cloudy"
          />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">20°C</span>
            <span className="WeatherForecast-temp-min">10°C</span>
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
}
