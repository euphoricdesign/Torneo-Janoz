import React, { useEffect } from 'react'
import useForm from '../useForm'
import validate from '../validateInfo'
import firebaseApp from '../firebase'
import './Prueba.css';
import logo from '../img/logo.png'


const Prueba = ({ submitForm, updateCode }) => {
    const {
        handleChange,
        values,
        handleSubmit,
        errors,
        keyToDelete
    } = useForm(submitForm, validate, updateCode);

    useEffect(() => {
        if (keyToDelete !== '') firebaseApp.database().ref(`/unique-codes/${keyToDelete}`).remove()
    }, [keyToDelete])
    
    useEffect(() => {
        updateCode(values.uniqueCode)
    }, [values.uniqueCode, updateCode])

    return (
        <div>
            <div className="main">
                <div className="izq">
                </div>
                <div className="der">
                    <h1 className="font-weight-bold">TORNEO JANOZ 1X1 FIFA 21</h1>
                    <hr style={{marginTop:0}}  />
                    <p className="p1-form" style={{margin: 0}}>Participa junto a Alkosto en una competencia donde deberás superar a todos tus rivales para enfrentarte a Janoz, el mejor Jugador de Colombia</p>
                    <p className="p2-form">Solo debes registrarte utilizando el número de 10 digitos que se encuentra en la factura de tu compra en Alkosto, seguir las instrucciones a continuación y esperar al 15 de Agosto para vencer a todos tus oponentes!</p>

                    <form onSubmit={handleSubmit}>
                        <div className="inputs-wrapper">
                            <label htmlFor="name" className="form-label">
                                Nombre completo
                                <span className="text-danger"> *</span>
                            </label>
                            <input
                                id="name first-input"
                                type="text"
                                name="name"
                                className="form-input" 
                                placeholder="Tu nombre"
                                value={values.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p>{errors.name}</p>}

                            <label htmlFor="name" className="form-label">
                                Cedula de identidad
                                <span className="text-danger"> *</span>
                            </label>
                            <input
                                id="id first-input"
                                type="text"
                                name="id"
                                className="form-input" 
                                placeholder="Tu cedula de identidad"
                                value={values.id}
                                onChange={handleChange}
                            />
                            {errors.id && <p>{errors.id}</p>}

                            <label htmlFor="name" className="form-label">
                                Dirección de e-mail
                                <span className="text-danger"> *</span>
                            </label>
                            <input
                                id="email first-input"
                                type="text"
                                name="email"
                                className="form-input" 
                                placeholder="Tu e-mail"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p>{errors.email}</p>}

                            <label htmlFor="name" className="form-label">
                                Número de factura
                                <span className="text-danger"> *</span>
                            </label>
                            <input
                                id="ticket first-input"
                                type="text"
                                name="ticket"
                                className="form-input" 
                                placeholder="Tu número de factura"
                                value={values.ticket}
                                onChange={handleChange}
                            />
                            {errors.ticket && <p>{errors.ticket}</p>}
                        </div>
                        <div className="centrar">
                            <button className="btn btn-danger mt" id="aceptar" type="submit">Aceptar</button>
                        </div>
                    </form>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 8}}>
                        <a
                            href="https://docs.google.com/document/d/1eOrZyIDrN27SV_q7i2F_Gi01_287MWYj8HEbt8zoY38/edit?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                            style={{color:'white', fontSize: 10}}
                        >
                            Información del torneo
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer">
                <img src={logo} alt="tournament-logo" />
                <p className="p-footer">Ni Electronic Arts Inc. ni sus licenciantes están afiliados a este torneo y tampoco lo patrocinan.</p>
                <p className="p-footer p-mobile">El torneo se jugará en PlayStation 4 y con el título FIFA21.</p>
            </div>
        </div>
    )
}

export default Prueba;