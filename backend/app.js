const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const inventoryRoutes = require('./routes/inventoryRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/inventory', inventoryRoutes);

module.exports = app;