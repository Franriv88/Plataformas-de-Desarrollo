import React from 'react'
import './Card.css'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import ButtonCounter from '../Buttons/ButtonCounter.jsx'
import ButtonBase from '../Buttons/ButtonBase.jsx'
import './Card.css'

import { saveWorkshop } from '../../services/workshopService.js'

function CardCreate() {
  const navigate = useNavigate();
  const location = useLocation();
  const editData = location.state

  
  //ahora acá uso un único estado para todos los campos del formulario del return
  const [formData, setFormData] = useState( editData? editData.cardData : { title: '', cap: '', date: '', time: '', price: '' })

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value }); // clave : valor
  };
 
  const handleSave = () => {
    saveWorkshop(formData, editData?.index) //uso de nuevo la notación "otpional chaining" -> apréndela bien sin tener que leer!
    navigate("/workshop");
  };

  //ButtonCounter para setear la cant de cupos
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count +1);
    setFormData({...formData, cap: count+1});
  }
  const handleSubtract = () => {
      //trata de entender esta forma: setCount(count > 0 ? count - 1 : 0); como hace el prof en clase, en lugar de usar el if de toda la vida
    if(count > 0){
      setCount(count -1);
      setFormData({...formData, cap: count-1});
    }
  }

  return (
    <div>
      <form className='card-create'>
        <div>
          {/* Acá se me ocurrió que cada card indique si es un taller, un workshop o un curso 
          <ButtonBase label="TALLER" onClick={}/>
          <ButtonBase label="WORKSHOP" onClick={}/>
          <ButtonBase label="CURSO" onClick={}/> */}
        </div>
        <label>Nombre del Taller</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Título" />
        <div>
          <label>Fecha</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
          <label>Hora</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} />
        </div>
        <div className="spots spots--cardCreate">
          <label>cupos</label>
          <ButtonCounter count={count} handleAdd={handleAdd} handleSubtract={handleSubtract} value={formData.cap} onChange={handleChange} />
        </div>
        <label>Precio</label>
        <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Precio" />
        <div className="btn-cardCreate">
          {/* <ButtonBase label="CANCELAR" onClick={handleCancel} /> */}
          <ButtonBase label={"GUARDAR"} className="btn-save" onClick={handleSave} />
        </div>
      </form>
    </div>
  )
}

export default CardCreate