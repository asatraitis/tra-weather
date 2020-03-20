import React, {useEffect, useState, useRef} from 'react';
import './formModal.css'

import Textfield from '../textfield/textfield'
import Button from '../button/button'
import Spinner from '../spinner/spinner';
import useAPI from '../useAPI';

const FormModal = ({toggle, addLocation}) => {
    const [className, setClassName] = useState('hidden');
    const [msg, setMsg] = useState({state: 'hide', text: '', status: ''})
    const {send, response, loading} = useAPI();

    const form = useRef();
    const dateField = useRef();
    const locationField = useRef();

    useEffect(
        () => {
            setClassName('shown');
            const handleClick = (e) => {
                if (!form.current.contains(e.target) && toggle) {
                    setClassName('hidden')
                    setTimeout(() => {
                        toggle()
                    },150)                    
                }
            }
            document.addEventListener('click', handleClick)
            return () => {
                document.removeEventListener('click', handleClick)
            }
        },[setClassName, form, toggle]
    )

    useEffect(() => {
        if (response) {
            console.log(response)
            if (response.status === 'success') {                
                //Create a new card
                addLocation(response);
            } else {                
                setMsg({state: 'show', text: response.msg, status: 'error'})
            }           
        }
    }, [response])

    const handleSubmit = (e) => {
        e.preventDefault();
        const location = locationField.current.value;
        const date = dateField.current.value

        const validDate = validateDate(date)
        const validLocation = validateLocation(location)
        
        if (validDate && validLocation) {
            setMsg(prevMsg => {
                let newMsg = {...prevMsg};
                newMsg.state = 'hide';
                return newMsg;
            })
            //CALL API
            const timeUNIX = Math.floor(Date.now(date) / 1000)
            send({location, date: timeUNIX});            
        }
        console.log(validDate)
    }
    const validateDate = (date) => {
        const today = new Date(new Date().toISOString().split('T')[0]).getTime();
        const travelDate = new Date(date).getTime();
        console.log(Math.floor(Date.now(date) / 1000))

        const validation = travelDate >= today;

        if (!validation) {
            setMsg({state: 'show', text: 'Double check the date! (Cannot be in the past)', status: 'error'})
            return validation;
        }
        return validation;        
    }
    const validateLocation = (location) => {
        const validation = location?true:false;
        if (!validation) {
            setMsg({state: 'show', text: `Please enter the location!`, status: 'error'})
            return validation
        }
        return validation
    }
    return (
        <div ref={form} className={`form-modal ${className}`}>
            <div className="form-container">
                <Spinner show={loading} />           
                <form onSubmit={handleSubmit}>
                    <Textfield ref={locationField} label="Location" />
                    <Textfield ref={dateField} type="date" label="Date (MM/DD/YYYY)" />
                    <div className="button-grp">
                        <Button type="button">Cancel</Button>
                        <Button type="submit" className="primary">Create</Button>
                    </div>
                </form>
                <div className={`msg ${msg.state} ${msg.status}`}>
                    {msg.text}
                </div>
            </div> 
        </div>
    )
}

export default FormModal;