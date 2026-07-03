import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../../components/Card/Card.jsx'
import TopBar from '../../components/TopBar/TopBar.jsx'
import NavBar from '../../components/Navbar/Navbar.jsx'
import ButtonBase from '../../components/Buttons/ButtonBase.jsx'
import '../../components/Buttons/button.css'
import './gallery.css'
import Swal from 'sweetalert2'

function Gallery() {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    const savedWorkshops = localStorage.getItem("workshopList");
    
    if(savedWorkshops) {
      setWorkshops(JSON.parse(savedWorkshops));
    }
  },[]);

  const handleReserv = () => {
    Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
      }).fire({
        icon: "success",
        title: "Reserva Confirmada"
      });
  }


  return (
    <div>
      <TopBar label={"Galería de Cursos"}/>
      <div className="gallery-container">
        {workshops.map((item, index) => (
          <Card key={index} data={item} index={index} 
            reservAction={
              <ButtonBase label="RESERVAR" onClick={() => handleReserv()} className="btn-reserv" />
            }
          />
        ))}
      </div>
    </div>

  )
}

export default Gallery