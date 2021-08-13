import React from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import styles from './City.module.scss';
import { compassSector, dayname } from '../../constants/constants';

function City({
  data, fiveDayForecast, toggle, changeToggle,
}) {
  return (
    <div className={styles.city}>
      <div className={styles.city_details}>
        {data.name && data.weather
        && (
        <p className={styles.city_details_name}>
          {data.name}
          ,
          {' '}
          {data.weather}
        </p>
        ) }
        <div className={styles.city_details_icon}>
          <img
            src={`http://openweathermap.org/img/w/${data.icon}.png`}
            alt="icon"
          />
        </div>
      </div>
      <div className={styles.city_main}>
        {data.main.temp
        && (
        <p className={styles.city_main_temp}>
          {Math.round(data.main.temp)}
          &deg;
        </p>
        )}
        <div className={styles.city_main_details}>
          {data.main.feels_like && (
          <p>
            Feels Like:
            {' '}
            {Math.round(data.main.feels_like)}
            &deg; C
          </p>
          )}
          { data.main.pressure
          && (
          <p>
            Pressure:
            {' '}
            {data.main.pressure}
            {' '}
            hPa
          </p>
          )}
          { data.main.humidity
          && (
          <p>
            Humidity:
            {' '}
            {data.main.humidity}
            %
          </p>
          ) }
          { data.wind.speed && data.wind.deg
          && (
          <p>
            Wind:
            {' '}
            {Math.round(data.wind.speed)}
            {' '}
            km/h,
            {' '}
            {compassSector[(data.wind.deg / 22.5).toFixed(0)]}
          </p>
          )}
        </div>
      </div>
      {data.name
      && (
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
      )}
      {data.name && toggle && (
        <div className={styles.city_forecast}>
          <h3 className={styles.city_forecast_title}>5 Day forecast</h3>
          <div className={styles.city_forecast_container}>
            {fiveDayForecast.map(
              (forecast) => forecast && (
              <div key={forecast.dt} className={styles.city_forecast_container_row}>
                <p>{forecast && dayname(forecast.dt)}</p>
                {forecast.main.temp
                && (
                <p>
                  {Math.round(forecast.main.temp)}
                  &deg;
                </p>
                ) }
                {forecast.weather
                && <p>{forecast.weather[0].main}</p>}
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
