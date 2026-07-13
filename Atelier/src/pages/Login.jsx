import React from 'react'
import './pages.css'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import { usuarios } from '../../src/data/data.js'
import ButtonBase from '../components/Buttons/ButtonBase.jsx';
import Logo from '../assets/atelier-logo.png'
import logout from '../assets/logout.png'
import Swal from 'sweetalert2'
import '../components/Buttons/button.css'

import {useLogin} from '../context/session.context.jsx'



function LogIn() {
  const onLogin = useLogin()  

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [id, setId] = useState('')

  const navigate = useNavigate(); //acá creo la función para navegar

  const handleLoginSubmit = (event) =>{
    event.preventDefault() //uso el preventDefautl xq no quiero que se recargue por ser un formulario

    const foundUser = usuarios.find((u) => u.email === email && u.password === password);
    
      //acá tendré que validar las credenciales
      if(foundUser){
        // Si encontramos coincidencia guardo el rol, nombre y el id del usuario en LocalStorage
        // localStorage.setItem("userRol", foundUser.rol);
        // localStorage.setItem("userName", foundUser.name);
        // localStorage.setItem("userId", foundUser.id);
        onLogin(foundUser.email)

        if (foundUser.rol === "admin"){
          navigate('/workshop')
        }else{
          navigate('/gallery')
        }

      }else{
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Sus credenciales son incorrectas",
            showConfirmButton: false,
            timer: 1500
        });
    };
  }

  const handleLogout = () => {
    navigate('/')
  }

  return (
    <div className="container">
      <div className="logout">
        <ButtonBase onClick={handleLogout}>
          <img src={logout} alt="Logout" className="btn-logout"/>
        </ButtonBase>
      </div>
      <form>
          <div className="logo">
            <img src={Logo} alt="Atelier" />
          </div>
          <label>Email:</label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="jhondoe@gmail.com"/>
          <label>Password:</label>
          <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="*****"/>
          <div>
            <ButtonBase label={"LOG IN"} onClick={handleLoginSubmit} className="btn-login"/>
          </div>
      </form>
    </div>
  )
}


export default LogIn