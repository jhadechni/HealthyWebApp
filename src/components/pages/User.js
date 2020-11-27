import React, { useEffect, useState } from 'react';
import '../User.css';
import CardItemUser from '../CardItemUser'
import CardItemMacro from '../CardItemMacro'
import CardItemIMC from '../CardItemIMC'
import '../Cards.css';


const User = () => {

    const jwt = window.sessionStorage.getItem('jwt')

    const [user, setUser] = useState([])
    const [userStats, setUserStats] = useState([])

    useEffect(() => {
        ObtUser()
    }, []);

    const ObtUser = async () => {
        await fetch(`https://hwbackend.herokuapp.com/api/user`, {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Content-Type": "application/json",
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                'x-access-token': jwt,
            }
        }).then(res => {
            if (!res.ok) throw new Error('Response is NOT ok')
            return res.json()
        }).then(res => {
            setUser(res)
            console.log(user)
        });
    }
    const ObtUserStats = async () => {
        const data = await fetch(`https://api-stats-hw.herokuapp.com/api/getStats/${user.email}`)
        const result = await data.json()
        setUserStats(result)
        console.log(userStats)
    }


    return (
        <div className='body'>
            <div className="container3">
                <div className="containeru">
                    <div className="avatar-flip">
                        <img src="https://cooperativadepica.cl/wp-content/uploads/2018/07/avatar2.png" height="150" width="150" />
                        <img src="http://www.thesteelplus.com/images/img_avatar2.png" height="150" width="150" />
                    </div>
                    <h2 className='h2'>{user.nombre}</h2>
                    <h4 className='h4'>{user.email}</h4>
                    <p className='p'> Peso: {user.peso} Kg</p>
                    <p className='p'>Altura: {user.altura} Cm </p>
                    <p className='p'>Peso: {user.edad} Años </p>
                    <p className='p' >Actividad Fisica: {user.tipo_ejercicio} </p>
                    <button className='btn--primary'>Actualizar datos</button>
                    <p className='info'>Aqui podras encontrar toda la información que hemos generado sobre tu estado actual, te invitamos a que la veas y apliques los cambios correctos para vivir una vida sana y saludable :D </p>
                </div>
                <div className="container2">
                    <button className='btn--primary fadeInDown' onClick={ObtUserStats}>Obtener Tu resultado personal</button>
                    <section>
                        <h2 className='h2'>Estado Actual</h2>
                        <div className="class">
                            <ul className="class">
                                <CardItemIMC
                                title='IMC'
                                IMC={userStats.IMC}
                                estado={userStats.Clasificacion}
                                peso={user.peso}
                                />
                            </ul>
                        </div>
                        <img src='https://cdn.discordapp.com/attachments/710593688392171612/781782233530761236/states.png' alt='Travel Image' className='imagecontet'></img>
                    </section>
                    <section>
                        <h2 className='h2'>Distribución de calorias</h2>
                        <div className='cards__wrapper3'>
                            <ul className='cards__items'>
                                <CardItemUser
                                    title='Perder Peso'
                                    kcal={userStats.Rango_calorias_perder_peso_minimun}
                                    kcal2={userStats.Rango_calorias_perder_peso_maximun}
                                    text='Este consumo diario de calorías te permitirá perder 0,5-1kg por semana de una forma sana y sostenible.'
                                    image='images/icon-negative-dynamic.jpg'
                                />
                                <CardItemUser
                                    title='Mantener Peso'
                                    kcal={userStats.Rango_calorias_mantener_peso_minimun}
                                    kcal2={userStats.Rango_calorias_mantener_peso_maximun}
                                    text='Este consumo diario de calorías te permitira mantener tu peso actual.'
                                    image='images/icon-neutral-dynamic.jpg'
                                />
                                <CardItemUser
                                    title='Ganar Peso'
                                    kcal={userStats.Rango_calorias_ganar_peso_minimun}
                                    kcal2={userStats.Rango_calorias_ganar_peso_maximun}
                                    text='Este consumo diario de calorías te permitirá ganar 0,5-1kg por semana de una forma sana y sostenible'
                                    image='images/icon-positive-dynamic.jpg'
                                />
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h2 className='h2' > Consumo diario de Macronutrientes</h2>
                        <section>
                            <div className='cards__wrapper3'>
                                <ul className='cards__items'>
                                    <CardItemMacro
                                        title='Mantenimiento'
                                        proteinas={userStats.proteinas_mantenimiento}
                                        carbohidratos={userStats.carbohidratos_mantenimiento}
                                        grasas={userStats.grasas_mantenimiento}
                                    />
                                    <CardItemMacro
                                        title='Volumen'
                                        proteinas={userStats.proteinas_volumen}
                                        carbohidratos={userStats.carbohidratos_volumen}
                                        grasas={userStats.grasas_volumen}
                                    />
                                    <CardItemMacro
                                        title='Definición'
                                        proteinas={userStats.proteinas_definicion}
                                        carbohidratos={userStats.carbohidratos_definicion}
                                        grasas={userStats.grasas_definicion}
                                    />
                                </ul>
                            </div>

                        </section>

                        

                    </section>
                </div>
            </div>
        </div >
    )
}

export default User
