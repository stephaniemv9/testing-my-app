import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./App.css";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      dayTemp: response.data.main.temp_max,
      nightTemp: response.data.main.temp_min,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
    });

    setReady(true);
  }

  function search() {
    const apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <div className="container">
          <header className="App-header">Stephanie's Weather Source</header>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="  Search City"
              autoComplete="off"
              id="search-city"
              autoFocus="on"
              onChange={handleCityChange}
            ></input>

            <input
              type="submit"
              className="btn btn-primary search-button"
              value="Search"
            ></input>
          </form>
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
