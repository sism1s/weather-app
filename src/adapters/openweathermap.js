import axios from 'axios';
import data from '../config/openweathermap.json';

export const getWeather = () => axios.get(
  `${data.host}?q=${data.city}&units=metric&appid=${data.key}`,
);

export const getForecast = () => axios.get(
  `https://api.openweathermap.org/data/2.5/forecast?q=${data.city}&units=metric&appid=${data.key}`,
);
