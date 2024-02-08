const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const db = require("./connection/db");

const popularRouter = require("./router/popularRouter");
const equipmentRouter = require("./router/equipentRouter");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

// DB Connectivity
db(process.env.MONGO_URL);

// Routing
app.use("/", popularRouter);
app.use("/", equipmentRouter);

// Server initialize
app.listen(process.env.PORT || 3001, () => {
  console.log(`Server running in ${process.env.PORT || 3001}`);
});
