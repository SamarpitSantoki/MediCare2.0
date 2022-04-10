import dbConnect from "../../../lib/dbConnect";
import Product from "../../../models/productSchema";
export default async function handler(req, res) {
  await dbConnect();
  const product = req.body;

  if (req.method == "POST") {
    const productData = await Product.findOne({ slug: product.slug });
    if (productData) {
      productData.title = product.title;
      productData.slug = product.title.replace(/\s+/g, "-").toLowerCase();
      productData.desc = product.desc;
      productData.category = product.category;
      productData.price = product.price;
      productData.order = product.order;
      try {
        await productData.save();
        return res.status(200).json({
          success: true,
          message: "Product Updated.",
        });
      } catch (e) {
        return res.status(200).json({
          success: false,
          message: "Product Not Updated.",
          error: e,
        });
      }
    } else {
      let slug = product.title.replace(/\s+/g, "-").toLowerCase();
      const newProduct = await new Product({
        title: product.title,
        slug: slug,
        desc: product.desc,
        category: product.category,
        price: product.price,
      });
      try {
        await newProduct.save();
        return res.status(200).json({
          success: true,
          message: "Product Created.",
        });
      } catch (e) {
        return res.status(200).json({
          success: false,
          message: "Product Not Created.",
          error: e,
        });
      }
    }
  } else if (req.method === "DELETE") {
    const deletedProduct = await Product.findById(req.query.id);
    try {
      deletedProduct.delete();
      return res.status(200).json({
        success: true,
        message: "Product Deleted.",
      });
    } catch (e) {
      return res.status(200).json({
        success: false,
        message: "Product not Deleted.",
        error: e,
      });
    }
  }
}
