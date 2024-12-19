import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "../Components/AdminSidebar";

const AdminDashboard = () => {
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const role = localStorage.getItem("role");

    if (!token || role !== "admin") {
      alert("Anda tidak memiliki akses ke halaman ini!");
      window.location.href = "/login"; // Redirect manual jika bukan admin
    }
  }, []);
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-2 gap-4">
          <Link
            to="/admin/articles"
            className="p-6 bg-red-800 text-white text-center rounded-lg"
          >
            Kelola Artikel
          </Link>
          <Link
            to="/admin/gardens"
            className="p-6 bg-red-800 text-white text-center rounded-lg"
          >
            Kelola Kebun Stroberi
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
