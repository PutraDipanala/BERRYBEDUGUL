import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/logoBB.png"; // Pastikan path sesuai dengan lokasi gambar Anda

const Navbar = ({ isLoggedIn, onLogout, username }) => {
  const [showDropdown, setShowDropdown] = useState(false); // Toggle untuk dropdown
  const dropdownRef = useRef(null); // Referensi ke dropdown
  const userIconRef = useRef(null); // Referensi ke icon pengguna

  // Menutup dropdown ketika mengklik di luar icon pengguna atau dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        userIconRef.current &&
        !userIconRef.current.contains(event.target)
      ) {
        setShowDropdown(false); // Menyembunyikan dropdown
      }
    };

    // Menambahkan event listener untuk klik di luar elemen
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown); // Menampilkan atau menyembunyikan dropdown
  };

  return (
    <nav className="bg-red-900 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />{" "}
          {/* Path ke gambar logo */}
        </NavLink>

        {/* Menu Links */}
        <div className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white font-extrabold" : "text-gray-300"
            }
          >
            Beranda
          </NavLink>
          <NavLink
            to="/kebun"
            className={({ isActive }) =>
              isActive ? "text-white font-extrabold" : "text-gray-300"
            }
          >
            Kebun Stroberi
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-white font-extrabold" : "text-gray-300"
            }
          >
            Tentang Kami
          </NavLink>
          <NavLink
            to="/artikel"
            className={({ isActive }) =>
              isActive ? "text-white font-extrabold" : "text-gray-300"
            }
          >
            Artikel
          </NavLink>

          {/* Menampilkan Username dan icon pengguna */}
          {isLoggedIn ? (
            <div className="relative">
              <div
                ref={userIconRef}
                className="flex items-center cursor-pointer"
                onClick={toggleDropdown}
              >
                <FaUserCircle className="text-2xl" />
                <span className="ml-2">{username || "Pengguna"}</span>
              </div>

              {/* Dropdown logout */}
              {showDropdown && (
                <div
                  ref={dropdownRef}
                  className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg z-10"
                >
                  <button
                    onClick={onLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-white font-bold" : "text-gray-300"
              }
            >
              Masuk / Daftar
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
