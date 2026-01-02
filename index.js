const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const authRoute = require("./Route/signuproute");
const bookRoute = require("./Route/booksroute");
const bodyParser = require("body-parser");
app.use(cors({ origin: "*" }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://rotneng001:Rotneng00123@cluster0.hormw6x.mongodb.net/",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((err) => {
    console.log("errorconnecting to database", err);
  });

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
app.use("/auth", authRoute);
app.use("/Books", bookRoute);
