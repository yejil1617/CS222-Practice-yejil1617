const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

// Route files
const bootcamps = require("./routes/bootcamps");

// Load config files
dotenv.config({ path: "./config/config.env" });

const app = express();

// Dev loggin middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount rothers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 4800;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} made on port ${PORT}`)
);
