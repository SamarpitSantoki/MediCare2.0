import dbConnect from "../../../lib/dbConnect";
import User from "../../../models/userSchema";

export default async function handler(req, res) {
  await dbConnect();
  const user = req.body;
  console.log(user);

  const { email, password } = user;
  const userData = await User.findOne({ email });

  if (!userData) {
    return res.status(401).json({
      message: "Email or password is incorrect",
    });
  }
  console.log(userData);

  const isPasswordValid =
    parseInt(password) === userData.password ? true : false;
  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Email or password is incorrect",
    });
  }
  res.status(200).json({
    message: "Login success",
    user: userData,
  });
}
