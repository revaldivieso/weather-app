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
            Localización: {props.city} {props.country},
          </p>
          <p>
            Temperatura: {props.temperature} °C, {props.description}
          </p>
          <p>Humedad: {props.humidity} %</p>
          <p>Velocidad del viento: {props.wind_speed}</p>
          <p>Visibilidad: {props.visibility}</p>
        </div>
      ) : (
        <div className='card card-body'></div>
      )}
    </div>
  );
};
export default WeatherInfo;
