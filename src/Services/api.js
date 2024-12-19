import axios from "axios";

const API_URL = "http://localhost:3001/api";

// Tambahkan header Authorization ke setiap request
const getAuthHeader = () => {
  const token = localStorage.getItem("authToken");
  return { Authorization: `Bearer ${token}` };
};

// Fungsi untuk mendapatkan semua artikel
export const fetchArticles = async () => {
  const response = await axios.get(`${API_URL}/admin/articles`, {
    headers: getAuthHeader(),
  });
  return response.data;
};

// Fungsi untuk mendapatkan artikel berdasarkan ID
export const fetchArticleById = async (id) => {
  const response = await axios.get(`${API_URL}/admin/articles/${id}`, {
    headers: getAuthHeader(),
  });
  return response.data;
};

// Fungsi untuk menambahkan artikel
export const createArticle = async (articleData) => {
  const response = await axios.post(`${API_URL}/admin/articles`, articleData, {
    headers: getAuthHeader(),
  });
  return response.data;
};

// Fungsi untuk memperbarui artikel
export const updateArticle = async (id, articleData) => {
  const response = await axios.put(
    `${API_URL}/admin/articles/${id}`,
    articleData,
    {
      headers: getAuthHeader(),
    }
  );
  return response.data;
};

// Fungsi untuk menghapus artikel
export const deleteArticle = async (id) => {
  const response = await axios.delete(`${API_URL}/admin/articles/${id}`, {
    headers: getAuthHeader(),
  });
  return response.data;
};
