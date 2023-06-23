import "./App.css";

function App() {
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
        </div>

        <div className="weather-summary">
          <h2 className="city">New York</h2>
          <div className="weather-date-time">Monday 12:00PM</div>
          <div className="weather-detail">Cloudy</div>
        </div>

        <div className="weather-summary-two">
          <div className="row mt-3">
            <div className="col-sm-6">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="cloudy"
                className="weather-link"
              />

              <span className="temperature">18°</span>
              <span className="unit">C</span>
            </div>

            <div className="col-sm-6">
              <div className="precipitation">Precipitation: 82%</div>
              <div className="humidity">Humidity: 15%</div>
              <div className="wind">Wind: 4km/h</div>
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
}

export default App;
