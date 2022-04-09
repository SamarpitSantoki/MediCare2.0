import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  orderArray: {
    type: [Object],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  status: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Order || mongoose.model("Order", orderSchema);
