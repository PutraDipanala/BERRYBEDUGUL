import React from "react";
import { useNavigate } from "react-router-dom";
import ArticleCard from "../Components/ArticleCard";
import ArticleRecommendation from "../Components/ArticleRecommendation";

// Data Dummy
const popularArticle = {
  id: 1,
  image: "/images/artikel1.jpg",
  title: "Mengembangkan Kebun Stroberi sebagai Destinasi Wisata Edukasi",
  date: "18 November 2024",
  author: "Admin BerryBedugul",
  description:
    "Memetik stroberi langsung dari kebun menjadi daya tarik utama. Aktivitas ini menawarkan pengalaman unik dan menyenangkanedugul menjadi daerah unggulan untuk komoditas stroberi, dengan potensi perkebunan yang terus meningkat berkat inovasi modern.",
};

const newsArticles = [
  {
    id: 2,
    image: "/images/artikel2.jpg",
    title:
      "Keindahan dan Potensi Kebun Stroberi: Wisata Agro yang Edukatif dan Rekreatif",
    date: "27 November 2024",
    author: "Admin Berry Bedugul",
    description:
      "Kebun stroberi adalah destinasi wisata yang menawarkan pengalaman unik bagi pengunjung untuk menikmati keindahan alam sekaligus belajar tentang budidaya tanaman stroberi.",
  },
  {
    id: 3,
    image: "/images/artikel_petik.jpg",
    title: "Meningkatnya Perkembangan Teknologi Perkebunan Stroberi 2024",
    date: "10 Juni 2024",
    author: "Admin Agro Friend",
    description:
      "Perkebunan stroberi kini memanfaatkan teknologi modern untuk meningkatkan hasil produksi dan kualitas.",
  },
  {
    id: 4,
    image: "/images/artikel_cara.png",
    title: "Pengaruh Industri Agrikultur di Indonesia terhadap Dunia",
    date: "20 Juni 2024",
    author: "Admin Agro Friend",
    description:
      "Dunia agrikultur terus berkembang dengan inovasi modern untuk memenuhi kebutuhan pasar global.",
  },
];

const recommendations = [
  {
    id: 5,
    image: "/images/artikel_manfaat.png",
    title: "Manfaat Stroberi untuk Kesehatan",
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

const Articles = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    console.log(`Navigasi ke artikel dengan ID: ${id}`); // Debugging
    navigate(`/artikel/${id}`); // Navigasi ke halaman detail
  };

  return (
    <div className="bg-gray-50">
      <header
        className="bg-[#eeede4] flex justify-center py-10"
        onClick={() => navigate(`/artikel/${popularArticle.id}`)}
      >
        <div className="w-[1300px] h-[500px] overflow-hidden rounded-lg shadow-lg relative cursor-pointer">
          <img
            src={popularArticle.image}
            alt="Artikel Populer"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 ease-in-out"
          />
          <div className="absolute bottom-0 left-0 w-full px-6 py-4 bg-black bg-opacity-60 text-white">
            <h1 className="text-3xl font-bold mb-2">{popularArticle.title}</h1>
            <p className="text-sm mb-2">{popularArticle.description}</p>
            <div className="flex items-center text-xs text-gray-300 space-x-2">
              <span>{popularArticle.date}</span>
              <span>•</span>
              <span>{popularArticle.author}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Berita Terkini */}
      <section className="py-8 bg-[#eeede4]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Berita Terkini</h2>
          <div className="grid grid-cols-1 gap-4">
            {newsArticles.map((article) => (
              <ArticleCard
                key={article.id}
                {...article}
                onClick={() => handleNavigate(article.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Rekomendasi Artikel */}
      <section className="py-8 bg-[#eeede4]">
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
    </div>
  );
};

export default Articles;
