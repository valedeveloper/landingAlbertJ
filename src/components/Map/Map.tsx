import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Mapa = () => {
  const ubicacion = [3.5278115, -76.2933385]; // Coordenadas de ejemplo

  return (
    <MapContainer center={ubicacion} zoom={20} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={ubicacion}>
        <Popup>¡Aquí estoy!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapa;
