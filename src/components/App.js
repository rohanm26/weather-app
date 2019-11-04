import React, { Component } from 'react';
import axios from 'axios';
import { Weather } from './Weather';

export class App extends Component {
  state = {
    API_KEY: 'c4b44bea94bf31821a3b3a3ce67eaf87',
    cities: ['London', 'Birmingham', 'Manchester'],
    weatherData: [],
    tempUnit: false
  }

  handleSubmit = (e) => {
    console.log(this.state.tempUnit)
    // this.setState({
    //   [e.target.name]: e.target.value
    // }); setTimeout(() => { console.log(this.state) }, 0)
  }

  handleChange = (city) => (e) => {
    e.preventDefault();
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.state.API_KEY}&units=metric`)
      .then(res => this.setState({
        weatherData: res.data
      }))
    console.log(this.state.weatherData)
  }

  render() {
    return (
      <div>
        <Weather className="App"
          handleSubmit={this.handleSubmit}
          cities={this.state.cities}
          handleChange={this.handleChange}
          data={this.state.weatherData}
          temp={this.state.tempUnit} />
      </div>
    )
  }
}