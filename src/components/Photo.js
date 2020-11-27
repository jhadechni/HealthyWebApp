import React from 'react';
import './Pictures.css'

function Photo({ image, name, email, github }) {
  return (
    <div className='pictures--square'>
      <img className='picture--photo' src={image} alt='Amstrong' />
      <p className='picture--name'>{name}</p>
      <p className='email--picture'>{email}</p>
      <div className='icons'>
        <a href={github}>
          <i className='fab fa-github'></i>
        </a>
      </div>
    </div>
  );
}
export default Photo;