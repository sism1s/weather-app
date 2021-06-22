import data from "../config/openweathermap.json";
import axios from "axios";

export const getWeather = () => {
  return axios.get(
    `${data.host}?q=${data.city}&units=metric&appid=${data.key}`
  );
};

export const getForecast = () => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${data.city}&appid=${data.key}`
  );
};
