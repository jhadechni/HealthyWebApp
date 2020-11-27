import {useCallback, useContext, useState} from 'react'
import Context from '../context/UserContext';
import loginService from '../services/login';
import registerService from '../services/register'

export default function useUser(){
    const {jwt,setJWT} = useContext(Context);
    const [state, setState] = useState({loading: false, error: false});
    const register = useCallback(({username,email, password,peso,altura,edad,sexo,tipo_ejercicio}) => {
        // setJWT('test')
        setState({loading: true, error: false});
        registerService({username,email,password,peso,altura,edad,sexo,tipo_ejercicio}).then(jwt => {
            window.sessionStorage.setItem('jwt', jwt);
            setState({loading: false, error: false});
            setJWT(jwt);
        }).catch(err => {
            window.sessionStorage.removeItem('jwt');
            setState({loading: false, error: true});
            console.error(err);
        });
    }, [setJWT]);

    const login = useCallback(({email, password}) => {
        // setJWT('test')
        setState({loading: true, error: false});
        loginService({email,password}).then(jwt => {
            window.sessionStorage.setItem('jwt', jwt);
            setState({loading: false, error: false});
            console.log('si esta entrando ')
            setJWT(jwt);
        }).catch(err => {
            window.sessionStorage.removeItem('jwt');
            setState({loading: false, error: true});
            console.error(err);
        });
    }, [setJWT]);

    const logout = useCallback(() => {
        window.sessionStorage.removeItem('jwt');
        setJWT(null);
    }, [setJWT]);

    return {
        isLogged: Boolean(jwt),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        register,
        login,
        logout,
    }

}