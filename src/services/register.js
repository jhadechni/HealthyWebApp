const ENDPOINT = 'https://hwbackend.herokuapp.com/api/';

export default function register ({email, password, name, surname, peso, altura, edad, sexo, tipo_ejercicio}) {
    return fetch(`${ENDPOINT}/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Methods' :  'GET, POST, PUT, DELETE'
            
        },
        body: JSON.stringify({email, password, name, surname, peso, altura, edad, sexo, tipo_ejercicio})
    }).then(res => {
        if (!res.ok) throw new Error('Response is NOT ok')
        return res.json()
    }).then(res => {
        const  jwt = res.token;
        return jwt;
    });
};