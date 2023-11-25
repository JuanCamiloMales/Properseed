import React from 'react'
import DeviceCard from './DeviceCard.jsx'
import { Link, useParams } from 'react-router-dom'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import devices from '../assets/Divices.json'

export default function Device () {
  const { DiviceId } = useParams()
  const device = devices.filter(device => device.Id == DiviceId)[0]
  const { name, ubication, battery, plant, temperature } = device

  return (
    <div style={{ backgroundColor: 'rgb(248, 248, 248)', borderRadius: '20px', boxShadow: '5px 5px 20px 1px rgb(74, 74, 74)' }} >
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px' }}>
        <h3 style={{ borderRadius: '20px', color: 'rgb(74, 74, 74)' }} >Dispositivos</h3>
        <Link to='/' >
          <FontAwesomeIcon style={{ color: 'rgb(74, 74, 74)', height: '20px' }} icon={faXmark} />
        </Link>
      </div>
      <DeviceCard
        Name = {name}
        Ubication = {ubication}
        Battery = {battery}
        Plant = {plant}
        Temperature = {temperature}
      />
    </div>
  )
}
