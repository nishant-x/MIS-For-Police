const express = require("express");
const router = express.Router();
const Leave = require("../models/leave");
const auth = require("../middleware/auth"); 

router.post("/apply-leave", auth(), async (req, res) => {
  console.log("📩 Received leave apply request");
  console.log("👤 User:", req.user); // This should now show the decoded user

  const { reason, fromDate, toDate } = req.body;
  console.log("📝 Request body:", { reason, fromDate, toDate });

  if (!reason || !fromDate || !toDate) {
    console.log("❌ Missing required fields");
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const leave = new Leave({
      userId: req.user.id, 
      reason,
      fromDate,
      toDate,
    });

    console.log("💾 Saving leave:", leave);
    await leave.save();
    console.log("✅ Leave saved to MongoDB:", leave);

    res.status(201).json({ message: "Leave applied successfully", leave });
  } catch (err) {
    console.error("❌ Error saving leave:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
