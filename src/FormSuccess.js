import React from 'react'

const FormSuccess = () => {
    return (
        <div>
            <div className="main">
                <div className="izq">
                </div>
                <div className="der">
                    <h1 className="font-weight-bold">ESTAS CADA VEZ MÁS CERCA DE ENFRENTARTE A LOS MEJORES</h1>
                    <hr className="hr-suc" style={{marginBottom: 50}} />
                    <p className="first-p">El torneo iniciara el día 15 de Junio a las 15hs. Para continuar con tu registro debes ingesar a la página del torneo y colocar tu código único.</p>
                    <p className="codigo">H7824GJ</p>
                    <div className="centrar">
                        <button className="btn btn-danger" id="aceptar" type="submit">WEB DEL TORNEO</button>
                    </div>
                    <p className="last-p">Ingresa a nuestro sevidor oficial de Discord para poder resolver todas tus dudas.</p>
                    <div className="centrar">
                        <button className="btn btn-danger" id="aceptar" type="submit">DISCORD</button>
                    </div>
                    <p className="last-p">El torneo es exclusivo para la consola PS4</p>
                </div>
            </div>
            <div className="footer">
                <img src="../img/logo.png"/>
                <p className="p-footer">Ni Electronic Arts Inc. ni sus licenciantes están afiliados a este torneo y tampoco lo patrocinan.</p>
                <p className="p-footer">El torneo se jugará en PlayStation 4 y con el título FIFA21.</p>
            </div>
        </div>
    )
}

export default FormSuccess
