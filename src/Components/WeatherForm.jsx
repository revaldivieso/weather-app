import React from 'react';
import './WeatherInfo.css';
import { AutoComplete } from 'antd';
import Countries from './Country';
import CityChile from './CityChile';

const WeatherForm = (props) => {
  const [options, setOptions] = React.useState([]);
  const [city, setCity] = React.useState(undefined);
  const onChangeCity = (searchCity) => {
    setCity(
      !searchCity
        ? []
        : CityChile.filter((city) =>
            city.toLowerCase().includes(searchCity.toLowerCase())
          ).map((city) => ({ value: city }))
    );
  };
  const onSearch = (searchText) => {
    setOptions(
      !searchText
        ? []
        : Countries.filter((c) =>
            c.toLowerCase().includes(searchText.toLowerCase())
          ).map((c) => ({ value: c }))
    );
  };
  return (
    <div className='card card-body'>
      <form autocomplete='off' onSubmit={props.getWeather}>
        <div className='form-group'>
          <AutoComplete
            type='text'
            id='city'
            name='city'
            style={{ width: 450 }}
            onChange={onChangeCity}
            onSearch={onSearch}
            placeholder='Escribe tu ciudad'
            options={city}
            autoFocus
          />
        </div>
        <div className='form-group'>
          <AutoComplete
            type='text'
            id='country'
            name='country'
            options={options}
            style={{ width: 450 }}
            onSearch={onSearch}
            placeholder='Escribe tu país'
            autoFocus
          />
        </div>
        <button className='btn btn-success btn-block'>Obtener clima</button>
      </form>
    </div>
  );
};
export default WeatherForm;
