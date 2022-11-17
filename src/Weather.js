import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Taipei</h1>
      <ul>
        <li> Thursday 08:00</li>
        <li>Partly cloudy</li>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Partly cloudy"
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">28</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 20%</li>
              <li>Humidity: 82%</li>
              <li>Wind: 11km/h</li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
}
