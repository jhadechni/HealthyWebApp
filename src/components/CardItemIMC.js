import React from 'react';


function CardItemIMC(props) {
    var style,status;
    if (props.IMC <= 18.49 && props.IMC <= 16) {
        style = "cards__item3"
        status= "Peso bajo"
    }else{
        if (props.IMC >= 18.5 && props.IMC <= 24.99) {
            style= "cards__item4"
            status = "Peso normal"
        }else{
            if (props.IMC >= 25 && props.IMC <= 29.99) {
                style= "cards__item5"
                status = "Sobrepeso"
            }else{
                if (props.IMC >= 30 && props.IMC <= 39.99) {
                    style= "cards__item6"
                    status = "Obesidad"
                }else{
                    if (props.IMC >= 40 ) {
                        style= "cards__item7"
                        status = "Obesidad mórbida"
                    }
                }
            }
        }
    }
    
    console.log(props.estado)
    return (
        <>
        
         <li className={style}>
                <p className='cards__item__link2'>
                    
                    <div className='cards__item__infoI'>
                    
                    <div align="center">
                        <h3 className = 'h3'>Su {props.title} es:</h3>
                        <div className ="side">
                        <p className=''>{props.IMC}</p>
                        </div>
                        <h3 className = 'h3'>Su peso actual es:</h3>
                        <div className ="side">
                        <p className=''>{props.peso} kg</p>
                        </div>
                        <h3 className = 'h3'>Su estado actual es:</h3>
                        <div className ="side">
                        <p className=''>{status}</p>
                        </div>
                    </div>
                        
                    </div>
                </p>
            </li>   
        </>
    )
}

export default CardItemIMC