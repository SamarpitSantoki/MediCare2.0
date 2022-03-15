import dbConnect from "../../../lib/dbConnect";
import Product from "../../../models/productSchema";

export default async function handler(req, res) {
  await dbConnect();
  const cate = req.query.cat.toString();
  const result = await Product.find({ category: cate });
  const prods = result.map((doc) => {
    const prod = doc.toObject();
    prod._id = prod._id.toString();
    prod.image = "/images/product_images/" + prod._id + "/" + prod.image;
    return prod;
  });
  res.status(202).json(prods);
}
