import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/userSchema";

export default async function handler(req, res) {
  await dbConnect();
  const user = req.body;

  const { name, email, password } = user;
  const userData = await User.findOne({ email });
  let active_ids = (await User.countDocuments({})) + 1;
  if (userData) {
    return res.status(401).json({
      message: "User already exists",
    });
  } else {
    const newUser = await new User({
      id: active_ids++,
      name: name,
      email: email,
      password: password,
    });
    await newUser.save();
    const resUserData = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
    };
    return res.status(200).json({
      message: "User created successfully",
      user: resUserData,
    });
  }
}
