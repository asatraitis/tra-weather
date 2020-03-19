import React from 'react';
import './textfield.css'

const Textfield = ({label, placeholder, ...props}) => (
    <div className="textfield">
        <input {...props} placeholder=" " />
        <label>{label}</label>
    </div>
)

export default Textfield;