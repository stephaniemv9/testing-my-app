import React from "react";

export default function WeatherForecast() {
  return (
    <div>
      <div className="row future-weather">
        <div className="col-sm-3">
          Thu
          <br />
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="cloudy"
          />
          <br />
          20°C
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
