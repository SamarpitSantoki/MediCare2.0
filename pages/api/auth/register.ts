import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/userSchema";

export default async function handler(req, res) {
  await dbConnect();
  const user = req.body;

  const { fname, lname, email, password } = user;
  const userData = await User.findOne({ email });
  let active_ids = (await User.countDocuments({})) + 1;
  if (userData) {
    return res.status(401).json({
      message: "User already exists",
    });
  } else {
    const newUser = await new User({
      id: active_ids++,
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      admin: false,
    });
    await newUser.save();
    const resUserData = {
      id: newUser.id,
      fname: newUser.fname,
      lname: newUser.lname,
      email: newUser.email,
      role: newUser.role,
    };
    return res.status(200).json({
      message: "User created successfully",
      user: resUserData,
    });
  }
}
