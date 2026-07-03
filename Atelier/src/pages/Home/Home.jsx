import React from 'react'
import { useNavigate } from "react-router-dom"
import ButtonBase from '../../components/Buttons/ButtonBase.jsx'
import './home.css'

function Home() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login")
  }


  return (
    <div className="homeContainer">
      <div className="buttonContainer">
        <ButtonBase label={"LOG IN"} onClick={handleLogin} className="btn-loginHome" />
      </div>
      <div className="textContainer">
        <h1 className="homeTitle">Atelier</h1>
        <div className="homeDivider"></div>
        <p className="homeTagline">"Conectamos talento con aprendizaje."</p>
        <p className="homeText">
          Una plataforma integral diseñada para gestionar experiencias únicas.
          Centralizamos la reserva, automatizamos la logística y aseguramos la
          operatividad, permitiéndote transformar tus talleres y eventos en
          procesos digitales impecables.
        </p>
      </div>
      <div className="imageContainer">
        <img src="../src/assets/arte.jpg" alt="arte" />
        <img src="../src/assets/cocina.jpg" alt="cocina" />
        <img src="../src/assets/ceramica.jpg" alt="cerámica" />
      </div>
    </div>
  )

}

export default Home