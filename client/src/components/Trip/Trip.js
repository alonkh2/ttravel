import React from 'react'
import "./Trip.css"

function Trip(props) {
    return (
        <div className="card-wrapper">
            <h2>{props.trip.destination || "default"}</h2>
            <h3>{props.trip.origin || "default"}</h3>
            <p>{props.trip.description || "default"}</p>
        </div>
    )
}

export default Trip
