import mongoose from "mongoose";
const categoeySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
  },
  products: {
    type: Number,
  },
});

export default mongoose.models.Category ||
  mongoose.model("Category", categoeySchema);
