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

    getForecast().then((res) => console.log(res));
  }, []);

  return (
    <div className="App">
      <Layout>
        <City data={data} />
      </Layout>
    </div>
  );
}

export default App;
