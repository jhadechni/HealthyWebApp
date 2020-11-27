import React from 'react';
import './Cards.css';


function CardItemRoutines(props) {

    return (
        <>
         <li className='cards__item'>
         <a href={`/routine/${props.id}`} className='cards__item__link'>
                <figure className='cards__item__pic-wrap_e' data-category={props.musculo}>
                    <img src={props.link_miniatura} alt='Travel Image' className='cards__item__img'></img>
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text__e' > {props.name}</h5>
                </div> 
         </a>
            </li>  
        </>
    )
}

export default CardItemRoutines
