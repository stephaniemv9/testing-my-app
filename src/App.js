import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>

        <div className="search">
          <form>
            <div className="row">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Search City"
                  autoComplete="off"
                ></input>
              </div>

              <div className="col-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="search"
                ></input>
              </div>
            </div>
          </form>
        </div>

        <div className="weather-summary">
          <h2 className="search-city">New York</h2>
          <div className="weather-date-time">Monday 12:00PM</div>
          <div className="weather-detail">Cloudy</div>
        </div>

        <div className="weather-summary-two">
          <div className="row">
            <div className="col-sm-6 weather-degrees">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="cloudy"
              />
              18° C
            </div>

            <div className="col-sm-6">
              <div className="weather-detail-three">Precipitation: 82%</div>
              <div className="weather-detail-four">Wind: 4km/h</div>
            </div>
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
