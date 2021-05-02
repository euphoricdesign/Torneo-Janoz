export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = "Campo requerido"
    }

    //Email
    if (!values.email) {
        errors.email = 'Campo requerido';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Campo requerido';
    }

    if (!values.password) {
        errors.password = 'Campo requerido';
    } 

    if(!values.password2) {
        errors.password2 = "Campo requerido";
    } 

    return errors;
}