import React,{useState} from 'react'
import '../../App.css';
import '../../components/Contact-us.css';
import emailjs from 'emailjs-com';



function Contactus() {

    const [datos, setDatos] = useState({
        nombre: '',
        email: '',
        telefono:'',
        tipo_cons:'',
        mensaje:''
    })

    // variables de estado y json 
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log(datos)
        console.log('Nombre:' + datos.nombre + ',' + 'Email:'+ datos.email+',' +'Tel:'+datos.telefono +','+'Consulta:'+datos.tipo_cons + ','+'Mensaje:' + datos.mensaje)

        emailjs.send('default_service','template_alww4xc', datos, 'user_pHNvk9OKWNEvpwDgAo0wR' )
		.then((response) => {
				   console.log('SUCCESS!', response.status, response.text);
				   setDatos(datos);
		}, (err) => {
				   console.log('FAILED...', err);
		});

        }

    return (
        <div className='back'>
             <div className='container'>
            <h1 className='logo'>CONTÁCTANOS</h1>
            <div className='contact-wrapper animated bounceInUp'>
                <div className='contact-form'>
                    <h2>INGRESA TUS DATOS:</h2>
                    <form onSubmit={enviarDatos}>
                        <p>
                            <label>Nombre Completo</label>
                            <input type="text" name="nombre" placeholder='Daniel perez' required onChange={handleInputChange}></input>
                        </p>
                        <p>
                        <label>Email</label>
                        <input type="email" name="email"placeholder='danielperez_123@email.com' required onChange={handleInputChange}></input>
                        </p>
                         <p>
                        <label>Teléfono</label>
                        <input type="tel" name="telefono" placeholder='+57 300214232' onChange={handleInputChange}></input>
                        </p>
                        <p>
                        <label>Motivo de la consulta</label>
                        <div className="content-select" >
                            <select  type="text" name="tipo_cons" required onChange={handleInputChange}>
                                <option defaultValue>Seleccione una opción</option>
                                <option value='personal trainer'>Entrenamiento Personalizado</option>
                                <option value='plan alimenticio'>Plan Alimenticio</option>
                                <option value='ambospp'>Ambos (Entrenamiento y nutrición)</option>
                            </select>
                            <i></i>
                        </div>
                        </p>
                        <p class="block">
                        <label>Mensaje</label> 
                            <textarea name="mensaje" required placeholder='Información del paciente, estado actual, metas y requerimientos etc.' rows="3"  onChange={handleInputChange}></textarea>
                        </p>
                        <p class="block">
                            <button type="submit">
                                Enviar
                            </button>
                        </p>
                    </form>
                </div>
                <div className="contact-info">
                    <img src="/images/Blanco y Negro Collage de Fotos Papel Rasgado Historia de Instagram.png" width="340" height="550" className='contact-wrapper'></img>
            </div>
            </div>
        </div>
        </div>
       
            
    )
}

export default Contactus
