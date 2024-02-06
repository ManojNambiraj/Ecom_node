const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const db = require("./connection/db");

const router = require("./router/ecomRouter");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// DB Connectivity
db(process.env.MONGO_URL);

// Routing
app.use("", router);

// Server initialize
app.listen(process.env.PORT || 3001, () => {
  console.log(`Server running in ${process.env.PORT || 3001}`);
});
