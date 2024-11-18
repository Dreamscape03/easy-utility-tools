
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
mongoose.connect("mongodb://localhost/online-clipboard", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const clipSchema = new mongoose.Schema({
  text: String,
  createdAt: { type: Date, default: Date.now },
});

const Clip = mongoose.model("Clip", clipSchema);
app.use(express.json());
app.post("/api/clips", async (req, res) => {
  try {
    const { text } = req.body;
    const clip = new Clip({ text });
    await clip.save();
    res.status(201).json(clip);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});