import React from 'react';
import '../../App.css';
import '../Cards.css';
import Photo from '../Photo';
import '../Pictures.css'

export default function Aboutus() {
  return (
    <>
        <div className='pictures--container'>
          <Photo
            image='images/fotoJaime.jpg'
            name='Jaime Sierra'
            email='jhadechine@uninorte.edu.co'
            github='https://github.com/jhadechni'
          />
          <Photo
            image='images/fotoDaniel.jpg'
            name='Daniel Carrillo'
            email='Decarrillo@uninorte.edu.co'
            github='https://github.com/DanielCarrillo127'
          />
          <Photo
            image='images/IMG_1738.jpg'
            name='Victor Mendoza'
            email='vmmendoza@uninorte.edu.co'
            github='https://github.com/wildpirus'
          />
    </div>
    </>
  );


}