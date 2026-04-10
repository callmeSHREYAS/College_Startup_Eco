const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

connectDB()

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
const authRoutes = require("./routes/authRoutes");

//  API for register and login
app.use("/api/auth", authRoutes);


// Health check
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "College Startup Platform API is running" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});