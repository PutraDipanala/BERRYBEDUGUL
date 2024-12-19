import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "../Components/AdminSidebar";
import { getGardens, deleteGarden } from "../Services/api";

const ManageGardens = () => {
  const [gardens, setGardens] = useState([]);

  useEffect(() => {
    const fetchGardens = async () => {
      const data = await getGardens();
      setGardens(data);
    };
    fetchGardens();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Anda yakin ingin menghapus kebun ini?")) {
      await deleteGarden(id);
      setGardens(gardens.filter((garden) => garden.id !== id));
    }
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Kelola Kebun Stroberi</h1>
        <Link
          to="/admin/gardens/new"
          className="p-3 bg-green-600 text-white rounded"
        >
          Tambah Kebun Baru
        </Link>
        <table className="mt-6 w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Nama Kebun</th>
              <th className="border border-gray-300 p-2">Lokasi</th>
              <th className="border border-gray-300 p-2">Jam Operasional</th>
              <th className="border border-gray-300 p-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {gardens.map((garden) => (
              <tr key={garden.id}>
                <td className="border border-gray-300 p-2">{garden.name}</td>
                <td className="border border-gray-300 p-2">
                  {garden.location}
                </td>
                <td className="border border-gray-300 p-2">
                  {garden.operationalHours}
                </td>
                <td className="border border-gray-300 p-2">
                  <Link
                    to={`/admin/gardens/edit/${garden.id}`}
                    className="text-blue-600"
                  >
                    Edit
                  </Link>{" "}
                  |{" "}
                  <button
                    onClick={() => handleDelete(garden.id)}
                    className="text-red-600"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageGardens;
