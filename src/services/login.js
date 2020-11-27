

const ENDPOINT = 'https://hwbackend.herokuapp.com/api';

export default function login ({email, password}) {
    return fetch(`${ENDPOINT}/login`, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin' : '*',
            "Content-Type": "application/json",
            'Access-Control-Allow-Methods' :  'GET, POST, PUT, DELETE',
        },
        body: JSON.stringify({email, password})
    
    }).then(res => {
        console.log(res)
        if (!res.ok) throw new Error('Response is NOT ok')
        return res.json()
    }).then(res => {
        console.log(res)
        console.log(res.token)
        const jwt = res.token;
        console.log(jwt)
        return jwt;
    });
};


/*const User = require('./models/user');
export default function login ({username, password}) {
    const user = await User.findOne({email: username});
    if(!user){
        
    }else if(!user.comparePassword(password)){
        
    }else {
        
    }
};*/