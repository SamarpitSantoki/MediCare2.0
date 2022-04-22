import User from "../../models/userSchema";

export default async function handler(req, res) {
  await User.deleteMany({ id: { $lt: 36 } });
  res.send("hello");
}
