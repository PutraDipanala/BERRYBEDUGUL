import React, { useState, useEffect } from "react";
import { createArticle, updateArticle } from "../Services/api"; // Import fungsi API

const ArticleForm = ({ onArticleAdded, editingArticle, onArticleUpdated }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState(""); // Nama penulis
  const [publishDate, setPublishDate] = useState(""); // Tanggal publikasi
  const [content, setContent] = useState(""); // Isi artikel
  const [image, setImage] = useState(null); // Gambar artikel

  const [isSubmitting, setIsSubmitting] = useState(false); // Indikator proses submit

  // Saat artikel sedang dalam mode edit, isi form dengan data artikel
  useEffect(() => {
    if (editingArticle) {
      setTitle(editingArticle.title);
      setAuthor(editingArticle.author);
      setPublishDate(editingArticle.publish_date);
      setContent(editingArticle.content);
      setImage(null); // Tidak perlu mengisi ulang file
    }
  }, [editingArticle]);

  // Fungsi untuk menangani perubahan input file
  const handleFileChange = (e) => {
    setImage(e.target.files[0]); // Simpan file yang diunggah
  };

  // Fungsi untuk submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("author", author);
      formData.append("publish_date", publishDate);
      formData.append("content", content);
      if (image) {
        formData.append("image", image); // Tambahkan file gambar ke formData
      }

      if (editingArticle) {
        // Update artikel jika sedang dalam mode edit
        const updatedArticle = await updateArticle(editingArticle.id, formData);
        onArticleUpdated(updatedArticle); // Callback untuk memperbarui artikel
        alert("Artikel berhasil diperbarui!");
      } else {
        // Tambahkan artikel baru
        const newArticle = await createArticle(formData);
        onArticleAdded(newArticle); // Callback untuk menambahkan artikel baru
        alert("Artikel berhasil ditambahkan!");
      }

      // Reset form setelah submit berhasil
      setTitle("");
      setAuthor("");
      setPublishDate("");
      setContent("");
      setImage(null);
    } catch (error) {
      console.error("Error submitting article:", error);
      alert("Gagal menyimpan artikel. Periksa koneksi atau backend Anda.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="text-lg font-bold mb-4">
        {editingArticle ? "Edit Artikel" : "Tambah Artikel"}
      </h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Judul
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Masukkan judul artikel"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Penulis
        </label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Masukkan nama penulis"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Tanggal Publikasi
        </label>
        <input
          type="date"
          value={publishDate}
          onChange={(e) => setPublishDate(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Isi Artikel
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Masukkan isi artikel"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows="5"
          required
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Gambar Artikel
        </label>
        <input
          type="file"
          onChange={handleFileChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          accept="image/*"
        />
        {editingArticle && (
          <p className="text-gray-500 text-sm mt-2">
            Saat ini: {editingArticle.image_url}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? "Menyimpan..." : "Simpan"}
        </button>
      </div>
    </form>
  );
};

export default ArticleForm;
