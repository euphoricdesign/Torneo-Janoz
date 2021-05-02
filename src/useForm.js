import {useState, useEffect} from 'react';
import firebaseApp from './firebase'

const useForm = (miFuncion, validate) => {
    const [values, setValues] = useState({
        name: '',
        id: '',
        email: '',
        ticket: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState
    (false);

    const handleChange = e => {
        const { name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
    };

    const sendInfoToFirebase = () => firebaseApp.database().ref().child("/registered-users").push(
        values
    ).key

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            sendInfoToFirebase();
            miFuncion();
        }
    }, [errors]);

    return { handleChange, values, handleSubmit, errors };
};

export default useForm;