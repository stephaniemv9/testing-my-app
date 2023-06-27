import React from "react";

export default function WeatherForecast() {
  return (
    <div className="future-weather">
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
