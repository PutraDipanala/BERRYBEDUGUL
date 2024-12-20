import React, { useState, useEffect } from "react";
import { fetchArticles, deleteArticle } from "../Services/api"; // Import fungsi dari api.js
import { useNavigate } from "react-router-dom";
import ArticleForm from "../Components/ArticleForm"; // Import ArticleForm

const ManageArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false); // State untuk menampilkan form
  const [editingArticle, setEditingArticle] = useState(null); // State untuk artikel yang sedang diedit

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchArticles(); // Panggil fungsi fetchArticles dari api.js
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };
    loadArticles();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Apakah Anda yakin ingin menghapus artikel ini?"))
      return;

    try {
      await deleteArticle(id); // Panggil fungsi deleteArticle dari api.js
      setArticles(articles.filter((article) => article.id !== id));
      alert("Artikel berhasil dihapus!");
    } catch (error) {
      console.error("Error deleting article:", error);
      alert("Gagal menghapus artikel.");
    }
  };

  const handleAddArticle = (newArticle) => {
    // Tambahkan artikel baru ke daftar
    setArticles([newArticle, ...articles]);
    setShowForm(false); // Tutup form setelah berhasil menambah artikel
  };

  const handleEditArticle = (updatedArticle) => {
    // Perbarui artikel di daftar
    setArticles(
      articles.map((article) =>
        article.id === updatedArticle.id ? updatedArticle : article
      )
    );
    setShowForm(false); // Tutup form setelah berhasil memperbarui artikel
    setEditingArticle(null); // Reset artikel yang sedang diedit
  };

  const handleEditClick = (article) => {
    setEditingArticle(article); // Set artikel yang sedang diedit
    setShowForm(true); // Tampilkan form
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Kelola Artikel</h1>

      {showForm ? (
        <ArticleForm
          onArticleAdded={handleAddArticle}
          editingArticle={editingArticle}
          onArticleUpdated={handleEditArticle}
        />
      ) : (
        <>
          <button
            onClick={() => {
              setEditingArticle(null); // Reset artikel yang sedang diedit
              setShowForm(true); // Tampilkan form
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          >
            Tambah Artikel
          </button>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Judul</th>
                <th className="border border-gray-300 px-4 py-2">Penulis</th>
                <th className="border border-gray-300 px-4 py-2">Tanggal</th>
                <th className="border border-gray-300 px-4 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article.id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {article.title}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {article.author}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {article.publish_date}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleEditClick(article)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(article.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ManageArticles;
