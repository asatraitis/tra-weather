import React from 'react';

const WindSVG = ({size}) => (
    <svg fill="currentColor" display="inline-block" style={{width: size+'px'}} viewBox="0 0 64 64">
        <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" 
        d="M55 40c4.565 0 8-3.435 8-8 0-4.565-3.435-9-8-9 0-11.414-9.586-20-21-20-10.102 0-19.2 
        6.423-21 16h-2C5.292 19 1 24.292 1 30s4.292 10 10 10"/>
        <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M27 58c0 2.761 2.238 5 5 5s5-2.239 5-5-2.238-5-5-5H2"/>
        <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2" d="M40 42c0-2.761 2.238-5 5-5s5 2.239 5 5-2.238 5-5 5H4"/>
    </svg>
)

export default WindSVG;

