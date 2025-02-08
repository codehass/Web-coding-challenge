require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./database');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

app.get('/todos', (req, res) => {
  res.send('Backend is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
