import React, { useState } from "react";
import axios from "axios";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fungsi untuk menangani perubahan di input feedback
  const handleFeedbackChange = (e) => {
    const value = e.target.value;
    setFeedback(value);
  };

  // Fungsi untuk mengirimkan feedback
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/feedback/about",
        { feedback }
      );
      alert("Feedback berhasil dikirim!");
      setFeedback(""); // Reset form setelah berhasil
    } catch (error) {
      setError("Gagal mengirim feedback. Coba lagi nanti.");
      console.error("Error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-green-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-center mb-4">
        Apakah Artikel Ini Membantu?
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={feedback}
          onChange={handleFeedbackChange}
          rows="4"
          placeholder="Tulis Saran dan Masukan"
          className="w-full p-3 border rounded-md border-gray-300"
          required
        />
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Maksimal 1000 Kata</span>
          <button
            type="submit"
            className={`px-6 py-2 bg-red-700 text-white rounded-md font-bold transition duration-200 ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-red-800"
            }`}
            disabled={loading}
          >
            {loading ? "Memproses..." : "Kumpulkan"}
          </button>
        </div>
      </form>
      {error && <p className="mt-2 text-red-600 text-center">{error}</p>}
    </div>
  );
};

export default FeedbackForm;
