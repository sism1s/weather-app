import React from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import styles from './City.module.scss';

function City({
  data, fiveDayForecast, toggle, changeToggle,
}) {
  const compassSector = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW',
    'N',
  ];

  function dayname(date) {
    return new Date(date * 1000)
      .toLocaleDateString('en', {
        weekday: 'long',
      })
      .substring(0, 3);
  }

  return (
    <div className={styles.city}>
      <div className={styles.city_details}>
        <p className={styles.city_details_name}>
          {data.name}
          ,
          {data.weather}
        </p>
        <div className={styles.city_details_icon}>
          <img
            src={`http://openweathermap.org/img/w/${data.icon}.png`}
            alt="icon"
          />
        </div>
      </div>
      <div className={styles.city_main}>
        <p className={styles.city_main_temp}>
          {data.main?.temp && Math.round(data.main?.temp)}
          &deg;
        </p>
        <div className={styles.city_main_details}>
          <p>
            Feels Like:
            {Math.round(data.main?.feels_like)}
            &deg; C
          </p>
          <p>
            Pressure:
            {data.main?.pressure}
            {' '}
            hPa
          </p>
          <p>
            Humidity:
            {data.main?.humidity}
            %
          </p>
          <p>
            Wind:
            {' '}
            {Math.round(data.wind?.speed)}
            {' '}
            km/h,
            {' '}
            {compassSector[(data.wind?.deg / 22.5).toFixed(0)]}
          </p>
        </div>
      </div>

      <div className={styles.city_button_container}>
        {toggle ? (
          <IndeterminateCheckBoxIcon
            onClick={() => changeToggle()}
            fontSize="large"
            style={{ cursor: 'pointer' }}
          />
        ) : (
          <AddBoxIcon
            onClick={() => changeToggle()}
            fontSize="large"
            style={{ cursor: 'pointer' }}
          />
        )}
      </div>
      {toggle && (
        <div className={styles.city_forecast}>
          <h3 className={styles.city_forecast_title}>5 Day forecast</h3>
          <div className={styles.city_forecast_container}>
            {fiveDayForecast.map(
              (forecast) => forecast && (
              <div key={forecast.dt} className={styles.city_forecast_container_row}>
                <p>{forecast && dayname(forecast.dt)}</p>
                <p>
                  {Math.round(forecast.main?.temp)}
                  &deg;
                </p>
                <p>{forecast.weather && forecast.weather[0].main}</p>
              </div>
              ),
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default City;
