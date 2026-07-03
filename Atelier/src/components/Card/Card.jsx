import React from 'react'
import './Card.css'
import '../Buttons/button.css'
import ButtonBase from '../Buttons/ButtonBase.jsx'
import ButtonCounter from '../Buttons/ButtonCounter.jsx'

function Card({data, index, editAction, deleteAction, reservAction}) { //Card recibe "data", "index" y "actions" como prop

    // const handleEdit = (event) => {
    //     navigate("/cardcreate", {state: { index: index, cardData: data} }) //puedo enviar info junto con la navegacion !!! 
    // };

    // const handleSave = (event) => {
    //     navigate("/workshop")
    // }

  return (
    <div className="card">
        <div className="card-header">
            <label> $ {data.price} </label>
            {deleteAction}
        </div>
        
        <h1>{data.title}</h1>
        <div className="card-details">
            <span className="spots">
                <img src="../../src/assets/users-24px.png" alt="spotIcon" className='icon'/>
                <label>{data.cap} CUPOS</label>
            </span>
                <span className="date-time"> 
                <label>{data.date} | {data.time}</label>
            </span>
        </div>

        <div>{editAction}</div>
        <div>{reservAction}</div>
    </div>
  )
}

export default Card


            // <ButtonBase label="ACTIVO" onClick={handleSave} className="btn-save" />
            // <ButtonBase label="EDITAR" onClick={handleEdit} className="btn-edit" />