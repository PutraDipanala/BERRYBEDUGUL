import React, { useState } from "react";

const GardenForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    openingHoursWeekdays: { start: "", end: "" },
    openingHoursWeekend: { start: "", end: "" },
    facilities: "",
    description: "",
    headerImage: null,
    galleryImages: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNestedChange = (e, category) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [category]: {
        ...prevData[category],
        [name]: value,
      },
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "headerImage") {
      setFormData((prevData) => ({ ...prevData, headerImage: files[0] }));
    } else if (name === "galleryImages") {
      setFormData((prevData) => ({ ...prevData, galleryImages: files }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onSubmit === "function") {
      onSubmit(formData); // Pastikan `onSubmit` adalah fungsi sebelum dipanggil
    } else {
      console.error("onSubmit is not a function");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl font-bold mb-4">Tambah Kebun</h2>

      {/* Nama Kebun */}
      <label className="block mb-2 font-bold">Nama Kebun</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        className="w-full p-2 border mb-4"
        placeholder="Masukkan nama kebun"
        required
      />

      {/* Lokasi */}
      <label className="block mb-2 font-bold">Lokasi</label>
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleInputChange}
        className="w-full p-2 border mb-4"
        placeholder="Masukkan lokasi kebun"
        required
      />

      {/* Harga */}
      <label className="block mb-2 font-bold">Harga</label>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleInputChange}
        className="w-full p-2 border mb-4"
        placeholder="Masukkan harga per orang"
        required
      />

      {/* Jam Operasional */}
      <label className="block mb-2 font-bold">Jam Operasional</label>
      <div className="mb-4">
        <p className="mb-1">Senin - Jumat</p>
        <input
          type="time"
          name="start"
          value={formData.openingHoursWeekdays.start}
          onChange={(e) => handleNestedChange(e, "openingHoursWeekdays")}
          className="p-2 border mr-2"
        />
        <input
          type="time"
          name="end"
          value={formData.openingHoursWeekdays.end}
          onChange={(e) => handleNestedChange(e, "openingHoursWeekdays")}
          className="p-2 border"
        />
      </div>
      <div className="mb-4">
        <p className="mb-1">Sabtu - Minggu</p>
        <input
          type="time"
          name="start"
          value={formData.openingHoursWeekend.start}
          onChange={(e) => handleNestedChange(e, "openingHoursWeekend")}
          className="p-2 border mr-2"
        />
        <input
          type="time"
          name="end"
          value={formData.openingHoursWeekend.end}
          onChange={(e) => handleNestedChange(e, "openingHoursWeekend")}
          className="p-2 border"
        />
      </div>

      {/* Fasilitas */}
      <label className="block mb-2 font-bold">Fasilitas</label>
      <textarea
        name="facilities"
        value={formData.facilities}
        onChange={handleInputChange}
        className="w-full p-2 border mb-4"
        placeholder="Masukkan fasilitas, pisahkan dengan koma"
        required
      ></textarea>

      {/* Deskripsi */}
      <label className="block mb-2 font-bold">Deskripsi Kebun</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        className="w-full p-2 border mb-4"
        placeholder="Masukkan deskripsi kebun"
        required
      ></textarea>

      {/* Gambar Header Kebun */}
      <label className="block mb-2 font-bold">Gambar Header Kebun</label>
      <input
        type="file"
        name="headerImage"
        onChange={handleFileChange}
        className="w-full p-2 border mb-4"
        accept="image/*"
        required
      />

      {/* Galeri Kebun */}
      <label className="block mb-2 font-bold">Galeri Kebun</label>
      <input
        type="file"
        name="galleryImages"
        onChange={handleFileChange}
        className="w-full p-2 border mb-4"
        accept="image/*"
        multiple
        required
      />

      {/* Tombol Submit */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Simpan
      </button>
    </form>
  );
};

export default GardenForm;
