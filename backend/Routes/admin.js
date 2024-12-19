const express = require("express");
const router = express.Router();
const {
  authenticateJWT,
  authorizeRole,
} = require("../middleware/authenticateJWT");
const db = require("../db");

// GET semua artikel
router.get(
  "/articles",
  authenticateJWT,
  authorizeRole("admin"),
  async (req, res) => {
    try {
      const [articles] = await db.query("SELECT * FROM articles");
      res.json(articles); // Kirim data artikel ke frontend
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Terjadi kesalahan server" });
    }
  }
);

// GET satu artikel berdasarkan ID
router.get(
  "/articles/:id",
  authenticateJWT,
  authorizeRole("admin"),
  async (req, res) => {
    const { id } = req.params;
    try {
      const [article] = await db.query("SELECT * FROM articles WHERE id = ?", [
        id,
      ]);
      if (article.length === 0) {
        return res.status(404).json({ error: "Artikel tidak ditemukan" });
      }
      res.json(article[0]);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Terjadi kesalahan server" });
    }
  }
);

// POST artikel baru
router.post(
  "/articles",
  authenticateJWT,
  authorizeRole("admin"),
  async (req, res) => {
    const { title, publisher, date, content, image } = req.body;
    if (!title || !publisher || !date || !content) {
      return res.status(400).json({ error: "Semua field wajib diisi" });
    }

    try {
      const query =
        "INSERT INTO articles (title, publisher, date, content, image) VALUES (?, ?, ?, ?, ?)";
      const [result] = await db.query(query, [
        title,
        publisher,
        date,
        content,
        image,
      ]);
      res
        .status(201)
        .json({ message: "Artikel berhasil ditambahkan", id: result.insertId });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Terjadi kesalahan server" });
    }
  }
);

// PUT edit artikel berdasarkan ID
router.put(
  "/articles/:id",
  authenticateJWT,
  authorizeRole("admin"),
  async (req, res) => {
    const { id } = req.params;
    const { title, publisher, date, content, image } = req.body;
    if (!title || !publisher || !date || !content) {
      return res.status(400).json({ error: "Semua field wajib diisi" });
    }

    try {
      const query =
        "UPDATE articles SET title = ?, publisher = ?, date = ?, content = ?, image = ? WHERE id = ?";
      await db.query(query, [title, publisher, date, content, image, id]);
      res.json({ message: "Artikel berhasil diperbarui" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Terjadi kesalahan server" });
    }
  }
);

// DELETE artikel berdasarkan ID
router.delete(
  "/articles/:id",
  authenticateJWT,
  authorizeRole("admin"),
  async (req, res) => {
    const { id } = req.params;
    try {
      const query = "DELETE FROM articles WHERE id = ?";
      await db.query(query, [id]);
      res.json({ message: "Artikel berhasil dihapus" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Terjadi kesalahan server" });
    }
  }
);

module.exports = router;
