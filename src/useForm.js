import {useState, useEffect, useCallback} from 'react';
import firebaseApp from './firebase'

const useForm = (submitForm, validate, updateCode) => {
    const [values, setValues] = useState({
        name: '',
        id: '', 
        email: '',
        ticket: '',
        uniqueCode: '',
        key: ''
    });
    const [errors, setErrors] = useState({});
    const [keyToDelete, setKeyToDelete] = useState()
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const uniqueCodesRef = firebaseApp.database().ref().child("unique-codes")
        uniqueCodesRef.once("value", snap => {
            const documentKey = Object.keys(snap.val())[0]
            const documentValue = snap.val()[documentKey]
            setKeyToDelete(documentKey)
            setValues({
                name: '',
                id: '', 
                email: '',
                ticket: '',
                uniqueCode: documentValue,
                key: documentKey
            })
            updateCode(documentValue)
        })
    }, [updateCode])

    const handleChange = e => {
        const { name, value } = e.target;
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

    const registerUser = useCallback(
        (ref) => ref.push(values).key, [values]
    )

    useEffect(() => {
        const registeredUsers = firebaseApp.database().ref().child("registered-users")
        
        if (Object.keys(errors).length === 0 && isSubmitting) {
            submitForm();
            registerUser(registeredUsers)
        }
    }, [errors, submitForm, isSubmitting, registerUser]);

    return { handleChange, values, handleSubmit, errors, keyToDelete };
};

export default useForm;