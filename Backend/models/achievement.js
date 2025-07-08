const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
  officerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the police user
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: String,
  date: {
    type: Date,
    default: Date.now,
  },
  certificateImage: {
    type: String, // URL or filename for the uploaded image
  },
  awardedBy: String,
  location: String,
  remarks: String
});

module.exports = mongoose.model("Achievement", achievementSchema);
