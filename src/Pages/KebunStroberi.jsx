import React from "react";
import Card from "../Components/Card";
import HeroSection from "../Components/HeroSection";

// Impor gambar kebun stroberi
import strawberry1 from "../Assets/Stroberi 1.jpg";
import strawberry2 from "../Assets/Stroberi 2.jpg";
import strawberry3 from "../Assets/Stroberi 3.jpg";
import strawberry4 from "../Assets/Stroberi 4.jpg";
import strawberry5 from "../Assets/Stroberi 5.jpg";
import strawberry6 from "../Assets/Stroberi 6.jpg";
import strawberry7 from "../Assets/Stroberi 7.jpg";
import strawberry8 from "../Assets/Stroberi 8.jpg";

const KebunStroberi = () => {
  const kebunList = [
    {
      id: "1",
      image: strawberry1,
      title: "Bali Strawberry Farm & Resto",
    },
    {
      id: "2",
      image: strawberry2,
      title: "Hidden Strawberry Garden",
    },
    {
      id: "3",
      image: strawberry3,
      title: "Leon's Strawberry",
    },
    {
      id: "4",
      image: strawberry4,
      title: "Moondy Strawberry",
    },
    {
      id: "5",
      image: strawberry5,
      title: "Cukup Farm",
    },
    {
      id: "6",
      image: strawberry6,
      title: "Amerta Agro",
    },
    {
      id: "7",
      image: strawberry7,
      title: "Nala Strawberry",
    },
    {
      id: "8",
      image: strawberry8,
      title: "Wiwanda Agrow",
    },
  ];

  return (
    <>
      <HeroSection />
      {/* Daftar Kebun Stroberi */}
      <section className="py-16" style={{ backgroundColor: "#eeede4" }}>
        <div className="container mx-auto">
          {/* Teks Pilih Kebun Stroberi Anda */}
          <h2 className="text-3xl font-extrabold text-center mb-2">
            Pilih Kebun Stroberi Anda!
          </h2>
          {/* Teks "Nikmati Seluruh Fasilitas Yang Diberikan" */}
          <p className="text-center text-lg font-normal text-gray-700 mb-6">
            Nikmati Seluruh Fasilitas Yang Diberikan
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kebunList.map((kebun, index) => (
              <Card key={index} {...kebun} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default KebunStroberi;
