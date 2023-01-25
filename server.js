const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

const app = express();

dotenv.config({ path: "./config/config.env" });

connectDB();

const transactions = require("./routes/transactions");

app.use(express.json());

app.use("/api/v1/transactions", transactions);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// app.get("/", (req, res) => res.send("Hello"));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .yellow.bold
  )
);
