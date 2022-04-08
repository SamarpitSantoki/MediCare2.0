import dbConnect from "../../../lib/dbConnect";
import Product from "../../../models/productSchema";
export default async function handler(req, res) {
  //   if (req.method === "POST") {
  const id = req.query.id;

  const product = await Product.findOne({ slug: id });
  res.json([product]);
  //   }
}
