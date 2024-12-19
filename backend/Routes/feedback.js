// backend/Routes/feedback.js
const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const db = require("../db");

// Rute untuk mengirim feedback
// backend/Routes/feedback.js
router.post(
  "/about",
  body("feedback")
    .isLength({ min: 5 })
    .withMessage("Feedback harus memiliki minimal 5 karakter."),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { feedback } = req.body; // Mengambil feedback dari request body

    try {
      // Pastikan hanya kolom feedback yang diisi, kolom suggestion bisa dibiarkan null
      const query = "INSERT INTO feedback (feedback) VALUES (?)";
      const [result] = await db.promise().query(query, [feedback]);

      res.status(201).json({
        message: "Feedback berhasil dikirim!",
        feedbackId: result.insertId,
      });
    } catch (err) {
      console.error("Error:", err);
      res.status(500).json({ error: "Terjadi kesalahan server" });
    }
  }
);

module.exports = router;
