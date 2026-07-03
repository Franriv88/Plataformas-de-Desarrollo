import React from 'react'
import { useNavigate } from 'react-router-dom' 
import TopBar from "../../../components/TopBar/TopBar.jsx"
import Navbar from "../../../components/Navbar/Navbar.jsx"
import ButtonBase from '../../../components/Buttons/ButtonBase.jsx';
import './reservas.css'

function Reservas() {

  return (
    <div className="reservasContainer">
      <TopBar label={"Dashboard"}/>
      <Navbar />
      <h1>Estás en Reservas</h1>
    </div>
  )
}

export default Reservas