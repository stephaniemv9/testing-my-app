import React from "react";
import DateFile from "./DateFile";
import WeatherTemp from "./WeatherTemp";
import WeatherIcon from "./WeatherIcon";

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
          <div className="col-sm-4 weather-summary-three">
            <WeatherTemp celsius={props.data.temperature} />
          </div>

          <div className="col-sm-4 weather-summary-four">
            <WeatherIcon code={props.data.icon} size={90} />
          </div>

          <div className="col-sm-4 weather-summary-five">
            <div className="weather-description">{props.data.description}</div>
            <div className="humidity">Humidity: {props.data.humidity}%</div>
            <div className="wind">Wind: {props.data.wind}km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
}
