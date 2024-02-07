const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/karaoki", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Item = require("./models/item"); // Create the Item model

app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));