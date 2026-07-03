import React from 'react'
import plusIcon from '../../../assets/plus.png'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import TopBar from "../../../components/TopBar/TopBar.jsx"
import Navbar from "../../../components/Navbar/Navbar.jsx"
import Card from "../../../components/Card/Card"
import ButtonBase from "../../../components/Buttons/ButtonBase.jsx"
import trashIcon from '../../../assets/trash.png'
import './workshop.css'
import Swal from 'sweetalert2'


function ListaWorkshops(){
    const [workshops, setWorkshops] = useState([]); 
    const navigate = useNavigate();

    useEffect(() => {
      //leo el sting
      const savedWorkshops = localStorage.getItem("workshopList");
      //si existe info la parseo, si no, me devuelve un array vacío
      if (savedWorkshops) {
        setWorkshops(JSON.parse(savedWorkshops));
      }
    }, []); //este es el array de dependencias, si no pongo nada, se ejecuta una sola vez al montar el componente. Si pongo algo, se ejecuta cada vez que ese algo cambie.

    const handleEdit = (index, item) => {
      navigate("/cardcreate", {state: {index, cardData: item}});
    };

    const handleDelete = (indexToDelete) => {
          Swal.fire({
          title: "¿Estás seguro?",
          text: "No vas a poder revertir esto",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, eliminar",
          cancelButtonText: "Cancelar"
          }).then((result) => {
            if (result.isConfirmed) {
              const actualizado = workshops.filter((item, i) => i !== indexToDelete);
              setWorkshops(actualizado);
              localStorage.setItem("workshopList", JSON.stringify(actualizado));
            }
          });
    }


    return (
      <div className="workshopList">
        {workshops.map((item, index) => (
          <Card key={index} data={item} index={index}
            editAction={
              <ButtonBase label="EDITAR" onClick={() => handleEdit(index, item)} className="btn-edit" />
            }
            deleteAction={
              <ButtonBase onClick={() => handleDelete(index)} className="btn-delete">
                <img src={trashIcon} alt="Delete" />
              </ButtonBase>
            }
          />
        ))}
      </div>
    )
}





function Workshop() {
  const navigate = useNavigate();

  const handleNewCard = (e) => {
    navigate("/cardcreate")
  }

    return (
    <div>
        <TopBar label={"Dashboard"}/>
        <Navbar />
        <div>
          <div className="button-label">
            <label> Nuevo Curso </label>
            <ButtonBase onClick={handleNewCard} className="btn-Add">
              <img src={plusIcon} alt="Nuevo" />
            </ButtonBase> 
          </div>

          <ListaWorkshops />
        </div>
    </div>
    )
  }

export default Workshop

