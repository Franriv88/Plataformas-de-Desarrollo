import React from 'react'
import { useNavigate} from "react-router-dom"
import { usuarios } from '../../data/data.js'
import { useState, useEffect } from 'react'
import ButtonBase from '../Buttons/ButtonBase.jsx'
import './TopBar.css'

import { useEmail } from '../../context/session.context.jsx'

function TopBar({label, onClick}) {
  const email = useEmail()

  const navigate = useNavigate();
  const [userName, setUserName] = useState('') 
  const [userImg, setUserImg] = useState('')

  //este state es únicamente para poder dejar el botón presonado 
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const idObtain = localStorage.getItem("userId") //acá lleag como un string
    const idNumber = Number(idObtain) //lo convierto a número
    const userFound = usuarios.find(u => u.email === email) //el dato de quién está logueado viene del email ahora

    if(userFound) {
      setUserImg(userFound.img);
      setUserName(userFound.name);
    }
  }, []) // esto no lo sabía: "El [] al final hace que esto corra una sola vez, justo cuando el componente aparece en pantalla"

  const handleExit = (e) => {
    setIsActive(true);
    navigate("/")
  }

  return (
    <div className='topbar'>
        <h1>{label}</h1>
        <div className='userInfo'>            
          <img src={userImg || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} alt="user profile" className='profile'/>
          <div className="userName">{userName}</div>
        </div>
        <div>
            <ButtonBase 
              className={`btnExit ${isActive ? 'active' : ''}`}
              label={"SALIR"} 
              onClick={handleExit}/>
        </div>
    </div>
  )
}

export default TopBar