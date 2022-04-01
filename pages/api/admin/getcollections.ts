import mongoose from "mongoose";
import { useContext } from "react";
import { UserContext } from "../../../contexts";
import dbConnect from "../../../lib/dbConnect";

export default async function handler(req, res) {
  dbConnect();
  const { cart, setCart } = useContext(UserContext);
  console.log(cart);

  const data = await mongoose.connection.db.listCollections().toArray();
  // res.status(200).json(typeof data[0].name);
  const collections = data.map((collection) => collection.name);
  res.status(200).json(collections);
}
