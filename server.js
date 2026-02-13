const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// serve files from common folder
app.use(express.static(path.join(__dirname, "common")));

// ROOT ROUTE — THIS WAS MISSING
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "common", "layout.html"));
});

// socket logic
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("chat-message", (msg) => {
    socket.broadcast.emit("chat-message", msg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// IMPORTANT: Render port
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});



