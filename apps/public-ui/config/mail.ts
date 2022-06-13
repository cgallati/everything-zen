import nodemailer from "nodemailer"

export const transporter = (pw?: string) =>
  nodemailer.createTransport({
    host: "smtppro.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: "admin@ezsailingcharters.com",
      pass: pw,
    },
  })
