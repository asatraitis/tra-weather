import React from 'react';
import './button.css'

const Button = ({children, className = 'text', ...props}) => (
    <button className={`Button ${className}`} {...props}>
        {children}
    </button>
)

export default Button