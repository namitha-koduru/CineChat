import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import { Server } from "socket.io";

dotenv.config();

const app = express();

/* 🔹 CREATE HTTP SERVER (THIS WAS MISSING) */
const server = http.createServer(app);

/* 🔹 MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* 🔹 TEST ROUTE */
app.get("/", (req, res) => {
  res.send("CineChat Backend Running 🚀");
});

/* 🔹 SOCKET.IO SETUP */
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("Socket disconnected:", socket.id);
  });
});

/* 🔹 START SERVER */
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
