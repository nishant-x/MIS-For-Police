const jawanstatus = require("../models/jawanlivestatus")
const express = require("express");
const router = express.Router();


router.post('/updatestatus', async (req, res) => {
  try {
    const { jawanId, status = 'unavailable', location } = req.body;
    const update = { 
      status,
      ...(status === 'active_unavailable' && location && {
        location: {
          type: 'Point',
          coordinates: [location.lng, location.lat],
          address: location.address
        }
      }),
      timestamp: new Date() 
    };
    
    const updatedStatus = await Status.findOneAndUpdate(
      { jawanId },
      update,
      { upsert: true, new: true }
    );

    res.status(200).json({ success: true, data: updatedStatus });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});


module.exports = router;