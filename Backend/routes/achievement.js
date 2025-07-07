// routes/achievement.js
const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const Achievement = require("../models/achievement"); // your schema
const auth = require("../middleware/auth"); // Add this line

router.post("/", upload.single("certificateImage"), async (req, res) => {
  try {
    const achievement = new Achievement({
      officerId: req.body.officerId,
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      certificateImage: req.file.path, // Cloudinary image URL
      awardedBy: req.body.awardedBy,
      location: req.body.location,
      remarks: req.body.remarks,
    });

    await achievement.save();
    res.status(201).json(achievement);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong!" });
  }
});

router.get("/view", auth(["jawan"]), async (req, res) => {
    try {
        const userId = req.user.id;
        const achievements = await Achievement.find({ officerId: userId });
        res.json(achievements);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong!" });
    }
});


module.exports = router;
