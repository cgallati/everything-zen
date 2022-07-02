import type { NextApiRequest, NextApiResponse } from "next";
import { transporter } from "../../../config/mail";

export default (req: NextApiRequest, res: NextApiResponse) => {
  transporter(process.env.ZOHO_PW).verify(function (error, success) {
    if (error) {
      res.status(500).json({ message: error });
    } else if (success) {
      res.status(200).json({ message: "it works!" });
    } else {
      res.status(500).json({ message: "unknown response" });
    }
  });
};
