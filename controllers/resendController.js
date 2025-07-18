import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

const key = process.env.RESEND_API_KEY;
console.log("the resend api key is ", process.env.RESEND_API_KEY);

const resend = new Resend(key)

const sendEmail = async (req, res) => {
    const { email, name, message } = req.body;
    console.log("the req data are ", email, message, name)
    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: process.env.EMAIL_USER,
            subject: 'Job email from Portfolio',
            html: `<strong>${email} \n ${name}</strong> \n <p>${message}</p> `,
        });

        console.log(data);
        res.status(200).json({ status: "ok" })
    } catch (error) {
        console.error('Email send failed:', error);
        res.status(400).json({ status: "failed" })

    }
}

export default sendEmail