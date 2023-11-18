import React from 'react'
import Home from './Pages/Home.jsx'
import Dispositivo from './Pages/Dispositivo.jsx'
import { Link, Route, Routes } from 'react-router-dom'

export default function App () {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/Dispositivos'>Dispositivos</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/Dispositivos" element={ <Dispositivo /> } />
      </Routes>
    </div>
  )
}
