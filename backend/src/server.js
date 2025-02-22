const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet'); // Security headers
const morgan = require('morgan'); // Logging
const redis = require('redis');
const socialRoutes = require('./routes/socialServices');
const appointmentRoutes = require('./routes/appointments');
const { errorHandler } = require('./utils/errorHandler');

dotenv.config();
const app = express();

// Middleware
app.use(helmet());
app.use(morgan('combined'));
app.use(express.json());

// Redis client for caching
const redisClient = redis.createClient({
  url: `redis://${process.env.REDIS_HOST}:6379`
});
redisClient.connect().catch(console.error);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/social', socialRoutes);
app.use('/api/appointments', appointmentRoutes);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
