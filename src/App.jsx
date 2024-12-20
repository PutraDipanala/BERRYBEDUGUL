import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import axios from "axios";
import Home from "./Pages/Home";
import KebunStroberi from "./Pages/KebunStroberi";
import DetailKebun from "./Pages/DetailKebun";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AboutUs from "./Pages/AboutUs";
import ArticleDetail from "./Pages/ArticleDetail";
import Articles from "./Pages/Articles";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import AdminDashboard from "./Pages/AdminDashboard";
import ManageArticles from "./Pages/ManageArticles";
import ManageGardens from "./Pages/ManageGardens";
import GardenForm from "./Components/GardenForm"; // Pastikan path benar

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [role, setRole] = useState(""); // Tambahkan state untuk role
  const [isLoading, setIsLoading] = useState(true); // Tambahkan state untuk loading

  // Cek status login saat aplikasi dimuat
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      fetchUserData(token);
    } else {
      setIsLoading(false); // Jika tidak ada token, set loading selesai
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const res = await axios.get("http://localhost:3001/api/auth/validate", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsername(res.data.username);
      setRole(res.data.role); // Ambil role dari respons backend
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Validasi gagal:", error);
      setIsLoggedIn(false);
    } finally {
      setIsLoading(false); // Set loading selesai setelah fetch selesai
    }
  };

  const handleLogin = (token, username, role) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("role", role); // Simpan role di localStorage
    console.log("Role tersimpan di localStorage:", role); // Tambahkan log
    setIsLoggedIn(true);
    setUsername(username);
    setRole(role); // Set state role
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("role"); // Hapus role dari localStorage
    setIsLoggedIn(false);
    setUsername("");
    setRole(""); // Reset role
  };

  const handleCreateGarden = async (formData) => {
    try {
      const token = localStorage.getItem("authToken"); // Ambil token dari localStorage
      const response = await axios.post(
        "http://localhost:3001/api/admin/gardens",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Kebun berhasil ditambahkan!");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Gagal menambahkan kebun:", error);
      alert("Gagal menambahkan kebun. Periksa koneksi atau backend Anda.");
    }
  };

  if (isLoading) {
    // Tampilkan indikator loading saat data user sedang di-fetch
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Navbar
        onLogout={handleLogout}
        isLoggedIn={isLoggedIn}
        username={username}
        role={role} // Tambahkan role sebagai prop
      />
      <Routes>
        {/* Halaman Publik */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route
          path="/register"
          element={<RegisterPage onLogin={handleLogin} />}
        />

        {/* Halaman User */}
        <Route
          path="/kebun"
          element={isLoggedIn ? <KebunStroberi /> : <Navigate to="/login" />}
        />
        <Route
          path="/kebun/:id"
          element={isLoggedIn ? <DetailKebun /> : <Navigate to="/login" />}
        />
        <Route
          path="/about"
          element={isLoggedIn ? <AboutUs /> : <Navigate to="/login" />}
        />
        <Route
          path="/artikel"
          element={isLoggedIn ? <Articles /> : <Navigate to="/login" />}
        />
        <Route
          path="/artikel/:id"
          element={isLoggedIn ? <ArticleDetail /> : <Navigate to="/login" />}
        />

        {/* Halaman Admin */}
        <Route
          path="/admin"
          element={
            isLoggedIn && role === "admin" ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin/articles"
          element={
            isLoggedIn && role === "admin" ? (
              <ManageArticles />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin/gardens"
          element={
            isLoggedIn && role === "admin" ? (
              <ManageGardens />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/admin/gardens/create"
          element={
            isLoggedIn && role === "admin" ? (
              <GardenForm onSubmit={handleCreateGarden} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Rute Default */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
