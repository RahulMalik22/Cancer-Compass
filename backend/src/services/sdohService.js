const axios = require('axios');

async function fetchSocialServices(zipCode) {
  const apiKey = process.env.AUNT_BERTHA_API_KEY;
  const url = `https://api.findhelp.org/v1/search?zip=${zipCode}`;
  
  const response = await axios.get(url, {
    headers: { 'Authorization': `Bearer ${apiKey}` },
    timeout: 5000 // 5s timeout
  });
  
  return response.data.results.map(service => ({
    id: service.id,
    name: service.name,
    location: service.location,
    services: service.services
  }));
}

module.exports = { fetchSocialServices };
