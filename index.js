const mongoose = require("mongoose");
const Song = require("./models/Song");
import { createServer } from 'node:http';

mongoose.connect("mongodb://127.0.0.1:27017/spotifyclone"); // corrigir depois

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("Connected successfully");
});

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});
// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
