import React from 'react';
function CardItemMacro(props) {
    return (
        <>
         <li className='cards__item2'>
                <p className='cards__item__link'>
                    
                    <div className='cards__item__infoM'>
                    <h3 className = 'h3'>{props.title}</h3>
                    <div align ="justify">
                    <div className ="side">
                        <i class="fas fa-bread-slice"></i>
                        </div>
                        <div className ="side">
                        <p className=''>Proteinas : {props.proteinas} g</p>
                        </div>
                        <div className ="side">
                        <i class="fas fa-drumstick-bite"></i>
                        </div>
                        <div className ="side">
                        <p className=''>Carbohidratos : {props.carbohidratos} g</p>
                        </div>
                        <div className ="side">
                        <i class="fas fa-bacon"></i>
                        </div>
                        <div className ="side">
                        <p className=''>Grasas : {props.grasas} g</p>
                        </div>
                    </div>
                        
                    </div>
                </p>
            </li>   
        </>
    )
}

export default CardItemMacro