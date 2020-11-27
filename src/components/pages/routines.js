  
import React, {useEffect, useState} from 'react';
import '../../App.css';
import '../Cards.css';
import Axios from 'axios';
import CardItemRoutines from '../CardItemRoutines';

export default function Routines() {

  const [rutinas, setRutinas] = useState([])
  const [tagPiernas, setTagPiernas] = useState([])
  const [TagPecho, setTagPecho] = useState([])
  const [tagCardio, setTagCardio] = useState([])
  const [tagAbdominales, setTagAbdominales] = useState([])
  const [tagBrazo, setTagBrazo] = useState([])
  

  useEffect(async() => {
    
    const resultDefault = await Axios(
      'https://api-ejercicios.herokuapp.com/api/getAllEjercicios',
    );
    const resultPiernas = await Axios(
      'https://api-ejercicios.herokuapp.com/api/getEjercicioMuscle/Piernas',
    );
    const resultPecho = await Axios(
      'https://api-ejercicios.herokuapp.com/api/getEjercicioMuscle/Pecho',
    );    
    const resultCardio = await Axios(
      'https://api-ejercicios.herokuapp.com/api/getEjercicioMuscle/Cardio',
    );
    const resultAbdominales = await Axios(
      'https://api-ejercicios.herokuapp.com/api/getEjercicioMuscle/Abdominales',
    );
    const resultBrazo = await Axios(
      'https://api-ejercicios.herokuapp.com/api/getEjercicioMuscle/Brazo',
    );
    
    setRutinas(resultDefault.data.ejercicios)
    setTagPiernas(resultPiernas.data.ejercicios)
    setTagPecho(resultPecho.data.ejercicios)
    setTagCardio(resultCardio.data.ejercicios)
    setTagAbdominales(resultAbdominales.data.ejercicios)
    setTagBrazo(resultBrazo.data.ejercicios)
    console.log(rutinas)
  },[]);

  const [Handleonclick,setHDL] = useState("")

  const ifclause = () => {
    switch (Handleonclick) {
      case "A":
        return tagPiernas.map((ejercicios)=>{
          return (
            <>
              <CardItemRoutines id={ejercicios.id} name={ejercicios.nombre} musculo={ejercicios.musculo} link_miniatura={ejercicios.link_miniatura}/>
            </>
              )
          })  
        break;
        break;
      case "B":
        return TagPecho.map((ejercicios)=>{
          return (
            <>
              <CardItemRoutines id={ejercicios.id} name={ejercicios.nombre} musculo={ejercicios.musculo} link_miniatura={ejercicios.link_miniatura}/>
            </>
              )
          })  
        break;
        break;
      case "C":
        return tagCardio.map((ejercicios)=>{
          return (
            <>
              <CardItemRoutines id={ejercicios.id} name={ejercicios.nombre} musculo={ejercicios.musculo} link_miniatura={ejercicios.link_miniatura}/>
            </>
              )
          })  
        break;
        break;
      case "D":
        return tagAbdominales.map((ejercicios)=>{
          return (
            <>
              <CardItemRoutines id={ejercicios.id} name={ejercicios.nombre} musculo={ejercicios.musculo} link_miniatura={ejercicios.link_miniatura}/>
            </>
              )
          })  
        break;
        break;
        case "E":
          return tagBrazo.map((ejercicios)=>{
            return (
              <>
                <CardItemRoutines id={ejercicios.id} name={ejercicios.nombre} musculo={ejercicios.musculo} link_miniatura={ejercicios.link_miniatura}/>
              </>
                )
            })  
          break;
          break;
      default:
        return rutinas.map((ejercicios)=>{
          return (
            <>
              <CardItemRoutines id={ejercicios.id} name={ejercicios.nombre} musculo={ejercicios.musculo} link_miniatura={ejercicios.link_miniatura}/>
            </>
              )
          })  
        break;
    }
}


  return (
    <>
      <h1 className='routines'>RUTINAS DE EJERCICIO</h1>
      <div className='cards__container__recepies' className='label'>
              <h2>AQUI PUEDES ENCONTRAR TODAS NUESTRAS RUTINAS!</h2>
                <div className='cards__wrapper2 col-12'>
                <div>
                  <button className='btn__primary' onClick={() => setHDL("")}>TODOS</button>
                  <button className='btn__primary' onClick={() => setHDL("A")}>PIERNAS</button>
                  <button className='btn__primary' onClick={() => setHDL("B")}>PECHO</button>
                  <button className='btn__primary' onClick={() => setHDL("C")}>CARDIO</button>
                  <button className='btn__primary' onClick={() => setHDL("D")}>ABDOMINALES</button>
                  <button className='btn__primary' onClick={() => setHDL("E")}>BRAZO</button>
                </div>
                  <div className='cards__item'>
                    {ifclause()}
                  </div>
                </div>
            </div>  
    </>

  );
}