import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import LogIn from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import Workshop from './pages/Dashboard/Workshops/Workshop.jsx'
import CardCreate from './components/Card/CardCreate.jsx'
import Reservas from './pages/Dashboard/Reservas/Reservas.jsx'
import Gallery from './pages/Gallery/Gallery.jsx'




const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/cardcreate" element={<CardCreate />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App

