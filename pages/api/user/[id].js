import dbConnect from "@/utils/database";
import users from "@/models/users";
import { getSession } from "next-auth/react";
import { hashPassword } from "@/utils/auth";

dbConnect();

const requestModHandler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  const session = await getSession({ req });
  const user = await users.findById(id);

  switch (method) {
    case "GET":
      try {
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        if (!session) {
          return res
            .status(401)
            .json({ success: false, msg: "You don't have a access" });
        }

        const {
          email,
          password,
        } = req.body;

        const hashedPass = await hashPassword(password);
        const myUser = {
          email,
          password: hashedPass,
        };

        await users.updateOne({ _id: id }, myUser);
        res
          .status(200)
          .json({ success: true, msg: "Medeeg amjilttai soliloo" });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default requestModHandler;
