import Message from "../models/Message.js";

const chatSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    socket.on("joinRoom", (movieChatId) => {
      socket.join(movieChatId);
    });

    socket.on("sendMessage", async (data) => {
      const { movieChatId, userId, text } = data;

      const message = await Message.create({
        movieChat: movieChatId,
        sender: userId,
        text,
      });

      io.to(movieChatId).emit("newMessage", message);
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected:", socket.id);
    });
  });
};

export default chatSocket;
