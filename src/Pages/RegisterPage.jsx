import React, { useState } from "react";
import axios from "axios";
import strawberryImage from "../assets/registerpage.jpg"; // Update the path as needed

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password dan konfirmasi password tidak cocok!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/register",
        {
          username: name,
          email: email,
          password: password,
        }
      );
      console.log("Registrasi berhasil:", response.data);
      alert("Registrasi berhasil! Silakan login.");
      window.location.href = "/login";
    } catch (error) {
      console.error("Register error:", error.response?.data || error.message);
      alert("Registrasi gagal. Coba lagi nanti.");
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
        {/* Left Section with Image */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${strawberryImage})` }}
        ></div>

        {/* Right Section with Register Form */}
        <div className="w-1/2 bg-red-800 flex justify-center items-center">
          <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-[#8b0000]">
              Daftar
            </h2>
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border rounded-md border-gray-300"
                  required
                />
              </div>
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
              <div className="mb-6">
                <input
                  type="password"
                  placeholder="Konfirmasi Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-3 border rounded-md border-gray-300"
                  required
                />
              </div>
              <button
                type="submit"
                className={`w-full p-3 bg-[#8b0000] text-white rounded-md font-bold transition duration-200 ${
                  loading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#660000]"
                }`}
                disabled={loading}
              >
                {loading ? "Memproses..." : "Daftar"}
              </button>
            </form>
            <p className="text-center mt-4 text-sm">
              Sudah punya akun?{" "}
              <a href="/login" className="text-[#8b0000] font-bold">
                Masuk
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
