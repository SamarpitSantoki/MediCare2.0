import Order from "../../../models/orderSchema";

export default async function handler(req, res) {
  if (req.method == "POST") {
    const { cart, amount, response, name, id, email } = req.body;
    const order = new Order({
      id: id,
      name: name,
      email,
      amount: parseInt(amount),
      orderArray: cart,
      status: "pending",
      payment_id: response.razorpay_payment_id,
      order_id: response.razorpay_order_id,
    });
    try {
      await order.save();
      res.status(200).send({ success: true, message: "Order Created" });
    } catch (err) {
      res.status(200).send({ success: false, message: "Order Not Created" });
    }
  }
}
