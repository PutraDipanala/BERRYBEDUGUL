const jwt = require("jsonwebtoken");

/**
 * Middleware untuk memverifikasi token JWT
 */
function authenticateJWT(req, res, next) {
  console.log("Headers:", req.headers["authorization"]); // Log token
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).json({ message: "Token tidak ditemukan" });
  }

  const tokenWithoutBearer = token.split(" ")[1];
  jwt.verify(
    tokenWithoutBearer,
    process.env.JWT_SECRET || "secretkey",
    (err, user) => {
      if (err) {
        console.error("JWT Error:", err); // Log error
        return res.status(403).json({ message: "Token tidak valid" });
      }
      console.log("User dari token:", user); // Log user
      req.user = user;
      next();
    }
  );
}

/**
 * Middleware untuk memverifikasi role user
 * @param {string} role - Role yang diizinkan (misalnya, "admin" atau "user")
 */
function authorizeRole(role) {
  return (req, res, next) => {
    if (!req.user || req.user.role !== role) {
      return res
        .status(403)
        .json({ message: "Akses ditolak. Role tidak sesuai." });
    }
    next(); // Lanjutkan ke rute berikutnya jika role sesuai
  };
}

module.exports = { authenticateJWT, authorizeRole };
