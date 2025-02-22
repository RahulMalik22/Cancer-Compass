const express = require('express');
const { fetchSocialServices } = require('../services/sdohService');
const { authenticate } = require('../middleware/auth');
const redisClient = require('redis').createClient();

const router = express.Router();

router.get('/search', authenticate, async (req, res) => {
  const { zip } = req.query;
  const cacheKey = `social_services_${zip}`;

  try {
    // Check Redis cache
    const cached = await redisClient.get(cacheKey);
    if (cached) return res.json(JSON.parse(cached));

    // Fetch from API
    const services = await fetchSocialServices(zip);
    await redisClient.setEx(cacheKey, 3600, JSON.stringify(services)); // Cache for 1 hour
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch services', details: error.message });
  }
});

module.exports = router;
