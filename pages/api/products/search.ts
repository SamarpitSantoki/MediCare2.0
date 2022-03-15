import Product from "../../../models/productSchema";
import dbConnect from "../../../lib/dbConnect";

export default async function handler(req, res) {
  dbConnect();
  const serchVal = req.query.search.toString();
  const result = await Product.find({
    slug: { $regex: serchVal, $options: "i" },
  });
  const prods = result.map((doc) => {
    const prod = doc.toObject();
    prod._id = prod._id.toString();
    prod.image = "/images/product_images/" + prod._id + "/" + prod.image;
    return prod;
  });
  res.status(202).json(prods);
}
