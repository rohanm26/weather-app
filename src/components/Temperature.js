import React from "react";

export const Temperature = props => <div className="Temperature">
    <h2>
        {
            props.temp === true
                ? (props.data.main.temp).toFixed(2)+"°C"
                : (((props.data.main.temp * 9 / 5) + 32)).toFixed(2)+"°F"
        }
    </h2>
    <button
        className="btn mx-5 btn-info"
        onClick={props.handleChange}
    >
        {props.temp ? "Celcius" : "Fahrenheit"}
    </button>
</div>

