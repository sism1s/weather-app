import React from "react";
import "./City.scss";

function City({ data }) {
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

  console.log("city", data);
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
          <p>Humidity: {data.main.humidity} %</p>
          <p>
            Wind: {Math.round(data.wind.speed)} km/h,{" "}
            {compassSector[(data.wind.deg / 22.5).toFixed(0)]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default City;
