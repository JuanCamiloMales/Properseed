import React from 'react';
import "./styles.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon, divIcon, point } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import DeviceCard from "./DeviceCard";
import VarCard from "./VarCard";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { IoRainy } from "react-icons/io5";
import { RiWaterPercentLine } from "react-icons/ri";

import SimplePopup from './SimplePopup';

export default function Home() {
  //devices
  const devices = [
    {
      deviceId: 1,
      deviceName: "Café 1",
      ubication: [2.44635, -76.59885],
      cropAsoc: "Café",
      battLevel: "100 %",
      deviceState: "Activo",
      deviceLocation: ["Popayán", "Cauca"]
    },
    {
      deviceId: 2,
      deviceName: "Café 2",
      ubication: [2.44734, -76.59921],
      cropAsoc: "Café",
      battLevel: "100 %",
      deviceState: "Activo",
      deviceLocation: ["Popayán", "Cauca"]
    },
    {
      deviceId: 3,
      deviceName: "Café 3",
      ubication: [2.44722, -76.59811],
      cropAsoc: "Café",
      battLevel: "70 %",
      deviceState: "Activo",
      deviceLocation: ["Popayán", "Cauca"]
    }
  ];

  const customIcon = new Icon(
    {
      iconUrl: "https://cdn-icons-png.flaticon.com/128/4525/4525257.png",
      iconSize: [50, 50] //size of the icon
    }
  );
  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true)
    });

  };

  const notifications = [
    {
      notifId: 1,
      notifDeviceID: 1,
      notifDeviceName: "Café 1",
      date: "21/11/2023",
      time: "12:30 pm",
      notifcropAsoc: "Café",
      variable: "Temperatura",
      type: "Alto",  
      state: false,    
    },
    {
      notifId: 2,
      notifDeviceID: 1,
      notifDeviceName: "Café 1",
      date: "21/11/2023",
      time: "12:55 pm",
      notifcropAsoc: "Café",
      variable: "Temperatura",
      type: "Alto",      
      state: false,
    },
    {
      notifId: 3,
      notifDeviceID: 1,
      notifDeviceName: "Café 1",
      date: "21/11/2023",
      time: "12:55 pm",
      notifcropAsoc: "Café",
      variable: "Lluvias",
      type: "Bajo",  
      state: false,   
    },
  ]
  return (
    <div className='Home'>
      <div className="App">
        <VarCard
          varIcon={<FaTemperatureThreeQuarters
            size="3rem"
            color="#000000"
          />}
          constentHead="+24 °C"
          varName="Temperatura"
          views="7"
          varEval="Adecuado"
          color="#C3F8B4"
        />
        <VarCard
          varIcon={<RiWaterPercentLine
            size="3rem"
            color="#000000"
          />}

          constentHead="72 %"
          varName="Humedad"
          views="11"
          varEval="Alto"
          color="#f4cccc"
        />
        <VarCard
          varIcon={<IoRainy size="3rem"
            color="#000000" />}
          constentHead="2 mm"
          varName="Lluvia"
          views="4"
          varEval="Bajo"
          color="#cfe2f3"
        />
        <SimplePopup
          notifications={notifications}
        ></SimplePopup>

      </div>

      <div className='map_container'>


        <MapContainer center={[2.44635, -76.59885]} zoom={16}>
          {/*<TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />*/}
          <TileLayer
            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
          <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createCustomClusterIcon}
          >
            {devices.map(device => (
              <Marker position={device.ubication} icon={customIcon} key={device.deviceId}>
                <Popup className='custom-popup'>
                  <DeviceCard
                    imgSrc="https://cdn.pixabay.com/photo/2016/06/28/22/29/coffee-1485596_960_720.jpg"
                    deviceId={device.deviceId}
                    ubication={device.ubication}
                    deviceName={device.deviceName}
                    cropAsoc={device.cropAsoc}
                    battLevel={device.battLevel}
                    deviceState={device.deviceState}
                    deviceLocation={device.deviceLocation}
                  />
                  {//marker.popUp
                  }
                </Popup>

              </Marker>
            ))
            }
          </MarkerClusterGroup>

        </MapContainer>
      </div></div>
  );
}
