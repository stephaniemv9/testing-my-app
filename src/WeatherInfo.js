import React from "react";
import DateFile from "./DateFile";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="weather-summary">
        <h1 className="city">{props.data.city}</h1>
        <div>
          <DateFile date={props.data.date} />
        </div>
      </div>

      <div className="weather-summary-two">
        <div className="row mt-3">
          <div className="col-sm-6 weather-summary-three">
            <img src={props.data.iconUrl} alt="" className="weather-link" />

            <WeatherTemp celsius={props.data.temperature} />
          </div>

          <div className="col-sm-6 weather-summary-four">
            <div className="weather-description">{props.data.description}</div>
            <div className="humidity">Humidity: {props.data.humidity}%</div>
            <div className="wind">Wind: {props.data.wind}km/h</div>
          </div>
        </div>
      </div>

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
