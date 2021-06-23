import React from "react";
import "./City.scss";

import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";

function City({ data, forecast, toggle, changeToggle }) {
  const compassSector = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
    "N",
  ];

  function dayname(date) {
    return new Date(date * 1000)
      .toLocaleDateString("en", {
        weekday: "long",
      })
      .substring(0, 3);
  }

  return (
    <div className="city">
      <div className="city_details">
        <p className="city_details-name">
          {data.name}, {data.weather}
        </p>
        <div className="city_details-icon">
          <img
            src={`http://openweathermap.org/img/w/${data.icon}.png`}
            alt="icon"
          />
        </div>
      </div>
      <div className="city_main">
        <p className="city_main-temp">{Math.round(data.main.temp)}&deg;</p>
        <div className="city_main-details">
          <p>Feels Like: {Math.round(data.main.feels_like)}&deg; C</p>
          <p>Pressure: {data.main.pressure} hPa</p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>
            Wind: {Math.round(data.wind.speed)} km/h,{" "}
            {compassSector[(data.wind.deg / 22.5).toFixed(0)]}
          </p>
        </div>
      </div>
      <div className="city_button-container">
        {toggle ? (
          <IndeterminateCheckBoxIcon
            onClick={() => changeToggle()}
            fontSize="large"
            style={{ cursor: "pointer" }}
          />
        ) : (
          <AddBoxIcon
            onClick={() => changeToggle()}
            fontSize="large"
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
      {toggle && (
        <div className="city_forecast">
          <h3 className="city_forecast-title">5 Day forecast</h3>
          <div className="city_forecast-container">
            {forecast.map(
              (forecast, i) =>
                forecast && (
                  <div key={i} className="city_forecast-container-row">
                    <p>{forecast && dayname(forecast.dt)}</p>
                    <p>{Math.round(forecast.main?.temp)}&deg;</p>
                    <p>{forecast.weather && forecast.weather[0].main}</p>
                  </div>
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default City;
