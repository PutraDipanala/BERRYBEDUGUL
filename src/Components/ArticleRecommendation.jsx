import React from "react";

const ArticleRecommendation = ({ id, image, title, onClick }) => {
  return (
    <div
      className="relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
      onClick={() => onClick(id)} // Navigasi ke halaman detail
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
        <h3 className="text-white text-lg font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default ArticleRecommendation;
