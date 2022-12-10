import React,{useState} from 'react';
import FormSignup from './FormSignup';
import FormSuccess from '../index';
import './Form.css';


const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitFrom(){
        setIsSubmitted(true);
    }
    return (
        <div>
            {!isSubmitted ? <FormSignup submitForm={submitFrom} />:<FormSuccess />}
        </div>
    );
};

export default Form;
