const express = require("express");
const mongoose = require("mongoose");
const routes = require("./router/routes");
const cors = require("cors");
const app = express();
const dotenv =require('dotenv');

dotenv.config()
app.use(cors());
app.use("/api", routes);
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
mongoose
  .connect("mongodb://localhost:27017/cdye", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server has started!");
    });
  });
