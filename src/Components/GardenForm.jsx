import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createGarden, updateGarden, getGardenById } from "../Services/api";

const GardenForm = () => {
  const [garden, setGarden] = useState({
    name: "",
    operationalHours: "",
    price: "",
    location: "",
    headerImage: "",
    gallery: ["", "", ""], // Minimal 3 gambar
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchGarden = async () => {
        const data = await getGardenById(id);
        setGarden(data);
      };
      fetchGarden();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGarden({ ...garden, [name]: value });
  };

  const handleGalleryChange = (index, value) => {
    const updatedGallery = [...garden.gallery];
    updatedGallery[index] = value;
    setGarden({ ...garden, gallery: updatedGallery });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateGarden(id, garden);
      alert("Kebun berhasil diperbarui!");
    } else {
      await createGarden(garden);
      alert("Kebun berhasil ditambahkan!");
    }
    navigate("/admin/gardens");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        {id ? "Edit Kebun Stroberi" : "Tambah Kebun Baru"}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-bold mb-2">Nama Kebun</label>
          <input
            type="text"
            name="name"
            value={garden.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Jam Operasional</label>
          <input
            type="text"
            name="operationalHours"
            value={garden.operationalHours}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Harga Tiket</label>
          <input
            type="number"
            name="price"
            value={garden.price}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Lokasi</label>
          <input
            type="text"
            name="location"
            value={garden.location}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">URL Foto Header</label>
          <input
            type="text"
            name="headerImage"
            value={garden.headerImage}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">
            Galeri (Minimal 3 Gambar)
          </label>
          {garden.gallery.map((image, index) => (
            <input
              key={index}
              type="text"
              value={image}
              onChange={(e) => handleGalleryChange(index, e.target.value)}
              className="w-full p-2 border rounded mb-2"
              placeholder={`Gambar ${index + 1}`}
            />
          ))}
        </div>
        <button type="submit" className="p-3 bg-green-600 text-white rounded">
          {id ? "Simpan Perubahan" : "Tambah Kebun"}
        </button>
      </form>
    </div>
  );
};

export default GardenForm;
