import React from 'react';

const WeatherInfo = (props) => {
  return (
    <div>
      {props.error && (
        <div className='alert alert-danger'>
          <p>{props.error}</p>
        </div>
      )}
      {props.temperature ? (
        <div className='card card-body'>
          <p>
            Localización: {props.city}, {props.country}
          </p>
          <p>Temperatura: {props.temperature} °C</p>
          <p> Sensación térmica: {props.feels_like} °C</p>
          <p>Condición climática: {props.description}</p>
          <p>Nubosidad: {props.clouds_all} %</p>
          <p>Humedad: {props.humidity} %</p>
          <p>Velocidad del viento: {props.wind_speed} m/s</p>
          <p>Visibilidad: {props.visibility} m</p>
        </div>
      ) : (
        <div className='card card-body'></div>
      )}
    </div>
  );
};
export default WeatherInfo;
