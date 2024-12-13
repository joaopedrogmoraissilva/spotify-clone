const mongoose = require("mongoose");
const express = require("express");
const Song = require("./src/models/Song");

//import { createServer } from 'node:http';

mongoose.connect("mongodb://127.0.0.1:27017/spotifyclone");


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected successfully");
});

const app = express();
const cors = require("cors");

app.use(cors());

app.listen(5000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:5000');
});

app.get("/", async (req, res) => {
  const songs = await Song.find();
  res.json(songs);
});
