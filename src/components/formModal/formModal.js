import React, {useEffect, useState, useRef} from 'react';
import './formModal.css'

import Textfield from '../textfield/textfield'
import Button from '../button/button'

const FormModal = ({toggle}) => {
    const [className, setClassName] = useState('hidden');
    const form = useRef();
    const dateField = useRef();
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
    const handleSubmit = (e) => {
        e.preventDefault();
        const validDate = validateDate(dateField.current.value)
        console.log(validDate)
    }
    const validateDate = (date) => {
        const today = new Date(new Date().toISOString().split('T')[0]).getTime();
        const travelDate = new Date(date).getTime();

        return travelDate >= today;
    }
    return (
        <div ref={form} className={`form-modal ${className}`}>            
            <form onSubmit={handleSubmit}>
                <Textfield label="Location" />
                <Textfield ref={dateField} type="date" label="Date (MM/DD/YYYY)" />
                <div className="button-grp">
                    <Button>Cancel</Button>
                    <Button type="submit" className="primary">Create</Button>
                </div>
            </form>
        </div>
    )
}

export default FormModal;