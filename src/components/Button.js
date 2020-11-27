import React from 'react';
import './Button.css';


const STYLES = ['btn--primary','btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];



export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? 
    buttonSize : SIZES[0];

    return(
        <a href="/" className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>  
                {children}
            </button>
        </a>        
    )
}
//link to a login page
export const Button1 = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? 
    buttonSize : SIZES[0];

    return(
        <a href="/log-in" className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>  
                {children}
            </button>
        </a>
    )
}

//style to implement pop up login
export const Button2 = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,

}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? 
    buttonSize : SIZES[0];
    
    const estado={
        Open:false,
    }

        return(
        <>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>  
                {children}
            </button>
        </>
        )
}