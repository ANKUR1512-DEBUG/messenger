const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);


app.use(express.static(path.join(__dirname, "common")));


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "common", "layout.html"));
});

io.on("connection", (socket) => {
  socket.on("chat-message", (msg) => {
    socket.broadcast.emit("chat-message", msg);
  });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

