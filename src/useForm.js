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
        const uniqueCodesRef = firebaseApp.database().ref().child("unique-codes") // Referencia a una colección en firebase Códigos únicos (conjunto de datos)
        uniqueCodesRef.once("value", snap => { // once = una sola vez
            const documentKey = Object.keys(snap.val())[0] // primer clave que se encuentre en la bd  (snap.val = contenido de la instantanea)
            const documentValue = snap.val()[documentKey] // primer código que se encuentre en la bd

            setKeyToDelete(documentKey) // le pasamos la key para eliminar, ya esta reservada.
            setValues({
                name: '',
                id: '', 
                email: '',
                ticket: '',
                uniqueCode: documentValue,
                key: documentKey
            }) // Cada vez que un usuario ingrese a la página va a tener "reservado" una clave y un código.
            updateCode(documentValue) // código único para mostrar
        })
    }, [updateCode]) // el effect se vuelve a ejecutar cada vez que se actualiza la función updateCode

    const handleChange = e => {
        const { name, value } = e.target; // de cada input los atributos name y value 
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
        (ref) => ref.push(values).key, // el método push es de firebase, guarda un nuevo valor. 
        [values]
    ); // usando .key (property not method) de esta referencia obtenemos un ID único.


    useEffect(() => {
        const registeredUsersRef = firebaseApp.database().ref().child("registered-users") // Referencia colección usuarios registrados 
        
        if (Object.keys(errors).length === 0 && isSubmitting) {
            submitForm();
            registerUser(registeredUsersRef)
        }
    }, [errors, submitForm, isSubmitting, registerUser]);

    return { handleChange, values, handleSubmit, errors, keyToDelete };
};

export default useForm;


