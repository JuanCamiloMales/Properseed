import React from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { useNavigate } from 'react-router-dom'
import devices from '../assets/Divices.json'
import { Icon } from 'leaflet'

export default function Mapa () {
  const position = [2.44635, -76.59885]
  const navigate = useNavigate()

  return (
    <MapContainer style={{ height: '100vh', width: '100vw', borderRadius: '0' }} center={position} zoom={20} zoomControl={false} >
      <TileLayer
        attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
      />
      {devices.map(({ Id, ubication }) => (
        <Marker
          position={ubication}
          key={Id}
          icon={customIcon}
          className = {Id}
          eventHandlers = {{
            click: (e) => {
              navigate('/Divice/' + e.target.options.className)
            }
          }}
        >
        </Marker>
      ))}
  </MapContainer>
  )
}

const customIcon = new Icon(
  {
    iconUrl: './public/Icon_Farm_Color.png',
    iconSize: [80, 80]
  }
)
