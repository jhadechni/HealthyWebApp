import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>NUESTROS PRODUCTOS A OFRECER</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='images/food.jpg'
                        text='mira nuestro increíble libro de recetas con muchos platos deliciosos y saludables'
                        label='Libro de recetas'
                        path='/recipes'
                        />
                        <CardItem 
                        src='images/trainer-specialist.jpg'
                        text='Mira nuestras increíbles rutinas creadas por profesionales solo para ti'
                        label='Rutinas de ejercicio'
                        path='/routines'
                        />
                        <CardItem 
                        src='images/nutritionist-specialist.jpg'
                        text='Habla con uno de nuestros nutricionistas y elabora un plan que se adapte a tu cuerpo y objetivos'
                        label='Nutricionistas listos para ayudarte'
                        path='/contact-us'
                        />
                        <CardItem 
                        src='images/routines.jpg'
                        text='Habla con uno de nuestros entrenadores para hacer un plan que se ajuste a tu cuerpo y metas'
                        label='Entrenadores personales listos para ayudarte'
                        path='/contact-us'
                        /> 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
