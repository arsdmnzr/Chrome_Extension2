// routes/profile.js
const express = require('express');
const router = express.Router();
const Profile = require('../models/profile');

router.post('/post-data', async (req, res) => {
  try {
    const profileData = req.body;
    const createdProfile = await Profile.create(profileData);
    res.status(201).json(createdProfile);
  } catch (error) {
    console.error('Error saving profile data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
