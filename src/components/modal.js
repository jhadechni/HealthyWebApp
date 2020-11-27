import React, { children } from 'react'
import ReactDom from 'react-dom'
import './modal.css'

function Modal (props){
    if(props.isOpen==false){
        return null;
    }else{
        return(
            ReactDom.createPortal(
            <div className='Modal'>
                <div className='Modal-container'>
                    <button onClick={props.onClose} className='close-btn'>X</button>
                    {props.children}
                </div>
            </div>, document.getElementById('Modal'))
        );
    }
 
}

export default Modal
