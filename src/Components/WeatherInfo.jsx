import React from 'react';
import { Divider } from 'antd';
import 'antd/dist/antd.css';
import './WeatherInfo.css';

const WeatherInfo = (props) => {
  return (
    <div className='container'>
      {props.error && (
        <div className='alert alert-danger'>
          <p>{props.error}</p>
        </div>
      )}
      {props.temperature ? (
        <div className='card card-body '>
          <div className='col-md-12 mx-auto'>
            <i className='fas fa-map-marked-alt'></i>
            <p>
              Localización: {props.city}, {props.country}
            </p>
          </div>

          <Divider />

          <div className='col-md-12 mx-auto'>
            <i className='fas fa-temperature-high'></i>
            <p> Temperatura: {props.temperature} °C</p>
          </div>

          <Divider />

          <div className='col-md-12 mx-auto'>
            <i className='fas fa-temperature-low'></i>
            <p> Sensación térmica: {props.feels_like} °C</p>{' '}
          </div>

          <Divider />

          <div className='col-md-12 mx-auto'>
            <i className='fas fa-cloud-sun'></i>
            <p> Condición climática: {props.description}</p>
          </div>

          <Divider />

          <div className='col-md-12 mx-auto'>
            <i className='fas fa-cloud'></i>
            <p>Nubosidad: {props.clouds_all} %</p>
          </div>

          <Divider />
          <div className='col-md-12 mx-auto'>
            <i className='fas fa-water'></i>
            <p>Humedad: {props.humidity} %</p>
          </div>

          <Divider />

          <div className='col-md-12 mx-auto'>
            <i className='fas fa-wind'></i>

            <p> Velocidad del viento: {props.wind_speed} m/s</p>
          </div>

          <Divider />

          <div className='col-md-12 mx-auto'>
            <i className='far fa-eye'></i>
            <p> Visibilidad: {props.visibility} m</p>
          </div>
        </div>
      ) : (
        <div className='container  col-md-12 mx-auto'></div>
      )}
    </div>
  );
};
export default WeatherInfo;
