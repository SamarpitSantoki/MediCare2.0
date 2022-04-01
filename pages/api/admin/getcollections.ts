import mongoose from "mongoose";
import dbConnect from "../../../lib/dbConnect";

export default async function handler(req, res) {
  dbConnect();

  const data = await mongoose.connection.db.listCollections().toArray();
  // res.status(200).json(typeof data[0].name);
  const collections = data.map((collection) => collection.name);
  res.status(200).json(collections);
}
