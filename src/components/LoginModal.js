import React, {useEffect, useState} from 'react'
import './modal.css';
import Modal from './modal'
import { Redirect } from 'react-router-dom';


//import {useHistory} from "react-router-dom"; 
import useUser from '../hooks/useUser'

function LoginModal(props) {

    const [datos, setDatos] = useState({
        Email: '',
        Password: ''
    })
    const {isLoginLoading,hasLoginError,login,isLogged} = useUser();
    //const history = useHistory();
    useEffect(() => {
        if (isLogged){
            console.log('Inició Sesion');//history.push("/");
        } 
    }, [isLogged]);

    
    if(window.sessionStorage.getItem('jwt')){
        return <Redirect to='/user'/>
    }

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value

        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        const email = datos.Email;
        const password = datos.Password;
        login({email,password});
        props.onClose();
        //console.log('User:' + email + ',' + 'Password:'+ password)
        //event.json('User:' + datos.User + ',' + 'Password:'+ datos.Password)
    }

    return <Modal isOpen={props.isOpen} onClose={props.onClose}>
        {isLoginLoading && <strong>Verificando credenciales...</strong>}
        {!isLoginLoading &&
            <div className='LoginModal fadeInDown'>
                <h1 className='label active'>INICIAR SESIÓN</h1>
                <form className="row" onSubmit={enviarDatos}>
                    <div className="col-md-3">
                        <input type="text" placeholder="Email " className="underlineHover" onChange={handleInputChange} name="Email" required></input>
                    </div>
                    <div className="col-md-3">
                        <input type="Password" placeholder="Contraseña" className="underlineHover" onChange={handleInputChange} name="Password" required></input>
                    </div>
                    <button type="submit" className='btn--primary fadeIn.fourth'>Ingresar</button>
                    <p class="message">¿No estas registrado?
                        <p className='message_a' >Registrate</p>
                    </p>
                </form>
            </div>
        }
        {
            hasLoginError && <strong class="message">Usuario o contraseña invalidos.</strong>
        }
    </Modal>
}

export default LoginModal;