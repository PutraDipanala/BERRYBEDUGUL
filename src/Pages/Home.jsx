import React from "react";
import HeroSection from "../Components/HeroSection";
import Card from "../Components/Card";
import MapComponent from "../Components/MapComponent";
import Footer from "../Components/Footer";
import ArticleRecommendation from "../Components/ArticleRecommendation";
import { useNavigate } from "react-router-dom";

import strawberry1 from "../Assets/Stroberi 1.jpg"; // Impor gambar
import strawberry2 from "../Assets/Stroberi 2.jpg";
import strawberry3 from "../Assets/Stroberi 3.jpg";
import strawberry4 from "../Assets/Stroberi 4.jpg";

const Home = () => {
  const navigate = useNavigate();
  const kebunList = [
    {
      id: 1,
      image: strawberry1,
      title: "Bali Strawberry Farm & Resto",
    },
    {
      id: 2,
      image: strawberry2,
      title: "Hidden Strawberry Garden",
    },
    {
      image: strawberry3,
      title: "Leon's Strawberry",
    },
  ];

  const recommendations = [
    {
      id: 1,
      image: "/images/artikel1.jpg",
      title: "Mengembangkan Kebun Stroberi sebagai Destinasi Wisata",
    },
    {
      id: 6,
      image: "/images/artikel6.jpg",
      title: "Peluang Bisnis Stroberi",
    },
    {
      id: 7,
      image: "/images/artikel7.jpg",
      title: "Teknologi Baru dalam Perkebunan",
    },
    {
      id: 8,
      image: "/images/artikel8.jpg",
      title: "Wisata Edukasi Stroberi",
    },
    {
      id: 9,
      image: "/images/artikel9.jpg",
      title: "Pengelolaan Limbah Stroberi",
    },
  ];
  const handleNavigate = (id) => {
    navigate(`/artikel/${id}`);
  };

  return (
    <>
      <HeroSection />
      {/* Bagian informasi tentang BeriBedugul */}
      <section className="py-12 bg-[#eeede4]">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Tentang BerryBedugul</h2>
          {/* Garis merah pendek */}
          <div className="h-2 w-20 mx-auto bg-red-900 rounded-full mb-4"></div>
          <p className="text-gray-700 text-lg">
            BerryBedugul adalah platform yang menyediakan informasi lengkap
            seputar destinasi kebun stroberi di wilayah Bedugul. Sebagai solusi
            praktis bagi wisatawan dan pecinta stroberi, kami menghadirkan
            informasi yang membantu Anda merencanakan kunjungan ke kebun
            stroberi terbaik. Dengan peta interaktif, daftar kebun rekomendasi,
            dan artikel terkait, BeriBedugul bertujuan untuk membuat kunjungan
            Anda menjadi lebih menyenangkan dan informatif.
          </p>
        </div>
      </section>
      {/* Bagian daftar kebun stroberi */}
      <section id="kebun" className="py-12 bg-[#c7c8b0]">
        <h2 className="text-2xl font-bold text-center mb-6">
          Daftar Kebun Stroberi
        </h2>
        {/* Garis merah pendek */}
        <div className="h-2 w-20 mx-auto bg-red-900 rounded-full mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
          {kebunList.map((kebun, index) => (
            <Card key={index} {...kebun} />
          ))}
        </div>
      </section>
      {/* Bagian peta interaktif */}
      <section id="map" className="py-12 bg-[#eeede4]">
        <h2 className="text-2xl font-bold text-center mb-6">
          Lokasi Kebun Stroberi
        </h2>
        {/* Garis merah pendek */}
        <div className="h-2 w-20 mx-auto bg-red-900 rounded-full mb-12"></div>
        <div className="container mx-auto">
          <MapComponent />
        </div>
      </section>
      {/* Rekomendasi Artikel */}
      <section className="py-8 bg-[#c7c8b0]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Rekomendasi Artikel</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {recommendations.map((item) => (
              <ArticleRecommendation
                key={item.id}
                {...item}
                onClick={handleNavigate} // Navigasi ke halaman detail
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
