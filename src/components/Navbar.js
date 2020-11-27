import React, {useState, useEffect} from 'react';
import { Button2 } from './Button';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import useUser from '../hooks/useUser';
import './Navbar.css';

function Navbar() {
    //const isLogged = false;
    const {isLogged,logout} = useUser();

    const [click, setclick]= useState(false);
    const [button,setButton]=useState(true);

    const handleClick =()=> setclick(!click);
    const closedMobileMenu =()=> setclick(false);

    //put by the mobile button aspect 
    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    };

    useEffect (() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    const [modalIsOpen, setmodal]= useState(false);

    const handleCloseModal = e => {
        setmodal(!modalIsOpen)
    }
    const handleOpenModal = e => {
        setmodal(true)
        closedMobileMenu()
    }

    const [modalIsOpen2, setmodal2]= useState(false);

    const handleCloseModal2 = e => {
        setmodal2(!modalIsOpen2)
    }
    const handleOpenModal2 = e => {
        setmodal2(true)
        closedMobileMenu()
    }

    const handleClickLogout = e => {
        e.preventDefault();
        logout();
    };

    return (
        <>
          <nav className='navbar'>
                <div className='navbar-container'>
                     <a href='/' className='navbar-logo' onClick={closedMobileMenu}>
                     Healthy Web® <i className="fas fa-apple-alt"></i>
                     </a>
                        <div className='menu-icon' onClick={handleClick}>
                            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                         </div>
                         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                             <li className='nav-item'>
                                 <a href="/" className='nav-links' onClick={closedMobileMenu}>
                                    INICIO
                                 </a>
                             </li>
                             <li className='nav-item'>
                                 <a href="/recipes" className='nav-links' onClick={closedMobileMenu}>
                                    RECETAS
                                 </a>
                             </li>
                             <li className='nav-item'>
                                 <a href="/routines" className='nav-links' onClick={closedMobileMenu}>
                                    RUTINAS
                                 </a>
                             </li> 
                             <li className='nav-item'>
                                 <a  className='nav-links-mobile' onClick={handleOpenModal2}>
                                    Regístrate
                                 </a>
                                 <p className='nav-links-mobile' onClick={handleOpenModal}>
                                    Iniciar sesión
                                 </p>
                                 <LoginModal isOpen={modalIsOpen} onClose={handleCloseModal}>
                                 </LoginModal>
                                 <RegisterModal isOpen={modalIsOpen2} onClose={handleCloseModal2}></RegisterModal>

                             </li>
                             </ul>
                             {
                                isLogged
                                    ?  <a href="/logout" className='nav-links' onClick={handleClickLogout}>Cerrar Sesión</a>
                                    : button && <Button2 buttonStyle='btn--outline' onClick={handleOpenModal2}>Regístrate</Button2>
                             }
                             {
                                isLogged
                                    ?   console.log()
                                : button && <Button2 buttonStyle='btn--outline' onClick={handleOpenModal}>Iniciar sesión</Button2>    
                             }      
                 </div> 
            </nav>   
        </>
    )
}

export default Navbar
