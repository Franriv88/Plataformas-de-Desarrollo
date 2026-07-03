import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import TopBar from '../../components/TopBar/TopBar.jsx'
import Card from '../../components/Card/Card.jsx'
import { useState } from 'react'
import Workshop from './Workshops/Workshop.jsx'

function Dashboard() {

  return (
    <div className="containerDashboard">
      <TopBar />
      <Navbar />
      <Card />
    </div>
  )
}

export default Dashboard