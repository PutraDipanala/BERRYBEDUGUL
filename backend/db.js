// backend/db.js
const mysql = require("mysql2/promise");
require("dotenv").config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function testConnection() {
  try {
    const connection = await db.getConnection();
    console.log("Database connected successfully");
    connection.release(); // Melepaskan koneksi setelah cek
  } catch (error) {
    console.error("Failed to connect to database:", error);
  }
}

testConnection();

module.exports = db;
