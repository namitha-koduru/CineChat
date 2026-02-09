import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    movieChat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MovieChat",
      required: true,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      trim: true,
    },
    type: {
      type: String,
      enum: ["text", "theory"],
      default: "text",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Message", messageSchema);
