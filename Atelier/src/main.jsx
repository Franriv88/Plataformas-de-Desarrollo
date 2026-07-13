import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
import { SessionProvider } from './context/session.context.jsx'

import './index.css'
import App from './App.jsx' // sin {} ya que lo exportamos por default en App.jsx

createRoot(document.getElementById('root')).render(
  //renderiza los componentes 2 veces para detectar errores en el código, solo en desarrollo, no afecta a producción
  <StrictMode> 
    <SessionProvider>
      <App /> 
    </SessionProvider>
  </StrictMode>,
)


// Deberías usar el <RouterProvider /> como hizo el profe en clase.