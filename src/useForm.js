import {useState, useEffect} from 'react';
import firebaseApp from './firebase'

const useForm = (submitForm, validate, updateCode) => {
    const uniqueCodesRef = firebaseApp.database().ref().child("unique-codes")
    const refisteredUsers = firebaseApp.database().ref().child("registered-users")
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        addUniqueCode(uniqueCodesRef)
    }, [])

    useEffect(() => {
        firebaseApp.database().ref(`/unique-codes/${values.key}`).remove()
    }, [values.key])

    const addUniqueCode = ref => {
        ref.once("value", snap => {
            setValues({
                name: '',
                id: '', 
                email: '',
                ticket: '',
                uniqueCode: snap.val()[Object.keys(snap.val())[0]],
                key: Object.keys(snap.val())[0]
            })
            updateCode(snap.val()[Object.keys(snap.val())[0]])
        })
    }

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

    const sendInfoToFirebase = () => refisteredUsers.push(
        values
    ).key

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            sendInfoToFirebase();
            submitForm();
        }
    }, [errors]);

    return { handleChange, values, handleSubmit, errors };
};

export default useForm;