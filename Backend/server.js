const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config(); // Load variables from .env

const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());


// Middleware
app.use(cors({
  origin: "http://localhost:5173", // ✅ Match your frontend port
  credentials: true               // ✅ Allow cookies/headers
}));
app.use(express.json()); // Parse JSON bodies

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ Connected to MongoDB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
const authRoutes = require("./routes/auth"); // Authentication routes
const achievementRoutes = require("./routes/achievement"); // Achievement routes
const  livestatus = require("./routes/jawanstatusRouter.js") // Live status routes
const leaveRoutes = require("./routes/leave");//leave roue
app.use("/api/leave", leaveRoutes);
app.use("/api/achievement", achievementRoutes); // Achievement API
app.use("/api/auth", authRoutes);
app.use("/api/livestatus" , livestatus)

// Default route
app.get("/", (req, res) => {
  res.send("🚀 Police MIS Backend Running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚨 Server running on http://localhost:${PORT}`);
});
