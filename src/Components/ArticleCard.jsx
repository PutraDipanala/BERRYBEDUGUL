import React, { useState } from "react";

const ArticleCard = ({ image, title, date, author, description, onClick }) => {
  const [showOverlay, setShowOverlay] = useState(false); // State untuk menampilkan overlay

  const handleImageClick = () => {
    setShowOverlay(!showOverlay); // Toggle overlay ketika gambar diklik
  };

  return (
    <div
      onClick={onClick}
      className="flex items-start space-x-4 bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition relative"
    >
      {/* Gambar Artikel dengan overlay */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-24 h-24 object-cover rounded-md"
          onClick={handleImageClick} // Klik gambar untuk toggle overlay
        />
        {/* Overlay */}
        {showOverlay && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center rounded-md">
            <span className="text-white font-semibold">Klik untuk Detail</span>
          </div>
        )}
      </div>

      {/* Konten Artikel */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{description}</p>
        <div className="flex items-center text-xs text-gray-400 space-x-2">
          <span>{date}</span>
          <span>•</span>
          <span>{author}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
