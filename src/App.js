import React, { useState, useEffect } from 'react';
import { getWeather, getForecast } from './adapters/openweathermap';
import styles from './App.module.scss';
import Layout from './components/Layout/Layout';
import City from './components/City/City';
import { capitalize } from './constants/constants';

function App() {
  const [data, setData] = useState({
    weather: '',
    name: '',
    icon: '',
    main: '',
    wind: '',
  });

  const [forecast, setForecast] = useState([]);

  const [toggle, setToggle] = useState(true);
  const [displayMessage, setDisplayMessage] = useState(false);

  const fiveDayForecast = [];

  for (let i = 0; i < forecast.length; i += 8) {
    fiveDayForecast.push(forecast[i]);
  }

  useEffect(() => {
    getWeather()
      .then((res) => {
        if (!res.data?.weather?.[0]) {
          setDisplayMessage(true);
          return;
        }
        setData({
          weather: capitalize(res.data.weather[0].description),
          name: res.data.name,
          icon: res.data.weather[0].icon,
          main: res.data.main,
          wind: res.data.wind,
        });
      })
      .catch((err) => alert(err));
  }, []);

  useEffect(() => {
    if (toggle) {
      getForecast()
        .then((res) => res.data.list && setForecast(res.data.list))
        .catch((err) => alert(err));
    }
  }, [toggle]);

  return (
    <div className="App">
      <Layout>
        { displayMessage ? (
          <p className={styles.displayMessage}>
            Sorry, something went wrong. Please try later.
          </p>
        )
          : (data.name
            && (
            <City
              data={data}
              fiveDayForecast={fiveDayForecast}
              changeToggle={() => setToggle(!toggle)}
              toggle={toggle}
            />
            )
          ) }

      </Layout>
    </div>
  );
}

export default App;
