import React from 'react'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const CardInfo = ({ Text, Icon }) => {
  return (
    <div style={{ marginTop: '6px', height: '25px', display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: '15px' }}>
      <img style={{ height: '100%' }} src={Icon} />
      <span> <Link style={{ textDecoration: 'none', color: '1px solid rgb(230, 230, 230)' }} to='/Chart/1/1' >{Text}</Link> </span>
    </div>
  )
}

export default function DeviceCard ({ Name, Ubication, Battery, Plant, Temperature }) {
  return (
    <div style={{ padding: '20px', borderTop: '1px solid rgb(230, 230, 230)' }} >
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <FontAwesomeIcon icon={faCircleCheck} style={{ height: '35px', width: '35px', color: '#78bd48' }} />
        <span style={{ paddingLeft: '15px', color: '#78bd48', fontWeight: '600' }} > {Name} </span>
      </div>
      <div style={{ paddingLeft: '40px', paddingTop: '5px' }}>
        <CardInfo Text={Ubication.toString() } Icon='/public/map.png'/>
        <CardInfo Text={Battery} Icon='/public/battery.png'/>
        <CardInfo Text={Plant }Icon='/public/plant.png'/>
        <CardInfo Text={Temperature} Icon='/public/hot.png'/>
      </div>
    </div>
  )
}
