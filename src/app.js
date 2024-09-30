const express = require('express');
const app = express();
const path = require('path');
const homeRoutes = require('./routes/HomeRoutes');

// Middleware for serving static files
app.use(express.static(path.join(__dirname, '../public')));

// Setting up routes
app.use('/', homeRoutes);

// Error handling (404)
app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

module.exports = app;
