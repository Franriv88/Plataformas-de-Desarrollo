import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import TopBar from '../../components/TopBar/TopBar.jsx'
import Card from '../../components/Card/Card.jsx'
import { useState } from 'react'
import Workshop from './Workshops/Workshop.jsx'

import {useEmail} from '../../context/session.context.jsx'


const Dashboard = () => {
  const email = useEmail()

  return (
    <div className="containerDashboard">
      <TopBar />
        {email}
      <Navbar />
      <Card />
    </div>
  )
}

export default Dashboard