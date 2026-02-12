import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("CineChat Backend Running 🚀");
});

export default app;
import orderRoutes from "./routes/order.routes.js";

app.use("/api", orderRoutes);
