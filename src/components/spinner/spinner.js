import React, {useState, useEffect} from 'react';
import './spinner.css';

const Spinner = ({text = 'Loading..', show = false}) => {
    const [spinner, setSpinner] = useState(show);

    useEffect(() => {
        setSpinner(show)
    },[show])


    return spinner ? (
    <div className="spinner">
        <div className="square"></div>        
        <h5>{text}</h5>
    </div>) : null
}

export default Spinner;