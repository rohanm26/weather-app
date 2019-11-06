import React from "react";
import { Temperature } from './Temperature';
import "../styles/style.css";


export const Weather = props => {
  return (
    <div className="col-18 text-center">
      {
        props.data.length !== 0 ? (
          <div>
            <>
              <h2>{props.data.name}</h2>
              <h2>{props.data.weather[0].description}</h2>
              <br />
              <figure>
                {
                  (props.data.weather[0].description).includes("snow") ? <img src="./images/snowy-6.svg" alt="snow"/> : (props.data.weather[0].description).includes("rain") ? <img src="./images/rainy-6.svg" alt="rainy"/> : (props.data.weather[0].description).includes("sun") ? <img src="./images/day.svg" alt="sunny"/> : <img src="./images/cloudy.svg" alt="cloudy"/>
                }
                <figcaption>
                  <h2>{props.data.wind.speed}m/s</h2>
                  <Temperature
                    data={props.data}
                    temp={props.temp}
                    handleChange={props.handleChange} />
                </figcaption>
              </figure>
              <br />
            </>
          </div>
        ) : (
            <h3>Please select city</h3>
          )}
    </div>
  );
};
