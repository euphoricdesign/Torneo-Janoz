export default function validateInfo(values) {
    let errors = {}

    if(!values.name.trim()) {
        errors.name = "Campo requerido"
    }

    if (!values.id) {
        errors.id = 'Campo requerido';
    } else if(typeof values.id === 'number') {
        errors.id = 'formato de cedula de identidad invalido';
    }

    if (!values.email) {
        errors.email = 'Campo requerido';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'formato de email invalido';
    }

    if(!values.ticket) {
        errors.ticket = "Campo requerido";
    } 

    return errors;
}