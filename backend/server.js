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

app.post("/todos", async (req, res) => {
  try {
    const newTodo = new Todo({ title: req.body.title });
    await newTodo.save();
    res.json(newTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// update
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, status } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, status },
      { new: true }
    );
    res.json(updatedTodo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
