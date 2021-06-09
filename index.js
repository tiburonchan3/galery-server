const express = require("express");
const mongoose = require("mongoose");
const routes = require("./router/routes");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", routes);
mongoose
  .connect("mongodb+srv://danniel-cntrs:i4q8MmkyZkxl3GKL@dye.wwmki.mongodb.net/cdye?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server has started!");
    });
  });
