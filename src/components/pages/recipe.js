import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import '../RR.css';


const Recipe = () => {

  const {id} = useParams()
  console.log(`https://api-recipesjs.herokuapp.com/api/getRecipe/${id}`)
  
  const [receta, setReceta] = useState([])

  useEffect(() => {
    ObtReceta()
  }, []);

  const ObtReceta = async() =>{
    const data = await fetch(`https://api-recipesjs.herokuapp.com/api/getRecipe/${id}`)
    const result = await data.json()
    setReceta(result.recetas[0])
    console.log(receta)
  }

  return (
    <>
        <div className='back'>
        <div className='container'>
                    <h1 className='logo'>{receta.Nombre}</h1>
                    <div className='contact-wrapper animated bounceInUp'>
                        <div className='contact-form'>
                            
                            <h2 className='Label active'>Ingredientes:</h2>
                            <p className='text'>{receta.Ingredientes}</p>
                            <h2 className='Label active'>Preparacion:</h2>
                            <p className='text'>{receta.preparacion}</p>
                        </div>
                        <div className="contact-info">
                            <img src={receta.imagen} width="630" height="264.6" className='contact-wrapper'></img>
                            <i class="fas fa-hourglass-half"></i> Tiempo de preparacion: {receta.tiempo_de_preparacion} Min
                            <div><i class="fas fa-utensils"></i> Macros Alimenticios: {receta.Macros_Alimenticias}</div>
                        </div>
                    </div>
                </div>
        </div>
    </>
  );
  // .replace("#","").replace(/#/g,"\n")

}
export default Recipe

