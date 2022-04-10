import dbConnect from "../../../lib/dbConnect";
import Category from "../../../models/categorySchema";
export default async function handler(req, res) {
  await dbConnect();
  const category = req.body;
  if (req.method == "POST") {
    const { title, slug } = category;
    const categoryData = await Category.findOne({ slug: slug });
    let active_ids = (await Category.countDocuments({})) + 1;
    if (categoryData) {
      categoryData.title = title;
      categoryData.slug = title.replace(/\s+/g, "-").toLowerCase();
      return res.status(200).json({
        success: true,
        message: "Category Updated",
        categoryData,
      });
    } else {
      let slug = title.replace(/\s+/g, "-").toLowerCase();
      const newCategory = await new Category({
        id: active_ids++,
        title: title,
        products: 0,
        slug,
      });
      await newCategory.save();
      //res.send(newCategory);
      const resCategoryData = {
        title: newCategory.title,
      };
      return res.status(200).json({
        success: true,
        message: "Category created successfully",
        category: resCategoryData,
      });
    }
  } else if (req.method === "DELETE") {
    const deletedCategory = await Category.findById(req.query.id);
    deletedCategory.delete();
    return res.status(200).json({
      success: true,
      message: "Category Deleted",
    });
  }
}
