const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator"); // Import express-validator
const db = require("../db");

// REGISTER USER
router.post(
  "/register",
  // Register Validation
  body("username")
    .isLength({ min: 3 })
    .withMessage("Username harus minimal 3 karakter."),
  body("email").isEmail().withMessage("Email tidak valid."),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password harus minimal 6 karakter."),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;
    try {
      // Cek apakah user sudah ada
      const [userCheck] = await db.query(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );
      if (userCheck.length > 0) {
        return res.status(400).json({ error: "Email sudah digunakan" });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Default role: 'user'
      const role = "user";

      const query =
        "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)";
      const [result] = await db.query(query, [
        username,
        email,
        hashedPassword,
        role,
      ]);

      // Generate JWT Token
      const token = jwt.sign(
        { id: result.insertId, email, username, role },
        process.env.JWT_SECRET || "secretkey",
        { expiresIn: "1h" }
      );

      res
        .status(201)
        .json({ token, username, role, message: "Registrasi berhasil!" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Terjadi kesalahan server" });
    }
  }
);

// LOGIN USER
router.post(
  "/login",
  // Login Validation
  body("email").isEmail().withMessage("Email tidak valid."),
  body("password").notEmpty().withMessage("Password wajib diisi."),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      // Cek user di database
      const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
        email,
      ]);
      if (rows.length === 0)
        return res.status(401).json({ error: "User tidak ditemukan" });

      const user = rows[0];
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) return res.status(401).json({ error: "Password salah" });

      // Generate JWT Token
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          username: user.username,
          role: user.role,
        }, // Tambahkan role ke payload token
        process.env.JWT_SECRET || "secretkey",
        { expiresIn: "1h" }
      );

      res.json({
        token,
        username: user.username,
        role: user.role, // Tambahkan role ke response
        message: "Login berhasil",
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Terjadi kesalahan server" });
    }
  }
);

module.exports = router;
