import productReq from "@/models/productReq";
import dbConnect from "@/utils/database";
import { getSession } from "next-auth/react"


dbConnect();

const requestModHandler = async (req, res) => {
  const { method } = req;
  const session = await getSession({ req })

  switch (method) {
    case "GET":
      try {       
          const data = await productReq.find({})
          console.log(data)
          res.status(200).json({ success: true, data: data })

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
