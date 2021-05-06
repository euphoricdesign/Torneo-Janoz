import React, { useState } from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Form.css';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [uniqueCodeToShow, setUniqueCodeToShow] = useState('')

    function submitForm() {
        setIsSubmitted(true);
    }

    const updateCode = (code) => {
        setUniqueCodeToShow(code)
    }

    return (
        <>
            <div className='form-container'>
                <div className='form-content-left' />
                {
                    !isSubmitted ? (
                        <FormSignup submitForm={submitForm} updateCode={updateCode} />
                    ) : (
                        <FormSuccess uniqueCodeToShow={uniqueCodeToShow} />
                    )
                }
            </div>
        </>
    );
};

export default Form;