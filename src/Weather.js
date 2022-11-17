import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  if (weather.ready) {
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
        <h1>{weather.city}</h1>
        <ul>
          <li> Thursday 08:00</li>
          <li className="text-capitalize"> {weather.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex">
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png"
                alt="Partly cloudy"
              />
              <span className="temperature">
                {Math.round(weather.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 20%</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "oe5d3f03a45e2488e5b468f830ba493t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
