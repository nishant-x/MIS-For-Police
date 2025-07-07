const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password || !role) {
    return res.status(400).json({ error: "All fields are required." });
  }
const allowedRoles = ["admin", "jawan", "phq" , "station"];
  if (!allowedRoles.includes(role)) {
    return res.status(400).json({ error: "Invalid role specified." });
  }

  try {
    const existing = await User.findOne({ username });
    if (existing) return res.status(400).json({ error: "User already exists." });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, role });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // ✅ Send JWT in HttpOnly cookie
    res.cookie("token", token, {
      httpOnly: true,
    //  secure: true,      // Use true if using HTTPS in production
      secure:false, // Use false for local development
      sameSite: "Strict", // Helps prevent CSRF
      maxAge: 60 * 60 * 1000, // 1 hour
    });

    res.json({
      message: "Login successful",
      user: {
        id: user._id,
        username: user.username,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});
// logout
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "Strict"
  });
  res.json({ message: "Logged out successfully" });
});


module.exports = router;
