import React from 'react';

const ClearDaySVG = ({size}) => (
    <svg fill="currentColor" display="inline-block" style={{width: size+'px'}} viewBox="0 0 64 64">
        <g fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2">
            <circle cx="32" cy="32" r="16"/>
            <path d="M32 10V0"/>
            <path d="M32 64V54"/>
            <path d="M54 32h10"/>
            <path d="M0 32h10"/>
            <path d="M48 16l5-5"/>
            <path d="M11 53l5-5"/>
            <path d="M48 48l5 5"/>
            <path d="M11 11l5 5"/>
        </g>
    </svg>
)

export default ClearDaySVG;