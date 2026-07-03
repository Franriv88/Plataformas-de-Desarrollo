import React from 'react'
import { useNavigate } from "react-router-dom"
import './Navbar.css'
import ButtonBase from '../Buttons/ButtonBase'
import '../Buttons/button.css'


function Navbar() {
    const navigate = useNavigate();

    const handleWorkshop = (e) => {
      navigate("/workshop")
    }

    const handleReservas = (e) => {
      navigate("/reservas")
    }

  return (
    <header>
        <nav>
            <ButtonBase label="Workshop" onClick={handleWorkshop} className="btn-workshop"/>
            <ButtonBase label="Reservas" onClick={handleReservas} className="btn-reserva"/>
        </nav>
    </header>
  )
}

export default Navbar