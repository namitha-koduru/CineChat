import express from "express";
const router = express.Router();

router.post("/order", (req, res) => {
  const order = req.body;

  console.log("New order received 👇");
  console.log(order);

  res.status(200).json({
    success: true,
    message: "Order received successfully",
  });
});

export default router;
