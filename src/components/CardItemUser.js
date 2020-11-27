import React from 'react';


function CardItemUser(props) {
    return (
        <>
         <li className='cards__item2'>
                <p className='cards__item__link'>
                    <h3>{props.title}</h3>
                    <div align="center">
                    <img src={props.image}  width='100px' height='100px'  ></img>
                    </div>
                    <div className='cards__item__info'>
                        <p className='font'>{props.kcal} a {props.kcal2} Kcal</p>
                        <p className='cards__item__text' > {props.text}</p>
                    </div>
                </p>
            </li>   
        </>
    )
}

export default CardItemUser

