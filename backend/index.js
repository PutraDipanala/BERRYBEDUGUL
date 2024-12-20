// backend/index.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRouter = require("./Routes/auth"); // Rute untuk autentikasi
const feedbackRouter = require("./Routes/feedback"); // Rute untuk feedback
const adminRouter = require("./Routes/admin");
require("dotenv").config();

const app = express();

// Middleware untuk parsing JSON dan URL encoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS untuk semua domain
app.use(cors());

// Middleware untuk mengakses file statis dari folder public/uploads
app.use("/uploads", express.static("public/uploads")); // Folder untuk gambar yang di-upload

// Daftarkan rute untuk autentikasi, feedback, dan admin
app.use("/api/auth", authRouter);
app.use("/api/feedback", feedbackRouter); // Pastikan feedback.js terdaftar dengan benar
app.use("/api/admin", adminRouter);

// Menjalankan server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
