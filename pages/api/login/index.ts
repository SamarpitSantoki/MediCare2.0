import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/userSchema";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  dbConnect();
  const user = await User.findOne({ email: req.body.email });
  if (user.password === req.body.password) {
    res.status(200).json({
      message: "Login Successful",
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401).json({
      message: "Login Failed",
    });
  }
};

export default handler;
