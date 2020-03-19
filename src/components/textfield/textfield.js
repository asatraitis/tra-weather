import React from 'react';
import './textfield.css'

import CalendarSVG from '../SVG/calendarSVG';

const Textfield = ({label, placeholder, ...props}) => (
    <div className="textfield">
        {props.type === 'date'?<CalendarSVG size="1rem" />:null}
        <input {...props} placeholder=" " />
        <label>{label}</label>
    </div>
)

export default Textfield;