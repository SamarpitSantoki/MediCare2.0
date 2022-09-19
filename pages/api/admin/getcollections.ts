import mongoose from "mongoose";
import dbConnect from "../../../lib/dbConnect";

export default async function handler(req, res) {
  await dbConnect();

  const data = await mongoose.connection.db.listCollections().toArray();
  // res.status(200).json(typeof data[0].name);
  const collections = ['users','products','orders',"categories"];
  res.status(200).json(collections);
}
