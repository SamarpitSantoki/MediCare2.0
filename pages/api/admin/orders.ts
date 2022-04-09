import dbConnect from "../../../lib/dbConnect";
import Order from "../../../models/orderSchema";
export default async function handler(req, res) {
  await dbConnect();
  if (req.method == "GET") {
    const orders = await Order.find({});
    return res.status(200).json(orders);
  } else if (req.method == "POST") {
    const order = await Order.findById(req.body.id);
    if (order) {
      try {
        order.status = req.body.status;
        // order.amount = 100;
        await order.save();
      } catch (error) {
        return res.status(200).json({ success: false, message: error.message });
      }
      return res
        .status(200)
        .json({ success: true, message: "Order status updated" });
    } else {
      return res
        .status(200)
        .json({ success: false, message: "Order not found" });
    }
  }
  return res
    .status(405)
    .json({ success: false, message: "Method not allowed" });
}
