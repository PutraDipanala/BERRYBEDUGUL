import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createArticle, updateArticle, getArticleById } from "../Services/api";

const ArticleForm = () => {
  const [article, setArticle] = useState({
    title: "",
    publisher: "",
    publishedDate: "",
    content: "",
    image: "",
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchArticle = async () => {
        const data = await getArticleById(id);
        setArticle(data);
      };
      fetchArticle();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await updateArticle(id, article);
      alert("Artikel berhasil diperbarui!");
    } else {
      await createArticle(article);
      alert("Artikel berhasil ditambahkan!");
    }
    navigate("/admin/articles");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        {id ? "Edit Artikel" : "Tambah Artikel Baru"}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-bold mb-2">Judul</label>
          <input
            type="text"
            name="title"
            value={article.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Penerbit</label>
          <input
            type="text"
            name="publisher"
            value={article.publisher}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Tanggal Terbit</label>
          <input
            type="date"
            name="publishedDate"
            value={article.publishedDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Isi</label>
          <textarea
            name="content"
            value={article.content}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">URL Gambar</label>
          <input
            type="text"
            name="image"
            value={article.image}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button type="submit" className="p-3 bg-green-600 text-white rounded">
          {id ? "Simpan Perubahan" : "Tambah Artikel"}
        </button>
      </form>
    </div>
  );
};

export default ArticleForm;
