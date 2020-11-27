import React, {useEffect, useState} from 'react';
import '../../App.css';
import '../Cards.css';
import Axios from 'axios';
import CardItemRecepies from '../CardItemRecepies';



export default function Recipes() {

  const [recetas, setRecetas] = useState([])
  const [tagA, setTagB] = useState([])
  const [TagB, setTagA] = useState([])
  const [tagC, setTagC] = useState([])
  const [tagD, setTagD] = useState([])

  useEffect(async() => {
    
    const resultDefault = await Axios(
      'https://api-recipesjs.herokuapp.com/api/getAllRecipes',
    );
    const resultA = await Axios(
      'https://api-recipesjs.herokuapp.com/api/getRecipetag/A',
    );
    const resultB = await Axios(
      'https://api-recipesjs.herokuapp.com/api/getRecipetag/B',
    );    
    const resultC = await Axios(
      'https://api-recipesjs.herokuapp.com/api/getRecipetag/C',
    );
    const resultD = await Axios(
      'https://api-recipesjs.herokuapp.com/api/getRecipetag/D',
    );
    setRecetas(resultDefault.data.recetas)
    setTagA(resultA.data.recetas)
    setTagB(resultB.data.recetas)
    setTagC(resultC.data.recetas)
    setTagD(resultD.data.recetas)
    console.log(recetas)
  },[]);

  const [Handleonclick,setHDL] = useState("")


  const ifclause = () => {
      switch (Handleonclick) {
        case "A":
          return tagA.map((recetas)=>{
            return (
              <>
                <CardItemRecepies recepie={recetas} />
              </>
                )
            })  
          break;
          break;
        case "B":
          return TagB.map((recetas)=>{
            return (
              <>
                <CardItemRecepies recepie={recetas} />
              </>
                )
            })  
          break;
          break;
        case "C":
          return tagC.map((recetas)=>{
            return (
              <>
                <CardItemRecepies recepie={recetas} />
              </>
                )
            })  
          break;
          break;
        case "D":
          return tagD.map((recetas)=>{
            return (
              <>
                <CardItemRecepies recepie={recetas} />
              </>
                )
            })  
          break;
          break;
        default:
          return recetas.map((recetas)=>{
            return (
              <>
                <CardItemRecepies recepie={recetas} />
              </>
                )
            })  
          break;
      }
  }

  return(
        <>
          <h1 className='recipes'>LIBRO DE RECETAS</h1>

            <div className='cards__container__recepies' className='label'>
              <h2>AQUI PUEDES ENCONTRAR TODAS NUESTRAS RECETAS!</h2>
              <h4 >¿Qué son los "macros"?
                  Los "macros" no son otra cosa que los macronutrientes, los grupos de alimentos que nuestro cuerpo necesita para vivir: los carbohidratos, las proteínas y las grasas. (Todos ellos contienen micronutrientes, es decir vitaminas y minerales ) . La dieta de los macros o dieta flexible propone adelgazar (o mantener el peso) controlando los gramos de macronutrientes que ingerimos diariamente. La clave está en mantener la cantidad de proteínas y ser flexible con los carbohidratos y las grasas. </h4>
                <div className='cards__wrapper2 col-12'>
                <div>
                  <button className='btn__primary' onClick={() => setHDL("")}>TODAS LAS RECETAS</button>
                  <button className='btn__primary' onClick={() => setHDL("C")}>CUIDAR TU SALUD</button>
                  <button className='btn__primary' onClick={() => setHDL("A")}>PERDIDA DE PESO</button>
                  <button className='btn__primary' onClick={() => setHDL("B")}>DEFINICIÓN MUSCULAR</button>

                  <button className='btn__primary' onClick={() => setHDL("D")}>GANAR MASA MUSCULAR</button>
                </div>
                  <div className='cards__item'>
                    {ifclause()}
                  </div>
                </div>
            </div>      
        </>
  ); 
}