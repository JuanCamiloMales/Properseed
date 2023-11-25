import React from 'react'
import Map from './Components/Map.jsx'
import Logo from './Components/Logo.jsx'
import Device from './Components/Device.jsx'
import Devices from './Components/Devices.jsx'
import Chart from './Components/Chart.jsx'
import './App.css'
import { faUser, faMicrochip, faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Routes, Route, Link } from 'react-router-dom'
import NotificationList from './Components/NotificationList.jsx'

export default function App () {
  return (
    <div className='App'>
      <div className='Mapa'>
        <Map />
      </div>
      <header >
        <Logo />
      </header>
      <nav>
        <Link className='ButtonIcon' to='Perfil'>
          <span className='ButtonIcon_Text'>Perfil</span>
          <FontAwesomeIcon className='ButtonIcon_Icon' icon={faUser} />
        </Link>
        <Link className='ButtonIcon'to='Divices'>
          <span className='ButtonIcon_Text'>Dispositivos</span>
          <FontAwesomeIcon className='ButtonIcon_Icon' icon={faMicrochip} />
        </Link>
        <Link className='ButtonIcon'to='Notification'>
          <span className='ButtonIcon_Text'>Notification</span>
          <FontAwesomeIcon className='ButtonIcon_Icon' icon={faBell} />
        </Link>
      </nav>
      <Routes>
        <Route
          path='/Notification'
          element={
            <aside>
              <NotificationList />
            </aside> }
        />
        <Route
          path='/Divices'
          element={
            <aside>
              <Devices />
            </aside> }
        />
        <Route
          path='/Divice/:DiviceId'
          element={
            <aside>
              <Device />
            </aside> }
        />
        <Route
          path='/Chart/:DiviceId/:TypeChart'
          element={
            <>
              <main>
                <Chart />
              </main>
              <aside>
                <Device />
              </aside>
            </>
          }
        />
      </Routes>
    </div>
  )
}
