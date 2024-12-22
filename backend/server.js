const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
const bookRoutes = require('./routes/bookRoutes');
app.use('/api', bookRoutes);

// MongoDB 連接
mongoose.connect('mongodb://127.0.0.1:27017/bookmanagement', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000
  }).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// 設定基本路由
app.get('/', (req, res) => {
  res.json({ message: "Welcome to Book Management API" });
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});