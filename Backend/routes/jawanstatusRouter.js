const express = require("express");
const router = express.Router();
const JawanStatus = require("../models/jawanlivestatus");
const User = require("../models/user"); // Make sure to import User model


router.get('/geocode', async (req, res) => {
  try {
    const { lat, lon } = req.query;
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`, {
      headers: { 'User-Agent': 'YourAppName/1.0 (contact@example.com)' }
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/:jawanId', async (req, res) => {
  try {
    const jawanStatus = await JawanStatus.findOne({ 
      jawanId: req.params.jawanId 
    }).populate('jawanId', 'name email'); // optionally populate user details

    if (!jawanStatus) {
      return res.status(404).json({ 
        success: false, 
        message: 'Jawan status not found' 
      });
    }

    console.log("Data from backend", jawanStatus)

    res.status(200).json({
      success: true,
      data: jawanStatus
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error',
      error: error.message 
    });
  }
});


router.post('/update', async (req, res) => {
  try {
    const { jawanId, status, location } = req.body;

    // Validate required fields
    if (!jawanId || !status) {
      return res.status(400).json({
        success: false,
        error: "jawanId and status are required"
      });
    }

    // Validate location if status is 'active_unavailable'
    if (status === 'active_unavailable') {
      if (!location || !location.lat || !location.lng || !location.address) {
        return res.status(400).json({
          success: false,
          error: "Location (lat, lng, address) is required for 'active_unavailable' status"
        });
      }
    }

    // Check if a JawanStatus document already exists for this jawanId
    const existingStatus = await JawanStatus.findOne({ jawanId });

    // If it doesn't exist, create a new one
    if (!existingStatus) {
      const newStatus = new JawanStatus({
        jawanId,
        status,
        ...(status === 'active_unavailable' && {
          location: {
            type: 'Point',
            coordinates: [location.lng, location.lat],
            address: location.address
          }
        }),
        timestamp: new Date()
      });

      const savedStatus = await newStatus.save();
      return res.status(201).json({
        success: true,
        data: savedStatus,
        message: "New status document created"
      });
    }

    // If it exists, update the existing document
    const update = {
      status,
      ...(status === 'active_unavailable' && {
        location: {
          type: 'Point',
          coordinates: [location.lng, location.lat],
          address: location.address
        }
      }),
      timestamp: new Date()
    };

    const updatedStatus = await JawanStatus.findOneAndUpdate(
      { jawanId },
      update,
      { new: true, runValidators: true }
    );

    return res.status(200).json({
      success: true,
      data: updatedStatus,
      message: "Status updated successfully"
    });

  } catch (error) {
    console.error("Error updating jawan status:", error);
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
});



module.exports = router;