import React from "react";
import "../styles/Weather.css";

export const Weather = props => {
  return (
    <div className="Weather">
      <h1>Weather App</h1>
      {props.cities.map(city => {
        return (
          <button
            className="btn mx-5 btn-primary"
            key={city}
            onClick={props.handleChange(city)}
          >
            {city}
          </button>
        );
      })}
      {props.data.length !== 0 ? (
        <div>
          <p>
            Description: <b>{props.data.weather[0].description}</b>
            <br />
            Temperature in <b>{props.temp}</b> :{" "}
            <b>
              {props.temp === false
                ? Math.round(props.data.main.temp)
                : Math.round(((props.data.main.temp - 32) * 5) / 9)}
            </b>
            <br />
            Wind speed: <b>{props.data.wind.speed}</b>
            <br />
          </p>
          <button
            className="btn btn-info"
            name="Fahrenheit"
            value={!!!props.temp}
            onClick={props.handleSubmit}
          >
            {props.temp ? "Celcius" : "Fahrenheit"}
          </button>
        </div>
      ) : (
        <p>No data to show</p>
      )}
    </div>
  );
};
