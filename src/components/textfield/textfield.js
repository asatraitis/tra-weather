import React, {forwardRef} from 'react';
import './textfield.css'

import CalendarSVG from '../SVG/calendarSVG';

const Textfield = forwardRef(({label, placeholder, ...props}, ref) => (
    <div className="textfield">
        {props.type === 'date'?<CalendarSVG size="1rem" />:null}
        <input ref={ref} {...props} placeholder=" " />
        <label>{label}</label>
    </div>
))

export default Textfield;