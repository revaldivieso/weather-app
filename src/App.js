import React, { Component } from 'react';
import Layout from './Components/Layout';
import WeatherInfo from './Components/WeatherInfo';
import WeatherForm from './Components/WeatherForm';
import { WEATHER_KEY } from './Keys';
import logo from './Images/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  state = {
    temperature: '',
    description: '',
    humidity: '',
    wind_speed: '',
    city: '',
    country: '',
    feels_like: '',

    error: null,
  };

  getWeather = async (e) => {
    e.preventDefault();
    const { city, country } = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;

    if (cityValue && countryValue) {
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric&lang=es`;
      const response = await fetch(API_URL);
      const data = await response.json();

      this.setState({
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        city: data.name,
        country: data.sys.country,
        visibility: data.visibility,
        feels_like: data.main.feels_like,
        clouds_all: data.clouds.all,

        error: null,
      });
    } else {
      this.setState({ error: 'Por favor ingresa una cuidad y país.' });
    }
  };

  render() {
    return (
      <Layout>
        <header className='app_header'>
          <img src={logo} className='logo' alt='logo' />
        </header>
        <div className='container p-4'>
          <div className='row'>
            <div className='col-md-6 mx-auto'>
              <WeatherForm getWeather={this.getWeather} />
              <br></br>
              <WeatherInfo {...this.state} />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default App;
