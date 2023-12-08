// app.js
const express = require("express");
const passport = require("./passportConfig");
const mongoose = require("mongoose");
const session = require("express-session");
const authController = require("./controllers/authController");
require("dotenv").config();

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://myMongoDB:27017/myDatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.post("/register", authController.register);
app.post("/login", authController.login);
app.post("/change-password", authController.changePassword);
app.delete("/delete-account", authController.deleteAccount);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
