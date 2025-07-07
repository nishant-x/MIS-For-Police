const mongoose = require("mongoose");


const jawanstatusSchema = new mongoose.Schema({
   jawanId: { type: String, required: true },
   status: { 
    type: String, 
    enum: ['active_available', 'active_unavailable', 'unavailable'], 
    required: true,
    default: 'unavailable' 
  },
  location: {
    type: {
      type: String,
      default: 'Point',
      enum: ['Point']
    },
    coordinates: [Number], 
    address: String
  },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("jawanstatus", jawanstatusSchema);