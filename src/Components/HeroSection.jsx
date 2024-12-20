import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../Assets/HeroSection.jpg";

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Data kebun stroberi
  const data = [
    { id: "1", name: "Bali Strawberry Farm & Resto" },
    { id: "2", name: "Hidden Strawberry Garden" },
    { id: "3", name: "Leon's Strawberry" },
    { id: "4", name: "Moondy Strawberry" },
    { id: "5", name: "Cukup Farm" },
    { id: "6", name: "Amerta Agrow" },
    { id: "7", name: "Nala Strawberry" },
    { id: "8", name: "Wiwanda Agrow" },
  ];

  // Filter data berdasarkan pencarian
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Navigasi ke halaman detail
  const handleSelect = (id) => {
    navigate(`/kebun/${id}`);
  };

  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center "
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        <div className="text-center text-white mb-6">
          <h1 className="text-4xl font-bold mb-4">
            Selamat Datang di BerryBedugul
          </h1>
          <p className="mb-6">
            Temukan destinasi kebun stroberi terbaik di Bedugul
          </p>
        </div>
        {/* Input Pencarian */}
        <input
          type="text"
          placeholder="Cari destinasi..."
          className="w-1/5 p-2 rounded mb-4 text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* Hasil Pencarian */}
        {searchTerm && (
          <ul className="bg-white w-1/2 text-black p-4 rounded shadow">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <li
                  key={item.id}
                  className="py-1 border-b last:border-none cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSelect(item.id)}
                >
                  {item.name}
                </li>
              ))
            ) : (
              <li className="text-gray-500">Tidak ada hasil</li>
            )}
          </ul>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
