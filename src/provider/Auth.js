import { createContext, useContext, useState } from "react";

const authContext = createContext();


//Simulación de los endpoints de un API
const fakeAuthProvider = {
    singIn: (callback) => {
        setTimeout(callback, 100)
    },
    singOut: (callback) => {
        setTimeout(callback, 100)
    }
}

//Hook para manejar la autenticación en la app
const useProvideAuth = () => {
    const [ user, setUser ] = useState(null)

    const singIn = (cb) => {
        return fakeAuthProvider.singIn(()  => {
            setUser('user');
            cb();
        })
    }
    const singOut = (cb) => {
        return fakeAuthProvider.singOut(()  => {
            setUser(null);
            cb();
        })
    }

    return {
        user,
        singIn,
        singOut
    }
}
//El wrapper y conexión del Provider mediante Value
export const ProvideAuth = ({children}) => {
    const auth = useProvideAuth()

    return (<authContext.Provider value={auth}>
                {children}
            </authContext.Provider>
    )}

//Con esto usamos el Contexto que fabricamos en authContext (el objeto de 3 propiedades) importándolo en otros componentes
export const useAuth = () => useContext(authContext)