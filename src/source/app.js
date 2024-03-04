
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();

app.use(bodyParser.json());

// MongoDB connection.Set up in your local machine for smooth working of app
mongoose.connect('mongodb://localhost/blog_app', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;
