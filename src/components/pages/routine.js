import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import '../RR.css';

const Routine = () => {

  const {id} = useParams()
  console.log(`https://api-ejercicios.herokuapp.com/api/getEjercicio/${id}`)

  const [rutina, setRutina] = useState([])

  useEffect(() => {
    ObtRutina()
  }, []);

  const ObtRutina = async() =>{
    const data = await fetch(`https://api-ejercicios.herokuapp.com/api/getEjercicio/${id}`)
    const result = await data.json()
    setRutina(result.ejercicios[0])
    console.log(rutina)
  }


  return (
          <>
          <div className='back_2'>
          <div className='container'>
                      <h1 className='logo'>{rutina.nombre}</h1>
                      <div className='contact-wrapper animated bounceInUp'>
                          <div className='contact-form'>
                              <h2 className='Label active'>Descripción:</h2>
                              <p className='text'>{rutina.descripcion}</p>
                              <h2 className='Label active'>Información:</h2>
                              <i class="fas fa-fist-raised"></i> MUSCULO A TRABAJAR: {rutina.musculo}
                              <div><i class="fab fa-searchengin"></i> TIPO: {rutina.tipo}</div>
                          </div>
                          <div className="contact-info"> {/* cambiar src por base de datos nueva */}
                          <iframe width="560" height="315" className='contact-wrapper' src={rutina.link_video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                              <div>
                              <i class="far fa-play-circle"></i> Video recuperado del canal: <a href='https://www.youtube.com/channel/UCNAjjkbNbaVeH4o617fTC4g'>Passion4Profession</a>
                              </div>
                          </div>
                      </div>
                  </div>
          </div>
     
      </>
  );


}
export default Routine