import React, { Component } from 'react';
import axios from 'axios';
import { Weather } from './Weather';
import {Cities} from './Cities';

export class App extends Component {
  state = {
    API_KEY: 'c4b44bea94bf31821a3b3a3ce67eaf87',
    cities: ['London', 'Birmingham', 'Manchester'],
    weatherData: [],
    temp: false
  }

  handleChange = (e) => {
    this.setState({
      temp: !this.state.temp
    });
  }

  handleSubmit = (city) => (e) => {
    e.preventDefault();
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},GB&appid=${this.state.API_KEY}&units=metric`)
      .then(res => this.setState({
        weatherData: res.data
      }))
  }

  render() {
    return (
      <div className="App">
        <h1>Live Weather</h1>
        <Cities
          cities={this.state.cities}
          handleSubmit={this.handleSubmit}
          data={this.state.weatherData}/>
        <Weather 
          handleChange={this.handleChange}
          data={this.state.weatherData}
          temp={this.state.temp} />
      </div>
    )
  }
}