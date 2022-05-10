import productReq from "@/models/productReq";
import dbConnect from "@/utils/database";
import { getSession } from "next-auth/react"


dbConnect();

const requestModHandler = async (req, res) => {
  const { method } = req;
  const session = await getSession({ req })

  console.log(session)
  switch (method) {
    case "GET":
      try {
        if (session.user.isAdmin) {
          
          const productRequests = await productReq.find({}).lean();

          const data = await productRequests.find({})
          res.status(200).json({ success: true, data: data })
        } else {
          return res.status(401).json({ success: false, msg: "You dont have a access" });
        }


      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const { email, phoneNumber, firstName, lastName, location } =
          req.body;

        const status = false;

        const myRequest = {
          firstName,
          lastName,
          email,
          phoneNumber,
          location,
          status
        };

        await productReq.create(myRequest);
        res.status(201).json({ success: true, message: "created" });
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
