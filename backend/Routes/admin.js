const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {
  authenticateJWT,
  authorizeRole,
} = require("../middleware/authenticateJWT");
const db = require("../db");

// Konfigurasi Multer untuk Upload File
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "header_image") {
      cb(null, "public/uploads/kebun"); // Folder untuk header image kebun
    } else if (file.fieldname === "gallery_images") {
      cb(null, "public/uploads/kebun"); // Folder untuk gallery kebun
    } else if (file.fieldname === "image") {
      cb(null, "public/uploads/article"); // Folder untuk gambar artikel
    } else {
      cb(new Error("Fieldname tidak dikenali!"));
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Nama file dengan timestamp
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = fileTypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error("File harus berupa gambar (JPEG, JPG, PNG)"));
    }
  },
});

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
  upload.single("image"), // Middleware untuk menangani upload file
  async (req, res) => {
    // Debugging input
    console.log("Body Data:", req.body);
    console.log("File Data:", req.file);

    const { title, author, publish_date, content } = req.body;
    const image_url = req.file ? `/uploads/article/${req.file.filename}` : null;

    // Validasi data
    if (!title || !author || !publish_date || !content || !image_url) {
      return res.status(400).json({ error: "Semua field wajib diisi" });
    }

    try {
      const query =
        "INSERT INTO articles (title, author, publish_date, image_url, content) VALUES (?, ?, ?, ?, ?)";
      const [result] = await db.query(query, [
        title,
        author,
        publish_date,
        image_url,
        content,
      ]);
      res.status(201).json({
        message: "Artikel berhasil ditambahkan",
        id: result.insertId,
        image_url, // Kirim URL gambar untuk frontend
      });
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
  upload.single("image"), // Middleware untuk menangani upload file
  async (req, res) => {
    const { id } = req.params;
    const { title, author, publish_date, content } = req.body;
    const image_url = req.file ? `/uploads/${req.file.filename}` : null;

    if (!title || !author || !publish_date || !content) {
      return res.status(400).json({ error: "Semua field wajib diisi" });
    }

    try {
      const query = image_url
        ? "UPDATE articles SET title = ?, author = ?, publish_date = ?, content = ?, image_url = ? WHERE id = ?"
        : "UPDATE articles SET title = ?, author = ?, publish_date = ?, content = ? WHERE id = ?";

      const values = image_url
        ? [title, author, publish_date, content, image_url, id]
        : [title, author, publish_date, content, id];

      await db.query(query, values);
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

// -------------------- CRUD GARDENS --------------------
// GET semua gardens
router.get(
  "/gardens",
  authenticateJWT,
  authorizeRole("admin"),
  async (req, res) => {
    try {
      const [gardens] = await db.query("SELECT * FROM gardens");
      res.json(gardens);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Terjadi kesalahan server" });
    }
  }
);

// GET satu garden berdasarkan ID
router.get(
  "/gardens/:id",
  authenticateJWT,
  authorizeRole("admin"),
  async (req, res) => {
    const { id } = req.params;
    try {
      const [garden] = await db.query("SELECT * FROM gardens WHERE id = ?", [
        id,
      ]);
      if (garden.length === 0) {
        return res.status(404).json({ error: "Kebun tidak ditemukan" });
      }
      res.json(garden[0]);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Terjadi kesalahan server" });
    }
  }
);

// POST kebun baru
router.post(
  "/gardens",
  authenticateJWT,
  authorizeRole("admin"),
  upload.fields([
    { name: "header_image", maxCount: 1 },
    { name: "gallery_images", maxCount: 5 },
  ]),
  async (req, res) => {
    const {
      name,
      description,
      operation_weekday,
      operation_weekend,
      price,
      location,
      facilities,
    } = req.body;

    if (
      !name ||
      !description ||
      !operation_weekday ||
      !operation_weekend ||
      !price ||
      !location
    ) {
      return res.status(400).json({ error: "Semua field wajib diisi" });
    }

    try {
      const headerImagePath = req.files["header_image"]
        ? `/uploads/kebun/${req.files["header_image"][0].filename}`
        : null;

      const galleryImages = req.files["gallery_images"]
        ? req.files["gallery_images"].map(
            (file) => `/uploads/kebun/${file.filename}`
          )
        : [];

      const query =
        "INSERT INTO gardens (name, description, operation_weekday, operation_weekend, price, location, facilities, header_image, gallery_images) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const [result] = await db.query(query, [
        name,
        description,
        operation_weekday,
        operation_weekend,
        price,
        location,
        facilities,
        headerImagePath,
        JSON.stringify(galleryImages), // Simpan galeri sebagai JSON
      ]);

      res
        .status(201)
        .json({ message: "Kebun berhasil ditambahkan", id: result.insertId });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Terjadi kesalahan server" });
    }
  }
);

// PUT edit kebun berdasarkan ID
router.put(
  "/gardens/:id",
  authenticateJWT,
  authorizeRole("admin"),
  upload.fields([
    { name: "header_image", maxCount: 1 },
    { name: "gallery_images", maxCount: 5 },
  ]),
  async (req, res) => {
    const { id } = req.params;
    const {
      name,
      description,
      operation_weekday,
      operation_weekend,
      price,
      location,
      facilities,
    } = req.body;

    if (
      !name ||
      !description ||
      !operation_weekday ||
      !operation_weekend ||
      !price ||
      !location
    ) {
      return res.status(400).json({ error: "Semua field wajib diisi" });
    }

    try {
      const headerImagePath = req.files["header_image"]
        ? `/uploads/kebun/${req.files["header_image"][0].filename}`
        : null;

      const galleryImages = req.files["gallery_images"]
        ? req.files["gallery_images"].map(
            (file) => `/uploads/kebun/${file.filename}`
          )
        : null;

      const query = `
        UPDATE gardens 
        SET 
          name = ?, 
          description = ?, 
          operation_weekday = ?, 
          operation_weekend = ?, 
          price = ?, 
          location = ?, 
          facilities = ?, 
          header_image = COALESCE(?, header_image), 
          gallery_images = COALESCE(?, gallery_images) 
        WHERE id = ?
      `;

      await db.query(query, [
        name,
        description,
        operation_weekday,
        operation_weekend,
        price,
        location,
        facilities,
        headerImagePath,
        galleryImages ? JSON.stringify(galleryImages) : null,
        id,
      ]);

      res.json({ message: "Kebun berhasil diperbarui" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Terjadi kesalahan server" });
    }
  }
);

// DELETE kebun berdasarkan ID
router.delete(
  "/gardens/:id",
  authenticateJWT,
  authorizeRole("admin"),
  async (req, res) => {
    const { id } = req.params;
    try {
      const query = "DELETE FROM gardens WHERE id = ?";
      await db.query(query, [id]);
      res.json({ message: "Kebun berhasil dihapus" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Terjadi kesalahan server" });
    }
  }
);

module.exports = router;
