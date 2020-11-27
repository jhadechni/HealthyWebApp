import React,{useEffect, useState} from 'react'
import './modal.css'
import Modal from './modal'
//import {useHistory} from "react-router-dom"; 
import useUser from '../hooks/useUser'

function RegisterModal (props){
    const [datos, setDatos] = useState({
        Name: '',
        Email:'',
        Password: '',
        R_password:'',
        Peso: '',
        Altura: '',
        Edad: '',
        Sexo: '',
        Tipo_ejercicio: ''
    })
    const {isLoginLoading,hasLoginError,register,isLogged} = useUser();
    //const history = useHistory();
    useEffect(() => {
        if (isLogged) console.log('Ya Inició Sesion');//history.push("/");
    }, [isLogged/*,navigate*/]);
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
            
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        const email = datos.Email;
        const password = datos.Password;
        const name = datos.Name;
        const peso = datos.Peso;
        const altura= datos.Altura;
        const edad = datos.Edad;
        const sexo = datos.Sexo;
        const tipo_ejercicio = datos.Tipo_ejercicio;
        register({name,email, password,peso,altura,edad,sexo,tipo_ejercicio});
        props.onClose();
        //console.log(email,password,name,surname,peso,altura,edad,sexo,tipo_ejercicio);
        //event.json('User:' + datos.User + ',' + 'Password:'+ datos.Password)
    }



    return <Modal isOpen={props.isOpen} onClose={props.onClose}>
        {isLoginLoading && <strong>Enviando datos...</strong>}
        {!isLoginLoading &&
            <div className='LoginModal fadeInDown'>
                <div className='contact-form'>
                <h1 className='label active'>REGISTRO</h1>
                <form className="row" onSubmit={enviarDatos}>
                    <div className="col-md-6">
                        <input type="email" placeholder="Email" className="underlineHover" onChange={handleInputChange} name="Email" required></input>
                    </div>
                    <div className="col-md-4">
                        <input type="Password" placeholder="Contraseña" className="underlineHover" onChange={handleInputChange} name="Password" required></input>
                    </div>
                    <div className="col-md-3">
                        <input type="text" placeholder="Nombre" className="underlineHover" onChange={handleInputChange} name="Name" required></input>
                    </div>
                    <div className="col-md-6">
                        <input type="Password" placeholder="Confirmar Contraseña" className="underlineHover" onChange={handleInputChange} name="R_Password" required></input>
                    </div>
                    <div className="col-md-3">
                        <input type="number" placeholder="Peso (60 Kg)" className="underlineHover" onChange={handleInputChange} name="Peso" required></input>
                    </div>
                    <div className="col-md-3">
                        <input type="number" placeholder="Altura (150cm)" className="underlineHover" onChange={handleInputChange} name="Altura" required></input>
                    </div>
                    <div className="col-md-3">
                        <input type="number" placeholder="Edad" className="underlineHover" onChange={handleInputChange} name="Edad" required></input>
                    </div>
                    <div className="col-md-3">
                        <input type="text" placeholder="Sexo (M-F)" className="underlineHover" onChange={handleInputChange} name="Sexo" pattern="[FM]" required></input>
                    </div>
                    <div className="content-select">
                            <select  type="text" name="Tipo_ejercicio" required onChange={handleInputChange}>
                                <option defaultValue>Actividad Fisica</option>
                                <option value='Poco o ningún ejercicio'>Poco o ningún ejercicio</option>
                                <option value='Ejercicio ligero (1-3 días por semana)'>Ejercicio ligero (1-3 veces/semana)</option>
                                <option value='Ejercicio moderado (3-5 días por semana)'>Ejercicio moderado (3-5 veces/semana)</option>
                                <option value='Ejercicio fuerte (6 días por semana)'>Ejercicio fuerte (6 veces/semana)</option>
                                <option value='Ejercicio profesional o extremo'>Ejercicio profesional o extremo</option>
                            </select>
                            <i></i>
                    </div>
                    <div className="col-md-3">
                        
                    </div>
                    <div >
                    <button type="submit" className='btn--primary fadeIn.fourth'>Registrarse</button>
                    </div>
                    
                </form>
                </div>
            </div>
        }
        {
            hasLoginError && <strong>Error al crear cuenta.</strong>
        }
    </Modal>
}

export default RegisterModal;