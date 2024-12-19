import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import strawberryImage from "../Assets/registerpage.jpg"; // Update dengan path gambar Anda

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Indikator loading
  const [errorMessage, setErrorMessage] = useState(""); // Tambahkan state untuk error message
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(""); // Reset error message sebelum login

    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        {
          email,
          password,
        }
      );

      const { token, username, role, expiresIn } = response.data;

      // Debugging log untuk memastikan respons
      console.log("Token:", token);
      console.log("Username:", username);
      console.log("Role:", role);

      // Simpan data ke localStorage
      localStorage.setItem("authToken", token);
      localStorage.setItem("authExpires", Date.now() + expiresIn * 1000); // Waktu kedaluwarsa token
      localStorage.setItem("username", username); // Simpan username
      localStorage.setItem("role", role); // Simpan role

      // Panggil fungsi login (opsional)
      onLogin(token, username, role);

      alert("Login berhasil!");

      // Redirect berdasarkan role
      if (role === "admin") {
        navigate("/admin"); // Redirect ke dashboard admin
      } else {
        navigate("/"); // Redirect ke halaman user biasa
      }
    } catch (error) {
      console.error("Login Error:", error);

      // Tangani error dari backend
      if (error.response && error.response.data && error.response.data.error) {
        setErrorMessage(error.response.data.error); // Tampilkan pesan dari backend
      } else {
        setErrorMessage("Login gagal. Cek email dan password Anda.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="absolute top-0 right-0 w-1/2 h-24 bg-red-950 text-white flex justify-center items-center text-4xl font-bold shadow-lg">
        BerryBedugul
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Section dengan Gambar */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${strawberryImage})` }}
        ></div>

        {/* Right Section dengan Login Form */}
        <div className="w-1/2 bg-red-800 flex justify-center items-center">
          <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-red-900">
              Masuk
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Alamat Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border rounded-md border-gray-300"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border rounded-md border-gray-300"
                  required
                />
              </div>
              {/* Tampilkan error message jika ada */}
              {errorMessage && (
                <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
              )}
              <button
                type="submit"
                className={`w-full p-3 bg-red-900 text-white rounded-md font-bold transition duration-200 ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:bg-red-800"
                }`}
                disabled={loading}
              >
                {loading ? "Memproses..." : "Masuk"}
              </button>
            </form>
            <p className="text-center mt-4 text-sm">
              Belum punya akun?{" "}
              <a href="/register" className="text-red-900 font-bold">
                Daftar
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
