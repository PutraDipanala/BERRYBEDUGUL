import React from "react";
import { useParams } from "react-router-dom";
import {
  FaWhatsapp,
  FaDollarSign,
  FaCalendarWeek,
  FaRegCalendarAlt,
} from "react-icons/fa"; // Ikon jam, ikon hari kerja dan akhir pekan
import headerImage1 from "../Assets/bg-k1.jpg"; // Gambar header pertama
import headerImage2 from "../Assets/bg-k2.jpg"; // Gambar header kedua
import headerImage3 from "../Assets/bg-k3.jpg";
import headerImage4 from "../Assets/bg-k4.jpg";
import headerImage5 from "../Assets/bg-k5.jpg";
import headerImage6 from "../Assets/bg-k6.jpg";
import headerImage7 from "../Assets/bg-k7.jpg";
import headerImage8 from "../Assets/bg-k8.jpg";

// Data kebun dengan dua kebun
const kebunData = [
  {
    id: "1",
    name: "Bali Strawberry Farm & Resto",
    subjudul: "Deskripsi",
    description:
      "Di Bali Strawberry Farm & Resto, kamu gak hanya bisa memetik stroberi yang segar. Kamu juga bisa menyantap berbagai menu yang nikmat dengan pemandangan hijau di sekitarnya. Harga 1,5 kilogram stoberi dibanderol Rp25 ribu. Untuk satu kilo stroberi stoberi dibanderol Rp40 ribu per kilogram.",
    headerImage: headerImage1, // Menggunakan gambar yang diimpor
    operational: {
      weekday: { time: "08:00 - 17:00", icon: <FaCalendarWeek /> }, // Ikon hari kerja
      weekend: { time: "08:00 - 18:00", icon: <FaRegCalendarAlt /> }, // Ikon akhir pekan
    },
    price: "50,000 IDR / pengunjung",
    location: "Jl. Raya Bedugul, Baturiti, Kabupaten Tabanan, Bali",
    facilities: [
      { name: "Resto", imgUrl: "/images/fasilitas_k1.jpg" },
      { name: "Petik Buah", imgUrl: headerImage1 },
      { name: "Oleh-Oleh", imgUrl: "/images/fasilitas2_k1.jpg" },
    ],
    gallery: [
      "/images/fasilitas_k1.jpg",
      "/images/galeri_k1.jpg",
      "/images/galeri2_k1.jpg",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=1",
  },
  {
    id: "2",
    name: "Hidden Strawberry Garden",
    description:
      "Temukan kebun stroberi tersembunyi di Bali, penuh dengan keindahan alami.",
    headerImage: headerImage2, // Menggunakan gambar yang diimpor
    operational: {
      weekday: { time: "09:00 - 16:00", icon: <FaCalendarWeek /> }, // Ikon hari kerja
      weekend: { time: "09:00 - 17:00", icon: <FaRegCalendarAlt /> }, // Ikon akhir pekan
    },
    price: "40,000 IDR / pengunjung",
    location: "Jl. Anggrek No. 8, Bedugul, Bali",
    facilities: [
      { name: "Petik Stroberi", imgUrl: "/images/facility-petik.jpg" },
      { name: "Fotografi", imgUrl: "/images/facility-foto.jpg" },
      { name: "Café", imgUrl: "/images/facility-cafe.jpg" },
    ],
    gallery: [
      "/images/kebun2-1.jpg",
      "/images/kebun2-2.jpg",
      "/images/kebun2-3.jpg",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=2",
  },
  {
    id: "3",
    name: "Leon's Strawberry",
    description:
      "Temukan kebun stroberi tersembunyi di Bali, penuh dengan keindahan alami.",
    headerImage: headerImage3, // Menggunakan gambar yang diimpor
    operational: {
      weekday: { time: "09:00 - 16:00", icon: <FaCalendarWeek /> }, // Ikon hari kerja
      weekend: { time: "09:00 - 17:00", icon: <FaRegCalendarAlt /> }, // Ikon akhir pekan
    },
    price: "40,000 IDR / pengunjung",
    location: "Jl. Anggrek No. 8, Bedugul, Bali",
    facilities: [
      { name: "Petik Stroberi", imgUrl: "/images/fasilitas_k3.jpg" },
    ],
    gallery: [
      "/images/kebun2-1.jpg",
      "/images/kebun2-2.jpg",
      "/images/kebun2-3.jpg",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=2",
  },
  {
    id: "4",
    name: "Moondy Strawberry",
    subjudul: "Deskripsi",
    description:
      "Di Bali Strawberry Farm & Resto, kamu gak hanya bisa memetik stroberi yang segar. Kamu juga bisa menyantap berbagai menu yang nikmat dengan pemandangan hijau di sekitarnya. Harga 1,5 kilogram stoberi dibanderol Rp25 ribu. Untuk satu kilo stroberi stoberi dibanderol Rp40 ribu per kilogram.",
    headerImage: headerImage8, // Menggunakan gambar yang diimpor
    operational: {
      weekday: { time: "08:00 - 17:00", icon: <FaCalendarWeek /> }, // Ikon hari kerja
      weekend: { time: "08:00 - 18:00", icon: <FaRegCalendarAlt /> }, // Ikon akhir pekan
    },
    price: "50,000 IDR / pengunjung",
    location: "Jl. Raya Bedugul, Baturiti, Kabupaten Tabanan, Bali",
    facilities: [
      { name: "Resto", imgUrl: "/images/fasilitas_k1.jpg" },
      { name: "Petik Buah", imgUrl: headerImage1 },
      { name: "Oleh-Oleh", imgUrl: "/images/fasilitas2_k1.jpg" },
    ],
    gallery: [
      "/images/fasilitas_k1.jpg",
      "/images/galeri_k1.jpg",
      "/images/galeri2_k1.jpg",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=1",
  },
  {
    id: "5",
    name: "Cukup Farm",
    subjudul: "Deskripsi",
    description:
      "Di Bali Strawberry Farm & Resto, kamu gak hanya bisa memetik stroberi yang segar. Kamu juga bisa menyantap berbagai menu yang nikmat dengan pemandangan hijau di sekitarnya. Harga 1,5 kilogram stoberi dibanderol Rp25 ribu. Untuk satu kilo stroberi stoberi dibanderol Rp40 ribu per kilogram.",
    headerImage: headerImage7, // Menggunakan gambar yang diimpor
    operational: {
      weekday: { time: "08:00 - 17:00", icon: <FaCalendarWeek /> }, // Ikon hari kerja
      weekend: { time: "08:00 - 18:00", icon: <FaRegCalendarAlt /> }, // Ikon akhir pekan
    },
    price: "50,000 IDR / pengunjung",
    location: "Jl. Raya Bedugul, Baturiti, Kabupaten Tabanan, Bali",
    facilities: [
      { name: "Resto", imgUrl: "/images/fasilitas_k1.jpg" },
      { name: "Petik Buah", imgUrl: headerImage1 },
      { name: "Oleh-Oleh", imgUrl: "/images/fasilitas2_k1.jpg" },
    ],
    gallery: [
      "/images/fasilitas_k1.jpg",
      "/images/galeri_k1.jpg",
      "/images/galeri2_k1.jpg",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=1",
  },
  {
    id: "6",
    name: "Amerta Agro",
    subjudul: "Deskripsi",
    description:
      "Di Bali Strawberry Farm & Resto, kamu gak hanya bisa memetik stroberi yang segar. Kamu juga bisa menyantap berbagai menu yang nikmat dengan pemandangan hijau di sekitarnya. Harga 1,5 kilogram stoberi dibanderol Rp25 ribu. Untuk satu kilo stroberi stoberi dibanderol Rp40 ribu per kilogram.",
    headerImage: headerImage6, // Menggunakan gambar yang diimpor
    operational: {
      weekday: { time: "08:00 - 17:00", icon: <FaCalendarWeek /> }, // Ikon hari kerja
      weekend: { time: "08:00 - 18:00", icon: <FaRegCalendarAlt /> }, // Ikon akhir pekan
    },
    price: "50,000 IDR / pengunjung",
    location: "Jl. Raya Bedugul, Baturiti, Kabupaten Tabanan, Bali",
    facilities: [
      { name: "Resto", imgUrl: "/images/fasilitas_k1.jpg" },
      { name: "Petik Buah", imgUrl: headerImage1 },
      { name: "Oleh-Oleh", imgUrl: "/images/fasilitas2_k1.jpg" },
    ],
    gallery: [
      "/images/fasilitas_k1.jpg",
      "/images/galeri_k1.jpg",
      "/images/galeri2_k1.jpg",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=1",
  },
  {
    id: "7",
    name: "Nala Strawberry",
    subjudul: "Deskripsi",
    description:
      "Di Bali Strawberry Farm & Resto, kamu gak hanya bisa memetik stroberi yang segar. Kamu juga bisa menyantap berbagai menu yang nikmat dengan pemandangan hijau di sekitarnya. Harga 1,5 kilogram stoberi dibanderol Rp25 ribu. Untuk satu kilo stroberi stoberi dibanderol Rp40 ribu per kilogram.",
    headerImage: headerImage5, // Menggunakan gambar yang diimpor
    operational: {
      weekday: { time: "08:00 - 17:00", icon: <FaCalendarWeek /> }, // Ikon hari kerja
      weekend: { time: "08:00 - 18:00", icon: <FaRegCalendarAlt /> }, // Ikon akhir pekan
    },
    price: "50,000 IDR / pengunjung",
    location: "Jl. Raya Bedugul, Baturiti, Kabupaten Tabanan, Bali",
    facilities: [
      { name: "Resto", imgUrl: "/images/fasilitas_k1.jpg" },
      { name: "Petik Buah", imgUrl: headerImage1 },
      { name: "Oleh-Oleh", imgUrl: "/images/fasilitas2_k1.jpg" },
    ],
    gallery: [
      "/images/fasilitas_k1.jpg",
      "/images/galeri_k1.jpg",
      "/images/galeri2_k1.jpg",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=1",
  },
  {
    id: "8",
    name: "Wiwanda Agrow",
    subjudul: "Deskripsi",
    description:
      "Di Bali Strawberry Farm & Resto, kamu gak hanya bisa memetik stroberi yang segar. Kamu juga bisa menyantap berbagai menu yang nikmat dengan pemandangan hijau di sekitarnya. Harga 1,5 kilogram stoberi dibanderol Rp25 ribu. Untuk satu kilo stroberi stoberi dibanderol Rp40 ribu per kilogram.",
    headerImage: headerImage4, // Menggunakan gambar yang diimpor
    operational: {
      weekday: { time: "08:00 - 17:00", icon: <FaCalendarWeek /> }, // Ikon hari kerja
      weekend: { time: "08:00 - 18:00", icon: <FaRegCalendarAlt /> }, // Ikon akhir pekan
    },
    price: "50,000 IDR / pengunjung",
    location: "Jl. Raya Bedugul, Baturiti, Kabupaten Tabanan, Bali",
    facilities: [
      { name: "Petik Langsung", imgUrl: "/images/fasilitas1_k4.jpg" },
      { name: "Restoran", imgUrl: "/images/fasilitas2_k4.jpg" },
    ],
    gallery: [
      "/images/fasilitas_k1.jpg",
      "/images/galeri_k1.jpg",
      "/images/galeri2_k1.jpg",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=1",
  },
];

// Komponen DetailKebun tetap sama, seperti di kode sebelumnya

const DetailKebun = () => {
  const { id } = useParams();
  const kebun = kebunData.find((item) => item.id === id);

  if (!kebun) {
    return (
      <p className="text-center mt-10 text-red-600">Kebun tidak ditemukan!</p>
    );
  }

  return (
    <div>
      {/* Header dengan gambar latar */}
      <header
        className="relative bg-cover bg-center h-[400px]"
        style={{ backgroundImage: `url(${kebun.headerImage})` }}
      >
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">{kebun.name}</h1>
        </div>
      </header>

      {/* Detail Kebun */}
      <section className="py-12 bg-[#eeede4]">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold">{kebun.subjudul}</h2>
        </div>
        <div className="mb-6 text-center">
          {" "}
          {/* Tambahkan mb-16 untuk jarak yang lebih besar */}
          <p className="text-lg text-black max-w-3xl mx-auto">
            {kebun.description}
          </p>
        </div>
      </section>

      {/* Informasi Operasional */}
      <section className="py-12 bg-gray-100">
        <div className="mb-16">
          {/* Menambahkan margin bawah lebih besar */}
          <h3 className="text-3xl font-bold text-center mb-6">Operasional</h3>
          {/* Memusatkan judul dengan text-center dan jarak lebih besar */}

          <div className="container mx-auto flex items-center mb-3">
            <FaDollarSign className="text-2xl mr-2" /> {/* Ikon harga */}
            <p className="text-xl font-bold">Harga: {kebun.price}</p>{" "}
            {/* Menebalkan harga dan memperbesar */}
          </div>

          <div className="container mx-auto flex items-center mb-3">
            {kebun.operational.weekday.icon}
            <p className="ml-2 text-xl font-bold">
              Senin - Jumat: {kebun.operational.weekday.time}
            </p>{" "}
            {/* Menebalkan dan memperbesar waktu */}
          </div>

          <div className="container mx-auto flex items-center">
            {kebun.operational.weekend.icon}
            <p className="ml-2 text-xl font-bold">
              Sabtu - Minggu: {kebun.operational.weekend.time}
            </p>{" "}
            {/* Menebalkan dan memperbesar waktu */}
          </div>
        </div>
      </section>

      {/* Fasilitas */}
      <section className="py-12 bg-[#eeede4]">
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-6">Fasilitas</h3>{" "}
          {/* Menambahkan mb-6 untuk jarak */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {kebun.facilities.map((facility, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <div className="card m-2 p-4 bg-white shadow-md rounded-lg">
                  {/* Ukuran gambar diperbesar hingga 50 */}
                  <img
                    src={facility.imgUrl}
                    alt={facility.name}
                    className="w-full h-48 object-cover rounded-lg" // Menjaga gambar mengisi kontainer dengan pemotongan jika perlu
                  />
                </div>
                <p className="mt-2 text-center font-semibold">
                  {facility.name}
                </p>{" "}
                {/* Menempatkan teks di bawah gambar */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lokasi */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto mb-6">
          <h3 className="text-xl font-semibold">Lokasi</h3>
          <p>{kebun.location}</p>
        </div>

        {/* Peta */}
        <div className="container mx-auto mb-6">
          <iframe
            src={kebun.mapEmbed}
            className="w-full h-[360px] rounded-lg border"
            loading="lazy"
            title="Peta Lokasi"
          ></iframe>
        </div>
      </section>

      {/* Galeri */}
      <section className="py-12">
        <div className="container mx-auto mb-6">
          <h3 className="text-xl font-semibold">Galeri Perkebunan</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {kebun.gallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery ${index + 1}`}
                className="rounded-lg shadow"
              />
            ))}
          </div>
        </div>
      </section>
      {/* Tombol "Selengkapnya" */}
      <div className="text-center mb-16">
        <a
          href={`https://wa.me/6282158564508?${kebun.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white text-sm font-semibold py-2 px-6 rounded-full hover:bg-green-600 transition-all duration-300"
        >
          Selengkapnya
        </a>
      </div>
    </div>
  );
};

export default DetailKebun;
