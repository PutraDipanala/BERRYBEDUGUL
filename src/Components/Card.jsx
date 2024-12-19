import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, image, description }) => {
  return (
    <div className="group relative border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Gambar kebun stroberi bisa diklik*/}
      <Link to={`/kebun/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover transform group-hover:scale-105 transition-all duration-300"
        />
      </Link>

      {/* Overlay (Teks dan deskripsi kebun) */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-4 group-hover:bg-opacity-60 transition-all duration-300">
        <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
        <p className="text-white text-sm mb-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;
