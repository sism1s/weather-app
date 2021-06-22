import data from "../config/openweathermap.json";
import axios from "axios";

export const getWeather = () => {
  return axios.get(`${data.host}?q=${data.city}${data.key}`);
};
