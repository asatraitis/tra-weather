import React, {useEffect, useState, useRef} from 'react';
import './formModal.css'

const FormModal = ({toggle}) => {
    const [className, setClassName] = useState('hidden');
    const form = useRef();
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
    }
    return (
        <div ref={form} className={`form-modal ${className}`}>            
            <form onSubmit={handleSubmit}>
                <input type="text"/>
                <input type="text"/>
            </form>
        </div>
    )
}

export default FormModal;