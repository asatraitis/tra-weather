import React from 'react';
import './weatherIcon.css';

import ClearDay from '../SVG/clearDaySVG';
import Rain from '../SVG/rainSVG';
import Snow from '../SVG/snowSVG';
import Wind from '../SVG/windSVG';
import Cloudy from '../SVG/cloudySVG';
import PartlyCloudy from '../SVG/partlyCloudySVG';

const WeatherIcon = ({icon}) => {
    switch(icon) {
        case 'clear-day':
            return <ClearDay size={40} />
        case 'rain':
            return <Rain size={40} />
        case 'snow':
            return <Snow size={40} />
        case 'wind':
            return <Wind size={40} />
        case 'cloudy':
            return <Cloudy size={40} />
        default:
            return <PartlyCloudy size={40} />
    }
}

export default WeatherIcon;