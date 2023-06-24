import React, { useState } from "react";
import DateFile from "./DateFile";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./App.css";

export default function App() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
      dayTemp: response.data.main.temp_max,
      nightTemp: response.data.main.temp_min,
      date: new Date(response.data.dt * 1000),
    });

    setReady(true);
  }

  if (ready) {
    return (
      <div className="App">
        <div className="container">
          <header className="App-header">Stephanie's Weather Source</header>

          <div className="search">
            <form>
              <input
                type="text"
                placeholder="  Search City"
                autoComplete="off"
                className="search-city"
                autoFocus="on"
              ></input>

              <input
                type="submit"
                className="btn btn-primary search-button"
                value="Search"
              ></input>
            </form>
            <WeatherInfo />
          </div>

          <div className="weather-summary">
            <h1 className="city">{weatherData.city}</h1>
            <div>
              <DateFile date={weatherData.date} />
            </div>
          </div>

          <div className="weather-summary-two">
            <div className="row mt-3">
              <div className="col-sm-6 weather-summary-three">
                <img
                  src={weatherData.iconUrl}
                  alt=""
                  className="weather-link"
                />

                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>

                <div className="dayNight-temp">
                  Day {Math.round(weatherData.dayTemp)}°C • Night{" "}
                  {Math.round(weatherData.nightTemp)}°C
                </div>
              </div>

              <div className="col-sm-6 weather-summary-four">
                <div className="weather-description">
                  {weatherData.description}
                </div>
                <div className="humidity">
                  Humidity: {weatherData.humidity}%
                </div>
                <div className="wind">Wind: {weatherData.wind}km/h</div>
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
        <footer>
          This project was coded by Stephanie Villamar and it is{" "}
          <a
            href="https://github.com/stephaniemv9/testing-my-app"
            rel="noreferrer"
            target="_blank"
          >
            open-sourced.
          </a>
        </footer>
      </div>
    );
  } else {
    const apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
