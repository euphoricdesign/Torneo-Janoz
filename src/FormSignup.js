import React from 'react'
import useForm from './useForm'
import validate from './validateInfo'
import './Form.css'

const FormSignup = ({ submitForm }) => {
    const {
        handleChange,
        values,
        handleSubmit,
        errors
    } = useForm(
        submitForm, 
        validate
    );

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="font-weight-bold">INGRESA TUS DATOS PARA PARTICIPAR</h1>
                <div className="hr" />
                <div className="forms-inputs">
                    <label htmlFor="username" className="form-label">
                            Nombre completo
                            <span className="text-danger"> *</span>
                    </label>
                    <input
                        id="username"
                        type="text"
                        name="username"
                        className="form-input" 
                        placeholder="Tu nombre"
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                    {true && true}
                </div>
                <div className="forms-inputs">
                    <label htmlFor="email" 
                    className="form-label">
                        Cedula de identidad
                        <span className="text-danger"> *</span>
                    </label>
                    <input 
                        id="email"
                        type="text"
                        name="email"
                        className="form-input" 
                        placeholder="Tu cedula de identidad"
                        value={values.email}
                        onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="forms-inputs">
                    <label htmlFor="password" 
                    className="form-label">
                        Dirección de e-mail
                        <span className="text-danger"> *</span>
                    </label>
                    <input 
                        id="password"
                        type="email"
                        name="password"
                        className="form-input" 
                        placeholder="Tu e-mail"
                        value={values.password}
                        onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                </div>
                <div className="forms-inputs">
                    <label htmlFor="password2" 
                    className="form-label">
                        Número de ticket
                        <span className="text-danger"> *</span>
                    </label>
                    <input 
                        id="password2"
                        type="text"
                        name="password2"
                        className="form-input" 
                        placeholder="Tu número de ticket"
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <button class="btn btn-danger btn-aceptar" type="submit">Aceptar</button>
            </form>
        </div>
    );
};

export default FormSignup
