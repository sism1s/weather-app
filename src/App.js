import { useState, useEffect } from "react";
import { getWeather, getForecast } from "./adapters/openweathermap";
import "./App.css";
import Layout from "./components/Layout.jsx";
import City from "./components/City.jsx";

function App() {
  const [data, setData] = useState({
    weather: "",
    name: "",
    icon: "",
    main: "",
    wind: "",
  });

  const [forecast, setForecast] = useState([]);

  const [toggle, setToggle] = useState(true);

  const fiveDayForecast = [];

  for (let i = 0; i < forecast.length; i += 8) {
    fiveDayForecast.push(forecast[i]);
  }

  function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
  }

  useEffect(() => {
    getWeather()
      .then((res) =>
        setData({
          weather: capitalize(res.data.weather[0].description),
          name: res.data.name,
          icon: res.data.weather[0].icon,
          main: res.data.main,
          wind: res.data.wind,
        })
      )
      .catch((err) => alert(err));
  }, []);

  useEffect(() => {
    toggle &&
      getForecast()
        .then((res) => setForecast(res.data.list))
        .catch((err) => alert(err));
  }, [toggle]);

  return (
    <div className="App">
      <Layout>
        <City
          data={data}
          forecast={fiveDayForecast}
          changeToggle={() => setToggle(!toggle)}
          toggle={toggle}
        />
      </Layout>
    </div>
  );
}

export default App;
