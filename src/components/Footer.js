import React from 'react';
import './Footer.css';

function Footer() {

    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
               <p className='footer-subscription-heading'>
                Healthy Web ®
                </p>
                <p className='footer-subscription-text'>
                Ya sea que esté buscando perder peso, hacer más actividad, controlar tu actividad física o incluso comer mejor, HealthyWeb libera el poder de tu cuerpo, respaldados por rutinas y recomendaciones de expertos. En la aplicación, encontrará datos de salud fáciles de entender, personalizados y totalmente aprovechables por usted y su médico.
Con HealthyWeb, tenga el poder de actuar y comience a dominar sus signos vitales.
                </p>
                <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <a href='/about-us'  className='footer-input1' >Quienes somos</a>
                    </div>
                </div>
            </div>
            </section>
        <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <a to='/' className='social-logo' >
              Healthy Web® <i className="fas fa-apple-alt"></i>
            </a>
          </div>
          <medium class='website-rights'>HW © 2020</medium>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              target='_blank'
              href='https://es-la.facebook.com/'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/?hl=es-la'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://twitter.com/?lang=es'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
          </div>
        </div>
      </section>
        </div>
    )
}

export default Footer
