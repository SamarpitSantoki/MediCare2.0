import mongoose from "mongoose";

//Product Schema

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  orders: {
    type: Number,
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
