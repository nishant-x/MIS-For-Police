const jwt = require("jsonwebtoken");

function auth(requiredRoles = []) {
  return (req, res, next) => {
    const token = req.cookies.token; // ✅ Get token from cookie

    if (!token) return res.status(401).json({ error: "No token provided" });

    try {
      const verified = jwt.verify(token, process.env.JWT_SECRET);
      
      if (requiredRoles.length && !requiredRoles.includes(verified.role)) {
        return res.status(403).json({ error: "Access denied" });
      }

      req.user = verified;
      next();
    } catch {
      res.status(400).json({ error: "Invalid token" });
    }
  };
}

module.exports = auth;
