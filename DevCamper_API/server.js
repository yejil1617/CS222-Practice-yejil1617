const express = require("express");
const dotenv = require("dotenv");

// Load config files
dotenv.config({ path: "./config/config.env" });

const app = express();

const PORT = process.env.PORT || 4800;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} made on port ${PORT}`)
);
