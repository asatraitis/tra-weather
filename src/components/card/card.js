import React from 'react';
import './card.css'

import WeatherIcon from '../weatherIcon/weatherIcon';

const Card = ({data}) => {
    return (
        <div className="card">
            <div className="weather-icon">
                <WeatherIcon icon={data.icon} />
                <h5>{Math.round(data.temperature)}°</h5>
            </div>
            <div className="body">
                <div className="location" title={data.location}>{data.location}</div>
                <div className="date">{new Date(data.date * 1000).toLocaleDateString()}</div>
            </div>
        </div>
    )
}

export default Card;