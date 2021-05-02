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
                    <label htmlFor="name" className="form-label">
                        Nombre completo
                        <span className="text-danger"> *</span>
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        className="form-input" 
                        placeholder="Tu nombre"
                        value={values.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p>{errors.name}</p>}
                    {true && true}
                </div>
                
                <div className="forms-inputs">
                    <label htmlFor="id" 
                    className="form-label">
                        Cedula de identidad
                        <span className="text-danger"> *</span>
                    </label>
                    <input 
                        id="id"
                        type="number"
                        name="id"
                        className="form-input" 
                        placeholder="Tu cedula de identidad"
                        value={values.id}
                        onChange={handleChange}
                        />
                        {errors.id && <p>{errors.id}</p>}
                </div>
                
                <div className="forms-inputs">
                    <label htmlFor="email" className="form-label">
                        Dirección de e-mail
                        <span className="text-danger"> *</span>
                    </label>
                    <input 
                        id="email"
                        type="email"
                        name="email"
                        className="form-input" 
                        placeholder="Tu e-mail"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                
                <div className="forms-inputs">
                    <label htmlFor="ticket" 
                    className="form-label">
                        Número de ticket
                        <span className="text-danger"> *</span>
                    </label>
                    <input 
                        id="ticket"
                        type="text"
                        name="ticket"
                        className="form-input" 
                        placeholder="Tu número de ticket"
                        value={values.ticket}
                        onChange={handleChange}
                    />
                    {errors.ticket && <p>{errors.ticket}</p>}
                </div>
                <button class="btn btn-danger btn-aceptar" type="submit">Aceptar</button>
            </form>
        </div>
    );
};

export default FormSignup
