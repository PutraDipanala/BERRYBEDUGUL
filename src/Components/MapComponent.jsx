import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Jangan lupa impor CSS Leaflet

const defaultPosition = [-8.2766, 115.1677]; // Koordinat Bedugul

const MapComponent = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      {" "}
      {/* Tinggi responsif */}
      <MapContainer
        center={defaultPosition}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full w-full" // Pastikan kelas ini ada
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={defaultPosition}>
          <Popup>
            Lokasi Kebun Stroberi Bedugul <br /> Selamat berkunjung!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
