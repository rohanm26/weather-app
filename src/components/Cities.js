import React from "react";
import "../styles/style.css";


export const Cities = props => <div className="Cities">
    {
        props.cities.map(city => <button
            key={city}
            onClick={props.handleSubmit(city)}
            disabled={props.data.name === city}>
            {city}
        </button>
        )
    }
</div>