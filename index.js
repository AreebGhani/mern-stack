const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user.model");

const app = express();

const port = process.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/mern-stack-auth");

app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/api/register", async (req, res) => {
  try {
    console.log(req.body);
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json({ status: "OK" });
  } catch (error) {
    res.json({ status: "error", error: "Email Error" });
  }
});

app.post("/api/login", async (req, res) => {
  console.log(req.body);
  const getUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (getUser) {
    res.json({ status: "OK", user: true });
  } else {
    res.json({ status: "error", user: false });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
