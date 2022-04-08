import dbConnect from "../../../lib/dbConnect";
import Category from "../../../models/categorySchema";
export default async function handler(req, res) {
  //   if (req.method === "POST") {
  await dbConnect();
  const id = req.query.id;

  const cat = await Category.findOne({ slug: id });
  res.json(cat);
  //   }
}
