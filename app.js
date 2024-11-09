const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
// app.use(cors());
// app.use('/' , Routes)

const mongooseURL = "mongodb+srv://malekkbh:123456780@cluster0.vugra.mongodb.net/"
  

mongoose.connect(mongooseURL);

mongoose.connection.on("connected", () => {
  console.log("mongo connected");
});


module.exports = app;