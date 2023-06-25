import React from "react";

import "./App.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div>
      <Weather />
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
