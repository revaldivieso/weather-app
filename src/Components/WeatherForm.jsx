import React from 'react';

const WeatherForm = (props) => (
  <div className='card card-body'>
    <form onSubmit={props.getWeather}>
      <div className='form-group'>
        <input
          type='text'
          name='city'
          placeholder='Escribe tu ciudad'
          className='form-control'
          autoFocus
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          name='country'
          placeholder='Escribe tu pais'
          className='form-control'
          autoFocus
        />
      </div>
      <button className='btn btn-success btn-block'>Go</button>
    </form>
  </div>
);
export default WeatherForm;
