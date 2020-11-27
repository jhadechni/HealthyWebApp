import React,{useState} from 'react';

const Context = React.createContext({});

export function UserContextProvider ({children}) {
    const [jwt, setJWT] = useState(() => window.sessionStorage.getItem('jwt'));
    
    return <Context.Provider value={{jwt,setJWT}}>
        {children}
    </Context.Provider>    
};

export default Context;