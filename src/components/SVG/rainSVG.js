import React from 'react';

const RainSVG = ({size}) => (
    <svg fill="currentColor" style={{width: size+'px'}} viewBox="0 0 64 64">
        <path 
        fill="none" 
        stroke="currentColor" 
        strokeMiterlimit="10" 
        strokeWidth="2" 
        d="M55 40c4.565 0 8-3.435 8-8 0-4.565-3.435-9-8-9 
        0-11.414-9.586-20-21-20-10.102 0-19.2 6.423-21 16h-2C5.292 
        19 1 24.292 1 30s4.292 10 10 10h44z"/>
        <g fill="none" stroke="currentColor" strokMiterlimit="10" strokeWidth="2">
            <path d="M22 46v14"/>
            <path d="M12 46v14"/>
            <path d="M32 46v14"/>
            <path d="M42 46v14"/>
            <path d="M52 46v14"/>
        </g>
    </svg>
)

export default RainSVG;