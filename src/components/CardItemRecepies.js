import React from 'react';
import './Cards.css';
import {Link}  from 'react-router-dom';

export const datos = [];

function CardItemRecepies(props) {


    return (
        <>
         <li className='cards__item'>
         <a href={`/recipe/${props.recepie.id_receta}`} className='cards__item__link'>

         <figure className='cards__item__pic-wrap' data-category={props.recepie.Nombre}>
                    <img src={props.recepie.imagen} alt='Travel Image' className='cards__item__img'></img>
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text__R' >Macros Alimenticios: {props.recepie.Macros_Alimenticias.replace("#","").replace(/#/g,"\n")}</h5>
                </div> 
         </a>
            </li>
        </>
    )
}

export default CardItemRecepies
