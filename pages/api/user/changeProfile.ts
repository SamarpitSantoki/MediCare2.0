import dbConnect from "../../../lib/dbConnect";

export default function handler(req, res) {
  dbConnect();
}
