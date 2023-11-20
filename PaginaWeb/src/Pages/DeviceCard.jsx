import React from "react";
import "./DeviceCard.css";
export default function DeviceCard({
  imgSrc,
  deviceId,
  ubication,
  deviceName,
  cropAsoc,
  battLevel,
  deviceState,
  deviceLocation
}) {
  return (
    <div className="device_card">
      <div className="device_card_header">
        <img src={imgSrc} />
        <div className="device_card_header_info">
          <span className="device_card_header_id">
            ID: {deviceId}
          </span>
          <span className="device_card_header_crop">{cropAsoc}</span>
        </div>
      </div>
      <div className="device_card_footer">
        <div className="device_card_footer_first">


          <span className="label_name">Latitud: </span>
          <span className="label_value">
            {ubication[0]}</span>
          <span className="label_name">Longitud: </span>
          <span className="label_value"> {ubication[1]}</span>

        </div>

        <div className="device_card_footer_second">
          <span className="label_name">
            Nombre:
          </span>
          <label className="label_value">
            {deviceName}
          </label>

          <div className="battery-info">
            <span className="label_name">
              Batería:
            </span>
            <label className="label_value">
              {battLevel}
            </label>
          </div>
        </div>

        <div className="device_card_footer_third">

          <div className="device_location">
            <span>{deviceLocation[0]}, {deviceLocation[1]}</span>
          </div>
          <div className="device_status">
            <span>{deviceState}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
