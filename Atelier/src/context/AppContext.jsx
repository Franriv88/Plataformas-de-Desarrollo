// import createContext from 'react'
// import useState from 'react'

// Importo mejor en una sola línea así:
import { createContext, useState } from 'react'

// Importo los arrays que tengo hardcodeados en data.js para usarlos como estado global
// import { usuarios } from '../data/data.js'
// import { talleres } from '../data/data.js'
// import { reservase } from '../data/data.js'
import { usuarios, talleres, reservas } from '../data/data.js'


export const AppContext = createContext()

const AppProvider = ({children}) => {
    return (
        <div>  </div>
    )
}