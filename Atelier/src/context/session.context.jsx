// import createContext from 'react'
// import useState from 'react'

// Importo mejor en una sola línea así:
import { useContext, createContext, useState } from 'react'

// Importo los arrays que tengo hardcodeados en data.js para usarlos como estado global
import { usuarios, talleres, reservas } from '../data/data.js'

export const Session = createContext()

export function useSession() {
    return useContext(Session)
}

export function useEmail() {
    const { email } = useSession()
    return email
}

export function useLogin() {
    const { onLogin } = useSession()
    return onLogin
}

export function SessionProvider({children}) {
    const [email, setEmail] = useState(localStorage.getItem("email"))
    
    const onLogin = (email) => {
        setEmail(email)
        localStorage.setItem("email", email)
    }


    return (
        <Session.Provider value={{email, setEmail, onLogin}}>  
            {children}
        </Session.Provider>
    )
}