import React from 'react';

const CalendarSVG = ({size}) => (
    <svg style={{width: size}} viewBox="0 0 64 64">
        <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2">
            <path d="M46 10H18"/>
            <path d="M12 10H1v48h62V10H52"/>
            <path d="M12 6h6v8h-6z"/>
            <path d="M46 6h6v8h-6z"/>
            <path d="M10 24h10v10H10z"/>
            <path d="M10 42h10v10H10z"/>
            <path d="M44 24h10v10H44z"/>
            <path d="M44 42h10v10H44z"/>
            <path d="M27 24h10v10H27z"/>
            <path d="M27 42h10v10H27z"/>
        </g><path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M1 18h62"/></svg>
)

export default CalendarSVG;