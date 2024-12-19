import React from "react";
import FeedbackForm from "../Components/FeedbackForm";

const AboutUs = () => {
  return (
    <div className="bg-[#eeede4]">
      {/* Header Section */}
      <section className="py-10 flex flex-col items-center">
        {/* Gambar */}
        <div className="w-[1300px] h-[500px] overflow-hidden rounded-lg shadow-lg">
          <img
            src="/images/AgriSpace Team.jpg" // Pastikan path gambar sesuai dengan folder public Anda
            alt="Kebun Strawberry Bedugul"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        {/* Teks Sambutan */}
        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold text-black">
            Halo sobat BerryBedugul!
          </h1>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-10 px-6 lg:px-16 flex justify-center bg-[#eeede4]">
        <div className="max-w-5xl text-center">
          <p className="text-black text-lg leading-relaxed mb-4">
            Selamat datang di Kebun Stroberi Bedugul Destinasi agrowisata yang
            menawarkan pengalaman memukau di tengah keindahan alam Bali! Kami
            bangga mempersembahkan kebun stroberi yang ditanam dengan cinta dan
            dedikasi. Di sini, Anda dapat menikmati kelezatan buah segar sambil
            belajar tentang budidaya pertanian yang berkelanjutan.
          </p>
          <p className="text-black text-lg leading-relaxed mb-4">
            Platform kami menyediakan informasi lengkap seputar agrowisata kebun
            stroberi di wilayah Bedugul, Provinsi Bali. Kami hadir sebagai
            sarana pusat informasi yang mempermudah wisatawan dalam menentukan
            destinasi sesuai fasilitas yang mereka inginkan.Temukan keindahan,
            pengalaman, dan edukasi dalam satu tempat. Nikmati fasilitas menarik
            dan produk unggulan dari kebun kami, serta jadikan perjalanan Anda
            tak terlupakan!
          </p>
        </div>
      </section>

      {/* Icon Section */}
      <section className="py-10 bg-[#eeede4]">
        <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
          Kalian Akan Mendapatkan Informasi Seputar
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 px-6 lg:px-16">
          {[
            { name: "Fasilitas", icon: "🏠" },
            { name: "Produk Unggulan", icon: "🎁" },
            { name: "Reservasi", icon: "📝" },
            { name: "Pelayanan", icon: "☕" },
            { name: "Harga", icon: "💰" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-lg shadow text-center flex flex-col items-center"
            >
              <span className="text-4xl mb-2">{item.icon}</span>
              <p className="text-gray-800 font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </section>
      <FeedbackForm />
    </div>
  );
};

export default AboutUs;
