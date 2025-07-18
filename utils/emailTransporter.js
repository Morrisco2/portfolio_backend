import nodemailer from "nodemailer";

import dotenv from "dotenv";
dotenv.config()


const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: +process.env.EMAIL_PORT,
  secure: false, // use TLS - false because we're using STARTTLS on port 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // <- ADD THIS to bypass the cert validation error
  },
});


export default transporter