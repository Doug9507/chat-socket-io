const express = require("express");

const app = express();

// app.get("/", (req, res) => {
// 	res.send("Hola mi señor, lo saluda jarvis");
// });

app.use(express.static(__dirname + "/../public"));

const http = require("http").createServer(app);

const socket = require("./socket");

socket(http);

module.exports = { http, app };
