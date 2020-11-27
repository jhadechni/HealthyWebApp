import React from 'react';
import '../App.css';
import { Button,Button1 } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/video/video1.mp4' autoPlay loop muted></video>
            <h1>NO ES UNA DIETA, ES UN ESTILO DE VIDA</h1>
            <p>¿QUE ESTAS ESPERANDO?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>¡EMPEZAR!</Button>
            </div>
        </div>
    )
}
export default HeroSection
