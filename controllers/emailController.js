import transporter from "../utils/emailTransporter.js";
const emailController = async (req, res) => {
    const { email, message, name } = req.body;
    const reciever = process.env.EMAIL_USER;
    try {
        await transporter.sendMail({
            from: email,      // e.g. "no-reply@yourdomain.com"
            to: process.env.ADMIN_ADDRESS,       // your address to receive submissions
            subject: 'Job email from Portfolio',
            text: `NAME: ${name} \n email: ${email}\n MESSAGE: ${message}`,
        });

        res.status(200).json({ status: "ok" })

    } catch (error) {
        console.log("error sending email: ", error);
        res.status(400).json({ status: "failed" })

    }


}


export default emailController