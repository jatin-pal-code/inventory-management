const app = require('./app.js');
require('dotenv').config()
const mongoose = require('mongoose');

const PORT = process.env.PORT;
const MONGO_URI = process.env.DB_URL

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log('Server running on port', PORT));
  })
  .catch((err) => console.error('MongoDB connection error:', err));