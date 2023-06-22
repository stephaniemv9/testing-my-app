import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <span>New York </span>
          <span>Quito </span>
          <span>Rome </span>
          <span>Madrid </span>
          <span>Denver </span>
        </header>

        <div className="search-bar">
          <form>
            <input
              type="text"
              placeholder="Enter city name"
              autoComplete="off"
            ></input>
            <input
              type="submit"
              className="btn btn-primary"
              value="search"
            ></input>
            <button className="float-left btn btn-primary">
              Current location
            </button>
          </form>
        </div>

        <div className="weather-summary">
          <h2 className="search-city">New York</h2>
          <div className="weather-date-time">Monday 12pm</div>
          <div className="weather-detail">Cloudy</div>
        </div>

        <div className="row">
          <div className="col-sm-6">
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
