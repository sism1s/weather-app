import { useState, useEffect } from "react";
import { getWeather } from "./adapters/openweathermap";
import "./App.css";
import Layout from "./components/Layout.jsx";
import City from "./components/City.jsx";

function App() {
  const [data, setData] = useState({
    weather: "",
    name: "",
    icon: "",
    main: "",
  });
  useEffect(() => {
    getWeather()
      .then((res) =>
        setData({
          weather: res.data.weather[0].description,
          name: res.data.name,
          icon: res.data.weather[0].icon,
          main: res.data.main,
        })
      )
      .catch((err) => alert(err));
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
