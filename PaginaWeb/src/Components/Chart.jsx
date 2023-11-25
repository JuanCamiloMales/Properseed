import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, useParams } from 'react-router-dom'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import devices from '../assets/Divices.json'

export default function Chart () {
  const { DiviceId } = useParams()
  const device = devices.filter(device => device.Id == DiviceId)[0]
  const { name } = device

  return (
    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', borderRadius: '20px', boxShadow: '5px 5px 20px 1px rgb(74, 74, 74)' }}>
      <div className='Head_Chart'>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px' }}>
          <h3 style={{ borderRadius: '20px', color: 'rgb(74, 74, 74)' }} > {name} </h3>
          <Link to= {'/Divice/' + DiviceId} >
            <FontAwesomeIcon style={{ color: 'rgb(74, 74, 74)', height: '20px' }} icon={faXmark} />
          </Link>
        </div>
        </div>
      <div style={{ display: 'flex', justifyContent: 'center', borderTop: '1px solid rgb(230, 230, 230)' }} >
        <img style={{ height: '400px', width: '60%' }} src='humedad.png' />
      </div>
    </div>
  )
}
