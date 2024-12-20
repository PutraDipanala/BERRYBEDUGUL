import React, { useState, useEffect } from "react";
import { fetchGardens, deleteGarden } from "../Services/api"; // Pastikan fungsi API tersedia
import { useNavigate } from "react-router-dom";

const ManageGardens = () => {
  const [gardens, setGardens] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadGardens = async () => {
      try {
        const data = await fetchGardens(); // Panggil API fetchGardens
        setGardens(data);
      } catch (error) {
        console.error("Error fetching gardens:", error);
      } finally {
        setLoading(false);
      }
    };
    loadGardens();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Apakah Anda yakin ingin menghapus kebun ini?")) return;

    try {
      await deleteGarden(id); // Panggil API deleteGarden
      setGardens(gardens.filter((garden) => garden.id !== id));
      alert("Kebun berhasil dihapus!");
    } catch (error) {
      console.error("Error deleting garden:", error);
      alert("Gagal menghapus kebun.");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Kelola Kebun</h1>
      {/* Tombol untuk menavigasi ke halaman tambah kebun */}
      <button
        onClick={() => navigate("/admin/gardens/create")} // Arahkan ke halaman tambah kebun
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Tambah Kebun
      </button>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Nama Kebun</th>
            <th className="border border-gray-300 px-4 py-2">Lokasi</th>
            <th className="border border-gray-300 px-4 py-2">Harga</th>
            <th className="border border-gray-300 px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {gardens.map((garden) => (
            <tr key={garden.id}>
              <td className="border border-gray-300 px-4 py-2">
                {garden.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {garden.location}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Rp {garden.price}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {/* Tombol Edit */}
                <button
                  onClick={() => navigate(`/admin/gardens/edit/${garden.id}`)} // Navigasi ke halaman edit kebun
                  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                >
                  Edit
                </button>
                {/* Tombol Hapus */}
                <button
                  onClick={() => handleDelete(garden.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageGardens;
