import React from "react";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation(); // Untuk mengetahui halaman aktif

  // Menu navigasi admin
  const adminMenu = [
    { name: "Dashboard", path: "/admin" },
    { name: "Kelola Artikel", path: "/admin/articles" },
    { name: "Kelola Kebun Stroberi", path: "/admin/gardens" },
  ];

  return (
    <div className="w-64 h-screen bg-red-800 text-white flex flex-col shadow-lg">
      <h1 className="text-2xl font-bold text-center py-4 border-b border-red-600">
        Admin Panel
      </h1>
      <nav className="flex-1 p-4">
        {adminMenu.map((menu, index) => (
          <Link
            key={index}
            to={menu.path}
            className={`block py-2 px-4 rounded-lg mb-2 text-lg ${
              location.pathname === menu.path
                ? "bg-red-600 font-bold"
                : "hover:bg-red-700"
            }`}
          >
            {menu.name}
          </Link>
        ))}
      </nav>
      <div className="p-4 border-t border-red-600">
        <button
          onClick={() => {
            localStorage.clear(); // Hapus token dan data lokal
            window.location.href = "/login"; // Redirect ke halaman login
          }}
          className="w-full py-2 bg-red-600 rounded-lg hover:bg-red-700 text-white font-bold"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
