const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, default: "pending", enum: ["pending", "completed"] },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Todo", todoSchema);
