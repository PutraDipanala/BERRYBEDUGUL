import axios from "axios";

const API_URL = "http://localhost:3001/api";

// Tambahkan header Authorization ke setiap request
const getAuthHeader = () => {
  const token = localStorage.getItem("authToken");
  return { Authorization: `Bearer ${token}` };
};

// CRUD untuk Artikel
export const fetchArticles = async () => {
  const response = await axios.get(`${API_URL}/admin/articles`, {
    headers: getAuthHeader(),
  });
  return response.data;
};

export const createArticle = async (articleData) => {
  const response = await axios.post(`${API_URL}/admin/articles`, articleData, {
    headers: {
      ...getAuthHeader(),
      "Content-Type": "multipart/form-data", // Tambahkan header untuk multipart
    },
  });
  return response.data;
};

export const updateArticle = async (id, articleData) => {
  const response = await axios.put(
    `${API_URL}/admin/articles/${id}`,
    articleData,
    {
      headers: {
        ...getAuthHeader(),
        "Content-Type": "multipart/form-data", // Tambahkan header untuk multipart
      },
    }
  );
  return response.data;
};

export const deleteArticle = async (id) => {
  const response = await axios.delete(`${API_URL}/admin/articles/${id}`, {
    headers: getAuthHeader(),
  });
  return response.data;
};

// CRUD untuk Kebun Stroberi
export const fetchGardens = async () => {
  const response = await axios.get(`${API_URL}/admin/gardens`, {
    headers: getAuthHeader(),
  });
  return response.data;
};

export const createGarden = async (gardenData) => {
  const response = await axios.post(`${API_URL}/admin/gardens`, gardenData, {
    headers: {
      ...getAuthHeader(),
      "Content-Type": "multipart/form-data", // Tambahkan header untuk multipart
    },
  });
  return response.data;
};

export const updateGarden = async (id, gardenData) => {
  const response = await axios.put(
    `${API_URL}/admin/gardens/${id}`,
    gardenData,
    {
      headers: {
        ...getAuthHeader(),
        "Content-Type": "multipart/form-data", // Tambahkan header untuk multipart
      },
    }
  );
  return response.data;
};

export const deleteGarden = async (id) => {
  const response = await axios.delete(`${API_URL}/admin/gardens/${id}`, {
    headers: getAuthHeader(),
  });
  return response.data;
};
