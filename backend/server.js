require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./database');
const Todo = require("./models/Todo");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();

// app.get('/todos', (req, res) => {
//   res.send('Backend is running...');
// });

// Get all todos
app.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
